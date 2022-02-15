/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"` namespace.
 */
export class WPC {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `wpc` prefix.
   */
  public static readonly wpc: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('wpc'), WPC.wpc.namespaceName);
  }

  /**
   * Represents the `wpc:bg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wpc_ wpc:wpc_}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.solidFill a:solidFill}
   */
  public static readonly bg: XName = WPC.wpc.getName('bg');

  /**
   * Represents the `wpc:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wpc_ wpc:wpc_}
   * - child XML elements: {@linkcode A.ext a:ext}
   */
  public static readonly extLst: XName = WPC.wpc.getName('extLst');

  /**
   * Represents the `wpc:graphicFrame` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wpc_ wpc:wpc_}
   * - child XML elements: {@linkcode A.graphic a:graphic}, {@linkcode WPG.cNvFrPr wpg:cNvFrPr}, {@linkcode WPG.cNvPr wpg:cNvPr}, {@linkcode WPG.extLst wpg:extLst}, {@linkcode WPG.xfrm wpg:xfrm}
   */
  public static readonly graphicFrame: XName = WPC.wpc.getName('graphicFrame');

  /**
   * Represents the `wpc:whole` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wpc_ wpc:wpc_}
   * - child XML elements: {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.ln a:ln}
   */
  public static readonly whole: XName = WPC.wpc.getName('whole');

  /**
   * Represents the `wpc:wpc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode W14.contentPart w14:contentPart}, {@linkcode bg wpc:bg}, {@linkcode extLst wpc:extLst}, {@linkcode graphicFrame wpc:graphicFrame}, {@linkcode whole wpc:whole}, {@linkcode WPG.wgp wpg:wgp}, {@linkcode WPS.wsp wps:wsp}
   */
  public static readonly wpc_: XName = WPC.wpc.getName('wpc');
}
