/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:dc="http://purl.org/dc/elements/1.1/"` namespace.
 */
export class DC {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `dc` prefix.
   */
  public static readonly dc: XNamespace = XNamespace.get(
    'http://purl.org/dc/elements/1.1/'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('dc'), DC.dc.namespaceName);
  }

  public static readonly creator: XName = DC.dc.getName('creator');
  public static readonly description: XName = DC.dc.getName('description');
  public static readonly subject: XName = DC.dc.getName('subject');
  public static readonly title: XName = DC.dc.getName('title');
}
