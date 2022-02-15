/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"` namespace.
 */
export class WPS {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `wps` prefix.
   */
  public static readonly wps: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/word/2010/wordprocessingShape'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('wps'), WPS.wps.namespaceName);
  }

  /**
   * Represents the `wps:bodyPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.flatTx a:flatTx}, {@linkcode A.noAutofit a:noAutofit}, {@linkcode A.normAutofit a:normAutofit}, {@linkcode A.prstTxWarp a:prstTxWarp}, {@linkcode A.scene3d a:scene3d}, {@linkcode A.sp3d a:sp3d}, {@linkcode A.spAutoFit a:spAutoFit}
   */
  public static readonly bodyPr: XName = WPS.wps.getName('bodyPr');

  /**
   * Represents the `wps:cNvCnPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.cxnSpLocks a:cxnSpLocks}, {@linkcode A.endCxn a:endCxn}, {@linkcode A.extLst a:extLst}, {@linkcode A.stCxn a:stCxn}
   */
  public static readonly cNvCnPr: XName = WPS.wps.getName('cNvCnPr');

  /**
   * Represents the `wps:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = WPS.wps.getName('cNvPr');

  /**
   * Represents the `wps:cNvSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.spLocks a:spLocks}
   */
  public static readonly cNvSpPr: XName = WPS.wps.getName('cNvSpPr');

  /**
   * Represents the `wps:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode linkedTxbx wps:linkedTxbx}, {@linkcode txbx wps:txbx}, {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.ext a:ext}
   */
  public static readonly extLst: XName = WPS.wps.getName('extLst');

  /**
   * Represents the `wps:linkedTxbx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode extLst wps:extLst}
   */
  public static readonly linkedTxbx: XName = WPS.wps.getName('linkedTxbx');

  /**
   * Represents the `wps:spPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.custGeom a:custGeom}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.extLst a:extLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.ln a:ln}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.prstGeom a:prstGeom}, {@linkcode A.scene3d a:scene3d}, {@linkcode A.solidFill a:solidFill}, {@linkcode A.sp3d a:sp3d}, {@linkcode A.xfrm a:xfrm}
   */
  public static readonly spPr: XName = WPS.wps.getName('spPr');

  /**
   * Represents the `wps:style` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode A.effectRef a:effectRef}, {@linkcode A.fillRef a:fillRef}, {@linkcode A.fontRef a:fontRef}, {@linkcode A.lnRef a:lnRef}
   */
  public static readonly style: XName = WPS.wps.getName('style');

  /**
   * Represents the `wps:txbx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wsp wps:wsp}
   * - child XML elements: {@linkcode W.txbxContent w:txbxContent}, {@linkcode extLst wps:extLst}
   */
  public static readonly txbx: XName = WPS.wps.getName('txbx');

  /**
   * Represents the `wps:wsp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode WPC.wpc_ wpc:wpc_}, {@linkcode WPG.grpSp wpg:grpSp}, {@linkcode WPG.wgp wpg:wgp}
   * - child XML elements: {@linkcode bodyPr wps:bodyPr}, {@linkcode cNvCnPr wps:cNvCnPr}, {@linkcode cNvPr wps:cNvPr}, {@linkcode cNvSpPr wps:cNvSpPr}, {@linkcode extLst wps:extLst}, {@linkcode linkedTxbx wps:linkedTxbx}, {@linkcode spPr wps:spPr}, {@linkcode style wps:style}, {@linkcode txbx wps:txbx}
   */
  public static readonly wsp: XName = WPS.wps.getName('wsp');
}
