/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"` namespace.
 */
export class WPG {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `wpg` prefix.
   */
  public static readonly wpg: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('wpg'), WPG.wpg.namespaceName);
  }

  /**
   * Represents the `wpg:cNvFrPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode WPC.graphicFrame wpc:graphicFrame}, {@linkcode graphicFrame wpg:graphicFrame}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.graphicFrameLocks a:graphicFrameLocks}
   */
  public static readonly cNvFrPr: XName = WPG.wpg.getName('cNvFrPr');

  /**
   * Represents the `wpg:cNvGrpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.grpSpLocks a:grpSpLocks}
   */
  public static readonly cNvGrpSpPr: XName = WPG.wpg.getName('cNvGrpSpPr');

  /**
   * Represents the `wpg:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode WPC.graphicFrame wpc:graphicFrame}, {@linkcode graphicFrame wpg:graphicFrame}, {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = WPG.wpg.getName('cNvPr');

  /**
   * Represents the `wpg:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode WPC.graphicFrame wpc:graphicFrame}, {@linkcode graphicFrame wpg:graphicFrame}, {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode A.ext a:ext}
   */
  public static readonly extLst: XName = WPG.wpg.getName('extLst');

  /**
   * Represents the `wpg:graphicFrame` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode A.graphic a:graphic}, {@linkcode cNvFrPr wpg:cNvFrPr}, {@linkcode cNvPr wpg:cNvPr}, {@linkcode extLst wpg:extLst}, {@linkcode xfrm wpg:xfrm}
   */
  public static readonly graphicFrame: XName = WPG.wpg.getName('graphicFrame');

  /**
   * Represents the `wpg:grpSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode W14.contentPart w14:contentPart}, {@linkcode cNvGrpSpPr wpg:cNvGrpSpPr}, {@linkcode cNvPr wpg:cNvPr}, {@linkcode extLst wpg:extLst}, {@linkcode graphicFrame wpg:graphicFrame}, {@linkcode grpSp wpg:grpSp}, {@linkcode grpSpPr wpg:grpSpPr}, {@linkcode WPS.wsp wps:wsp}
   */
  public static readonly grpSp: XName = WPG.wpg.getName('grpSp');

  /**
   * Represents the `wpg:grpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp wpg:grpSp}, {@linkcode wgp wpg:wgp}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.extLst a:extLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.scene3d a:scene3d}, {@linkcode A.solidFill a:solidFill}, {@linkcode A.xfrm a:xfrm}
   */
  public static readonly grpSpPr: XName = WPG.wpg.getName('grpSpPr');

  /**
   * Represents the `wpg:wgp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode WPC.wpc_ wpc:wpc_}
   * - child XML elements: {@linkcode W14.contentPart w14:contentPart}, {@linkcode cNvGrpSpPr wpg:cNvGrpSpPr}, {@linkcode cNvPr wpg:cNvPr}, {@linkcode extLst wpg:extLst}, {@linkcode graphicFrame wpg:graphicFrame}, {@linkcode grpSp wpg:grpSp}, {@linkcode grpSpPr wpg:grpSpPr}, {@linkcode WPS.wsp wps:wsp}
   */
  public static readonly wgp: XName = WPG.wpg.getName('wgp');

  /**
   * Represents the `wpg:xfrm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode WPC.graphicFrame wpc:graphicFrame}, {@linkcode graphicFrame wpg:graphicFrame}
   * - child XML elements: {@linkcode A.ext a:ext}, {@linkcode A.off a:off}
   */
  public static readonly xfrm: XName = WPG.wpg.getName('xfrm');
}
