/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

import {
  NoNamespace,
  A,
  A14,
  A15,
  A16,
  DS,
  M,
  O,
  P,
  P14,
  P15,
  R,
  SL,
  V,
  W,
  W10,
  W14,
  W15,
  WP,
  WPC,
  WPG,
  WPS,
  X,
  X14,
  X15,
  XML,
  CP,
  DC,
  DCTERMS,
  PKG,
  Relationships,
} from '../src/index.js';

/**
 * Represents a property bag, which allows us to access the static properties of
 * our namespace-related classes in a simple fashion.
 */
interface PropertyBag {
  [key: string]: any;
}

// Define the array of property bags representing the namespace-related classes
// (excluding NoNamespace) to be checked by our tests.
const propertyBags: PropertyBag[] = [
  A,
  A14,
  A15,
  A16,
  DS,
  M,
  O,
  P,
  P14,
  P15,
  R,
  SL,
  V,
  W,
  W10,
  W14,
  W15,
  WP,
  WPC,
  WPG,
  WPS,
  X,
  X14,
  X15,
  XML,
  CP,
  DC,
  DCTERMS,
  PKG,
  Relationships,
];

describe('Each namespace-related class', () => {
  it('defines an XNamespace property named after the namespace prefix', () => {
    for (const propertyBag of propertyBags) {
      // Each class has a 'name' property, which represents the class name, e.g., 'W'.
      // The namespace prefix is the lowercase version of the class name, e.g., 'w'.
      // In OOXML, the namespace names all begin with 'http:' or 'urn:'.
      const className: string = propertyBag['name'];
      const namespacePrefix: string = className.toLowerCase();
      const namespace: XNamespace = propertyBag[namespacePrefix];

      expect(namespace).toBeInstanceOf(XNamespace);
      expect(namespace.namespaceName).toMatch(/^(http:|urn:)/);
    }
  });

  it('defines a "namespaceDeclaration" getter that returns an XAttribute', () => {
    for (const propertyBag of propertyBags) {
      const className: string = propertyBag['name'];
      const namespacePrefix: string = className.toLowerCase();
      const namespace: XNamespace = propertyBag[namespacePrefix];

      const namespaceDeclaration: XAttribute =
        propertyBag['namespaceDeclaration'];

      expect(namespaceDeclaration).toBeInstanceOf(XAttribute);
      expect(namespaceDeclaration.isNamespaceDeclaration).toBe(true);

      // namespaceDeclaration can be in the following forms:
      // - xmlns:prefix="..."
      // - xmlns="..."
      expect([XNamespace.xmlns, XNamespace.none]).toContain(
        namespaceDeclaration.name.namespace
      );
      expect([namespacePrefix, 'xmlns']).toContain(
        namespaceDeclaration.name.localName
      );

      expect(namespaceDeclaration.value).toEqual(namespace.namespaceName);
    }
  });

  it('defines XName properties for each element or attribute name in the namespace', () => {
    for (const propertyBag of propertyBags) {
      const className: string = propertyBag['name'];
      const namespacePrefix: string = className.toLowerCase();
      const namespace: XNamespace = propertyBag[namespacePrefix];

      for (const property in propertyBag) {
        // We need to ignore the 'name' and 'length' properties, which are reserved
        // properties in TypeScript and not used as an OOXML property name. Any
        // occurrence of 'name' or 'length' will have been escaped by appending
        // an underscore. Further, we need to ignore the namespace prefix, which
        // returns an XNamespace, and the 'namespaceDeclaration' property, which
        // returns an XAttribute. For names such as 'w:w', which collide with the
        // namespace prefix, the property name will have a trailing underscore,
        // e.g., 'w_'.
        if (
          property === 'name' ||
          property === 'length' ||
          property === namespacePrefix ||
          property === 'namespaceDeclaration'
        ) {
          continue;
        }

        // Act, getting any other property.
        const name: XName = propertyBag[property];

        // We are looking at XName instances with the right namespace and
        // well-formed local names.
        expect(name).toBeInstanceOf(XName);
        expect([namespace, XNamespace.none]).toContain(name.namespace);
        expect(name.localName).toMatch(/^[a-zA-Z][a-zA-Z0-9]*$/);

        // Property names are generally equal to the local name but may have
        // an optional trailing underscore to resolve name collisions.
        expect(property).toMatch(new RegExp(`^${name.localName}_?$`));
      }
    }
  });

  it('defines a private constructor', () => {
    for (const propertyBag of propertyBags) {
      const constructable = propertyBag as any;
      new constructable();
    }
  });
});

describe('The NoNamespace class', () => {
  it('defines XName properties for each element or attribute name in the namespace', () => {
    for (const property in NoNamespace) {
      // We need to ignore the 'name' and 'length' properties, which are reserved
      // properties in TypeScript and not used as an OOXML property name. Any
      // occurrence of 'name' or 'length' will have been escaped by appending
      // an underscore. Further, we need to ignore the namespace prefix, which
      // returns an XNamespace, and the 'namespaceDeclaration' property, which
      // returns an XAttribute. For names such as 'w:w', which collide with the
      // namespace prefix, the property name will have a trailing underscore,
      // e.g., 'w_'.
      if (property === 'name' || property === 'length') {
        continue;
      }

      // Act, getting any other property.
      const name: XName = (NoNamespace as PropertyBag)[property];

      // We are looking at XName instances with the right namespace and
      // well-formed local names.
      expect(name).toBeInstanceOf(XName);
      expect(name.namespace).toBe(XNamespace.none);
      expect(name.localName).toMatch(/^[a-zA-Z][a-zA-Z0-9-]*$/);

      // Property names are generally equal to the local name but may have
      // an optional trailing underscore to resolve name collisions. Where
      // the local name contains hyphens, such hyphens are replaced with
      // underscores.
      expect(property).toMatch(
        new RegExp(`^${name.localName.replace('-', '_')}_?$`)
      );
    }
  });

  it('defines a private constructor', () => {
    const constructable = NoNamespace as any;
    new constructable();
  });
});
