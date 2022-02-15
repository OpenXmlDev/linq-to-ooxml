/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"` namespace.
 */
export class A {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `a` prefix.
   */
  public static readonly a: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/drawingml/2006/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('a'), A.a.namespaceName);
  }

  /**
   * Represents the `a:accent1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent1: XName = A.a.getName('accent1');

  /**
   * Represents the `a:accent2` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent2: XName = A.a.getName('accent2');

  /**
   * Represents the `a:accent3` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent3: XName = A.a.getName('accent3');

  /**
   * Represents the `a:accent4` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent4: XName = A.a.getName('accent4');

  /**
   * Represents the `a:accent5` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent5: XName = A.a.getName('accent5');

  /**
   * Represents the `a:accent6` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly accent6: XName = A.a.getName('accent6');

  /**
   * Represents the `a:ahLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}
   * - child XML elements: {@linkcode ahPolar a:ahPolar}, {@linkcode ahXY a:ahXY}
   */
  public static readonly ahLst: XName = A.a.getName('ahLst');

  /**
   * Represents the `a:ahPolar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ahLst a:ahLst}
   * - child XML elements: {@linkcode pos a:pos}
   */
  public static readonly ahPolar: XName = A.a.getName('ahPolar');

  /**
   * Represents the `a:ahXY` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ahLst a:ahLst}
   * - child XML elements: {@linkcode pos a:pos}
   */
  public static readonly ahXY: XName = A.a.getName('ahXY');

  /**
   * Represents the `a:alpha` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly alpha: XName = A.a.getName('alpha');

  /**
   * Represents the `a:alphaBiLevel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaBiLevel: XName = A.a.getName('alphaBiLevel');

  /**
   * Represents the `a:alphaCeiling` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaCeiling: XName = A.a.getName('alphaCeiling');

  /**
   * Represents the `a:alphaFloor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaFloor: XName = A.a.getName('alphaFloor');

  /**
   * Represents the `a:alphaInv` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly alphaInv: XName = A.a.getName('alphaInv');

  /**
   * Represents the `a:alphaMod` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   * - child XML elements: {@linkcode cont a:cont}
   */
  public static readonly alphaMod: XName = A.a.getName('alphaMod');

  /**
   * Represents the `a:alphaModFix` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaModFix: XName = A.a.getName('alphaModFix');

  /**
   * Represents the `a:alphaOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly alphaOff: XName = A.a.getName('alphaOff');

  /**
   * Represents the `a:alphaOutset` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaOutset: XName = A.a.getName('alphaOutset');

  /**
   * Represents the `a:alphaRepl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly alphaRepl: XName = A.a.getName('alphaRepl');

  /**
   * Represents the `a:anchor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode backdrop a:backdrop}
   */
  public static readonly anchor: XName = A.a.getName('anchor');

  /**
   * Represents the `a:arcTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   */
  public static readonly arcTo: XName = A.a.getName('arcTo');

  /**
   * Represents the `a:audioCd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode end a:end}, {@linkcode extLst a:extLst}, {@linkcode st a:st}
   */
  public static readonly audioCd: XName = A.a.getName('audioCd');

  /**
   * Represents the `a:audioFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   * - XML attributes: {@linkcode R.link r:link}
   */
  public static readonly audioFile: XName = A.a.getName('audioFile');

  /**
   * Represents the `a:avLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}, {@linkcode prstGeom a:prstGeom}, {@linkcode prstTxWarp a:prstTxWarp}
   * - child XML elements: {@linkcode gd a:gd}
   */
  public static readonly avLst: XName = A.a.getName('avLst');

  /**
   * Represents the `a:backdrop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scene3d a:scene3d}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}
   * - child XML elements: {@linkcode anchor a:anchor}, {@linkcode extLst a:extLst}, {@linkcode norm a:norm}, {@linkcode up a:up}
   */
  public static readonly backdrop: XName = A.a.getName('backdrop');

  /**
   * Represents the `a:band1H` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly band1H: XName = A.a.getName('band1H');

  /**
   * Represents the `a:band1V` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly band1V: XName = A.a.getName('band1V');

  /**
   * Represents the `a:band2H` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly band2H: XName = A.a.getName('band2H');

  /**
   * Represents the `a:band2V` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly band2V: XName = A.a.getName('band2V');

  /**
   * Represents the `a:bevel` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cell3D a:cell3D}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly bevel: XName = A.a.getName('bevel');

  /**
   * Represents the `a:bevelB` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp3d a:sp3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}
   */
  public static readonly bevelB: XName = A.a.getName('bevelB');

  /**
   * Represents the `a:bevelT` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp3d a:sp3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}
   */
  public static readonly bevelT: XName = A.a.getName('bevelT');

  /**
   * Represents the `a:bgClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pattFill a:pattFill}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly bgClr: XName = A.a.getName('bgClr');

  /**
   * Represents the `a:bgFillStyleLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fmtScheme a:fmtScheme}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly bgFillStyleLst: XName = A.a.getName('bgFillStyleLst');

  /**
   * Represents the `a:biLevel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly biLevel: XName = A.a.getName('biLevel');

  /**
   * Represents the `a:bldChart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.bldSub p:bldSub}
   */
  public static readonly bldChart: XName = A.a.getName('bldChart');

  /**
   * Represents the `a:bldDgm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.bldSub p:bldSub}
   */
  public static readonly bldDgm: XName = A.a.getName('bldDgm');

  /**
   * Represents the `a:blend` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode cont a:cont}
   */
  public static readonly blend: XName = A.a.getName('blend');

  /**
   * Represents the `a:blip` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blipFill a:blipFill}, {@linkcode buBlip a:buBlip}, {@linkcode graphicData a:graphicData}, {@linkcode P.blipFill p:blipFill}
   * - child XML elements: {@linkcode alphaBiLevel a:alphaBiLevel}, {@linkcode alphaCeiling a:alphaCeiling}, {@linkcode alphaFloor a:alphaFloor}, {@linkcode alphaInv a:alphaInv}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaModFix a:alphaModFix}, {@linkcode alphaRepl a:alphaRepl}, {@linkcode biLevel a:biLevel}, {@linkcode blur a:blur}, {@linkcode clrChange a:clrChange}, {@linkcode clrRepl a:clrRepl}, {@linkcode duotone a:duotone}, {@linkcode extLst a:extLst}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode grayscl a:grayscl}, {@linkcode hsl a:hsl}, {@linkcode lum a:lum}, {@linkcode tint a:tint}
   * - XML attributes: {@linkcode R.embed r:embed}, {@linkcode R.link r:link}
   */
  public static readonly blip: XName = A.a.getName('blip');

  /**
   * Represents the `a:blipFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode pic a:pic}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode blip a:blip}, {@linkcode srcRect a:srcRect}, {@linkcode stretch a:stretch}, {@linkcode tile a:tile}
   */
  public static readonly blipFill: XName = A.a.getName('blipFill');

  /**
   * Represents the `a:blue` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly blue: XName = A.a.getName('blue');

  /**
   * Represents the `a:blueMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly blueMod: XName = A.a.getName('blueMod');

  /**
   * Represents the `a:blueOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly blueOff: XName = A.a.getName('blueOff');

  /**
   * Represents the `a:blur` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   */
  public static readonly blur: XName = A.a.getName('blur');

  /**
   * Represents the `a:bodyPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lnDef a:lnDef}, {@linkcode spDef a:spDef}, {@linkcode txBody a:txBody}, {@linkcode txDef a:txDef}, {@linkcode P.txBody p:txBody}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode flatTx a:flatTx}, {@linkcode noAutofit a:noAutofit}, {@linkcode normAutofit a:normAutofit}, {@linkcode prstTxWarp a:prstTxWarp}, {@linkcode scene3d a:scene3d}, {@linkcode sp3d a:sp3d}, {@linkcode spAutoFit a:spAutoFit}
   */
  public static readonly bodyPr: XName = A.a.getName('bodyPr');

  /**
   * Represents the `a:bottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly bottom: XName = A.a.getName('bottom');

  /**
   * Represents the `a:br` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode p a:p}
   * - child XML elements: {@linkcode rPr a:rPr}
   */
  public static readonly br: XName = A.a.getName('br');

  /**
   * Represents the `a:buAutoNum` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buAutoNum: XName = A.a.getName('buAutoNum');

  /**
   * Represents the `a:buBlip` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode blip a:blip}
   */
  public static readonly buBlip: XName = A.a.getName('buBlip');

  /**
   * Represents the `a:buChar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buChar: XName = A.a.getName('buChar');

  /**
   * Represents the `a:buClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly buClr: XName = A.a.getName('buClr');

  /**
   * Represents the `a:buClrTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buClrTx: XName = A.a.getName('buClrTx');

  /**
   * Represents the `a:buFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buFont: XName = A.a.getName('buFont');

  /**
   * Represents the `a:buFontTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buFontTx: XName = A.a.getName('buFontTx');

  /**
   * Represents the `a:buNone` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buNone: XName = A.a.getName('buNone');

  /**
   * Represents the `a:buSzPct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buSzPct: XName = A.a.getName('buSzPct');

  /**
   * Represents the `a:buSzPts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buSzPts: XName = A.a.getName('buSzPts');

  /**
   * Represents the `a:buSzTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   */
  public static readonly buSzTx: XName = A.a.getName('buSzTx');

  /**
   * Represents the `a:camera` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scene3d a:scene3d}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}
   * - child XML elements: {@linkcode rot a:rot}
   */
  public static readonly camera: XName = A.a.getName('camera');

  /**
   * Represents the `a:cell3D` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}, {@linkcode tcStyle a:tcStyle}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode extLst a:extLst}, {@linkcode lightRig a:lightRig}
   */
  public static readonly cell3D: XName = A.a.getName('cell3D');

  /**
   * Represents the `a:chart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.graphicEl p:graphicEl}
   */
  public static readonly chart: XName = A.a.getName('chart');

  /**
   * Represents the `a:chExt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode xfrm a:xfrm}
   */
  public static readonly chExt: XName = A.a.getName('chExt');

  /**
   * Represents the `a:chOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode xfrm a:xfrm}
   */
  public static readonly chOff: XName = A.a.getName('chOff');

  /**
   * Represents the `a:close` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   */
  public static readonly close: XName = A.a.getName('close');

  /**
   * Represents the `a:clrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode clrFrom a:clrFrom}, {@linkcode clrTo a:clrTo}
   */
  public static readonly clrChange: XName = A.a.getName('clrChange');

  /**
   * Represents the `a:clrFrom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrChange a:clrChange}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly clrFrom: XName = A.a.getName('clrFrom');

  /**
   * Represents the `a:clrMap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extraClrScheme a:extraClrScheme}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly clrMap: XName = A.a.getName('clrMap');

  /**
   * Represents the `a:clrRepl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly clrRepl: XName = A.a.getName('clrRepl');

  /**
   * Represents the `a:clrScheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extraClrScheme a:extraClrScheme}, {@linkcode themeElements a:themeElements}, {@linkcode themeOverride a:themeOverride}
   * - child XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode extLst a:extLst}, {@linkcode folHlink a:folHlink}, {@linkcode hlink a:hlink}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}
   */
  public static readonly clrScheme: XName = A.a.getName('clrScheme');

  /**
   * Represents the `a:clrTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrChange a:clrChange}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly clrTo: XName = A.a.getName('clrTo');

  /**
   * Represents the `a:cNvCxnSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvCxnSpPr a:nvCxnSpPr}
   * - child XML elements: {@linkcode cxnSpLocks a:cxnSpLocks}, {@linkcode endCxn a:endCxn}, {@linkcode extLst a:extLst}, {@linkcode stCxn a:stCxn}
   */
  public static readonly cNvCxnSpPr: XName = A.a.getName('cNvCxnSpPr');

  /**
   * Represents the `a:cNvGraphicFramePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvGraphicFramePr a:nvGraphicFramePr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode graphicFrameLocks a:graphicFrameLocks}
   */
  public static readonly cNvGraphicFramePr: XName =
    A.a.getName('cNvGraphicFramePr');

  /**
   * Represents the `a:cNvGrpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvGrpSpPr a:nvGrpSpPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode grpSpLocks a:grpSpLocks}
   */
  public static readonly cNvGrpSpPr: XName = A.a.getName('cNvGrpSpPr');

  /**
   * Represents the `a:cNvPicPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvPicPr a:nvPicPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode picLocks a:picLocks}
   */
  public static readonly cNvPicPr: XName = A.a.getName('cNvPicPr');

  /**
   * Represents the `a:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvCxnSpPr a:nvCxnSpPr}, {@linkcode nvGraphicFramePr a:nvGraphicFramePr}, {@linkcode nvGrpSpPr a:nvGrpSpPr}, {@linkcode nvPicPr a:nvPicPr}, {@linkcode nvSpPr a:nvSpPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = A.a.getName('cNvPr');

  /**
   * Represents the `a:cNvSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvSpPr a:nvSpPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode spLocks a:spLocks}
   */
  public static readonly cNvSpPr: XName = A.a.getName('cNvSpPr');

  /**
   * Represents the `a:comp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly comp: XName = A.a.getName('comp');

  /**
   * Represents the `a:cont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode alphaMod a:alphaMod}, {@linkcode blend a:blend}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode alphaBiLevel a:alphaBiLevel}, {@linkcode alphaCeiling a:alphaCeiling}, {@linkcode alphaFloor a:alphaFloor}, {@linkcode alphaInv a:alphaInv}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaModFix a:alphaModFix}, {@linkcode alphaOutset a:alphaOutset}, {@linkcode alphaRepl a:alphaRepl}, {@linkcode biLevel a:biLevel}, {@linkcode blend a:blend}, {@linkcode blur a:blur}, {@linkcode clrChange a:clrChange}, {@linkcode clrRepl a:clrRepl}, {@linkcode cont a:cont}, {@linkcode duotone a:duotone}, {@linkcode effect a:effect}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode glow a:glow}, {@linkcode grayscl a:grayscl}, {@linkcode hsl a:hsl}, {@linkcode innerShdw a:innerShdw}, {@linkcode lum a:lum}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode reflection a:reflection}, {@linkcode relOff a:relOff}, {@linkcode softEdge a:softEdge}, {@linkcode tint a:tint}, {@linkcode xfrm a:xfrm}
   */
  public static readonly cont: XName = A.a.getName('cont');

  /**
   * Represents the `a:contourClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp3d a:sp3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly contourClr: XName = A.a.getName('contourClr');

  /**
   * Represents the `a:cs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode font a:font}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}, {@linkcode rPr a:rPr}
   */
  public static readonly cs: XName = A.a.getName('cs');

  /**
   * Represents the `a:cubicBezTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   * - child XML elements: {@linkcode pt a:pt}
   */
  public static readonly cubicBezTo: XName = A.a.getName('cubicBezTo');

  /**
   * Represents the `a:custClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custClrLst a:custClrLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly custClr: XName = A.a.getName('custClr');

  /**
   * Represents the `a:custClrLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode theme a:theme}
   * - child XML elements: {@linkcode custClr a:custClr}
   */
  public static readonly custClrLst: XName = A.a.getName('custClrLst');

  /**
   * Represents the `a:custDash` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   * - child XML elements: {@linkcode ds a:ds}
   */
  public static readonly custDash: XName = A.a.getName('custDash');

  /**
   * Represents the `a:custGeom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spPr a:spPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode ahLst a:ahLst}, {@linkcode avLst a:avLst}, {@linkcode cxnLst a:cxnLst}, {@linkcode gdLst a:gdLst}, {@linkcode pathLst a:pathLst}, {@linkcode rect a:rect}
   */
  public static readonly custGeom: XName = A.a.getName('custGeom');

  /**
   * Represents the `a:cxn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnLst a:cxnLst}
   * - child XML elements: {@linkcode pos a:pos}
   */
  public static readonly cxn: XName = A.a.getName('cxn');

  /**
   * Represents the `a:cxnLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}
   * - child XML elements: {@linkcode cxn a:cxn}
   */
  public static readonly cxnLst: XName = A.a.getName('cxnLst');

  /**
   * Represents the `a:cxnSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode nvCxnSpPr a:nvCxnSpPr}, {@linkcode spPr a:spPr}, {@linkcode style a:style}
   */
  public static readonly cxnSp: XName = A.a.getName('cxnSp');

  /**
   * Represents the `a:cxnSpLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvCxnSpPr a:cNvCxnSpPr}, {@linkcode P.cNvCxnSpPr p:cNvCxnSpPr}, {@linkcode WPS.cNvCnPr wps:cNvCnPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly cxnSpLocks: XName = A.a.getName('cxnSpLocks');

  /**
   * Represents the `a:defPPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly defPPr: XName = A.a.getName('defPPr');

  /**
   * Represents the `a:defRPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode highlight a:highlight}, {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkMouseOver a:hlinkMouseOver}, {@linkcode latin a:latin}, {@linkcode ln a:ln}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode rtl a:rtl}, {@linkcode solidFill a:solidFill}, {@linkcode sym a:sym}, {@linkcode uFill a:uFill}, {@linkcode uFillTx a:uFillTx}, {@linkcode uLn a:uLn}, {@linkcode uLnTx a:uLnTx}
   */
  public static readonly defRPr: XName = A.a.getName('defRPr');

  /**
   * Represents the `a:dgm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.graphicEl p:graphicEl}
   */
  public static readonly dgm: XName = A.a.getName('dgm');

  /**
   * Represents the `a:dk1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly dk1: XName = A.a.getName('dk1');

  /**
   * Represents the `a:dk2` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly dk2: XName = A.a.getName('dk2');

  /**
   * Represents the `a:ds` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custDash a:custDash}
   */
  public static readonly ds: XName = A.a.getName('ds');

  /**
   * Represents the `a:duotone` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly duotone: XName = A.a.getName('duotone');

  /**
   * Represents the `a:ea` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode font a:font}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}, {@linkcode rPr a:rPr}
   */
  public static readonly ea: XName = A.a.getName('ea');

  /**
   * Represents the `a:effect` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode tblBg a:tblBg}
   * - child XML elements: {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   */
  public static readonly effect: XName = A.a.getName('effect');

  /**
   * Represents the `a:effectDag` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode effect a:effect}, {@linkcode effectStyle a:effectStyle}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode A14.hiddenEffects a14:hiddenEffects}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPC.whole wpc:whole}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode alphaBiLevel a:alphaBiLevel}, {@linkcode alphaCeiling a:alphaCeiling}, {@linkcode alphaFloor a:alphaFloor}, {@linkcode alphaInv a:alphaInv}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaModFix a:alphaModFix}, {@linkcode alphaOutset a:alphaOutset}, {@linkcode alphaRepl a:alphaRepl}, {@linkcode biLevel a:biLevel}, {@linkcode blend a:blend}, {@linkcode blur a:blur}, {@linkcode clrChange a:clrChange}, {@linkcode clrRepl a:clrRepl}, {@linkcode cont a:cont}, {@linkcode duotone a:duotone}, {@linkcode effect a:effect}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode glow a:glow}, {@linkcode grayscl a:grayscl}, {@linkcode hsl a:hsl}, {@linkcode innerShdw a:innerShdw}, {@linkcode lum a:lum}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode reflection a:reflection}, {@linkcode relOff a:relOff}, {@linkcode softEdge a:softEdge}, {@linkcode tint a:tint}, {@linkcode xfrm a:xfrm}
   */
  public static readonly effectDag: XName = A.a.getName('effectDag');

  /**
   * Represents the `a:effectLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode effect a:effect}, {@linkcode effectStyle a:effectStyle}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode A14.hiddenEffects a14:hiddenEffects}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPC.whole wpc:whole}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode blur a:blur}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode glow a:glow}, {@linkcode innerShdw a:innerShdw}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode reflection a:reflection}, {@linkcode softEdge a:softEdge}
   */
  public static readonly effectLst: XName = A.a.getName('effectLst');

  /**
   * Represents the `a:effectRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style a:style}, {@linkcode tblBg a:tblBg}, {@linkcode P.style p:style}, {@linkcode WPS.style wps:style}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly effectRef: XName = A.a.getName('effectRef');

  /**
   * Represents the `a:effectStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode effectStyleLst a:effectStyleLst}
   * - child XML elements: {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode scene3d a:scene3d}, {@linkcode sp3d a:sp3d}
   */
  public static readonly effectStyle: XName = A.a.getName('effectStyle');

  /**
   * Represents the `a:effectStyleLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fmtScheme a:fmtScheme}
   * - child XML elements: {@linkcode effectStyle a:effectStyle}
   */
  public static readonly effectStyleLst: XName = A.a.getName('effectStyleLst');

  /**
   * Represents the `a:end` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode audioCd a:audioCd}
   */
  public static readonly end: XName = A.a.getName('end');

  /**
   * Represents the `a:endCxn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvCxnSpPr a:cNvCxnSpPr}, {@linkcode P.cNvCxnSpPr p:cNvCxnSpPr}, {@linkcode WPS.cNvCnPr wps:cNvCnPr}
   */
  public static readonly endCxn: XName = A.a.getName('endCxn');

  /**
   * Represents the `a:endParaRPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode p a:p}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode highlight a:highlight}, {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkMouseOver a:hlinkMouseOver}, {@linkcode latin a:latin}, {@linkcode ln a:ln}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode rtl a:rtl}, {@linkcode solidFill a:solidFill}, {@linkcode sym a:sym}, {@linkcode uFill a:uFill}, {@linkcode uFillTx a:uFillTx}, {@linkcode uLn a:uLn}, {@linkcode uLnTx a:uLnTx}
   */
  public static readonly endParaRPr: XName = A.a.getName('endParaRPr');

  /**
   * Represents the `a:ext` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extLst a:extLst}, {@linkcode xfrm a:xfrm}, {@linkcode A14.extLst a14:extLst}, {@linkcode A14.xfrm a14:xfrm}, {@linkcode P.xfrm p:xfrm}, {@linkcode P14.xfrm p14:xfrm}, {@linkcode W14.extLst w14:extLst}, {@linkcode W14.xfrm w14:xfrm}, {@linkcode WPC.extLst wpc:extLst}, {@linkcode WPG.extLst wpg:extLst}, {@linkcode WPG.xfrm wpg:xfrm}, {@linkcode WPS.extLst wps:extLst}
   * - child XML elements: {@linkcode graphic a:graphic}, {@linkcode A14.cameraTool a14:cameraTool}, {@linkcode A14.compatExt a14:compatExt}, {@linkcode A14.hiddenEffects a14:hiddenEffects}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}, {@linkcode A14.imgProps a14:imgProps}, {@linkcode A14.isCanvas a14:isCanvas}, {@linkcode A14.shadowObscured a14:shadowObscured}, {@linkcode A14.useLocalDpi a14:useLocalDpi}, {@linkcode A15.backgroundPr a15:backgroundPr}, {@linkcode A15.nonVisualGroupProps a15:nonVisualGroupProps}, {@linkcode A15.objectPr a15:objectPr}, {@linkcode A15.signatureLine a15:signatureLine}, {@linkcode A16.creationId a16:creationId}, {@linkcode A16.predDERef a16:predDERef}
   */
  public static readonly ext: XName = A.a.getName('ext');

  /**
   * Represents the `a:extLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode audioCd a:audioCd}, {@linkcode audioFile a:audioFile}, {@linkcode backdrop a:backdrop}, {@linkcode blip a:blip}, {@linkcode bodyPr a:bodyPr}, {@linkcode cell3D a:cell3D}, {@linkcode clrMap a:clrMap}, {@linkcode clrScheme a:clrScheme}, {@linkcode cNvCxnSpPr a:cNvCxnSpPr}, {@linkcode cNvGraphicFramePr a:cNvGraphicFramePr}, {@linkcode cNvGrpSpPr a:cNvGrpSpPr}, {@linkcode cNvPicPr a:cNvPicPr}, {@linkcode cNvPr a:cNvPr}, {@linkcode cNvSpPr a:cNvSpPr}, {@linkcode cxnSp a:cxnSp}, {@linkcode cxnSpLocks a:cxnSpLocks}, {@linkcode defPPr a:defPPr}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode font a:font}, {@linkcode fontScheme a:fontScheme}, {@linkcode graphicFrame a:graphicFrame}, {@linkcode graphicFrameLocks a:graphicFrameLocks}, {@linkcode gridCol a:gridCol}, {@linkcode grpSp a:grpSp}, {@linkcode grpSpLocks a:grpSpLocks}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkHover a:hlinkHover}, {@linkcode hlinkMouseOver a:hlinkMouseOver}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnDef a:lnDef}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode lstStyle a:lstStyle}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}, {@linkcode objectDefaults a:objectDefaults}, {@linkcode overrideClrMapping a:overrideClrMapping}, {@linkcode pic a:pic}, {@linkcode picLocks a:picLocks}, {@linkcode pPr a:pPr}, {@linkcode quickTimeFile a:quickTimeFile}, {@linkcode rPr a:rPr}, {@linkcode scene3d a:scene3d}, {@linkcode sp a:sp}, {@linkcode sp3d a:sp3d}, {@linkcode spDef a:spDef}, {@linkcode spLocks a:spLocks}, {@linkcode spPr a:spPr}, {@linkcode tableStyle a:tableStyle}, {@linkcode tblPr a:tblPr}, {@linkcode tblStyle a:tblStyle}, {@linkcode tc a:tc}, {@linkcode tcBdr a:tcBdr}, {@linkcode tcPr a:tcPr}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode theme a:theme}, {@linkcode themeElements a:themeElements}, {@linkcode tr a:tr}, {@linkcode txDef a:txDef}, {@linkcode txSp a:txSp}, {@linkcode uLn a:uLn}, {@linkcode videoFile a:videoFile}, {@linkcode A14.cNvPr a14:cNvPr}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.clrMap p:clrMap}, {@linkcode P.cNvCxnSpPr p:cNvCxnSpPr}, {@linkcode P.cNvGraphicFramePr p:cNvGraphicFramePr}, {@linkcode P.cNvGrpSpPr p:cNvGrpSpPr}, {@linkcode P.cNvPicPr p:cNvPicPr}, {@linkcode P.cNvPr p:cNvPr}, {@linkcode P.cNvSpPr p:cNvSpPr}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.spPr p:spPr}, {@linkcode P.titleStyle p:titleStyle}, {@linkcode P14.cNvPr p14:cNvPr}, {@linkcode W14.cNvPr w14:cNvPr}, {@linkcode WP.cNvGraphicFramePr wp:cNvGraphicFramePr}, {@linkcode WP.docPr wp:docPr}, {@linkcode WPG.cNvFrPr wpg:cNvFrPr}, {@linkcode WPG.cNvGrpSpPr wpg:cNvGrpSpPr}, {@linkcode WPG.cNvPr wpg:cNvPr}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.bodyPr wps:bodyPr}, {@linkcode WPS.cNvCnPr wps:cNvCnPr}, {@linkcode WPS.cNvPr wps:cNvPr}, {@linkcode WPS.cNvSpPr wps:cNvSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode ext a:ext}
   */
  public static readonly extLst: XName = A.a.getName('extLst');

  /**
   * Represents the `a:extraClrScheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extraClrSchemeLst a:extraClrSchemeLst}
   * - child XML elements: {@linkcode clrMap a:clrMap}, {@linkcode clrScheme a:clrScheme}
   */
  public static readonly extraClrScheme: XName = A.a.getName('extraClrScheme');

  /**
   * Represents the `a:extraClrSchemeLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode theme a:theme}
   * - child XML elements: {@linkcode extraClrScheme a:extraClrScheme}
   */
  public static readonly extraClrSchemeLst: XName =
    A.a.getName('extraClrSchemeLst');

  /**
   * Represents the `a:extrusionClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp3d a:sp3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly extrusionClr: XName = A.a.getName('extrusionClr');

  /**
   * Represents the `a:fgClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pattFill a:pattFill}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly fgClr: XName = A.a.getName('fgClr');

  /**
   * Represents the `a:fill` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode tblBg a:tblBg}, {@linkcode tcStyle a:tcStyle}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly fill: XName = A.a.getName('fill');

  /**
   * Represents the `a:fillOverlay` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly fillOverlay: XName = A.a.getName('fillOverlay');

  /**
   * Represents the `a:fillRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode stretch a:stretch}
   */
  public static readonly fillRect: XName = A.a.getName('fillRect');

  /**
   * Represents the `a:fillRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style a:style}, {@linkcode tblBg a:tblBg}, {@linkcode tcStyle a:tcStyle}, {@linkcode P.style p:style}, {@linkcode WPS.style wps:style}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly fillRef: XName = A.a.getName('fillRef');

  /**
   * Represents the `a:fillStyleLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fmtScheme a:fmtScheme}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly fillStyleLst: XName = A.a.getName('fillStyleLst');

  /**
   * Represents the `a:fillToRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   */
  public static readonly fillToRect: XName = A.a.getName('fillToRect');

  /**
   * Represents the `a:firstCol` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly firstCol: XName = A.a.getName('firstCol');

  /**
   * Represents the `a:firstRow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly firstRow: XName = A.a.getName('firstRow');

  /**
   * Represents the `a:flatTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode WPS.bodyPr wps:bodyPr}
   */
  public static readonly flatTx: XName = A.a.getName('flatTx');

  /**
   * Represents the `a:fld` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode p a:p}
   * - child XML elements: {@linkcode pPr a:pPr}, {@linkcode rPr a:rPr}, {@linkcode t a:t}
   */
  public static readonly fld: XName = A.a.getName('fld');

  /**
   * Represents the `a:fmtScheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode themeElements a:themeElements}, {@linkcode themeOverride a:themeOverride}
   * - child XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode effectStyleLst a:effectStyleLst}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode lnStyleLst a:lnStyleLst}
   */
  public static readonly fmtScheme: XName = A.a.getName('fmtScheme');

  /**
   * Represents the `a:folHlink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly folHlink: XName = A.a.getName('folHlink');

  /**
   * Represents the `a:font` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font a:font}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}, {@linkcode tcTxStyle a:tcTxStyle}
   * - child XML elements: {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode extLst a:extLst}, {@linkcode font a:font}, {@linkcode latin a:latin}
   */
  public static readonly font: XName = A.a.getName('font');

  /**
   * Represents the `a:fontRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style a:style}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.style p:style}, {@linkcode WPS.style wps:style}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly fontRef: XName = A.a.getName('fontRef');

  /**
   * Represents the `a:fontScheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode themeElements a:themeElements}, {@linkcode themeOverride a:themeOverride}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}
   */
  public static readonly fontScheme: XName = A.a.getName('fontScheme');

  /**
   * Represents the `a:gamma` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly gamma: XName = A.a.getName('gamma');

  /**
   * Represents the `a:gd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode avLst a:avLst}, {@linkcode gdLst a:gdLst}
   */
  public static readonly gd: XName = A.a.getName('gd');

  /**
   * Represents the `a:gdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}
   * - child XML elements: {@linkcode gd a:gd}
   */
  public static readonly gdLst: XName = A.a.getName('gdLst');

  /**
   * Represents the `a:glow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly glow: XName = A.a.getName('glow');

  /**
   * Represents the `a:gradFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode gsLst a:gsLst}, {@linkcode lin a:lin}, {@linkcode path a:path}, {@linkcode tileRect a:tileRect}
   */
  public static readonly gradFill: XName = A.a.getName('gradFill');

  /**
   * Represents the `a:graphic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ext a:ext}, {@linkcode graphicData a:graphicData}, {@linkcode graphicFrame a:graphicFrame}, {@linkcode P.graphicFrame p:graphicFrame}, {@linkcode WP.anchor wp:anchor}, {@linkcode WP.inline wp:inline}, {@linkcode WPC.graphicFrame wpc:graphicFrame}, {@linkcode WPG.graphicFrame wpg:graphicFrame}
   * - child XML elements: {@linkcode graphicData a:graphicData}
   */
  public static readonly graphic: XName = A.a.getName('graphic');

  /**
   * Represents the `a:graphicData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphic a:graphic}
   * - child XML elements: {@linkcode blip a:blip}, {@linkcode graphic a:graphic}, {@linkcode tbl a:tbl}, {@linkcode tblStyleLst a:tblStyleLst}, {@linkcode theme a:theme}, {@linkcode themeManager a:themeManager}, {@linkcode themeOverride a:themeOverride}, {@linkcode A14.cameraTool a14:cameraTool}, {@linkcode A14.compatExt a14:compatExt}, {@linkcode A14.contentPart a14:contentPart}, {@linkcode A14.hiddenEffects a14:hiddenEffects}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}, {@linkcode A14.hiddenSp3d a14:hiddenSp3d}, {@linkcode A14.imgProps a14:imgProps}, {@linkcode A14.isCanvas a14:isCanvas}, {@linkcode A14.m a14:m}, {@linkcode A14.shadowObscured a14:shadowObscured}, {@linkcode A14.useLocalDpi a14:useLocalDpi}, {@linkcode A15.backgroundPr a15:backgroundPr}, {@linkcode A15.nonVisualGroupProps a15:nonVisualGroupProps}, {@linkcode A15.objectPr a15:objectPr}, {@linkcode A15.signatureLine a15:signatureLine}, {@linkcode A16.colId a16:colId}, {@linkcode A16.creationId a16:creationId}, {@linkcode A16.cxnDERefs a16:cxnDERefs}, {@linkcode A16.predDERef a16:predDERef}, {@linkcode A16.rowId a16:rowId}, {@linkcode M.mathPr m:mathPr}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode O.bottom o:bottom}, {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.column o:column}, {@linkcode O.complex o:complex}, {@linkcode O.diagram o:diagram}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.fill o:fill}, {@linkcode O.ink o:ink}, {@linkcode O.left o:left}, {@linkcode O.lock o:lock}, {@linkcode O.OLEObject o:OLEObject}, {@linkcode O.right o:right}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode O.shapelayout o:shapelayout}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode O.top o:top}, {@linkcode P.cmAuthorLst p:cmAuthorLst}, {@linkcode P.cmLst p:cmLst}, {@linkcode P.contentPart p:contentPart}, {@linkcode P.handoutMaster p:handoutMaster}, {@linkcode P.notes p:notes}, {@linkcode P.notesMaster p:notesMaster}, {@linkcode P.oleObj p:oleObj}, {@linkcode P.presentation p:presentation}, {@linkcode P.presentationPr p:presentationPr}, {@linkcode P.sld p:sld}, {@linkcode P.sldLayout p:sldLayout}, {@linkcode P.sldMaster p:sldMaster}, {@linkcode P.sldSyncPr p:sldSyncPr}, {@linkcode P.tagLst p:tagLst}, {@linkcode P.viewPr p:viewPr}, {@linkcode P14.bmkTgt p14:bmkTgt}, {@linkcode P14.browseMode p14:browseMode}, {@linkcode P14.conveyor p14:conveyor}, {@linkcode P14.creationId p14:creationId}, {@linkcode P14.defaultImageDpi p14:defaultImageDpi}, {@linkcode P14.discardImageEditData p14:discardImageEditData}, {@linkcode P14.doors p14:doors}, {@linkcode P14.extLst p14:extLst}, {@linkcode P14.ferris p14:ferris}, {@linkcode P14.flash p14:flash}, {@linkcode P14.flip p14:flip}, {@linkcode P14.flythrough p14:flythrough}, {@linkcode P14.gallery p14:gallery}, {@linkcode P14.glitter p14:glitter}, {@linkcode P14.honeycomb p14:honeycomb}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P14.laserTraceLst p14:laserTraceLst}, {@linkcode P14.media p14:media}, {@linkcode P14.modId p14:modId}, {@linkcode P14.nvContentPartPr p14:nvContentPartPr}, {@linkcode P14.pan p14:pan}, {@linkcode P14.prism p14:prism}, {@linkcode P14.reveal p14:reveal}, {@linkcode P14.ripple p14:ripple}, {@linkcode P14.sectionLst p14:sectionLst}, {@linkcode P14.sectionPr p14:sectionPr}, {@linkcode P14.showEvtLst p14:showEvtLst}, {@linkcode P14.showMediaCtrls p14:showMediaCtrls}, {@linkcode P14.shred p14:shred}, {@linkcode P14.switch p14:switch}, {@linkcode P14.vortex p14:vortex}, {@linkcode P14.warp p14:warp}, {@linkcode P14.wheelReverse p14:wheelReverse}, {@linkcode P14.window p14:window}, {@linkcode P14.xfrm p14:xfrm}, {@linkcode P15.chartTrackingRefBased p15:chartTrackingRefBased}, {@linkcode P15.notesGuideLst p15:notesGuideLst}, {@linkcode P15.presenceInfo p15:presenceInfo}, {@linkcode P15.prstTrans p15:prstTrans}, {@linkcode P15.sldGuideLst p15:sldGuideLst}, {@linkcode P15.threadingInfo p15:threadingInfo}, {@linkcode SL.schemaLibrary sl:schemaLibrary}, {@linkcode V.arc v:arc}, {@linkcode V.background v:background}, {@linkcode V.curve v:curve}, {@linkcode V.fill v:fill}, {@linkcode V.formulas v:formulas}, {@linkcode V.group v:group}, {@linkcode V.handles v:handles}, {@linkcode V.image v:image}, {@linkcode V.imagedata v:imagedata}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.path v:path}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shadow v:shadow}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}, {@linkcode V.stroke v:stroke}, {@linkcode V.textbox v:textbox}, {@linkcode V.textpath v:textpath}, {@linkcode W.comments w:comments}, {@linkcode W.document w:document}, {@linkcode W.endnotes w:endnotes}, {@linkcode W.fonts w:fonts}, {@linkcode W.footnotes w:footnotes}, {@linkcode W.ftr w:ftr}, {@linkcode W.glossaryDocument w:glossaryDocument}, {@linkcode W.hdr w:hdr}, {@linkcode W.numbering w:numbering}, {@linkcode W.recipients w:recipients}, {@linkcode W.settings w:settings}, {@linkcode W.styles w:styles}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode W.webSettings w:webSettings}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}, {@linkcode W14.checkbox w14:checkbox}, {@linkcode W14.conflictMode w14:conflictMode}, {@linkcode W14.contentPart w14:contentPart}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}, {@linkcode W14.defaultImageDpi w14:defaultImageDpi}, {@linkcode W14.discardImageEditingData w14:discardImageEditingData}, {@linkcode W14.docId w14:docId}, {@linkcode W14.entityPicker w14:entityPicker}, {@linkcode W15.appearance w15:appearance}, {@linkcode W15.chartTrackingRefBased w15:chartTrackingRefBased}, {@linkcode W15.collapsed w15:collapsed}, {@linkcode W15.color w15:color}, {@linkcode W15.commentsEx w15:commentsEx}, {@linkcode W15.dataBinding w15:dataBinding}, {@linkcode W15.docId w15:docId}, {@linkcode W15.footnoteColumns w15:footnoteColumns}, {@linkcode W15.people w15:people}, {@linkcode W15.repeatingSection w15:repeatingSection}, {@linkcode W15.repeatingSectionItem w15:repeatingSectionItem}, {@linkcode W15.webExtensionCreated w15:webExtensionCreated}, {@linkcode W15.webExtensionLinked w15:webExtensionLinked}, {@linkcode WP.anchor wp:anchor}, {@linkcode WP.inline wp:inline}, {@linkcode WPC.wpc_ wpc:wpc_}, {@linkcode WPG.wgp wpg:wgp}, {@linkcode WPS.wsp wps:wsp}
   */
  public static readonly graphicData: XName = A.a.getName('graphicData');

  /**
   * Represents the `a:graphicFrame` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode graphic a:graphic}, {@linkcode nvGraphicFramePr a:nvGraphicFramePr}, {@linkcode xfrm a:xfrm}
   */
  public static readonly graphicFrame: XName = A.a.getName('graphicFrame');

  /**
   * Represents the `a:graphicFrameLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvGraphicFramePr a:cNvGraphicFramePr}, {@linkcode P.cNvGraphicFramePr p:cNvGraphicFramePr}, {@linkcode WP.cNvGraphicFramePr wp:cNvGraphicFramePr}, {@linkcode WPG.cNvFrPr wpg:cNvFrPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly graphicFrameLocks: XName =
    A.a.getName('graphicFrameLocks');

  /**
   * Represents the `a:gray` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly gray: XName = A.a.getName('gray');

  /**
   * Represents the `a:grayscl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly grayscl: XName = A.a.getName('grayscl');

  /**
   * Represents the `a:green` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly green: XName = A.a.getName('green');

  /**
   * Represents the `a:greenMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly greenMod: XName = A.a.getName('greenMod');

  /**
   * Represents the `a:greenOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly greenOff: XName = A.a.getName('greenOff');

  /**
   * Represents the `a:gridCol` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblGrid a:tblGrid}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly gridCol: XName = A.a.getName('gridCol');

  /**
   * Represents the `a:grpFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   */
  public static readonly grpFill: XName = A.a.getName('grpFill');

  /**
   * Represents the `a:grpSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode cxnSp a:cxnSp}, {@linkcode extLst a:extLst}, {@linkcode graphicFrame a:graphicFrame}, {@linkcode grpSp a:grpSp}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode nvGrpSpPr a:nvGrpSpPr}, {@linkcode pic a:pic}, {@linkcode sp a:sp}, {@linkcode txSp a:txSp}, {@linkcode A14.contentPart a14:contentPart}
   */
  public static readonly grpSp: XName = A.a.getName('grpSp');

  /**
   * Represents the `a:grpSpLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvGrpSpPr a:cNvGrpSpPr}, {@linkcode P.cNvGrpSpPr p:cNvGrpSpPr}, {@linkcode WPG.cNvGrpSpPr wpg:cNvGrpSpPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly grpSpLocks: XName = A.a.getName('grpSpLocks');

  /**
   * Represents the `a:grpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode scene3d a:scene3d}, {@linkcode solidFill a:solidFill}, {@linkcode xfrm a:xfrm}
   */
  public static readonly grpSpPr: XName = A.a.getName('grpSpPr');

  /**
   * Represents the `a:gs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gsLst a:gsLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly gs: XName = A.a.getName('gs');

  /**
   * Represents the `a:gsLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill a:gradFill}
   * - child XML elements: {@linkcode gs a:gs}
   */
  public static readonly gsLst: XName = A.a.getName('gsLst');

  /**
   * Represents the `a:headEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly headEnd: XName = A.a.getName('headEnd');

  /**
   * Represents the `a:highlight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly highlight: XName = A.a.getName('highlight');

  /**
   * Represents the `a:hlink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly hlink: XName = A.a.getName('hlink');

  /**
   * Represents the `a:hlinkClick` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvPr a:cNvPr}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}, {@linkcode A14.cNvPr a14:cNvPr}, {@linkcode P.cNvPr p:cNvPr}, {@linkcode P14.cNvPr p14:cNvPr}, {@linkcode W14.cNvPr w14:cNvPr}, {@linkcode WP.docPr wp:docPr}, {@linkcode WPG.cNvPr wpg:cNvPr}, {@linkcode WPS.cNvPr wps:cNvPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode snd a:snd}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly hlinkClick: XName = A.a.getName('hlinkClick');

  /**
   * Represents the `a:hlinkHover` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvPr a:cNvPr}, {@linkcode A14.cNvPr a14:cNvPr}, {@linkcode P.cNvPr p:cNvPr}, {@linkcode P14.cNvPr p14:cNvPr}, {@linkcode W14.cNvPr w14:cNvPr}, {@linkcode WP.docPr wp:docPr}, {@linkcode WPG.cNvPr wpg:cNvPr}, {@linkcode WPS.cNvPr wps:cNvPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode snd a:snd}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly hlinkHover: XName = A.a.getName('hlinkHover');

  /**
   * Represents the `a:hlinkMouseOver` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode snd a:snd}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly hlinkMouseOver: XName = A.a.getName('hlinkMouseOver');

  /**
   * Represents the `a:hsl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly hsl: XName = A.a.getName('hsl');

  /**
   * Represents the `a:hslClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode folHlink a:folHlink}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode hlink a:hlink}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   */
  public static readonly hslClr: XName = A.a.getName('hslClr');

  /**
   * Represents the `a:hue` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly hue: XName = A.a.getName('hue');

  /**
   * Represents the `a:hueMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly hueMod: XName = A.a.getName('hueMod');

  /**
   * Represents the `a:hueOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly hueOff: XName = A.a.getName('hueOff');

  /**
   * Represents the `a:innerShdw` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly innerShdw: XName = A.a.getName('innerShdw');

  /**
   * Represents the `a:insideH` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly insideH: XName = A.a.getName('insideH');

  /**
   * Represents the `a:insideV` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly insideV: XName = A.a.getName('insideV');

  /**
   * Represents the `a:inv` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly inv: XName = A.a.getName('inv');

  /**
   * Represents the `a:invGamma` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly invGamma: XName = A.a.getName('invGamma');

  /**
   * Represents the `a:lastCol` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly lastCol: XName = A.a.getName('lastCol');

  /**
   * Represents the `a:lastRow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly lastRow: XName = A.a.getName('lastRow');

  /**
   * Represents the `a:latin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode font a:font}, {@linkcode majorFont a:majorFont}, {@linkcode minorFont a:minorFont}, {@linkcode rPr a:rPr}
   */
  public static readonly latin: XName = A.a.getName('latin');

  /**
   * Represents the `a:left` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly left: XName = A.a.getName('left');

  /**
   * Represents the `a:lightRig` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cell3D a:cell3D}, {@linkcode scene3d a:scene3d}, {@linkcode A14.hiddenScene3d a14:hiddenScene3d}
   * - child XML elements: {@linkcode rot a:rot}
   */
  public static readonly lightRig: XName = A.a.getName('lightRig');

  /**
   * Represents the `a:lin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill a:gradFill}
   */
  public static readonly lin: XName = A.a.getName('lin');

  /**
   * Represents the `a:ln` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bottom a:bottom}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode insideH a:insideH}, {@linkcode insideV a:insideV}, {@linkcode left a:left}, {@linkcode lnStyleLst a:lnStyleLst}, {@linkcode right a:right}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tl2br a:tl2br}, {@linkcode top a:top}, {@linkcode tr2bl a:tr2bl}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.whole wpc:whole}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly ln: XName = A.a.getName('ln');

  /**
   * Represents the `a:lnB` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnB: XName = A.a.getName('lnB');

  /**
   * Represents the `a:lnBlToTr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnBlToTr: XName = A.a.getName('lnBlToTr');

  /**
   * Represents the `a:lnDef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode objectDefaults a:objectDefaults}
   * - child XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode extLst a:extLst}, {@linkcode lstStyle a:lstStyle}, {@linkcode spPr a:spPr}, {@linkcode style a:style}
   */
  public static readonly lnDef: XName = A.a.getName('lnDef');

  /**
   * Represents the `a:lnL` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnL: XName = A.a.getName('lnL');

  /**
   * Represents the `a:lnR` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnR: XName = A.a.getName('lnR');

  /**
   * Represents the `a:lnRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bottom a:bottom}, {@linkcode insideH a:insideH}, {@linkcode insideV a:insideV}, {@linkcode left a:left}, {@linkcode right a:right}, {@linkcode style a:style}, {@linkcode tl2br a:tl2br}, {@linkcode top a:top}, {@linkcode tr2bl a:tr2bl}, {@linkcode P.style p:style}, {@linkcode WPS.style wps:style}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lnRef: XName = A.a.getName('lnRef');

  /**
   * Represents the `a:lnSpc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode spcPct a:spcPct}, {@linkcode spcPts a:spcPts}
   */
  public static readonly lnSpc: XName = A.a.getName('lnSpc');

  /**
   * Represents the `a:lnStyleLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fmtScheme a:fmtScheme}
   * - child XML elements: {@linkcode ln a:ln}
   */
  public static readonly lnStyleLst: XName = A.a.getName('lnStyleLst');

  /**
   * Represents the `a:lnT` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnT: XName = A.a.getName('lnT');

  /**
   * Represents the `a:lnTlToBr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr a:tcPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly lnTlToBr: XName = A.a.getName('lnTlToBr');

  /**
   * Represents the `a:lnTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   * - child XML elements: {@linkcode pt a:pt}
   */
  public static readonly lnTo: XName = A.a.getName('lnTo');

  /**
   * Represents the `a:lstStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lnDef a:lnDef}, {@linkcode spDef a:spDef}, {@linkcode txBody a:txBody}, {@linkcode txDef a:txDef}, {@linkcode P.txBody p:txBody}
   * - child XML elements: {@linkcode defPPr a:defPPr}, {@linkcode extLst a:extLst}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}
   */
  public static readonly lstStyle: XName = A.a.getName('lstStyle');

  /**
   * Represents the `a:lt1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lt1: XName = A.a.getName('lt1');

  /**
   * Represents the `a:lt2` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode clrScheme a:clrScheme}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lt2: XName = A.a.getName('lt2');

  /**
   * Represents the `a:lum` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lum: XName = A.a.getName('lum');

  /**
   * Represents the `a:lumMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lumMod: XName = A.a.getName('lumMod');

  /**
   * Represents the `a:lumOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly lumOff: XName = A.a.getName('lumOff');

  /**
   * Represents the `a:lvl1pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl1pPr: XName = A.a.getName('lvl1pPr');

  /**
   * Represents the `a:lvl2pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl2pPr: XName = A.a.getName('lvl2pPr');

  /**
   * Represents the `a:lvl3pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl3pPr: XName = A.a.getName('lvl3pPr');

  /**
   * Represents the `a:lvl4pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl4pPr: XName = A.a.getName('lvl4pPr');

  /**
   * Represents the `a:lvl5pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl5pPr: XName = A.a.getName('lvl5pPr');

  /**
   * Represents the `a:lvl6pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl6pPr: XName = A.a.getName('lvl6pPr');

  /**
   * Represents the `a:lvl7pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl7pPr: XName = A.a.getName('lvl7pPr');

  /**
   * Represents the `a:lvl8pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl8pPr: XName = A.a.getName('lvl8pPr');

  /**
   * Represents the `a:lvl9pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lstStyle a:lstStyle}, {@linkcode P.bodyStyle p:bodyStyle}, {@linkcode P.defaultTextStyle p:defaultTextStyle}, {@linkcode P.notesStyle p:notesStyle}, {@linkcode P.otherStyle p:otherStyle}, {@linkcode P.titleStyle p:titleStyle}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly lvl9pPr: XName = A.a.getName('lvl9pPr');

  /**
   * Represents the `a:majorFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fontScheme a:fontScheme}
   * - child XML elements: {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode extLst a:extLst}, {@linkcode font a:font}, {@linkcode latin a:latin}
   */
  public static readonly majorFont: XName = A.a.getName('majorFont');

  /**
   * Represents the `a:masterClrMapping` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.clrMapOvr p:clrMapOvr}
   */
  public static readonly masterClrMapping: XName =
    A.a.getName('masterClrMapping');

  /**
   * Represents the `a:minorFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fontScheme a:fontScheme}
   * - child XML elements: {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode extLst a:extLst}, {@linkcode font a:font}, {@linkcode latin a:latin}
   */
  public static readonly minorFont: XName = A.a.getName('minorFont');

  /**
   * Represents the `a:miter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly miter: XName = A.a.getName('miter');

  /**
   * Represents the `a:moveTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   * - child XML elements: {@linkcode pt a:pt}
   */
  public static readonly moveTo: XName = A.a.getName('moveTo');

  /**
   * Represents the `a:neCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly neCell: XName = A.a.getName('neCell');

  /**
   * Represents the `a:noAutofit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode WPS.bodyPr wps:bodyPr}
   */
  public static readonly noAutofit: XName = A.a.getName('noAutofit');

  /**
   * Represents the `a:noFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   */
  public static readonly noFill: XName = A.a.getName('noFill');

  /**
   * Represents the `a:norm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode backdrop a:backdrop}
   */
  public static readonly norm: XName = A.a.getName('norm');

  /**
   * Represents the `a:normAutofit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode WPS.bodyPr wps:bodyPr}
   */
  public static readonly normAutofit: XName = A.a.getName('normAutofit');

  /**
   * Represents the `a:nvCxnSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp a:cxnSp}
   * - child XML elements: {@linkcode cNvCxnSpPr a:cNvCxnSpPr}, {@linkcode cNvPr a:cNvPr}
   */
  public static readonly nvCxnSpPr: XName = A.a.getName('nvCxnSpPr');

  /**
   * Represents the `a:nvGraphicFramePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicFrame a:graphicFrame}
   * - child XML elements: {@linkcode cNvGraphicFramePr a:cNvGraphicFramePr}, {@linkcode cNvPr a:cNvPr}
   */
  public static readonly nvGraphicFramePr: XName =
    A.a.getName('nvGraphicFramePr');

  /**
   * Represents the `a:nvGrpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode cNvGrpSpPr a:cNvGrpSpPr}, {@linkcode cNvPr a:cNvPr}
   */
  public static readonly nvGrpSpPr: XName = A.a.getName('nvGrpSpPr');

  /**
   * Represents the `a:nvPicPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pic a:pic}
   * - child XML elements: {@linkcode cNvPicPr a:cNvPicPr}, {@linkcode cNvPr a:cNvPr}
   */
  public static readonly nvPicPr: XName = A.a.getName('nvPicPr');

  /**
   * Represents the `a:nvSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp a:sp}
   * - child XML elements: {@linkcode cNvPr a:cNvPr}, {@linkcode cNvSpPr a:cNvSpPr}
   */
  public static readonly nvSpPr: XName = A.a.getName('nvSpPr');

  /**
   * Represents the `a:nwCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly nwCell: XName = A.a.getName('nwCell');

  /**
   * Represents the `a:objectDefaults` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode theme a:theme}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode lnDef a:lnDef}, {@linkcode spDef a:spDef}, {@linkcode txDef a:txDef}
   */
  public static readonly objectDefaults: XName = A.a.getName('objectDefaults');

  /**
   * Represents the `a:off` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode xfrm a:xfrm}, {@linkcode A14.xfrm a14:xfrm}, {@linkcode P.xfrm p:xfrm}, {@linkcode P14.xfrm p14:xfrm}, {@linkcode W14.xfrm w14:xfrm}, {@linkcode WPG.xfrm wpg:xfrm}
   */
  public static readonly off: XName = A.a.getName('off');

  /**
   * Represents the `a:outerShdw` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly outerShdw: XName = A.a.getName('outerShdw');

  /**
   * Represents the `a:overrideClrMapping` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.clrMapOvr p:clrMapOvr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly overrideClrMapping: XName =
    A.a.getName('overrideClrMapping');

  /**
   * Represents the `a:p` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txBody a:txBody}, {@linkcode P.txBody p:txBody}
   * - child XML elements: {@linkcode br a:br}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fld a:fld}, {@linkcode pPr a:pPr}, {@linkcode r a:r}, {@linkcode A14.m a14:m}
   */
  public static readonly p: XName = A.a.getName('p');

  /**
   * Represents the `a:path` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill a:gradFill}, {@linkcode pathLst a:pathLst}
   * - child XML elements: {@linkcode arcTo a:arcTo}, {@linkcode close a:close}, {@linkcode cubicBezTo a:cubicBezTo}, {@linkcode fillToRect a:fillToRect}, {@linkcode lnTo a:lnTo}, {@linkcode moveTo a:moveTo}, {@linkcode quadBezTo a:quadBezTo}
   */
  public static readonly path: XName = A.a.getName('path');

  /**
   * Represents the `a:pathLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}
   * - child XML elements: {@linkcode path a:path}
   */
  public static readonly pathLst: XName = A.a.getName('pathLst');

  /**
   * Represents the `a:pattFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode bgClr a:bgClr}, {@linkcode fgClr a:fgClr}
   */
  public static readonly pattFill: XName = A.a.getName('pattFill');

  /**
   * Represents the `a:pic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode extLst a:extLst}, {@linkcode nvPicPr a:nvPicPr}, {@linkcode spPr a:spPr}, {@linkcode style a:style}
   */
  public static readonly pic: XName = A.a.getName('pic');

  /**
   * Represents the `a:picLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvPicPr a:cNvPicPr}, {@linkcode P.cNvPicPr p:cNvPicPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly picLocks: XName = A.a.getName('picLocks');

  /**
   * Represents the `a:pos` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ahPolar a:ahPolar}, {@linkcode ahXY a:ahXY}, {@linkcode cxn a:cxn}
   */
  public static readonly pos: XName = A.a.getName('pos');

  /**
   * Represents the `a:pPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fld a:fld}, {@linkcode p a:p}
   * - child XML elements: {@linkcode buAutoNum a:buAutoNum}, {@linkcode buBlip a:buBlip}, {@linkcode buChar a:buChar}, {@linkcode buClr a:buClr}, {@linkcode buClrTx a:buClrTx}, {@linkcode buFont a:buFont}, {@linkcode buFontTx a:buFontTx}, {@linkcode buNone a:buNone}, {@linkcode buSzPct a:buSzPct}, {@linkcode buSzPts a:buSzPts}, {@linkcode buSzTx a:buSzTx}, {@linkcode defRPr a:defRPr}, {@linkcode extLst a:extLst}, {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}, {@linkcode tabLst a:tabLst}
   */
  public static readonly pPr: XName = A.a.getName('pPr');

  /**
   * Represents the `a:prstClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode folHlink a:folHlink}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode hlink a:hlink}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   */
  public static readonly prstClr: XName = A.a.getName('prstClr');

  /**
   * Represents the `a:prstDash` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly prstDash: XName = A.a.getName('prstDash');

  /**
   * Represents the `a:prstGeom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spPr a:spPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode avLst a:avLst}
   */
  public static readonly prstGeom: XName = A.a.getName('prstGeom');

  /**
   * Represents the `a:prstShdw` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly prstShdw: XName = A.a.getName('prstShdw');

  /**
   * Represents the `a:prstTxWarp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode WPS.bodyPr wps:bodyPr}
   * - child XML elements: {@linkcode avLst a:avLst}
   */
  public static readonly prstTxWarp: XName = A.a.getName('prstTxWarp');

  /**
   * Represents the `a:pt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cubicBezTo a:cubicBezTo}, {@linkcode lnTo a:lnTo}, {@linkcode moveTo a:moveTo}, {@linkcode quadBezTo a:quadBezTo}
   */
  public static readonly pt: XName = A.a.getName('pt');

  /**
   * Represents the `a:quadBezTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path a:path}
   * - child XML elements: {@linkcode pt a:pt}
   */
  public static readonly quadBezTo: XName = A.a.getName('quadBezTo');

  /**
   * Represents the `a:quickTimeFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   * - XML attributes: {@linkcode R.link r:link}
   */
  public static readonly quickTimeFile: XName = A.a.getName('quickTimeFile');

  /**
   * Represents the `a:r` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode p a:p}
   * - child XML elements: {@linkcode rPr a:rPr}, {@linkcode t a:t}
   */
  public static readonly r: XName = A.a.getName('r');

  /**
   * Represents the `a:rect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custGeom a:custGeom}
   */
  public static readonly rect: XName = A.a.getName('rect');

  /**
   * Represents the `a:red` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly red: XName = A.a.getName('red');

  /**
   * Represents the `a:redMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly redMod: XName = A.a.getName('redMod');

  /**
   * Represents the `a:redOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly redOff: XName = A.a.getName('redOff');

  /**
   * Represents the `a:reflection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   */
  public static readonly reflection: XName = A.a.getName('reflection');

  /**
   * Represents the `a:relOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}
   */
  public static readonly relOff: XName = A.a.getName('relOff');

  /**
   * Represents the `a:right` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly right: XName = A.a.getName('right');

  /**
   * Represents the `a:rot` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode camera a:camera}, {@linkcode lightRig a:lightRig}
   */
  public static readonly rot: XName = A.a.getName('rot');

  /**
   * Represents the `a:round` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly round: XName = A.a.getName('round');

  /**
   * Represents the `a:rPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode br a:br}, {@linkcode fld a:fld}, {@linkcode r a:r}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode cs a:cs}, {@linkcode ea a:ea}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode highlight a:highlight}, {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkMouseOver a:hlinkMouseOver}, {@linkcode latin a:latin}, {@linkcode ln a:ln}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode rtl a:rtl}, {@linkcode solidFill a:solidFill}, {@linkcode sym a:sym}, {@linkcode uFill a:uFill}, {@linkcode uFillTx a:uFillTx}, {@linkcode uLn a:uLn}, {@linkcode uLnTx a:uLnTx}
   */
  public static readonly rPr: XName = A.a.getName('rPr');

  /**
   * Represents the `a:rtl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   */
  public static readonly rtl: XName = A.a.getName('rtl');

  /**
   * Represents the `a:sat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly sat: XName = A.a.getName('sat');

  /**
   * Represents the `a:satMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly satMod: XName = A.a.getName('satMod');

  /**
   * Represents the `a:satOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly satOff: XName = A.a.getName('satOff');

  /**
   * Represents the `a:scene3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode effectStyle a:effectStyle}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode spPr a:spPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.bodyPr wps:bodyPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode backdrop a:backdrop}, {@linkcode camera a:camera}, {@linkcode extLst a:extLst}, {@linkcode lightRig a:lightRig}
   */
  public static readonly scene3d: XName = A.a.getName('scene3d');

  /**
   * Represents the `a:schemeClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   */
  public static readonly schemeClr: XName = A.a.getName('schemeClr');

  /**
   * Represents the `a:scrgbClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode folHlink a:folHlink}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode hlink a:hlink}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   */
  public static readonly scrgbClr: XName = A.a.getName('scrgbClr');

  /**
   * Represents the `a:seCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly seCell: XName = A.a.getName('seCell');

  /**
   * Represents the `a:shade` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly shade: XName = A.a.getName('shade');

  /**
   * Represents the `a:snd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hlinkClick a:hlinkClick}, {@linkcode hlinkHover a:hlinkHover}, {@linkcode hlinkMouseOver a:hlinkMouseOver}
   * - XML attributes: {@linkcode R.embed r:embed}
   */
  public static readonly snd: XName = A.a.getName('snd');

  /**
   * Represents the `a:softEdge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}
   */
  public static readonly softEdge: XName = A.a.getName('softEdge');

  /**
   * Represents the `a:solidFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgFillStyleLst a:bgFillStyleLst}, {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode fill a:fill}, {@linkcode fillOverlay a:fillOverlay}, {@linkcode fillStyleLst a:fillStyleLst}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode rPr a:rPr}, {@linkcode spPr a:spPr}, {@linkcode tblPr a:tblPr}, {@linkcode tcPr a:tcPr}, {@linkcode uFill a:uFill}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenFill a14:hiddenFill}, {@linkcode A14.hiddenLine a14:hiddenLine}, {@linkcode P.bgPr p:bgPr}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPC.bg wpc:bg}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly solidFill: XName = A.a.getName('solidFill');

  /**
   * Represents the `a:sp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode nvSpPr a:nvSpPr}, {@linkcode spPr a:spPr}, {@linkcode style a:style}, {@linkcode txSp a:txSp}
   */
  public static readonly sp: XName = A.a.getName('sp');

  /**
   * Represents the `a:sp3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode effectStyle a:effectStyle}, {@linkcode spPr a:spPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPS.bodyPr wps:bodyPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode bevelB a:bevelB}, {@linkcode bevelT a:bevelT}, {@linkcode contourClr a:contourClr}, {@linkcode extLst a:extLst}, {@linkcode extrusionClr a:extrusionClr}
   */
  public static readonly sp3d: XName = A.a.getName('sp3d');

  /**
   * Represents the `a:spAutoFit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode WPS.bodyPr wps:bodyPr}
   */
  public static readonly spAutoFit: XName = A.a.getName('spAutoFit');

  /**
   * Represents the `a:spcAft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode spcPct a:spcPct}, {@linkcode spcPts a:spcPts}
   */
  public static readonly spcAft: XName = A.a.getName('spcAft');

  /**
   * Represents the `a:spcBef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode spcPct a:spcPct}, {@linkcode spcPts a:spcPts}
   */
  public static readonly spcBef: XName = A.a.getName('spcBef');

  /**
   * Represents the `a:spcPct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}
   */
  public static readonly spcPct: XName = A.a.getName('spcPct');

  /**
   * Represents the `a:spcPts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lnSpc a:lnSpc}, {@linkcode spcAft a:spcAft}, {@linkcode spcBef a:spcBef}
   */
  public static readonly spcPts: XName = A.a.getName('spcPts');

  /**
   * Represents the `a:spDef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode objectDefaults a:objectDefaults}
   * - child XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode extLst a:extLst}, {@linkcode lstStyle a:lstStyle}, {@linkcode spPr a:spPr}, {@linkcode style a:style}
   */
  public static readonly spDef: XName = A.a.getName('spDef');

  /**
   * Represents the `a:spLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvSpPr a:cNvSpPr}, {@linkcode P.cNvSpPr p:cNvSpPr}, {@linkcode WPS.cNvSpPr wps:cNvSpPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   */
  public static readonly spLocks: XName = A.a.getName('spLocks');

  /**
   * Represents the `a:spPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp a:cxnSp}, {@linkcode lnDef a:lnDef}, {@linkcode pic a:pic}, {@linkcode sp a:sp}, {@linkcode spDef a:spDef}, {@linkcode txDef a:txDef}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode custGeom a:custGeom}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode ln a:ln}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstGeom a:prstGeom}, {@linkcode scene3d a:scene3d}, {@linkcode solidFill a:solidFill}, {@linkcode sp3d a:sp3d}, {@linkcode xfrm a:xfrm}
   */
  public static readonly spPr: XName = A.a.getName('spPr');

  /**
   * Represents the `a:srcRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blipFill a:blipFill}, {@linkcode P.blipFill p:blipFill}
   */
  public static readonly srcRect: XName = A.a.getName('srcRect');

  /**
   * Represents the `a:srgbClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode folHlink a:folHlink}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode hlink a:hlink}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   * - XML attributes: {@linkcode A14.legacySpreadsheetColorIndex a14:legacySpreadsheetColorIndex}
   */
  public static readonly srgbClr: XName = A.a.getName('srgbClr');

  /**
   * Represents the `a:st` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode audioCd a:audioCd}
   */
  public static readonly st: XName = A.a.getName('st');

  /**
   * Represents the `a:stCxn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvCxnSpPr a:cNvCxnSpPr}, {@linkcode P.cNvCxnSpPr p:cNvCxnSpPr}, {@linkcode WPS.cNvCnPr wps:cNvCnPr}
   */
  public static readonly stCxn: XName = A.a.getName('stCxn');

  /**
   * Represents the `a:stretch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blipFill a:blipFill}, {@linkcode P.blipFill p:blipFill}
   * - child XML elements: {@linkcode fillRect a:fillRect}
   */
  public static readonly stretch: XName = A.a.getName('stretch');

  /**
   * Represents the `a:style` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp a:cxnSp}, {@linkcode lnDef a:lnDef}, {@linkcode pic a:pic}, {@linkcode sp a:sp}, {@linkcode spDef a:spDef}, {@linkcode txDef a:txDef}
   * - child XML elements: {@linkcode effectRef a:effectRef}, {@linkcode fillRef a:fillRef}, {@linkcode fontRef a:fontRef}, {@linkcode lnRef a:lnRef}
   */
  public static readonly style: XName = A.a.getName('style');

  /**
   * Represents the `a:swCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly swCell: XName = A.a.getName('swCell');

  /**
   * Represents the `a:sx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.scale p:scale}
   */
  public static readonly sx: XName = A.a.getName('sx');

  /**
   * Represents the `a:sy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.scale p:scale}
   */
  public static readonly sy: XName = A.a.getName('sy');

  /**
   * Represents the `a:sym` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   */
  public static readonly sym: XName = A.a.getName('sym');

  /**
   * Represents the `a:sysClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accent1 a:accent1}, {@linkcode accent2 a:accent2}, {@linkcode accent3 a:accent3}, {@linkcode accent4 a:accent4}, {@linkcode accent5 a:accent5}, {@linkcode accent6 a:accent6}, {@linkcode alphaInv a:alphaInv}, {@linkcode bgClr a:bgClr}, {@linkcode buClr a:buClr}, {@linkcode clrFrom a:clrFrom}, {@linkcode clrRepl a:clrRepl}, {@linkcode clrTo a:clrTo}, {@linkcode contourClr a:contourClr}, {@linkcode custClr a:custClr}, {@linkcode dk1 a:dk1}, {@linkcode dk2 a:dk2}, {@linkcode duotone a:duotone}, {@linkcode effectRef a:effectRef}, {@linkcode extrusionClr a:extrusionClr}, {@linkcode fgClr a:fgClr}, {@linkcode fillRef a:fillRef}, {@linkcode folHlink a:folHlink}, {@linkcode fontRef a:fontRef}, {@linkcode glow a:glow}, {@linkcode gs a:gs}, {@linkcode highlight a:highlight}, {@linkcode hlink a:hlink}, {@linkcode innerShdw a:innerShdw}, {@linkcode lnRef a:lnRef}, {@linkcode lt1 a:lt1}, {@linkcode lt2 a:lt2}, {@linkcode outerShdw a:outerShdw}, {@linkcode prstShdw a:prstShdw}, {@linkcode solidFill a:solidFill}, {@linkcode tcTxStyle a:tcTxStyle}, {@linkcode P.bgRef p:bgRef}, {@linkcode P.clrMru p:clrMru}, {@linkcode P.clrVal p:clrVal}, {@linkcode P.from p:from}, {@linkcode P.penClr p:penClr}, {@linkcode P.to p:to}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P15.clr p15:clr}
   * - child XML elements: {@linkcode alpha a:alpha}, {@linkcode alphaMod a:alphaMod}, {@linkcode alphaOff a:alphaOff}, {@linkcode blue a:blue}, {@linkcode blueMod a:blueMod}, {@linkcode blueOff a:blueOff}, {@linkcode comp a:comp}, {@linkcode gamma a:gamma}, {@linkcode gray a:gray}, {@linkcode green a:green}, {@linkcode greenMod a:greenMod}, {@linkcode greenOff a:greenOff}, {@linkcode hue a:hue}, {@linkcode hueMod a:hueMod}, {@linkcode hueOff a:hueOff}, {@linkcode inv a:inv}, {@linkcode invGamma a:invGamma}, {@linkcode lum a:lum}, {@linkcode lumMod a:lumMod}, {@linkcode lumOff a:lumOff}, {@linkcode red a:red}, {@linkcode redMod a:redMod}, {@linkcode redOff a:redOff}, {@linkcode sat a:sat}, {@linkcode satMod a:satMod}, {@linkcode satOff a:satOff}, {@linkcode shade a:shade}, {@linkcode tint a:tint}
   */
  public static readonly sysClr: XName = A.a.getName('sysClr');

  /**
   * Represents the `a:t` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fld a:fld}, {@linkcode r a:r}
   */
  public static readonly t: XName = A.a.getName('t');

  /**
   * Represents the `a:tab` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tabLst a:tabLst}
   */
  public static readonly tab: XName = A.a.getName('tab');

  /**
   * Represents the `a:tableStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr a:tblPr}
   * - child XML elements: {@linkcode band1H a:band1H}, {@linkcode band1V a:band1V}, {@linkcode band2H a:band2H}, {@linkcode band2V a:band2V}, {@linkcode extLst a:extLst}, {@linkcode firstCol a:firstCol}, {@linkcode firstRow a:firstRow}, {@linkcode lastCol a:lastCol}, {@linkcode lastRow a:lastRow}, {@linkcode neCell a:neCell}, {@linkcode nwCell a:nwCell}, {@linkcode seCell a:seCell}, {@linkcode swCell a:swCell}, {@linkcode tblBg a:tblBg}, {@linkcode wholeTbl a:wholeTbl}
   */
  public static readonly tableStyle: XName = A.a.getName('tableStyle');

  /**
   * Represents the `a:tableStyleId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr a:tblPr}
   */
  public static readonly tableStyleId: XName = A.a.getName('tableStyleId');

  /**
   * Represents the `a:tabLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defPPr a:defPPr}, {@linkcode lvl1pPr a:lvl1pPr}, {@linkcode lvl2pPr a:lvl2pPr}, {@linkcode lvl3pPr a:lvl3pPr}, {@linkcode lvl4pPr a:lvl4pPr}, {@linkcode lvl5pPr a:lvl5pPr}, {@linkcode lvl6pPr a:lvl6pPr}, {@linkcode lvl7pPr a:lvl7pPr}, {@linkcode lvl8pPr a:lvl8pPr}, {@linkcode lvl9pPr a:lvl9pPr}, {@linkcode pPr a:pPr}
   * - child XML elements: {@linkcode tab a:tab}
   */
  public static readonly tabLst: XName = A.a.getName('tabLst');

  /**
   * Represents the `a:tailEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ln a:ln}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode uLn a:uLn}, {@linkcode A14.hiddenLine a14:hiddenLine}
   */
  public static readonly tailEnd: XName = A.a.getName('tailEnd');

  /**
   * Represents the `a:tbl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicData a:graphicData}
   * - child XML elements: {@linkcode tblGrid a:tblGrid}, {@linkcode tblPr a:tblPr}, {@linkcode tr a:tr}
   */
  public static readonly tbl: XName = A.a.getName('tbl');

  /**
   * Represents the `a:tblBg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode effect a:effect}, {@linkcode effectRef a:effectRef}, {@linkcode fill a:fill}, {@linkcode fillRef a:fillRef}
   */
  public static readonly tblBg: XName = A.a.getName('tblBg');

  /**
   * Represents the `a:tblGrid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tbl a:tbl}
   * - child XML elements: {@linkcode gridCol a:gridCol}
   */
  public static readonly tblGrid: XName = A.a.getName('tblGrid');

  /**
   * Represents the `a:tblPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tbl a:tbl}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode effectDag a:effectDag}, {@linkcode effectLst a:effectLst}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}, {@linkcode tableStyle a:tableStyle}, {@linkcode tableStyleId a:tableStyleId}
   */
  public static readonly tblPr: XName = A.a.getName('tblPr');

  /**
   * Represents the `a:tblStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblStyleLst a:tblStyleLst}
   * - child XML elements: {@linkcode band1H a:band1H}, {@linkcode band1V a:band1V}, {@linkcode band2H a:band2H}, {@linkcode band2V a:band2V}, {@linkcode extLst a:extLst}, {@linkcode firstCol a:firstCol}, {@linkcode firstRow a:firstRow}, {@linkcode lastCol a:lastCol}, {@linkcode lastRow a:lastRow}, {@linkcode neCell a:neCell}, {@linkcode nwCell a:nwCell}, {@linkcode seCell a:seCell}, {@linkcode swCell a:swCell}, {@linkcode tblBg a:tblBg}, {@linkcode wholeTbl a:wholeTbl}
   */
  public static readonly tblStyle: XName = A.a.getName('tblStyle');

  /**
   * Represents the `a:tblStyleLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicData a:graphicData}
   * - child XML elements: {@linkcode tblStyle a:tblStyle}
   */
  public static readonly tblStyleLst: XName = A.a.getName('tblStyleLst');

  /**
   * Represents the `a:tc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tr a:tr}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode tcPr a:tcPr}, {@linkcode txBody a:txBody}
   */
  public static readonly tc: XName = A.a.getName('tc');

  /**
   * Represents the `a:tcBdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcStyle a:tcStyle}
   * - child XML elements: {@linkcode bottom a:bottom}, {@linkcode extLst a:extLst}, {@linkcode insideH a:insideH}, {@linkcode insideV a:insideV}, {@linkcode left a:left}, {@linkcode right a:right}, {@linkcode tl2br a:tl2br}, {@linkcode top a:top}, {@linkcode tr2bl a:tr2bl}
   */
  public static readonly tcBdr: XName = A.a.getName('tcBdr');

  /**
   * Represents the `a:tcPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tc a:tc}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode cell3D a:cell3D}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode lnB a:lnB}, {@linkcode lnBlToTr a:lnBlToTr}, {@linkcode lnL a:lnL}, {@linkcode lnR a:lnR}, {@linkcode lnT a:lnT}, {@linkcode lnTlToBr a:lnTlToBr}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly tcPr: XName = A.a.getName('tcPr');

  /**
   * Represents the `a:tcStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode band1H a:band1H}, {@linkcode band1V a:band1V}, {@linkcode band2H a:band2H}, {@linkcode band2V a:band2V}, {@linkcode firstCol a:firstCol}, {@linkcode firstRow a:firstRow}, {@linkcode lastCol a:lastCol}, {@linkcode lastRow a:lastRow}, {@linkcode neCell a:neCell}, {@linkcode nwCell a:nwCell}, {@linkcode seCell a:seCell}, {@linkcode swCell a:swCell}, {@linkcode wholeTbl a:wholeTbl}
   * - child XML elements: {@linkcode cell3D a:cell3D}, {@linkcode fill a:fill}, {@linkcode fillRef a:fillRef}, {@linkcode tcBdr a:tcBdr}
   */
  public static readonly tcStyle: XName = A.a.getName('tcStyle');

  /**
   * Represents the `a:tcTxStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode band1H a:band1H}, {@linkcode band1V a:band1V}, {@linkcode band2H a:band2H}, {@linkcode band2V a:band2V}, {@linkcode firstCol a:firstCol}, {@linkcode firstRow a:firstRow}, {@linkcode lastCol a:lastCol}, {@linkcode lastRow a:lastRow}, {@linkcode neCell a:neCell}, {@linkcode nwCell a:nwCell}, {@linkcode seCell a:seCell}, {@linkcode swCell a:swCell}, {@linkcode wholeTbl a:wholeTbl}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode font a:font}, {@linkcode fontRef a:fontRef}, {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly tcTxStyle: XName = A.a.getName('tcTxStyle');

  /**
   * Represents the `a:theme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicData a:graphicData}
   * - child XML elements: {@linkcode custClrLst a:custClrLst}, {@linkcode extLst a:extLst}, {@linkcode extraClrSchemeLst a:extraClrSchemeLst}, {@linkcode objectDefaults a:objectDefaults}, {@linkcode themeElements a:themeElements}
   */
  public static readonly theme: XName = A.a.getName('theme');

  /**
   * Represents the `a:themeElements` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode theme a:theme}
   * - child XML elements: {@linkcode clrScheme a:clrScheme}, {@linkcode extLst a:extLst}, {@linkcode fmtScheme a:fmtScheme}, {@linkcode fontScheme a:fontScheme}
   */
  public static readonly themeElements: XName = A.a.getName('themeElements');

  /**
   * Represents the `a:themeManager` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicData a:graphicData}
   */
  public static readonly themeManager: XName = A.a.getName('themeManager');

  /**
   * Represents the `a:themeOverride` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicData a:graphicData}
   * - child XML elements: {@linkcode clrScheme a:clrScheme}, {@linkcode fmtScheme a:fmtScheme}, {@linkcode fontScheme a:fontScheme}
   */
  public static readonly themeOverride: XName = A.a.getName('themeOverride');

  /**
   * Represents the `a:tile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blipFill a:blipFill}, {@linkcode P.blipFill p:blipFill}
   */
  public static readonly tile: XName = A.a.getName('tile');

  /**
   * Represents the `a:tileRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill a:gradFill}
   */
  public static readonly tileRect: XName = A.a.getName('tileRect');

  /**
   * Represents the `a:tint` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode blip a:blip}, {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode hslClr a:hslClr}, {@linkcode prstClr a:prstClr}, {@linkcode schemeClr a:schemeClr}, {@linkcode scrgbClr a:scrgbClr}, {@linkcode srgbClr a:srgbClr}, {@linkcode sysClr a:sysClr}
   */
  public static readonly tint: XName = A.a.getName('tint');

  /**
   * Represents the `a:tl2br` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly tl2br: XName = A.a.getName('tl2br');

  /**
   * Represents the `a:top` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly top: XName = A.a.getName('top');

  /**
   * Represents the `a:tr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tbl a:tbl}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode tc a:tc}
   */
  public static readonly tr: XName = A.a.getName('tr');

  /**
   * Represents the `a:tr2bl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBdr a:tcBdr}
   * - child XML elements: {@linkcode ln a:ln}, {@linkcode lnRef a:lnRef}
   */
  public static readonly tr2bl: XName = A.a.getName('tr2bl');

  /**
   * Represents the `a:txBody` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tc a:tc}, {@linkcode txSp a:txSp}
   * - child XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode lstStyle a:lstStyle}, {@linkcode p a:p}
   */
  public static readonly txBody: XName = A.a.getName('txBody');

  /**
   * Represents the `a:txDef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode objectDefaults a:objectDefaults}
   * - child XML elements: {@linkcode bodyPr a:bodyPr}, {@linkcode extLst a:extLst}, {@linkcode lstStyle a:lstStyle}, {@linkcode spPr a:spPr}, {@linkcode style a:style}
   */
  public static readonly txDef: XName = A.a.getName('txDef');

  /**
   * Represents the `a:txSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp a:grpSp}, {@linkcode sp a:sp}
   * - child XML elements: {@linkcode extLst a:extLst}, {@linkcode txBody a:txBody}, {@linkcode useSpRect a:useSpRect}, {@linkcode xfrm a:xfrm}
   */
  public static readonly txSp: XName = A.a.getName('txSp');

  /**
   * Represents the `a:uFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   * - child XML elements: {@linkcode blipFill a:blipFill}, {@linkcode gradFill a:gradFill}, {@linkcode grpFill a:grpFill}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode solidFill a:solidFill}
   */
  public static readonly uFill: XName = A.a.getName('uFill');

  /**
   * Represents the `a:uFillTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   */
  public static readonly uFillTx: XName = A.a.getName('uFillTx');

  /**
   * Represents the `a:uLn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   * - child XML elements: {@linkcode bevel a:bevel}, {@linkcode custDash a:custDash}, {@linkcode extLst a:extLst}, {@linkcode gradFill a:gradFill}, {@linkcode headEnd a:headEnd}, {@linkcode miter a:miter}, {@linkcode noFill a:noFill}, {@linkcode pattFill a:pattFill}, {@linkcode prstDash a:prstDash}, {@linkcode round a:round}, {@linkcode solidFill a:solidFill}, {@linkcode tailEnd a:tailEnd}
   */
  public static readonly uLn: XName = A.a.getName('uLn');

  /**
   * Represents the `a:uLnTx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode defRPr a:defRPr}, {@linkcode endParaRPr a:endParaRPr}, {@linkcode rPr a:rPr}
   */
  public static readonly uLnTx: XName = A.a.getName('uLnTx');

  /**
   * Represents the `a:up` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode backdrop a:backdrop}
   */
  public static readonly up: XName = A.a.getName('up');

  /**
   * Represents the `a:useSpRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txSp a:txSp}
   */
  public static readonly useSpRect: XName = A.a.getName('useSpRect');

  /**
   * Represents the `a:videoFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode extLst a:extLst}
   * - XML attributes: {@linkcode R.link r:link}
   */
  public static readonly videoFile: XName = A.a.getName('videoFile');

  /**
   * Represents the `a:wavAudioFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode P.nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - XML attributes: {@linkcode R.embed r:embed}
   */
  public static readonly wavAudioFile: XName = A.a.getName('wavAudioFile');

  /**
   * Represents the `a:wholeTbl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle a:tableStyle}, {@linkcode tblStyle a:tblStyle}
   * - child XML elements: {@linkcode tcStyle a:tcStyle}, {@linkcode tcTxStyle a:tcTxStyle}
   */
  public static readonly wholeTbl: XName = A.a.getName('wholeTbl');

  /**
   * Represents the `a:xfrm` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cont a:cont}, {@linkcode effectDag a:effectDag}, {@linkcode graphicFrame a:graphicFrame}, {@linkcode grpSpPr a:grpSpPr}, {@linkcode spPr a:spPr}, {@linkcode txSp a:txSp}, {@linkcode P.grpSpPr p:grpSpPr}, {@linkcode P.spPr p:spPr}, {@linkcode WPG.grpSpPr wpg:grpSpPr}, {@linkcode WPS.spPr wps:spPr}
   * - child XML elements: {@linkcode chExt a:chExt}, {@linkcode chOff a:chOff}, {@linkcode ext a:ext}, {@linkcode off a:off}
   */
  public static readonly xfrm: XName = A.a.getName('xfrm');
}
