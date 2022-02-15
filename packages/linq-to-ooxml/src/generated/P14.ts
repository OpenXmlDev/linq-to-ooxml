/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main"` namespace.
 */
export class P14 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `p14` prefix.
   */
  public static readonly p14: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/powerpoint/2010/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('p14'), P14.p14.namespaceName);
  }

  /**
   * Represents the `p14:bmk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bmkLst p14:bmkLst}
   */
  public static readonly bmk: XName = P14.p14.getName('bmk');

  /**
   * Represents the `p14:bmkLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode media p14:media}
   * - child XML elements: {@linkcode bmk p14:bmk}
   */
  public static readonly bmkLst: XName = P14.p14.getName('bmkLst');

  /**
   * Represents the `p14:bmkTgt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.tgtEl p:tgtEl}
   */
  public static readonly bmkTgt: XName = P14.p14.getName('bmkTgt');

  /**
   * Represents the `p14:bounceEnd` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim p:anim}, {@linkcode P.animMotion p:animMotion}, {@linkcode P.animRot p:animRot}, {@linkcode P.animScale p:animScale}
   */
  public static readonly bounceEnd: XName = P14.p14.getName('bounceEnd');

  /**
   * Represents the `p14:browseMode` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly browseMode: XName = P14.p14.getName('browseMode');

  /**
   * Represents the `p14:bwMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.contentPart p:contentPart}
   */
  public static readonly bwMode: XName = P14.p14.getName('bwMode');

  /**
   * Represents the `p14:cNvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr p14:nvContentPartPr}
   * - child XML elements: {@linkcode A14.cpLocks a14:cpLocks}, {@linkcode A14.extLst a14:extLst}
   */
  public static readonly cNvContentPartPr: XName = P14.p14.getName('cNvContentPartPr');

  /**
   * Represents the `p14:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr p14:nvContentPartPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = P14.p14.getName('cNvPr');

  /**
   * Represents the `p14:conveyor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly conveyor: XName = P14.p14.getName('conveyor');

  /**
   * Represents the `p14:creationId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly creationId: XName = P14.p14.getName('creationId');

  /**
   * Represents the `p14:defaultImageDpi` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly defaultImageDpi: XName = P14.p14.getName('defaultImageDpi');

  /**
   * Represents the `p14:discardImageEditData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly discardImageEditData: XName = P14.p14.getName('discardImageEditData');

  /**
   * Represents the `p14:doors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly doors: XName = P14.p14.getName('doors');

  /**
   * Represents the `p14:dur` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.transition p:transition}
   */
  public static readonly dur: XName = P14.p14.getName('dur');

  /**
   * Represents the `p14:extLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.contentPart p:contentPart}, {@linkcode media p14:media}, {@linkcode section p14:section}
   * - child XML elements: {@linkcode P.ext p:ext}
   */
  public static readonly extLst: XName = P14.p14.getName('extLst');

  /**
   * Represents the `p14:fade` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode media p14:media}
   */
  public static readonly fade: XName = P14.p14.getName('fade');

  /**
   * Represents the `p14:ferris` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly ferris: XName = P14.p14.getName('ferris');

  /**
   * Represents the `p14:flash` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly flash: XName = P14.p14.getName('flash');

  /**
   * Represents the `p14:flip` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly flip: XName = P14.p14.getName('flip');

  /**
   * Represents the `p14:flythrough` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly flythrough: XName = P14.p14.getName('flythrough');

  /**
   * Represents the `p14:gallery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly gallery: XName = P14.p14.getName('gallery');

  /**
   * Represents the `p14:glitter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly glitter: XName = P14.p14.getName('glitter');

  /**
   * Represents the `p14:honeycomb` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly honeycomb: XName = P14.p14.getName('honeycomb');

  /**
   * Represents the `p14:laserClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly laserClr: XName = P14.p14.getName('laserClr');

  /**
   * Represents the `p14:laserTraceLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode tracePtLst p14:tracePtLst}
   */
  public static readonly laserTraceLst: XName = P14.p14.getName('laserTraceLst');

  /**
   * Represents the `p14:media` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode bmkLst p14:bmkLst}, {@linkcode extLst p14:extLst}, {@linkcode fade p14:fade}, {@linkcode trim p14:trim}
   * - XML attributes: {@linkcode R.embed r:embed}, {@linkcode R.link r:link}
   */
  public static readonly media: XName = P14.p14.getName('media');

  /**
   * Represents the `p14:modId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly modId: XName = P14.p14.getName('modId');

  /**
   * Represents the `p14:nullEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly nullEvt: XName = P14.p14.getName('nullEvt');

  /**
   * Represents the `p14:nvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.contentPart p:contentPart}
   * - child XML elements: {@linkcode cNvContentPartPr p14:cNvContentPartPr}, {@linkcode cNvPr p14:cNvPr}, {@linkcode nvPr p14:nvPr}
   */
  public static readonly nvContentPartPr: XName = P14.p14.getName('nvContentPartPr');

  /**
   * Represents the `p14:nvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr p14:nvContentPartPr}
   * - child XML elements: {@linkcode A.audioCd a:audioCd}, {@linkcode A.audioFile a:audioFile}, {@linkcode A.quickTimeFile a:quickTimeFile}, {@linkcode A.videoFile a:videoFile}, {@linkcode A.wavAudioFile a:wavAudioFile}, {@linkcode P.custDataLst p:custDataLst}, {@linkcode P.extLst p:extLst}, {@linkcode P.ph p:ph}
   */
  public static readonly nvPr: XName = P14.p14.getName('nvPr');

  /**
   * Represents the `p14:pan` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly pan: XName = P14.p14.getName('pan');

  /**
   * Represents the `p14:pauseEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly pauseEvt: XName = P14.p14.getName('pauseEvt');

  /**
   * Represents the `p14:playEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly playEvt: XName = P14.p14.getName('playEvt');

  /**
   * Represents the `p14:presetBounceEnd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn p:cTn}
   */
  public static readonly presetBounceEnd: XName = P14.p14.getName('presetBounceEnd');

  /**
   * Represents the `p14:prism` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly prism: XName = P14.p14.getName('prism');

  /**
   * Represents the `p14:resumeEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly resumeEvt: XName = P14.p14.getName('resumeEvt');

  /**
   * Represents the `p14:reveal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly reveal: XName = P14.p14.getName('reveal');

  /**
   * Represents the `p14:ripple` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly ripple: XName = P14.p14.getName('ripple');

  /**
   * Represents the `p14:section` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectionLst p14:sectionLst}, {@linkcode sectionPr p14:sectionPr}
   * - child XML elements: {@linkcode extLst p14:extLst}, {@linkcode sldIdLst p14:sldIdLst}
   */
  public static readonly section: XName = P14.p14.getName('section');

  /**
   * Represents the `p14:sectionLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode section p14:section}
   */
  public static readonly sectionLst: XName = P14.p14.getName('sectionLst');

  /**
   * Represents the `p14:sectionPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode section p14:section}
   */
  public static readonly sectionPr: XName = P14.p14.getName('sectionPr');

  /**
   * Represents the `p14:seekEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly seekEvt: XName = P14.p14.getName('seekEvt');

  /**
   * Represents the `p14:showEvtLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   * - child XML elements: {@linkcode nullEvt p14:nullEvt}, {@linkcode pauseEvt p14:pauseEvt}, {@linkcode playEvt p14:playEvt}, {@linkcode resumeEvt p14:resumeEvt}, {@linkcode seekEvt p14:seekEvt}, {@linkcode stopEvt p14:stopEvt}, {@linkcode triggerEvt p14:triggerEvt}
   */
  public static readonly showEvtLst: XName = P14.p14.getName('showEvtLst');

  /**
   * Represents the `p14:showMediaCtrls` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.ext p:ext}
   */
  public static readonly showMediaCtrls: XName = P14.p14.getName('showMediaCtrls');

  /**
   * Represents the `p14:shred` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly shred: XName = P14.p14.getName('shred');

  /**
   * Represents the `p14:sldId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldIdLst p14:sldIdLst}
   */
  public static readonly sldId: XName = P14.p14.getName('sldId');

  /**
   * Represents the `p14:sldIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode section p14:section}
   * - child XML elements: {@linkcode sldId p14:sldId}
   */
  public static readonly sldIdLst: XName = P14.p14.getName('sldIdLst');

  /**
   * Represents the `p14:stopEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly stopEvt: XName = P14.p14.getName('stopEvt');

  /**
   * Represents the `p14:switch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly switch: XName = P14.p14.getName('switch');

  /**
   * Represents the `p14:tracePt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tracePtLst p14:tracePtLst}
   */
  public static readonly tracePt: XName = P14.p14.getName('tracePt');

  /**
   * Represents the `p14:tracePtLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode laserTraceLst p14:laserTraceLst}
   * - child XML elements: {@linkcode tracePt p14:tracePt}
   */
  public static readonly tracePtLst: XName = P14.p14.getName('tracePtLst');

  /**
   * Represents the `p14:triggerEvt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showEvtLst p14:showEvtLst}
   */
  public static readonly triggerEvt: XName = P14.p14.getName('triggerEvt');

  /**
   * Represents the `p14:trim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode media p14:media}
   */
  public static readonly trim: XName = P14.p14.getName('trim');

  /**
   * Represents the `p14:vortex` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly vortex: XName = P14.p14.getName('vortex');

  /**
   * Represents the `p14:warp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly warp: XName = P14.p14.getName('warp');

  /**
   * Represents the `p14:wheelReverse` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly wheelReverse: XName = P14.p14.getName('wheelReverse');

  /**
   * Represents the `p14:window` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.transition p:transition}
   */
  public static readonly window: XName = P14.p14.getName('window');

  /**
   * Represents the `p14:xfrm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode P.contentPart p:contentPart}
   * - child XML elements: {@linkcode A.ext a:ext}, {@linkcode A.off a:off}
   */
  public static readonly xfrm: XName = P14.p14.getName('xfrm');
}
