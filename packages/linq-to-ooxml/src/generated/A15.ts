/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:a15="http://schemas.microsoft.com/office/drawing/2012/main"` namespace.
 */
export class A15 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `a15` prefix.
   */
  public static readonly a15: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/drawing/2012/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('a15'), A15.a15.namespaceName);
  }

  /**
   * Represents the `a15:backgroundPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly backgroundPr: XName = A15.a15.getName('backgroundPr');

  /**
   * Represents the `a15:nonVisualGroupProps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly nonVisualGroupProps: XName = A15.a15.getName('nonVisualGroupProps');

  /**
   * Represents the `a15:objectPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly objectPr: XName = A15.a15.getName('objectPr');

  /**
   * Represents the `a15:signatureLine` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly signatureLine: XName = A15.a15.getName('signatureLine');
}
