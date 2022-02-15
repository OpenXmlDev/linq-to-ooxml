/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:ds="http://schemas.openxmlformats.org/officeDocument/2006/customXml"` namespace.
 */
export class DS {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `ds` prefix.
   */
  public static readonly ds: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/officeDocument/2006/customXml'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('ds'), DS.ds.namespaceName);
  }

  /**
   * Represents the `ds:datastoreItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode schemaRefs ds:schemaRefs}
   * - XML attributes: {@linkcode itemID ds:itemID}
   */
  public static readonly datastoreItem: XName = DS.ds.getName('datastoreItem');

  /**
   * Represents the `ds:itemID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode datastoreItem ds:datastoreItem}
   */
  public static readonly itemID: XName = DS.ds.getName('itemID');

  /**
   * Represents the `ds:schemaRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemaRefs ds:schemaRefs}
   * - XML attributes: {@linkcode uri ds:uri}
   */
  public static readonly schemaRef: XName = DS.ds.getName('schemaRef');

  /**
   * Represents the `ds:schemaRefs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode datastoreItem ds:datastoreItem}
   * - child XML elements: {@linkcode schemaRef ds:schemaRef}
   */
  public static readonly schemaRefs: XName = DS.ds.getName('schemaRefs');

  /**
   * Represents the `ds:uri` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode schemaRef ds:schemaRef}
   */
  public static readonly uri: XName = DS.ds.getName('uri');
}
