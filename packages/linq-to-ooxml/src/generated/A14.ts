/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main"` namespace.
 */
export class A14 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `a14` prefix.
   */
  public static readonly a14: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/drawing/2010/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('a14'), A14.a14.namespaceName);
  }

  /**
   * Represents the `a14:artisticBlur` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticBlur: XName = A14.a14.getName('artisticBlur');

  /**
   * Represents the `a14:artisticCement` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticCement: XName = A14.a14.getName('artisticCement');

  /**
   * Represents the `a14:artisticChalkSketch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticChalkSketch: XName = A14.a14.getName('artisticChalkSketch');

  /**
   * Represents the `a14:artisticCrisscrossEtching` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticCrisscrossEtching: XName = A14.a14.getName('artisticCrisscrossEtching');

  /**
   * Represents the `a14:artisticCutout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticCutout: XName = A14.a14.getName('artisticCutout');

  /**
   * Represents the `a14:artisticFilmGrain` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticFilmGrain: XName = A14.a14.getName('artisticFilmGrain');

  /**
   * Represents the `a14:artisticGlass` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticGlass: XName = A14.a14.getName('artisticGlass');

  /**
   * Represents the `a14:artisticGlowDiffused` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticGlowDiffused: XName = A14.a14.getName('artisticGlowDiffused');

  /**
   * Represents the `a14:artisticGlowEdges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticGlowEdges: XName = A14.a14.getName('artisticGlowEdges');

  /**
   * Represents the `a14:artisticLightScreen` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticLightScreen: XName = A14.a14.getName('artisticLightScreen');

  /**
   * Represents the `a14:artisticLineDrawing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticLineDrawing: XName = A14.a14.getName('artisticLineDrawing');

  /**
   * Represents the `a14:artisticMarker` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticMarker: XName = A14.a14.getName('artisticMarker');

  /**
   * Represents the `a14:artisticMosiaicBubbles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticMosiaicBubbles: XName = A14.a14.getName('artisticMosiaicBubbles');

  /**
   * Represents the `a14:artisticPaintBrush` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPaintBrush: XName = A14.a14.getName('artisticPaintBrush');

  /**
   * Represents the `a14:artisticPaintStrokes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPaintStrokes: XName = A14.a14.getName('artisticPaintStrokes');

  /**
   * Represents the `a14:artisticPastelsSmooth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPastelsSmooth: XName = A14.a14.getName('artisticPastelsSmooth');

  /**
   * Represents the `a14:artisticPencilGrayscale` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPencilGrayscale: XName = A14.a14.getName('artisticPencilGrayscale');

  /**
   * Represents the `a14:artisticPencilSketch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPencilSketch: XName = A14.a14.getName('artisticPencilSketch');

  /**
   * Represents the `a14:artisticPhotocopy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPhotocopy: XName = A14.a14.getName('artisticPhotocopy');

  /**
   * Represents the `a14:artisticPlasticWrap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticPlasticWrap: XName = A14.a14.getName('artisticPlasticWrap');

  /**
   * Represents the `a14:artisticTexturizer` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticTexturizer: XName = A14.a14.getName('artisticTexturizer');

  /**
   * Represents the `a14:artisticWatercolorSponge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly artisticWatercolorSponge: XName = A14.a14.getName('artisticWatercolorSponge');

  /**
   * Represents the `a14:backgroundMark` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode backgroundRemoval a14:backgroundRemoval}
   */
  public static readonly backgroundMark: XName = A14.a14.getName('backgroundMark');

  /**
   * Represents the `a14:backgroundRemoval` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   * - child XML elements: {@linkcode backgroundMark a14:backgroundMark}, {@linkcode foregroundMark a14:foregroundMark}
   */
  public static readonly backgroundRemoval: XName = A14.a14.getName('backgroundRemoval');

  /**
   * Represents the `a14:brightnessContrast` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly brightnessContrast: XName = A14.a14.getName('brightnessContrast');

  /**
   * Represents the `a14:cameraTool` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly cameraTool: XName = A14.a14.getName('cameraTool');

  /**
   * Represents the `a14:cNvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr a14:nvContentPartPr}
   * - child XML elements: {@linkcode cpLocks a14:cpLocks}, {@linkcode extLst a14:extLst}
   */
  public static readonly cNvContentPartPr: XName = A14.a14.getName('cNvContentPartPr');

  /**
   * Represents the `a14:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr a14:nvContentPartPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = A14.a14.getName('cNvPr');

  /**
   * Represents the `a14:colorTemperature` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly colorTemperature: XName = A14.a14.getName('colorTemperature');

  /**
   * Represents the `a14:compatExt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly compatExt: XName = A14.a14.getName('compatExt');

  /**
   * Represents the `a14:contentPart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode A.grpSp a:grpSp}
   * - child XML elements: {@linkcode extLst a14:extLst}, {@linkcode nvContentPartPr a14:nvContentPartPr}, {@linkcode xfrm a14:xfrm}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly contentPart: XName = A14.a14.getName('contentPart');

  /**
   * Represents the `a14:cpLocks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvContentPartPr a14:cNvContentPartPr}, {@linkcode P14.cNvContentPartPr p14:cNvContentPartPr}, {@linkcode W14.cNvContentPartPr w14:cNvContentPartPr}
   * - child XML elements: {@linkcode extLst a14:extLst}
   */
  public static readonly cpLocks: XName = A14.a14.getName('cpLocks');

  /**
   * Represents the `a14:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cNvContentPartPr a14:cNvContentPartPr}, {@linkcode contentPart a14:contentPart}, {@linkcode cpLocks a14:cpLocks}, {@linkcode P14.cNvContentPartPr p14:cNvContentPartPr}, {@linkcode W14.cNvContentPartPr w14:cNvContentPartPr}
   * - child XML elements: {@linkcode A.ext a:ext}
   */
  public static readonly extLst: XName = A14.a14.getName('extLst');

  /**
   * Represents the `a14:foregroundMark` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode backgroundRemoval a14:backgroundRemoval}
   */
  public static readonly foregroundMark: XName = A14.a14.getName('foregroundMark');

  /**
   * Represents the `a14:hiddenEffects` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}
   */
  public static readonly hiddenEffects: XName = A14.a14.getName('hiddenEffects');

  /**
   * Represents the `a14:hiddenFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.solidFill a:solidFill}
   */
  public static readonly hiddenFill: XName = A14.a14.getName('hiddenFill');

  /**
   * Represents the `a14:hiddenLine` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode A.bevel a:bevel}, {@linkcode A.custDash a:custDash}, {@linkcode A.extLst a:extLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.headEnd a:headEnd}, {@linkcode A.miter a:miter}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.prstDash a:prstDash}, {@linkcode A.round a:round}, {@linkcode A.solidFill a:solidFill}, {@linkcode A.tailEnd a:tailEnd}
   */
  public static readonly hiddenLine: XName = A14.a14.getName('hiddenLine');

  /**
   * Represents the `a14:hiddenScene3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode A.backdrop a:backdrop}, {@linkcode A.camera a:camera}, {@linkcode A.extLst a:extLst}, {@linkcode A.lightRig a:lightRig}
   */
  public static readonly hiddenScene3d: XName = A14.a14.getName('hiddenScene3d');

  /**
   * Represents the `a14:hiddenSp3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode A.bevelB a:bevelB}, {@linkcode A.bevelT a:bevelT}, {@linkcode A.contourClr a:contourClr}, {@linkcode A.extLst a:extLst}, {@linkcode A.extrusionClr a:extrusionClr}
   */
  public static readonly hiddenSp3d: XName = A14.a14.getName('hiddenSp3d');

  /**
   * Represents the `a14:imgEffect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgLayer a14:imgLayer}
   * - child XML elements: {@linkcode artisticBlur a14:artisticBlur}, {@linkcode artisticCement a14:artisticCement}, {@linkcode artisticChalkSketch a14:artisticChalkSketch}, {@linkcode artisticCrisscrossEtching a14:artisticCrisscrossEtching}, {@linkcode artisticCutout a14:artisticCutout}, {@linkcode artisticFilmGrain a14:artisticFilmGrain}, {@linkcode artisticGlass a14:artisticGlass}, {@linkcode artisticGlowDiffused a14:artisticGlowDiffused}, {@linkcode artisticGlowEdges a14:artisticGlowEdges}, {@linkcode artisticLightScreen a14:artisticLightScreen}, {@linkcode artisticLineDrawing a14:artisticLineDrawing}, {@linkcode artisticMarker a14:artisticMarker}, {@linkcode artisticMosiaicBubbles a14:artisticMosiaicBubbles}, {@linkcode artisticPaintBrush a14:artisticPaintBrush}, {@linkcode artisticPaintStrokes a14:artisticPaintStrokes}, {@linkcode artisticPastelsSmooth a14:artisticPastelsSmooth}, {@linkcode artisticPencilGrayscale a14:artisticPencilGrayscale}, {@linkcode artisticPencilSketch a14:artisticPencilSketch}, {@linkcode artisticPhotocopy a14:artisticPhotocopy}, {@linkcode artisticPlasticWrap a14:artisticPlasticWrap}, {@linkcode artisticTexturizer a14:artisticTexturizer}, {@linkcode artisticWatercolorSponge a14:artisticWatercolorSponge}, {@linkcode backgroundRemoval a14:backgroundRemoval}, {@linkcode brightnessContrast a14:brightnessContrast}, {@linkcode colorTemperature a14:colorTemperature}, {@linkcode saturation a14:saturation}, {@linkcode sharpenSoften a14:sharpenSoften}
   */
  public static readonly imgEffect: XName = A14.a14.getName('imgEffect');

  /**
   * Represents the `a14:imgLayer` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgProps a14:imgProps}
   * - child XML elements: {@linkcode imgEffect a14:imgEffect}
   * - XML attributes: {@linkcode R.embed r:embed}
   */
  public static readonly imgLayer: XName = A14.a14.getName('imgLayer');

  /**
   * Represents the `a14:imgProps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode imgLayer a14:imgLayer}
   */
  public static readonly imgProps: XName = A14.a14.getName('imgProps');

  /**
   * Represents the `a14:isCanvas` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly isCanvas: XName = A14.a14.getName('isCanvas');

  /**
   * Represents the `a14:legacySpreadsheetColorIndex` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.srgbClr a:srgbClr}
   */
  public static readonly legacySpreadsheetColorIndex: XName = A14.a14.getName('legacySpreadsheetColorIndex');

  /**
   * Represents the `a14:m` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode A.p a:p}, {@linkcode P.ext p:ext}
   */
  public static readonly m: XName = A14.a14.getName('m');

  /**
   * Represents the `a14:nvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contentPart a14:contentPart}
   * - child XML elements: {@linkcode cNvContentPartPr a14:cNvContentPartPr}, {@linkcode cNvPr a14:cNvPr}
   */
  public static readonly nvContentPartPr: XName = A14.a14.getName('nvContentPartPr');

  /**
   * Represents the `a14:saturation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly saturation: XName = A14.a14.getName('saturation');

  /**
   * Represents the `a14:shadowObscured` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly shadowObscured: XName = A14.a14.getName('shadowObscured');

  /**
   * Represents the `a14:sharpenSoften` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode imgEffect a14:imgEffect}
   */
  public static readonly sharpenSoften: XName = A14.a14.getName('sharpenSoften');

  /**
   * Represents the `a14:useLocalDpi` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.ext a:ext}, {@linkcode A.graphicData a:graphicData}
   */
  public static readonly useLocalDpi: XName = A14.a14.getName('useLocalDpi');

  /**
   * Represents the `a14:xfrm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contentPart a14:contentPart}
   * - child XML elements: {@linkcode A.ext a:ext}, {@linkcode A.off a:off}
   */
  public static readonly xfrm: XName = A14.a14.getName('xfrm');
}
