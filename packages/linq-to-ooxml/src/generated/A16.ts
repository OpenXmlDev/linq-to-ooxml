/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:a16="http://schemas.microsoft.com/office/drawing/2014/main"` namespace.
 */
export class A16 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `a16` prefix.
   */
  public static readonly a16: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/drawing/2014/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('a16'), A16.a16.namespaceName);
  }

  /**
   * Represents the `a16:colId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   */
  public static readonly colId: XName = A16.a16.getName('colId');

  /**
   * Represents the `a16:creationId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly creationId: XName = A16.a16.getName('creationId');

  /**
   * Represents the `a16:cxnDERefs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   */
  public static readonly cxnDERefs: XName = A16.a16.getName('cxnDERefs');

  /**
   * Represents the `a16:predDERef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly predDERef: XName = A16.a16.getName('predDERef');

  /**
   * Represents the `a16:rowId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   */
  public static readonly rowId: XName = A16.a16.getName('rowId');
}
