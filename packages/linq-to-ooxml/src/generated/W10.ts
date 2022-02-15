/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:w10="urn:schemas-microsoft-com:office:word"` namespace.
 */
export class W10 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `w10` prefix.
   */
  public static readonly w10: XNamespace = XNamespace.get(
    'urn:schemas-microsoft-com:office:word'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('w10'), W10.w10.namespaceName);
  }

  /**
   * Represents the `w10:anchorlock` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly anchorlock: XName = W10.w10.getName('anchorlock');

  /**
   * Represents the `w10:borderbottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderbottom: XName = W10.w10.getName('borderbottom');

  /**
   * Represents the `w10:borderleft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderleft: XName = W10.w10.getName('borderleft');

  /**
   * Represents the `w10:borderright` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderright: XName = W10.w10.getName('borderright');

  /**
   * Represents the `w10:bordertop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bordertop: XName = W10.w10.getName('bordertop');

  /**
   * Represents the `w10:wrap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly wrap: XName = W10.w10.getName('wrap');
}
