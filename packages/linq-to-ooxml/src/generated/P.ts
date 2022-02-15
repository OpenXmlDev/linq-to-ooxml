/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"` namespace.
 */
export class P {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `p` prefix.
   */
  public static readonly p: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/presentationml/2006/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('p'), P.p.namespaceName);
  }

  /**
   * Represents the `p:anim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cBhvr p:cBhvr}, {@linkcode tavLst p:tavLst}
   * - XML attributes: {@linkcode P14.bounceEnd p14:bounceEnd}
   */
  public static readonly anim: XName = P.p.getName('anim');

  /**
   * Represents the `p:animClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode by p:by}, {@linkcode cBhvr p:cBhvr}, {@linkcode from p:from}, {@linkcode to p:to}
   */
  public static readonly animClr: XName = P.p.getName('animClr');

  /**
   * Represents the `p:animEffect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cBhvr p:cBhvr}, {@linkcode progress p:progress}
   */
  public static readonly animEffect: XName = P.p.getName('animEffect');

  /**
   * Represents the `p:animMotion` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode by p:by}, {@linkcode cBhvr p:cBhvr}, {@linkcode from p:from}, {@linkcode rCtr p:rCtr}, {@linkcode to p:to}
   * - XML attributes: {@linkcode P14.bounceEnd p14:bounceEnd}
   */
  public static readonly animMotion: XName = P.p.getName('animMotion');

  /**
   * Represents the `p:animRot` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cBhvr p:cBhvr}
   * - XML attributes: {@linkcode P14.bounceEnd p14:bounceEnd}
   */
  public static readonly animRot: XName = P.p.getName('animRot');

  /**
   * Represents the `p:animScale` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode by p:by}, {@linkcode cBhvr p:cBhvr}, {@linkcode from p:from}, {@linkcode to p:to}
   * - XML attributes: {@linkcode P14.bounceEnd p14:bounceEnd}
   */
  public static readonly animScale: XName = P.p.getName('animScale');

  /**
   * Represents the `p:attrName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode attrNameLst p:attrNameLst}
   */
  public static readonly attrName: XName = P.p.getName('attrName');

  /**
   * Represents the `p:attrNameLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cBhvr p:cBhvr}
   * - child XML elements: {@linkcode attrName p:attrName}
   */
  public static readonly attrNameLst: XName = P.p.getName('attrNameLst');

  /**
   * Represents the `p:audio` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cMediaNode p:cMediaNode}
   */
  public static readonly audio: XName = P.p.getName('audio');

  /**
   * Represents the `p:bg` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSld p:cSld}, {@linkcode spTgt p:spTgt}
   * - child XML elements: {@linkcode bgPr p:bgPr}, {@linkcode bgRef p:bgRef}
   */
  public static readonly bg: XName = P.p.getName('bg');

  /**
   * Represents the `p:bgPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bg p:bg}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.solidFill a:solidFill}, {@linkcode extLst p:extLst}
   */
  public static readonly bgPr: XName = P.p.getName('bgPr');

  /**
   * Represents the `p:bgRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bg p:bg}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly bgRef: XName = P.p.getName('bgRef');

  /**
   * Represents the `p:bldAsOne` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldGraphic p:bldGraphic}
   */
  public static readonly bldAsOne: XName = P.p.getName('bldAsOne');

  /**
   * Represents the `p:bldDgm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldLst p:bldLst}
   */
  public static readonly bldDgm: XName = P.p.getName('bldDgm');

  /**
   * Represents the `p:bldGraphic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldLst p:bldLst}
   * - child XML elements: {@linkcode bldAsOne p:bldAsOne}, {@linkcode bldSub p:bldSub}
   */
  public static readonly bldGraphic: XName = P.p.getName('bldGraphic');

  /**
   * Represents the `p:bldLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timing p:timing}
   * - child XML elements: {@linkcode bldDgm p:bldDgm}, {@linkcode bldGraphic p:bldGraphic}, {@linkcode bldOleChart p:bldOleChart}, {@linkcode bldP p:bldP}
   */
  public static readonly bldLst: XName = P.p.getName('bldLst');

  /**
   * Represents the `p:bldOleChart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldLst p:bldLst}
   */
  public static readonly bldOleChart: XName = P.p.getName('bldOleChart');

  /**
   * Represents the `p:bldP` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldLst p:bldLst}
   * - child XML elements: {@linkcode tmplLst p:tmplLst}
   */
  public static readonly bldP: XName = P.p.getName('bldP');

  /**
   * Represents the `p:bldSub` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldGraphic p:bldGraphic}
   * - child XML elements: {@linkcode A.bldChart a:bldChart}, {@linkcode A.bldDgm a:bldDgm}
   */
  public static readonly bldSub: XName = P.p.getName('bldSub');

  /**
   * Represents the `p:blinds` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly blinds: XName = P.p.getName('blinds');

  /**
   * Represents the `p:blipFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pic p:pic}
   * - child XML elements: {@linkcode A.blip a:blip}, {@linkcode A.srcRect a:srcRect}, {@linkcode A.stretch a:stretch}, {@linkcode A.tile a:tile}
   */
  public static readonly blipFill: XName = P.p.getName('blipFill');

  /**
   * Represents the `p:bodyStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txStyles p:txStyles}
   * - child XML elements: {@linkcode A.defPPr a:defPPr}, {@linkcode A.extLst a:extLst}, {@linkcode A.lvl1pPr a:lvl1pPr}, {@linkcode A.lvl2pPr a:lvl2pPr}, {@linkcode A.lvl3pPr a:lvl3pPr}, {@linkcode A.lvl4pPr a:lvl4pPr}, {@linkcode A.lvl5pPr a:lvl5pPr}, {@linkcode A.lvl6pPr a:lvl6pPr}, {@linkcode A.lvl7pPr a:lvl7pPr}, {@linkcode A.lvl8pPr a:lvl8pPr}, {@linkcode A.lvl9pPr a:lvl9pPr}
   */
  public static readonly bodyStyle: XName = P.p.getName('bodyStyle');

  /**
   * Represents the `p:bold` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFont p:embeddedFont}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly bold: XName = P.p.getName('bold');

  /**
   * Represents the `p:boldItalic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFont p:embeddedFont}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly boldItalic: XName = P.p.getName('boldItalic');

  /**
   * Represents the `p:boolVal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode to p:to}, {@linkcode val p:val}
   */
  public static readonly boolVal: XName = P.p.getName('boolVal');

  /**
   * Represents the `p:browse` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showPr p:showPr}
   */
  public static readonly browse: XName = P.p.getName('browse');

  /**
   * Represents the `p:by` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode animClr p:animClr}, {@linkcode animMotion p:animMotion}, {@linkcode animScale p:animScale}
   * - child XML elements: {@linkcode hsl p:hsl}, {@linkcode rgb p:rgb}
   */
  public static readonly by: XName = P.p.getName('by');

  /**
   * Represents the `p:cBhvr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anim p:anim}, {@linkcode animClr p:animClr}, {@linkcode animEffect p:animEffect}, {@linkcode animMotion p:animMotion}, {@linkcode animRot p:animRot}, {@linkcode animScale p:animScale}, {@linkcode cmd p:cmd}, {@linkcode set p:set}
   * - child XML elements: {@linkcode attrNameLst p:attrNameLst}, {@linkcode cTn p:cTn}, {@linkcode tgtEl p:tgtEl}
   */
  public static readonly cBhvr: XName = P.p.getName('cBhvr');

  /**
   * Represents the `p:charRg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txEl p:txEl}
   */
  public static readonly charRg: XName = P.p.getName('charRg');

  /**
   * Represents the `p:checker` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly checker: XName = P.p.getName('checker');

  /**
   * Represents the `p:childTnLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode anim p:anim}, {@linkcode animClr p:animClr}, {@linkcode animEffect p:animEffect}, {@linkcode animMotion p:animMotion}, {@linkcode animRot p:animRot}, {@linkcode animScale p:animScale}, {@linkcode audio p:audio}, {@linkcode cmd p:cmd}, {@linkcode excl p:excl}, {@linkcode par p:par}, {@linkcode seq p:seq}, {@linkcode set p:set}, {@linkcode video p:video}
   */
  public static readonly childTnLst: XName = P.p.getName('childTnLst');

  /**
   * Represents the `p:circle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly circle: XName = P.p.getName('circle');

  /**
   * Represents the `p:clrMap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode handoutMaster p:handoutMaster}, {@linkcode notesMaster p:notesMaster}, {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode A.extLst a:extLst}
   */
  public static readonly clrMap: XName = P.p.getName('clrMap');

  /**
   * Represents the `p:clrMapOvr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode notes p:notes}, {@linkcode sld p:sld}, {@linkcode sldLayout p:sldLayout}
   * - child XML elements: {@linkcode A.masterClrMapping a:masterClrMapping}, {@linkcode A.overrideClrMapping a:overrideClrMapping}
   */
  public static readonly clrMapOvr: XName = P.p.getName('clrMapOvr');

  /**
   * Represents the `p:clrMru` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentationPr p:presentationPr}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly clrMru: XName = P.p.getName('clrMru');

  /**
   * Represents the `p:clrVal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode to p:to}, {@linkcode val p:val}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly clrVal: XName = P.p.getName('clrVal');

  /**
   * Represents the `p:cm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cmLst p:cmLst}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode pos p:pos}, {@linkcode text p:text}
   */
  public static readonly cm: XName = P.p.getName('cm');

  /**
   * Represents the `p:cmAuthor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cmAuthorLst p:cmAuthorLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly cmAuthor: XName = P.p.getName('cmAuthor');

  /**
   * Represents the `p:cmAuthorLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode cmAuthor p:cmAuthor}
   */
  public static readonly cmAuthorLst: XName = P.p.getName('cmAuthorLst');

  /**
   * Represents the `p:cmd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cBhvr p:cBhvr}
   */
  public static readonly cmd: XName = P.p.getName('cmd');

  /**
   * Represents the `p:cMediaNode` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode audio p:audio}, {@linkcode video p:video}
   * - child XML elements: {@linkcode cTn p:cTn}, {@linkcode tgtEl p:tgtEl}
   */
  public static readonly cMediaNode: XName = P.p.getName('cMediaNode');

  /**
   * Represents the `p:cmLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode cm p:cm}
   */
  public static readonly cmLst: XName = P.p.getName('cmLst');

  /**
   * Represents the `p:cNvCxnSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvCxnSpPr p:nvCxnSpPr}
   * - child XML elements: {@linkcode A.cxnSpLocks a:cxnSpLocks}, {@linkcode A.endCxn a:endCxn}, {@linkcode A.extLst a:extLst}, {@linkcode A.stCxn a:stCxn}
   */
  public static readonly cNvCxnSpPr: XName = P.p.getName('cNvCxnSpPr');

  /**
   * Represents the `p:cNvGraphicFramePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvGraphicFramePr p:nvGraphicFramePr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.graphicFrameLocks a:graphicFrameLocks}
   */
  public static readonly cNvGraphicFramePr: XName = P.p.getName('cNvGraphicFramePr');

  /**
   * Represents the `p:cNvGrpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvGrpSpPr p:nvGrpSpPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.grpSpLocks a:grpSpLocks}
   */
  public static readonly cNvGrpSpPr: XName = P.p.getName('cNvGrpSpPr');

  /**
   * Represents the `p:cNvPicPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvPicPr p:nvPicPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.picLocks a:picLocks}
   */
  public static readonly cNvPicPr: XName = P.p.getName('cNvPicPr');

  /**
   * Represents the `p:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvCxnSpPr p:nvCxnSpPr}, {@linkcode nvGraphicFramePr p:nvGraphicFramePr}, {@linkcode nvGrpSpPr p:nvGrpSpPr}, {@linkcode nvPicPr p:nvPicPr}, {@linkcode nvSpPr p:nvSpPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = P.p.getName('cNvPr');

  /**
   * Represents the `p:cNvSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvSpPr p:nvSpPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.spLocks a:spLocks}
   */
  public static readonly cNvSpPr: XName = P.p.getName('cNvSpPr');

  /**
   * Represents the `p:comb` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly comb: XName = P.p.getName('comb');

  /**
   * Represents the `p:cond` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endCondLst p:endCondLst}, {@linkcode nextCondLst p:nextCondLst}, {@linkcode prevCondLst p:prevCondLst}, {@linkcode stCondLst p:stCondLst}
   * - child XML elements: {@linkcode rtn p:rtn}, {@linkcode tgtEl p:tgtEl}, {@linkcode tn p:tn}
   */
  public static readonly cond: XName = P.p.getName('cond');

  /**
   * Represents the `p:contentPart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode P14.extLst p14:extLst}, {@linkcode P14.nvContentPartPr p14:nvContentPartPr}, {@linkcode P14.xfrm p14:xfrm}
   * - XML attributes: {@linkcode P14.bwMode p14:bwMode}, {@linkcode R.id r:id}
   */
  public static readonly contentPart: XName = P.p.getName('contentPart');

  /**
   * Represents the `p:control` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode controls p:controls}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode pic p:pic}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly control: XName = P.p.getName('control');

  /**
   * Represents the `p:controls` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSld p:cSld}
   * - child XML elements: {@linkcode control p:control}
   */
  public static readonly controls: XName = P.p.getName('controls');

  /**
   * Represents the `p:cover` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly cover: XName = P.p.getName('cover');

  /**
   * Represents the `p:cSld` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode handoutMaster p:handoutMaster}, {@linkcode notes p:notes}, {@linkcode notesMaster p:notesMaster}, {@linkcode sld p:sld}, {@linkcode sldLayout p:sldLayout}, {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode bg p:bg}, {@linkcode controls p:controls}, {@linkcode custDataLst p:custDataLst}, {@linkcode extLst p:extLst}, {@linkcode spTree p:spTree}
   */
  public static readonly cSld: XName = P.p.getName('cSld');

  /**
   * Represents the `p:cSldViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode notesViewPr p:notesViewPr}, {@linkcode slideViewPr p:slideViewPr}
   * - child XML elements: {@linkcode cViewPr p:cViewPr}, {@linkcode guideLst p:guideLst}
   */
  public static readonly cSldViewPr: XName = P.p.getName('cSldViewPr');

  /**
   * Represents the `p:cTn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cBhvr p:cBhvr}, {@linkcode cMediaNode p:cMediaNode}, {@linkcode excl p:excl}, {@linkcode par p:par}, {@linkcode seq p:seq}
   * - child XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode endCondLst p:endCondLst}, {@linkcode endSync p:endSync}, {@linkcode iterate p:iterate}, {@linkcode stCondLst p:stCondLst}, {@linkcode subTnLst p:subTnLst}
   * - XML attributes: {@linkcode P14.presetBounceEnd p14:presetBounceEnd}
   */
  public static readonly cTn: XName = P.p.getName('cTn');

  /**
   * Represents the `p:custData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custDataLst p:custDataLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly custData: XName = P.p.getName('custData');

  /**
   * Represents the `p:custDataLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSld p:cSld}, {@linkcode nvPr p:nvPr}, {@linkcode presentation p:presentation}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode custData p:custData}, {@linkcode tags p:tags}
   */
  public static readonly custDataLst: XName = P.p.getName('custDataLst');

  /**
   * Represents the `p:custShow` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custShowLst p:custShowLst}, {@linkcode htmlPubPr p:htmlPubPr}, {@linkcode showPr p:showPr}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode sldLst p:sldLst}
   */
  public static readonly custShow: XName = P.p.getName('custShow');

  /**
   * Represents the `p:custShowLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode custShow p:custShow}
   */
  public static readonly custShowLst: XName = P.p.getName('custShowLst');

  /**
   * Represents the `p:cut` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly cut: XName = P.p.getName('cut');

  /**
   * Represents the `p:cViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSldViewPr p:cSldViewPr}, {@linkcode notesTextViewPr p:notesTextViewPr}, {@linkcode outlineViewPr p:outlineViewPr}, {@linkcode sorterViewPr p:sorterViewPr}
   * - child XML elements: {@linkcode origin p:origin}, {@linkcode scale p:scale}
   */
  public static readonly cViewPr: XName = P.p.getName('cViewPr');

  /**
   * Represents the `p:cxnSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode nvCxnSpPr p:nvCxnSpPr}, {@linkcode spPr p:spPr}, {@linkcode style p:style}
   */
  public static readonly cxnSp: XName = P.p.getName('cxnSp');

  /**
   * Represents the `p:defaultTextStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode A.defPPr a:defPPr}, {@linkcode A.extLst a:extLst}, {@linkcode A.lvl1pPr a:lvl1pPr}, {@linkcode A.lvl2pPr a:lvl2pPr}, {@linkcode A.lvl3pPr a:lvl3pPr}, {@linkcode A.lvl4pPr a:lvl4pPr}, {@linkcode A.lvl5pPr a:lvl5pPr}, {@linkcode A.lvl6pPr a:lvl6pPr}, {@linkcode A.lvl7pPr a:lvl7pPr}, {@linkcode A.lvl8pPr a:lvl8pPr}, {@linkcode A.lvl9pPr a:lvl9pPr}
   */
  public static readonly defaultTextStyle: XName = P.p.getName('defaultTextStyle');

  /**
   * Represents the `p:diamond` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly diamond: XName = P.p.getName('diamond');

  /**
   * Represents the `p:dissolve` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly dissolve: XName = P.p.getName('dissolve');

  /**
   * Represents the `p:embed` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleObj p:oleObj}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly embed: XName = P.p.getName('embed');

  /**
   * Represents the `p:embeddedFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFontLst p:embeddedFontLst}
   * - child XML elements: {@linkcode bold p:bold}, {@linkcode boldItalic p:boldItalic}, {@linkcode font p:font}, {@linkcode italic p:italic}, {@linkcode regular p:regular}
   */
  public static readonly embeddedFont: XName = P.p.getName('embeddedFont');

  /**
   * Represents the `p:embeddedFontLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode embeddedFont p:embeddedFont}
   */
  public static readonly embeddedFontLst: XName = P.p.getName('embeddedFontLst');

  /**
   * Represents the `p:endCondLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode cond p:cond}
   */
  public static readonly endCondLst: XName = P.p.getName('endCondLst');

  /**
   * Represents the `p:endSnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sndAc p:sndAc}
   */
  public static readonly endSnd: XName = P.p.getName('endSnd');

  /**
   * Represents the `p:endSync` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode rtn p:rtn}, {@linkcode tgtEl p:tgtEl}, {@linkcode tn p:tn}
   */
  public static readonly endSync: XName = P.p.getName('endSync');

  /**
   * Represents the `p:excl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cTn p:cTn}
   */
  public static readonly excl: XName = P.p.getName('excl');

  /**
   * Represents the `p:ext` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extLst p:extLst}, {@linkcode P14.extLst p14:extLst}, {@linkcode P15.extLst p15:extLst}
   * - child XML elements: {@linkcode A14.m a14:m}, {@linkcode P14.browseMode p14:browseMode}, {@linkcode P14.creationId p14:creationId}, {@linkcode P14.defaultImageDpi p14:defaultImageDpi}, {@linkcode P14.discardImageEditData p14:discardImageEditData}, {@linkcode P14.laserClr p14:laserClr}, {@linkcode P14.laserTraceLst p14:laserTraceLst}, {@linkcode P14.media p14:media}, {@linkcode P14.modId p14:modId}, {@linkcode P14.sectionLst p14:sectionLst}, {@linkcode P14.sectionPr p14:sectionPr}, {@linkcode P14.showEvtLst p14:showEvtLst}, {@linkcode P14.showMediaCtrls p14:showMediaCtrls}, {@linkcode P15.chartTrackingRefBased p15:chartTrackingRefBased}, {@linkcode P15.notesGuideLst p15:notesGuideLst}, {@linkcode P15.presenceInfo p15:presenceInfo}, {@linkcode P15.sldGuideLst p15:sldGuideLst}, {@linkcode P15.threadingInfo p15:threadingInfo}
   */
  public static readonly ext: XName = P.p.getName('ext');

  /**
   * Represents the `p:extLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bgPr p:bgPr}, {@linkcode cm p:cm}, {@linkcode cmAuthor p:cmAuthor}, {@linkcode control p:control}, {@linkcode cSld p:cSld}, {@linkcode custShow p:custShow}, {@linkcode cxnSp p:cxnSp}, {@linkcode embed p:embed}, {@linkcode graphicFrame p:graphicFrame}, {@linkcode grpSp p:grpSp}, {@linkcode handoutMaster p:handoutMaster}, {@linkcode handoutMasterId p:handoutMasterId}, {@linkcode hf p:hf}, {@linkcode htmlPubPr p:htmlPubPr}, {@linkcode link p:link}, {@linkcode normalViewPr p:normalViewPr}, {@linkcode notes p:notes}, {@linkcode notesMaster p:notesMaster}, {@linkcode notesMasterId p:notesMasterId}, {@linkcode notesTextViewPr p:notesTextViewPr}, {@linkcode notesViewPr p:notesViewPr}, {@linkcode nvPr p:nvPr}, {@linkcode outlineViewPr p:outlineViewPr}, {@linkcode ph p:ph}, {@linkcode photoAlbum p:photoAlbum}, {@linkcode pic p:pic}, {@linkcode presentation p:presentation}, {@linkcode presentationPr p:presentationPr}, {@linkcode prnPr p:prnPr}, {@linkcode showPr p:showPr}, {@linkcode sld p:sld}, {@linkcode sldId p:sldId}, {@linkcode sldLayout p:sldLayout}, {@linkcode sldLayoutId p:sldLayoutId}, {@linkcode sldMaster p:sldMaster}, {@linkcode sldMasterId p:sldMasterId}, {@linkcode sldSyncPr p:sldSyncPr}, {@linkcode slideViewPr p:slideViewPr}, {@linkcode sorterViewPr p:sorterViewPr}, {@linkcode sp p:sp}, {@linkcode spTree p:spTree}, {@linkcode timing p:timing}, {@linkcode transition p:transition}, {@linkcode txStyles p:txStyles}, {@linkcode viewPr p:viewPr}, {@linkcode webPr p:webPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode ext p:ext}
   */
  public static readonly extLst: XName = P.p.getName('extLst');

  /**
   * Represents the `p:fade` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly fade: XName = P.p.getName('fade');

  /**
   * Represents the `p:fltVal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode progress p:progress}, {@linkcode to p:to}, {@linkcode val p:val}
   */
  public static readonly fltVal: XName = P.p.getName('fltVal');

  /**
   * Represents the `p:font` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFont p:embeddedFont}
   */
  public static readonly font: XName = P.p.getName('font');

  /**
   * Represents the `p:from` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode animClr p:animClr}, {@linkcode animMotion p:animMotion}, {@linkcode animScale p:animScale}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly from: XName = P.p.getName('from');

  /**
   * Represents the `p:graphicEl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spTgt p:spTgt}
   * - child XML elements: {@linkcode A.chart a:chart}, {@linkcode A.dgm a:dgm}
   */
  public static readonly graphicEl: XName = P.p.getName('graphicEl');

  /**
   * Represents the `p:graphicFrame` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode A.graphic a:graphic}, {@linkcode extLst p:extLst}, {@linkcode nvGraphicFramePr p:nvGraphicFramePr}, {@linkcode xfrm p:xfrm}
   */
  public static readonly graphicFrame: XName = P.p.getName('graphicFrame');

  /**
   * Represents the `p:gridSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   */
  public static readonly gridSpacing: XName = P.p.getName('gridSpacing');

  /**
   * Represents the `p:grpSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode contentPart p:contentPart}, {@linkcode cxnSp p:cxnSp}, {@linkcode extLst p:extLst}, {@linkcode graphicFrame p:graphicFrame}, {@linkcode grpSp p:grpSp}, {@linkcode grpSpPr p:grpSpPr}, {@linkcode nvGrpSpPr p:nvGrpSpPr}, {@linkcode pic p:pic}, {@linkcode sp p:sp}
   */
  public static readonly grpSp: XName = P.p.getName('grpSp');

  /**
   * Represents the `p:grpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.extLst a:extLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.scene3d a:scene3d}, {@linkcode A.solidFill a:solidFill}, {@linkcode A.xfrm a:xfrm}
   */
  public static readonly grpSpPr: XName = P.p.getName('grpSpPr');

  /**
   * Represents the `p:guide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode guideLst p:guideLst}
   */
  public static readonly guide: XName = P.p.getName('guide');

  /**
   * Represents the `p:guideLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSldViewPr p:cSldViewPr}
   * - child XML elements: {@linkcode guide p:guide}
   */
  public static readonly guideLst: XName = P.p.getName('guideLst');

  /**
   * Represents the `p:handoutMaster` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMap p:clrMap}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}, {@linkcode hf p:hf}
   */
  public static readonly handoutMaster: XName = P.p.getName('handoutMaster');

  /**
   * Represents the `p:handoutMasterId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode handoutMasterIdLst p:handoutMasterIdLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly handoutMasterId: XName = P.p.getName('handoutMasterId');

  /**
   * Represents the `p:handoutMasterIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode handoutMasterId p:handoutMasterId}
   */
  public static readonly handoutMasterIdLst: XName = P.p.getName('handoutMasterIdLst');

  /**
   * Represents the `p:hf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode handoutMaster p:handoutMaster}, {@linkcode notesMaster p:notesMaster}, {@linkcode sldLayout p:sldLayout}, {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly hf: XName = P.p.getName('hf');

  /**
   * Represents the `p:hsl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode by p:by}
   */
  public static readonly hsl: XName = P.p.getName('hsl');

  /**
   * Represents the `p:htmlPubPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentationPr p:presentationPr}
   * - child XML elements: {@linkcode custShow p:custShow}, {@linkcode extLst p:extLst}, {@linkcode sldAll p:sldAll}, {@linkcode sldRg p:sldRg}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly htmlPubPr: XName = P.p.getName('htmlPubPr');

  /**
   * Represents the `p:inkTgt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tgtEl p:tgtEl}
   */
  public static readonly inkTgt: XName = P.p.getName('inkTgt');

  /**
   * Represents the `p:intVal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode to p:to}, {@linkcode val p:val}
   */
  public static readonly intVal: XName = P.p.getName('intVal');

  /**
   * Represents the `p:italic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFont p:embeddedFont}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly italic: XName = P.p.getName('italic');

  /**
   * Represents the `p:iterate` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode tmAbs p:tmAbs}, {@linkcode tmPct p:tmPct}
   */
  public static readonly iterate: XName = P.p.getName('iterate');

  /**
   * Represents the `p:kinsoku` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   */
  public static readonly kinsoku: XName = P.p.getName('kinsoku');

  /**
   * Represents the `p:kiosk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showPr p:showPr}
   */
  public static readonly kiosk: XName = P.p.getName('kiosk');

  /**
   * Represents the `p:link` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleObj p:oleObj}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly link: XName = P.p.getName('link');

  /**
   * Represents the `p:modifyVerifier` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   */
  public static readonly modifyVerifier: XName = P.p.getName('modifyVerifier');

  /**
   * Represents the `p:newsflash` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly newsflash: XName = P.p.getName('newsflash');

  /**
   * Represents the `p:nextCondLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode seq p:seq}
   * - child XML elements: {@linkcode cond p:cond}
   */
  public static readonly nextCondLst: XName = P.p.getName('nextCondLst');

  /**
   * Represents the `p:normalViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode restoredLeft p:restoredLeft}, {@linkcode restoredTop p:restoredTop}
   */
  public static readonly normalViewPr: XName = P.p.getName('normalViewPr');

  /**
   * Represents the `p:notes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMapOvr p:clrMapOvr}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}
   */
  public static readonly notes: XName = P.p.getName('notes');

  /**
   * Represents the `p:notesMaster` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMap p:clrMap}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}, {@linkcode hf p:hf}, {@linkcode notesStyle p:notesStyle}
   */
  public static readonly notesMaster: XName = P.p.getName('notesMaster');

  /**
   * Represents the `p:notesMasterId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode notesMasterIdLst p:notesMasterIdLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly notesMasterId: XName = P.p.getName('notesMasterId');

  /**
   * Represents the `p:notesMasterIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode notesMasterId p:notesMasterId}
   */
  public static readonly notesMasterIdLst: XName = P.p.getName('notesMasterIdLst');

  /**
   * Represents the `p:notesStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode notesMaster p:notesMaster}
   * - child XML elements: {@linkcode A.defPPr a:defPPr}, {@linkcode A.extLst a:extLst}, {@linkcode A.lvl1pPr a:lvl1pPr}, {@linkcode A.lvl2pPr a:lvl2pPr}, {@linkcode A.lvl3pPr a:lvl3pPr}, {@linkcode A.lvl4pPr a:lvl4pPr}, {@linkcode A.lvl5pPr a:lvl5pPr}, {@linkcode A.lvl6pPr a:lvl6pPr}, {@linkcode A.lvl7pPr a:lvl7pPr}, {@linkcode A.lvl8pPr a:lvl8pPr}, {@linkcode A.lvl9pPr a:lvl9pPr}
   */
  public static readonly notesStyle: XName = P.p.getName('notesStyle');

  /**
   * Represents the `p:notesSz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   */
  public static readonly notesSz: XName = P.p.getName('notesSz');

  /**
   * Represents the `p:notesTextViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode cViewPr p:cViewPr}, {@linkcode extLst p:extLst}
   */
  public static readonly notesTextViewPr: XName = P.p.getName('notesTextViewPr');

  /**
   * Represents the `p:notesViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode cSldViewPr p:cSldViewPr}, {@linkcode extLst p:extLst}
   */
  public static readonly notesViewPr: XName = P.p.getName('notesViewPr');

  /**
   * Represents the `p:nvCxnSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp p:cxnSp}
   * - child XML elements: {@linkcode cNvCxnSpPr p:cNvCxnSpPr}, {@linkcode cNvPr p:cNvPr}, {@linkcode nvPr p:nvPr}
   */
  public static readonly nvCxnSpPr: XName = P.p.getName('nvCxnSpPr');

  /**
   * Represents the `p:nvGraphicFramePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicFrame p:graphicFrame}
   * - child XML elements: {@linkcode cNvGraphicFramePr p:cNvGraphicFramePr}, {@linkcode cNvPr p:cNvPr}, {@linkcode nvPr p:nvPr}
   */
  public static readonly nvGraphicFramePr: XName = P.p.getName('nvGraphicFramePr');

  /**
   * Represents the `p:nvGrpSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode cNvGrpSpPr p:cNvGrpSpPr}, {@linkcode cNvPr p:cNvPr}, {@linkcode nvPr p:nvPr}
   */
  public static readonly nvGrpSpPr: XName = P.p.getName('nvGrpSpPr');

  /**
   * Represents the `p:nvPicPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pic p:pic}
   * - child XML elements: {@linkcode cNvPicPr p:cNvPicPr}, {@linkcode cNvPr p:cNvPr}, {@linkcode nvPr p:nvPr}
   */
  public static readonly nvPicPr: XName = P.p.getName('nvPicPr');

  /**
   * Represents the `p:nvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvCxnSpPr p:nvCxnSpPr}, {@linkcode nvGraphicFramePr p:nvGraphicFramePr}, {@linkcode nvGrpSpPr p:nvGrpSpPr}, {@linkcode nvPicPr p:nvPicPr}, {@linkcode nvSpPr p:nvSpPr}
   * - child XML elements: {@linkcode A.audioCd a:audioCd}, {@linkcode A.audioFile a:audioFile}, {@linkcode A.quickTimeFile a:quickTimeFile}, {@linkcode A.videoFile a:videoFile}, {@linkcode A.wavAudioFile a:wavAudioFile}, {@linkcode custDataLst p:custDataLst}, {@linkcode extLst p:extLst}, {@linkcode ph p:ph}
   */
  public static readonly nvPr: XName = P.p.getName('nvPr');

  /**
   * Represents the `p:nvSpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp p:sp}
   * - child XML elements: {@linkcode cNvPr p:cNvPr}, {@linkcode cNvSpPr p:cNvSpPr}, {@linkcode nvPr p:nvPr}
   */
  public static readonly nvSpPr: XName = P.p.getName('nvSpPr');

  /**
   * Represents the `p:oleChartEl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spTgt p:spTgt}
   */
  public static readonly oleChartEl: XName = P.p.getName('oleChartEl');

  /**
   * Represents the `p:oleObj` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode embed p:embed}, {@linkcode link p:link}, {@linkcode pic p:pic}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly oleObj: XName = P.p.getName('oleObj');

  /**
   * Represents the `p:origin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cViewPr p:cViewPr}
   */
  public static readonly origin: XName = P.p.getName('origin');

  /**
   * Represents the `p:otherStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txStyles p:txStyles}
   * - child XML elements: {@linkcode A.defPPr a:defPPr}, {@linkcode A.extLst a:extLst}, {@linkcode A.lvl1pPr a:lvl1pPr}, {@linkcode A.lvl2pPr a:lvl2pPr}, {@linkcode A.lvl3pPr a:lvl3pPr}, {@linkcode A.lvl4pPr a:lvl4pPr}, {@linkcode A.lvl5pPr a:lvl5pPr}, {@linkcode A.lvl6pPr a:lvl6pPr}, {@linkcode A.lvl7pPr a:lvl7pPr}, {@linkcode A.lvl8pPr a:lvl8pPr}, {@linkcode A.lvl9pPr a:lvl9pPr}
   */
  public static readonly otherStyle: XName = P.p.getName('otherStyle');

  /**
   * Represents the `p:outlineViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode cViewPr p:cViewPr}, {@linkcode extLst p:extLst}, {@linkcode sldLst p:sldLst}
   */
  public static readonly outlineViewPr: XName = P.p.getName('outlineViewPr');

  /**
   * Represents the `p:par` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}, {@linkcode tnLst p:tnLst}
   * - child XML elements: {@linkcode cTn p:cTn}
   */
  public static readonly par: XName = P.p.getName('par');

  /**
   * Represents the `p:penClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showPr p:showPr}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}
   */
  public static readonly penClr: XName = P.p.getName('penClr');

  /**
   * Represents the `p:ph` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvPr p:nvPr}, {@linkcode P14.nvPr p14:nvPr}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly ph: XName = P.p.getName('ph');

  /**
   * Represents the `p:photoAlbum` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly photoAlbum: XName = P.p.getName('photoAlbum');

  /**
   * Represents the `p:pic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode control p:control}, {@linkcode grpSp p:grpSp}, {@linkcode oleObj p:oleObj}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode blipFill p:blipFill}, {@linkcode extLst p:extLst}, {@linkcode nvPicPr p:nvPicPr}, {@linkcode spPr p:spPr}, {@linkcode style p:style}
   */
  public static readonly pic: XName = P.p.getName('pic');

  /**
   * Represents the `p:plus` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly plus: XName = P.p.getName('plus');

  /**
   * Represents the `p:pos` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cm p:cm}
   */
  public static readonly pos: XName = P.p.getName('pos');

  /**
   * Represents the `p:present` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode showPr p:showPr}
   */
  public static readonly present: XName = P.p.getName('present');

  /**
   * Represents the `p:presentation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode custDataLst p:custDataLst}, {@linkcode custShowLst p:custShowLst}, {@linkcode defaultTextStyle p:defaultTextStyle}, {@linkcode embeddedFontLst p:embeddedFontLst}, {@linkcode extLst p:extLst}, {@linkcode handoutMasterIdLst p:handoutMasterIdLst}, {@linkcode kinsoku p:kinsoku}, {@linkcode modifyVerifier p:modifyVerifier}, {@linkcode notesMasterIdLst p:notesMasterIdLst}, {@linkcode notesSz p:notesSz}, {@linkcode photoAlbum p:photoAlbum}, {@linkcode sldIdLst p:sldIdLst}, {@linkcode sldMasterIdLst p:sldMasterIdLst}, {@linkcode sldSz p:sldSz}
   */
  public static readonly presentation: XName = P.p.getName('presentation');

  /**
   * Represents the `p:presentationPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMru p:clrMru}, {@linkcode extLst p:extLst}, {@linkcode htmlPubPr p:htmlPubPr}, {@linkcode prnPr p:prnPr}, {@linkcode showPr p:showPr}, {@linkcode webPr p:webPr}
   */
  public static readonly presentationPr: XName = P.p.getName('presentationPr');

  /**
   * Represents the `p:prevCondLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode seq p:seq}
   * - child XML elements: {@linkcode cond p:cond}
   */
  public static readonly prevCondLst: XName = P.p.getName('prevCondLst');

  /**
   * Represents the `p:pRg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txEl p:txEl}
   */
  public static readonly pRg: XName = P.p.getName('pRg');

  /**
   * Represents the `p:prnPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentationPr p:presentationPr}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly prnPr: XName = P.p.getName('prnPr');

  /**
   * Represents the `p:progress` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode animEffect p:animEffect}
   * - child XML elements: {@linkcode fltVal p:fltVal}
   */
  public static readonly progress: XName = P.p.getName('progress');

  /**
   * Represents the `p:pull` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly pull: XName = P.p.getName('pull');

  /**
   * Represents the `p:push` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly push: XName = P.p.getName('push');

  /**
   * Represents the `p:random` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly random: XName = P.p.getName('random');

  /**
   * Represents the `p:randomBar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly randomBar: XName = P.p.getName('randomBar');

  /**
   * Represents the `p:rCtr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode animMotion p:animMotion}
   */
  public static readonly rCtr: XName = P.p.getName('rCtr');

  /**
   * Represents the `p:regular` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode embeddedFont p:embeddedFont}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly regular: XName = P.p.getName('regular');

  /**
   * Represents the `p:restoredLeft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode normalViewPr p:normalViewPr}
   */
  public static readonly restoredLeft: XName = P.p.getName('restoredLeft');

  /**
   * Represents the `p:restoredTop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode normalViewPr p:normalViewPr}
   */
  public static readonly restoredTop: XName = P.p.getName('restoredTop');

  /**
   * Represents the `p:rgb` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode by p:by}
   */
  public static readonly rgb: XName = P.p.getName('rgb');

  /**
   * Represents the `p:rtn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cond p:cond}, {@linkcode endSync p:endSync}
   */
  public static readonly rtn: XName = P.p.getName('rtn');

  /**
   * Represents the `p:scale` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cViewPr p:cViewPr}
   * - child XML elements: {@linkcode A.sx a:sx}, {@linkcode A.sy a:sy}
   */
  public static readonly scale: XName = P.p.getName('scale');

  /**
   * Represents the `p:seq` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cTn p:cTn}, {@linkcode nextCondLst p:nextCondLst}, {@linkcode prevCondLst p:prevCondLst}
   */
  public static readonly seq: XName = P.p.getName('seq');

  /**
   * Represents the `p:set` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cBhvr p:cBhvr}, {@linkcode to p:to}
   */
  public static readonly set: XName = P.p.getName('set');

  /**
   * Represents the `p:showPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentationPr p:presentationPr}
   * - child XML elements: {@linkcode browse p:browse}, {@linkcode custShow p:custShow}, {@linkcode extLst p:extLst}, {@linkcode kiosk p:kiosk}, {@linkcode penClr p:penClr}, {@linkcode present p:present}, {@linkcode sldAll p:sldAll}, {@linkcode sldRg p:sldRg}
   */
  public static readonly showPr: XName = P.p.getName('showPr');

  /**
   * Represents the `p:sld` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode sldLst p:sldLst}
   * - child XML elements: {@linkcode clrMapOvr p:clrMapOvr}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}, {@linkcode timing p:timing}, {@linkcode transition p:transition}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sld: XName = P.p.getName('sld');

  /**
   * Represents the `p:sldAll` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode htmlPubPr p:htmlPubPr}, {@linkcode showPr p:showPr}
   */
  public static readonly sldAll: XName = P.p.getName('sldAll');

  /**
   * Represents the `p:sldId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldIdLst p:sldIdLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sldId: XName = P.p.getName('sldId');

  /**
   * Represents the `p:sldIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode sldId p:sldId}
   */
  public static readonly sldIdLst: XName = P.p.getName('sldIdLst');

  /**
   * Represents the `p:sldLayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMapOvr p:clrMapOvr}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}, {@linkcode hf p:hf}, {@linkcode timing p:timing}, {@linkcode transition p:transition}
   */
  public static readonly sldLayout: XName = P.p.getName('sldLayout');

  /**
   * Represents the `p:sldLayoutId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldLayoutIdLst p:sldLayoutIdLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sldLayoutId: XName = P.p.getName('sldLayoutId');

  /**
   * Represents the `p:sldLayoutIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode sldLayoutId p:sldLayoutId}
   */
  public static readonly sldLayoutIdLst: XName = P.p.getName('sldLayoutIdLst');

  /**
   * Represents the `p:sldLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custShow p:custShow}, {@linkcode outlineViewPr p:outlineViewPr}
   * - child XML elements: {@linkcode sld p:sld}
   */
  public static readonly sldLst: XName = P.p.getName('sldLst');

  /**
   * Represents the `p:sldMaster` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode clrMap p:clrMap}, {@linkcode cSld p:cSld}, {@linkcode extLst p:extLst}, {@linkcode hf p:hf}, {@linkcode sldLayoutIdLst p:sldLayoutIdLst}, {@linkcode timing p:timing}, {@linkcode transition p:transition}, {@linkcode txStyles p:txStyles}
   */
  public static readonly sldMaster: XName = P.p.getName('sldMaster');

  /**
   * Represents the `p:sldMasterId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldMasterIdLst p:sldMasterIdLst}
   * - child XML elements: {@linkcode extLst p:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sldMasterId: XName = P.p.getName('sldMasterId');

  /**
   * Represents the `p:sldMasterIdLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   * - child XML elements: {@linkcode sldMasterId p:sldMasterId}
   */
  public static readonly sldMasterIdLst: XName = P.p.getName('sldMasterIdLst');

  /**
   * Represents the `p:sldRg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode htmlPubPr p:htmlPubPr}, {@linkcode showPr p:showPr}
   */
  public static readonly sldRg: XName = P.p.getName('sldRg');

  /**
   * Represents the `p:sldSyncPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly sldSyncPr: XName = P.p.getName('sldSyncPr');

  /**
   * Represents the `p:sldSz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentation p:presentation}
   */
  public static readonly sldSz: XName = P.p.getName('sldSz');

  /**
   * Represents the `p:sldTgt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tgtEl p:tgtEl}
   */
  public static readonly sldTgt: XName = P.p.getName('sldTgt');

  /**
   * Represents the `p:slideViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode cSldViewPr p:cSldViewPr}, {@linkcode extLst p:extLst}
   */
  public static readonly slideViewPr: XName = P.p.getName('slideViewPr');

  /**
   * Represents the `p:snd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode stSnd p:stSnd}
   * - XML attributes: {@linkcode R.embed r:embed}
   */
  public static readonly snd: XName = P.p.getName('snd');

  /**
   * Represents the `p:sndAc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   * - child XML elements: {@linkcode endSnd p:endSnd}, {@linkcode stSnd p:stSnd}
   */
  public static readonly sndAc: XName = P.p.getName('sndAc');

  /**
   * Represents the `p:sndTgt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tgtEl p:tgtEl}
   * - XML attributes: {@linkcode R.embed r:embed}
   */
  public static readonly sndTgt: XName = P.p.getName('sndTgt');

  /**
   * Represents the `p:sorterViewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode viewPr p:viewPr}
   * - child XML elements: {@linkcode cViewPr p:cViewPr}, {@linkcode extLst p:extLst}
   */
  public static readonly sorterViewPr: XName = P.p.getName('sorterViewPr');

  /**
   * Represents the `p:sp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode grpSp p:grpSp}, {@linkcode spTree p:spTree}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode nvSpPr p:nvSpPr}, {@linkcode spPr p:spPr}, {@linkcode style p:style}, {@linkcode txBody p:txBody}
   */
  public static readonly sp: XName = P.p.getName('sp');

  /**
   * Represents the `p:split` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly split: XName = P.p.getName('split');

  /**
   * Represents the `p:spPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp p:cxnSp}, {@linkcode pic p:pic}, {@linkcode sp p:sp}
   * - child XML elements: {@linkcode A.blipFill a:blipFill}, {@linkcode A.custGeom a:custGeom}, {@linkcode A.effectDag a:effectDag}, {@linkcode A.effectLst a:effectLst}, {@linkcode A.extLst a:extLst}, {@linkcode A.gradFill a:gradFill}, {@linkcode A.grpFill a:grpFill}, {@linkcode A.ln a:ln}, {@linkcode A.noFill a:noFill}, {@linkcode A.pattFill a:pattFill}, {@linkcode A.prstGeom a:prstGeom}, {@linkcode A.scene3d a:scene3d}, {@linkcode A.solidFill a:solidFill}, {@linkcode A.sp3d a:sp3d}, {@linkcode A.xfrm a:xfrm}
   */
  public static readonly spPr: XName = P.p.getName('spPr');

  /**
   * Represents the `p:spTgt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tgtEl p:tgtEl}
   * - child XML elements: {@linkcode bg p:bg}, {@linkcode graphicEl p:graphicEl}, {@linkcode oleChartEl p:oleChartEl}, {@linkcode subSp p:subSp}, {@linkcode txEl p:txEl}
   */
  public static readonly spTgt: XName = P.p.getName('spTgt');

  /**
   * Represents the `p:spTree` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cSld p:cSld}
   * - child XML elements: {@linkcode contentPart p:contentPart}, {@linkcode cxnSp p:cxnSp}, {@linkcode extLst p:extLst}, {@linkcode graphicFrame p:graphicFrame}, {@linkcode grpSp p:grpSp}, {@linkcode grpSpPr p:grpSpPr}, {@linkcode nvGrpSpPr p:nvGrpSpPr}, {@linkcode pic p:pic}, {@linkcode sp p:sp}
   */
  public static readonly spTree: XName = P.p.getName('spTree');

  /**
   * Represents the `p:stCondLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode cond p:cond}
   */
  public static readonly stCondLst: XName = P.p.getName('stCondLst');

  /**
   * Represents the `p:strips` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly strips: XName = P.p.getName('strips');

  /**
   * Represents the `p:strVal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode to p:to}, {@linkcode val p:val}
   */
  public static readonly strVal: XName = P.p.getName('strVal');

  /**
   * Represents the `p:stSnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sndAc p:sndAc}
   * - child XML elements: {@linkcode snd p:snd}
   */
  public static readonly stSnd: XName = P.p.getName('stSnd');

  /**
   * Represents the `p:style` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cxnSp p:cxnSp}, {@linkcode pic p:pic}, {@linkcode sp p:sp}
   * - child XML elements: {@linkcode A.effectRef a:effectRef}, {@linkcode A.fillRef a:fillRef}, {@linkcode A.fontRef a:fontRef}, {@linkcode A.lnRef a:lnRef}
   */
  public static readonly style: XName = P.p.getName('style');

  /**
   * Represents the `p:subSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spTgt p:spTgt}
   */
  public static readonly subSp: XName = P.p.getName('subSp');

  /**
   * Represents the `p:subTnLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cTn p:cTn}
   * - child XML elements: {@linkcode anim p:anim}, {@linkcode animClr p:animClr}, {@linkcode animEffect p:animEffect}, {@linkcode animMotion p:animMotion}, {@linkcode animRot p:animRot}, {@linkcode animScale p:animScale}, {@linkcode audio p:audio}, {@linkcode cmd p:cmd}, {@linkcode excl p:excl}, {@linkcode par p:par}, {@linkcode seq p:seq}, {@linkcode set p:set}, {@linkcode video p:video}
   */
  public static readonly subTnLst: XName = P.p.getName('subTnLst');

  /**
   * Represents the `p:tag` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tagLst p:tagLst}
   */
  public static readonly tag: XName = P.p.getName('tag');

  /**
   * Represents the `p:tagLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode tag p:tag}
   */
  public static readonly tagLst: XName = P.p.getName('tagLst');

  /**
   * Represents the `p:tags` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode custDataLst p:custDataLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly tags: XName = P.p.getName('tags');

  /**
   * Represents the `p:tav` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tavLst p:tavLst}
   * - child XML elements: {@linkcode val p:val}
   */
  public static readonly tav: XName = P.p.getName('tav');

  /**
   * Represents the `p:tavLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anim p:anim}
   * - child XML elements: {@linkcode tav p:tav}
   */
  public static readonly tavLst: XName = P.p.getName('tavLst');

  /**
   * Represents the `p:text` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cm p:cm}
   */
  public static readonly text: XName = P.p.getName('text');

  /**
   * Represents the `p:tgtEl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cBhvr p:cBhvr}, {@linkcode cMediaNode p:cMediaNode}, {@linkcode cond p:cond}, {@linkcode endSync p:endSync}
   * - child XML elements: {@linkcode inkTgt p:inkTgt}, {@linkcode sldTgt p:sldTgt}, {@linkcode sndTgt p:sndTgt}, {@linkcode spTgt p:spTgt}, {@linkcode P14.bmkTgt p14:bmkTgt}
   */
  public static readonly tgtEl: XName = P.p.getName('tgtEl');

  /**
   * Represents the `p:timing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sld p:sld}, {@linkcode sldLayout p:sldLayout}, {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode bldLst p:bldLst}, {@linkcode extLst p:extLst}, {@linkcode tnLst p:tnLst}
   */
  public static readonly timing: XName = P.p.getName('timing');

  /**
   * Represents the `p:titleStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode txStyles p:txStyles}
   * - child XML elements: {@linkcode A.defPPr a:defPPr}, {@linkcode A.extLst a:extLst}, {@linkcode A.lvl1pPr a:lvl1pPr}, {@linkcode A.lvl2pPr a:lvl2pPr}, {@linkcode A.lvl3pPr a:lvl3pPr}, {@linkcode A.lvl4pPr a:lvl4pPr}, {@linkcode A.lvl5pPr a:lvl5pPr}, {@linkcode A.lvl6pPr a:lvl6pPr}, {@linkcode A.lvl7pPr a:lvl7pPr}, {@linkcode A.lvl8pPr a:lvl8pPr}, {@linkcode A.lvl9pPr a:lvl9pPr}
   */
  public static readonly titleStyle: XName = P.p.getName('titleStyle');

  /**
   * Represents the `p:tmAbs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode iterate p:iterate}
   */
  public static readonly tmAbs: XName = P.p.getName('tmAbs');

  /**
   * Represents the `p:tmPct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode iterate p:iterate}
   */
  public static readonly tmPct: XName = P.p.getName('tmPct');

  /**
   * Represents the `p:tmpl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tmplLst p:tmplLst}
   * - child XML elements: {@linkcode tnLst p:tnLst}
   */
  public static readonly tmpl: XName = P.p.getName('tmpl');

  /**
   * Represents the `p:tmplLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bldP p:bldP}
   * - child XML elements: {@linkcode tmpl p:tmpl}
   */
  public static readonly tmplLst: XName = P.p.getName('tmplLst');

  /**
   * Represents the `p:tn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cond p:cond}, {@linkcode endSync p:endSync}
   */
  public static readonly tn: XName = P.p.getName('tn');

  /**
   * Represents the `p:tnLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timing p:timing}, {@linkcode tmpl p:tmpl}
   * - child XML elements: {@linkcode par p:par}
   */
  public static readonly tnLst: XName = P.p.getName('tnLst');

  /**
   * Represents the `p:to` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode animClr p:animClr}, {@linkcode animMotion p:animMotion}, {@linkcode animScale p:animScale}, {@linkcode set p:set}
   * - child XML elements: {@linkcode A.hslClr a:hslClr}, {@linkcode A.prstClr a:prstClr}, {@linkcode A.schemeClr a:schemeClr}, {@linkcode A.scrgbClr a:scrgbClr}, {@linkcode A.srgbClr a:srgbClr}, {@linkcode A.sysClr a:sysClr}, {@linkcode boolVal p:boolVal}, {@linkcode clrVal p:clrVal}, {@linkcode fltVal p:fltVal}, {@linkcode intVal p:intVal}, {@linkcode strVal p:strVal}
   */
  public static readonly to: XName = P.p.getName('to');

  /**
   * Represents the `p:transition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sld p:sld}, {@linkcode sldLayout p:sldLayout}, {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode blinds p:blinds}, {@linkcode checker p:checker}, {@linkcode circle p:circle}, {@linkcode comb p:comb}, {@linkcode cover p:cover}, {@linkcode cut p:cut}, {@linkcode diamond p:diamond}, {@linkcode dissolve p:dissolve}, {@linkcode extLst p:extLst}, {@linkcode fade p:fade}, {@linkcode newsflash p:newsflash}, {@linkcode plus p:plus}, {@linkcode pull p:pull}, {@linkcode push p:push}, {@linkcode random p:random}, {@linkcode randomBar p:randomBar}, {@linkcode sndAc p:sndAc}, {@linkcode split p:split}, {@linkcode strips p:strips}, {@linkcode wedge p:wedge}, {@linkcode wheel p:wheel}, {@linkcode wipe p:wipe}, {@linkcode zoom p:zoom}, {@linkcode P14.conveyor p14:conveyor}, {@linkcode P14.doors p14:doors}, {@linkcode P14.ferris p14:ferris}, {@linkcode P14.flash p14:flash}, {@linkcode P14.flip p14:flip}, {@linkcode P14.flythrough p14:flythrough}, {@linkcode P14.gallery p14:gallery}, {@linkcode P14.glitter p14:glitter}, {@linkcode P14.honeycomb p14:honeycomb}, {@linkcode P14.pan p14:pan}, {@linkcode P14.prism p14:prism}, {@linkcode P14.reveal p14:reveal}, {@linkcode P14.ripple p14:ripple}, {@linkcode P14.shred p14:shred}, {@linkcode P14.switch p14:switch}, {@linkcode P14.vortex p14:vortex}, {@linkcode P14.warp p14:warp}, {@linkcode P14.wheelReverse p14:wheelReverse}, {@linkcode P14.window p14:window}, {@linkcode P15.prstTrans p15:prstTrans}
   * - XML attributes: {@linkcode P14.dur p14:dur}
   */
  public static readonly transition: XName = P.p.getName('transition');

  /**
   * Represents the `p:txBody` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sp p:sp}
   * - child XML elements: {@linkcode A.bodyPr a:bodyPr}, {@linkcode A.lstStyle a:lstStyle}, {@linkcode A.p a:p}
   */
  public static readonly txBody: XName = P.p.getName('txBody');

  /**
   * Represents the `p:txEl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode spTgt p:spTgt}
   * - child XML elements: {@linkcode charRg p:charRg}, {@linkcode pRg p:pRg}
   */
  public static readonly txEl: XName = P.p.getName('txEl');

  /**
   * Represents the `p:txStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sldMaster p:sldMaster}
   * - child XML elements: {@linkcode bodyStyle p:bodyStyle}, {@linkcode extLst p:extLst}, {@linkcode otherStyle p:otherStyle}, {@linkcode titleStyle p:titleStyle}
   */
  public static readonly txStyles: XName = P.p.getName('txStyles');

  /**
   * Represents the `p:val` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tav p:tav}
   * - child XML elements: {@linkcode boolVal p:boolVal}, {@linkcode clrVal p:clrVal}, {@linkcode fltVal p:fltVal}, {@linkcode intVal p:intVal}, {@linkcode strVal p:strVal}
   */
  public static readonly val: XName = P.p.getName('val');

  /**
   * Represents the `p:video` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode childTnLst p:childTnLst}, {@linkcode subTnLst p:subTnLst}
   * - child XML elements: {@linkcode cMediaNode p:cMediaNode}
   */
  public static readonly video: XName = P.p.getName('video');

  /**
   * Represents the `p:viewPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode extLst p:extLst}, {@linkcode gridSpacing p:gridSpacing}, {@linkcode normalViewPr p:normalViewPr}, {@linkcode notesTextViewPr p:notesTextViewPr}, {@linkcode notesViewPr p:notesViewPr}, {@linkcode outlineViewPr p:outlineViewPr}, {@linkcode slideViewPr p:slideViewPr}, {@linkcode sorterViewPr p:sorterViewPr}
   */
  public static readonly viewPr: XName = P.p.getName('viewPr');

  /**
   * Represents the `p:webPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode presentationPr p:presentationPr}
   * - child XML elements: {@linkcode extLst p:extLst}
   */
  public static readonly webPr: XName = P.p.getName('webPr');

  /**
   * Represents the `p:wedge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly wedge: XName = P.p.getName('wedge');

  /**
   * Represents the `p:wheel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly wheel: XName = P.p.getName('wheel');

  /**
   * Represents the `p:wipe` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly wipe: XName = P.p.getName('wipe');

  /**
   * Represents the `p:xfrm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode graphicFrame p:graphicFrame}
   * - child XML elements: {@linkcode A.ext a:ext}, {@linkcode A.off a:off}
   */
  public static readonly xfrm: XName = P.p.getName('xfrm');

  /**
   * Represents the `p:zoom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode transition p:transition}
   */
  public static readonly zoom: XName = P.p.getName('zoom');
}
