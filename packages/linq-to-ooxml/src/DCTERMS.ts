/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:dcterms="http://purl.org/dc/terms/"` namespace.
 */
export class DCTERMS {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `dcterms` prefix.
   */
  public static readonly dcterms: XNamespace = XNamespace.get(
    'http://purl.org/dc/terms/'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(
      XNamespace.xmlns.getName('dcterms'),
      DCTERMS.dcterms.namespaceName
    );
  }

  public static readonly created: XName = DCTERMS.dcterms.getName('created');
  public static readonly modified: XName = DCTERMS.dcterms.getName('modified');
}
