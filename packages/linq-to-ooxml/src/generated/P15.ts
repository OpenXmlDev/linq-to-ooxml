/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main"` namespace.
 */
export class P15 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `p15` prefix.
   */
  public static readonly p15: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/powerpoint/2012/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('p15'), P15.p15.namespaceName);
  }

  /**
   * Represents the `p15:chartTrackingRefBased` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly chartTrackingRefBased: XName = P15.p15.getName('chartTrackingRefBased');

  /**
   * Represents the `p15:clr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode guide p15:guide}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly clr: XName = P15.p15.getName('clr');

  /**
   * Represents the `p15:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode guide p15:guide}, {@linkcode notesGuideLst p15:notesGuideLst}, {@linkcode sldGuideLst p15:sldGuideLst}
   * - child XML elements: {@linkcode P.ext p:ext}
   */
  public static readonly extLst: XName = P15.p15.getName('extLst');

  /**
   * Represents the `p15:guide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode notesGuideLst p15:notesGuideLst}, {@linkcode sldGuideLst p15:sldGuideLst}
   * - child XML elements: {@linkcode clr p15:clr}, {@linkcode extLst p15:extLst}
   */
  public static readonly guide: XName = P15.p15.getName('guide');

  /**
   * Represents the `p15:notesGuideLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode extLst p15:extLst}, {@linkcode guide p15:guide}
   */
  public static readonly notesGuideLst: XName = P15.p15.getName('notesGuideLst');

  /**
   * Represents the `p15:parentCm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode threadingInfo p15:threadingInfo}
   */
  public static readonly parentCm: XName = P15.p15.getName('parentCm');

  /**
   * Represents the `p15:presenceInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly presenceInfo: XName = P15.p15.getName('presenceInfo');

  /**
   * Represents the `p15:prstTrans` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly prstTrans: XName = P15.p15.getName('prstTrans');

  /**
   * Represents the `p15:sldGuideLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode extLst p15:extLst}, {@linkcode guide p15:guide}
   */
  public static readonly sldGuideLst: XName = P15.p15.getName('sldGuideLst');

  /**
   * Represents the `p15:threadingInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode parentCm p15:parentCm}
   */
  public static readonly threadingInfo: XName = P15.p15.getName('threadingInfo');
}
