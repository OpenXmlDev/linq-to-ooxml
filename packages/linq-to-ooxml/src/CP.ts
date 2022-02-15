/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"` namespace.
 */
export class CP {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `cp` prefix.
   */
  public static readonly cp: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/package/2006/metadata/core-properties'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('cp'), CP.cp.namespaceName);
  }

  public static readonly category: XName = CP.cp.getName('category');
  public static readonly contentStatus: XName = CP.cp.getName('contentStatus');
  public static readonly contentType: XName = CP.cp.getName('contentType');

  public static readonly coreProperties: XName =
    CP.cp.getName('coreProperties');

  public static readonly keywords: XName = CP.cp.getName('keywords');

  public static readonly lastModifiedBy: XName =
    CP.cp.getName('lastModifiedBy');

  public static readonly lastPrinted: XName = CP.cp.getName('lastPrinted');
  public static readonly revision: XName = CP.cp.getName('revision');
}
