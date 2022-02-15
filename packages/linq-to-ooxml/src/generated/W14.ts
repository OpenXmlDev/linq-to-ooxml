/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"` namespace.
 */
export class W14 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `w14` prefix.
   */
  public static readonly w14: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/word/2010/wordml'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('w14'), W14.w14.namespaceName);
  }

  /**
   * Represents the `w14:algn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}, {@linkcode textOutline w14:textOutline}
   */
  public static readonly algn: XName = W14.w14.getName('algn');

  /**
   * Represents the `w14:alpha` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly alpha: XName = W14.w14.getName('alpha');

  /**
   * Represents the `w14:anchorId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   */
  public static readonly anchorId: XName = W14.w14.getName('anchorId');

  /**
   * Represents the `w14:ang` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lin w14:lin}
   */
  public static readonly ang: XName = W14.w14.getName('ang');

  /**
   * Represents the `w14:b` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fillToRect w14:fillToRect}
   */
  public static readonly b: XName = W14.w14.getName('b');

  /**
   * Represents the `w14:bevel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textOutline w14:textOutline}
   */
  public static readonly bevel: XName = W14.w14.getName('bevel');

  /**
   * Represents the `w14:bevelB` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode props3d w14:props3d}
   * - XML attributes: {@linkcode h w14:h}, {@linkcode prst w14:prst}, {@linkcode w w14:w}
   */
  public static readonly bevelB: XName = W14.w14.getName('bevelB');

  /**
   * Represents the `w14:bevelT` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode props3d w14:props3d}
   * - XML attributes: {@linkcode h w14:h}, {@linkcode prst w14:prst}, {@linkcode w w14:w}
   */
  public static readonly bevelT: XName = W14.w14.getName('bevelT');

  /**
   * Represents the `w14:blurRad` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly blurRad: XName = W14.w14.getName('blurRad');

  /**
   * Represents the `w14:bwMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode contentPart w14:contentPart}
   */
  public static readonly bwMode: XName = W14.w14.getName('bwMode');

  /**
   * Represents the `w14:camera` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scene3d w14:scene3d}
   * - XML attributes: {@linkcode prst w14:prst}
   */
  public static readonly camera: XName = W14.w14.getName('camera');

  /**
   * Represents the `w14:cap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode textOutline w14:textOutline}
   */
  public static readonly cap: XName = W14.w14.getName('cap');

  /**
   * Represents the `w14:checkbox` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - child XML elements: {@linkcode checked w14:checked}, {@linkcode checkedState w14:checkedState}, {@linkcode uncheckedState w14:uncheckedState}
   */
  public static readonly checkbox: XName = W14.w14.getName('checkbox');

  /**
   * Represents the `w14:checked` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkbox w14:checkbox}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly checked: XName = W14.w14.getName('checked');

  /**
   * Represents the `w14:checkedState` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkbox w14:checkbox}
   * - XML attributes: {@linkcode font w14:font}, {@linkcode val w14:val}
   */
  public static readonly checkedState: XName = W14.w14.getName('checkedState');

  /**
   * Represents the `w14:cmpd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode textOutline w14:textOutline}
   */
  public static readonly cmpd: XName = W14.w14.getName('cmpd');

  /**
   * Represents the `w14:cntxtAlts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly cntxtAlts: XName = W14.w14.getName('cntxtAlts');

  /**
   * Represents the `w14:cNvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr w14:nvContentPartPr}
   * - child XML elements: {@linkcode A14.cpLocks a14:cpLocks}, {@linkcode A14.extLst a14:extLst}
   */
  public static readonly cNvContentPartPr: XName = W14.w14.getName('cNvContentPartPr');

  /**
   * Represents the `w14:cNvPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nvContentPartPr w14:nvContentPartPr}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly cNvPr: XName = W14.w14.getName('cNvPr');

  /**
   * Represents the `w14:conflictDel` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rPr w:rPr}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.trPr w:trPr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode W.bdo w:bdo}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.r w:r}, {@linkcode W.sdt w:sdt}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}, {@linkcode customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode W.author w:author}, {@linkcode W.date w:date}, {@linkcode W.id w:id}
   */
  public static readonly conflictDel: XName = W14.w14.getName('conflictDel');

  /**
   * Represents the `w14:conflictIns` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rPr w:rPr}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.trPr w:trPr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode W.bdo w:bdo}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.r w:r}, {@linkcode W.sdt w:sdt}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}, {@linkcode customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode W.author w:author}, {@linkcode W.date w:date}, {@linkcode W.id w:id}
   */
  public static readonly conflictIns: XName = W14.w14.getName('conflictIns');

  /**
   * Represents the `w14:conflictMode` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly conflictMode: XName = W14.w14.getName('conflictMode');

  /**
   * Represents the `w14:contentPart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode WPC.wpc_ wpc:wpc_}, {@linkcode WPG.grpSp wpg:grpSp}, {@linkcode WPG.wgp wpg:wgp}
   * - child XML elements: {@linkcode extLst w14:extLst}, {@linkcode nvContentPartPr w14:nvContentPartPr}, {@linkcode xfrm w14:xfrm}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode bwMode w14:bwMode}
   */
  public static readonly contentPart: XName = W14.w14.getName('contentPart');

  /**
   * Represents the `w14:contourClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode props3d w14:props3d}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   */
  public static readonly contourClr: XName = W14.w14.getName('contourClr');

  /**
   * Represents the `w14:contourW` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode props3d w14:props3d}
   */
  public static readonly contourW: XName = W14.w14.getName('contourW');

  /**
   * Represents the `w14:customXmlConflictDelRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdt w:sdt}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode W.id w:id}
   */
  public static readonly customXmlConflictDelRangeEnd: XName = W14.w14.getName('customXmlConflictDelRangeEnd');

  /**
   * Represents the `w14:customXmlConflictDelRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdt w:sdt}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode W.author w:author}, {@linkcode W.date w:date}, {@linkcode W.id w:id}
   */
  public static readonly customXmlConflictDelRangeStart: XName = W14.w14.getName('customXmlConflictDelRangeStart');

  /**
   * Represents the `w14:customXmlConflictInsRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdt w:sdt}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode W.id w:id}
   */
  public static readonly customXmlConflictInsRangeEnd: XName = W14.w14.getName('customXmlConflictInsRangeEnd');

  /**
   * Represents the `w14:customXmlConflictInsRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.body w:body}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.docPartBody w:docPartBody}, {@linkcode W.endnote w:endnote}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.footnote w:footnote}, {@linkcode W.ftr w:ftr}, {@linkcode W.hdr w:hdr}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdt w:sdt}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W.tbl w:tbl}, {@linkcode W.tc w:tc}, {@linkcode W.tr w:tr}, {@linkcode W.txbxContent w:txbxContent}, {@linkcode conflictDel w14:conflictDel}, {@linkcode conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode W.author w:author}, {@linkcode W.date w:date}, {@linkcode W.id w:id}
   */
  public static readonly customXmlConflictInsRangeStart: XName = W14.w14.getName('customXmlConflictInsRangeStart');

  /**
   * Represents the `w14:defaultImageDpi` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly defaultImageDpi: XName = W14.w14.getName('defaultImageDpi');

  /**
   * Represents the `w14:dir` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lightRig w14:lightRig}, {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly dir: XName = W14.w14.getName('dir');

  /**
   * Represents the `w14:discardImageEditingData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly discardImageEditingData: XName = W14.w14.getName('discardImageEditingData');

  /**
   * Represents the `w14:dist` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly dist: XName = W14.w14.getName('dist');

  /**
   * Represents the `w14:docId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly docId: XName = W14.w14.getName('docId');

  /**
   * Represents the `w14:endA` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}
   */
  public static readonly endA: XName = W14.w14.getName('endA');

  /**
   * Represents the `w14:endPos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}
   */
  public static readonly endPos: XName = W14.w14.getName('endPos');

  /**
   * Represents the `w14:entityPicker` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   */
  public static readonly entityPicker: XName = W14.w14.getName('entityPicker');

  /**
   * Represents the `w14:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contentPart w14:contentPart}
   * - child XML elements: {@linkcode A.ext a:ext}
   */
  public static readonly extLst: XName = W14.w14.getName('extLst');

  /**
   * Represents the `w14:extrusionClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode props3d w14:props3d}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   */
  public static readonly extrusionClr: XName = W14.w14.getName('extrusionClr');

  /**
   * Represents the `w14:extrusionH` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode props3d w14:props3d}
   */
  public static readonly extrusionH: XName = W14.w14.getName('extrusionH');

  /**
   * Represents the `w14:fadeDir` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}
   */
  public static readonly fadeDir: XName = W14.w14.getName('fadeDir');

  /**
   * Represents the `w14:fillToRect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode path w14:path}
   * - XML attributes: {@linkcode b w14:b}, {@linkcode l w14:l}, {@linkcode r w14:r}, {@linkcode t w14:t}
   */
  public static readonly fillToRect: XName = W14.w14.getName('fillToRect');

  /**
   * Represents the `w14:font` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode checkedState w14:checkedState}, {@linkcode uncheckedState w14:uncheckedState}
   */
  public static readonly font: XName = W14.w14.getName('font');

  /**
   * Represents the `w14:glow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode rad w14:rad}
   */
  public static readonly glow: XName = W14.w14.getName('glow');

  /**
   * Represents the `w14:gradFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textFill w14:textFill}, {@linkcode textOutline w14:textOutline}
   * - child XML elements: {@linkcode gsLst w14:gsLst}, {@linkcode lin w14:lin}, {@linkcode path w14:path}
   */
  public static readonly gradFill: XName = W14.w14.getName('gradFill');

  /**
   * Represents the `w14:gs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gsLst w14:gsLst}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode pos w14:pos}
   */
  public static readonly gs: XName = W14.w14.getName('gs');

  /**
   * Represents the `w14:gsLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill w14:gradFill}
   * - child XML elements: {@linkcode gs w14:gs}
   */
  public static readonly gsLst: XName = W14.w14.getName('gsLst');

  /**
   * Represents the `w14:h` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bevelB w14:bevelB}, {@linkcode bevelT w14:bevelT}
   */
  public static readonly h: XName = W14.w14.getName('h');

  /**
   * Represents the `w14:hueMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly hueMod: XName = W14.w14.getName('hueMod');

  /**
   * Represents the `w14:id` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode styleSet w14:styleSet}
   */
  public static readonly id: XName = W14.w14.getName('id');

  /**
   * Represents the `w14:kx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly kx: XName = W14.w14.getName('kx');

  /**
   * Represents the `w14:ky` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly ky: XName = W14.w14.getName('ky');

  /**
   * Represents the `w14:l` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fillToRect w14:fillToRect}
   */
  public static readonly l: XName = W14.w14.getName('l');

  /**
   * Represents the `w14:lat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rot w14:rot}
   */
  public static readonly lat: XName = W14.w14.getName('lat');

  /**
   * Represents the `w14:ligatures` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly ligatures: XName = W14.w14.getName('ligatures');

  /**
   * Represents the `w14:lightRig` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scene3d w14:scene3d}
   * - child XML elements: {@linkcode rot w14:rot}
   * - XML attributes: {@linkcode dir w14:dir}, {@linkcode rig w14:rig}
   */
  public static readonly lightRig: XName = W14.w14.getName('lightRig');

  /**
   * Represents the `w14:lim` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode miter w14:miter}
   */
  public static readonly lim: XName = W14.w14.getName('lim');

  /**
   * Represents the `w14:lin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill w14:gradFill}
   * - XML attributes: {@linkcode ang w14:ang}, {@linkcode scaled w14:scaled}
   */
  public static readonly lin: XName = W14.w14.getName('lin');

  /**
   * Represents the `w14:lon` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rot w14:rot}
   */
  public static readonly lon: XName = W14.w14.getName('lon');

  /**
   * Represents the `w14:lum` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly lum: XName = W14.w14.getName('lum');

  /**
   * Represents the `w14:lumMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly lumMod: XName = W14.w14.getName('lumMod');

  /**
   * Represents the `w14:lumOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly lumOff: XName = W14.w14.getName('lumOff');

  /**
   * Represents the `w14:miter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textOutline w14:textOutline}
   * - XML attributes: {@linkcode lim w14:lim}
   */
  public static readonly miter: XName = W14.w14.getName('miter');

  /**
   * Represents the `w14:noFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textFill w14:textFill}, {@linkcode textOutline w14:textOutline}
   */
  public static readonly noFill: XName = W14.w14.getName('noFill');

  /**
   * Represents the `w14:noSpellErr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W.p w:p}
   */
  public static readonly noSpellErr: XName = W14.w14.getName('noSpellErr');

  /**
   * Represents the `w14:numForm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly numForm: XName = W14.w14.getName('numForm');

  /**
   * Represents the `w14:numSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly numSpacing: XName = W14.w14.getName('numSpacing');

  /**
   * Represents the `w14:nvContentPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contentPart w14:contentPart}
   * - child XML elements: {@linkcode cNvContentPartPr w14:cNvContentPartPr}, {@linkcode cNvPr w14:cNvPr}
   */
  public static readonly nvContentPartPr: XName = W14.w14.getName('nvContentPartPr');

  /**
   * Represents the `w14:paraId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W.p w:p}, {@linkcode W.tr w:tr}
   */
  public static readonly paraId: XName = W14.w14.getName('paraId');

  /**
   * Represents the `w14:path` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradFill w14:gradFill}
   * - child XML elements: {@linkcode fillToRect w14:fillToRect}
   * - XML attributes: {@linkcode path w14:path}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode path w14:path}
   */
  public static readonly path: XName = W14.w14.getName('path');

  /**
   * Represents the `w14:pos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode gs w14:gs}
   */
  public static readonly pos: XName = W14.w14.getName('pos');

  /**
   * Represents the `w14:props3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode bevelB w14:bevelB}, {@linkcode bevelT w14:bevelT}, {@linkcode contourClr w14:contourClr}, {@linkcode extrusionClr w14:extrusionClr}
   * - XML attributes: {@linkcode contourW w14:contourW}, {@linkcode extrusionH w14:extrusionH}, {@linkcode prstMaterial w14:prstMaterial}
   */
  public static readonly props3d: XName = W14.w14.getName('props3d');

  /**
   * Represents the `w14:prst` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bevelB w14:bevelB}, {@linkcode bevelT w14:bevelT}, {@linkcode camera w14:camera}
   */
  public static readonly prst: XName = W14.w14.getName('prst');

  /**
   * Represents the `w14:prstDash` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textOutline w14:textOutline}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly prstDash: XName = W14.w14.getName('prstDash');

  /**
   * Represents the `w14:prstMaterial` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode props3d w14:props3d}
   */
  public static readonly prstMaterial: XName = W14.w14.getName('prstMaterial');

  /**
   * Represents the `w14:r` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fillToRect w14:fillToRect}
   */
  public static readonly r: XName = W14.w14.getName('r');

  /**
   * Represents the `w14:rad` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode glow w14:glow}
   */
  public static readonly rad: XName = W14.w14.getName('rad');

  /**
   * Represents the `w14:reflection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - XML attributes: {@linkcode algn w14:algn}, {@linkcode blurRad w14:blurRad}, {@linkcode dir w14:dir}, {@linkcode dist w14:dist}, {@linkcode endA w14:endA}, {@linkcode endPos w14:endPos}, {@linkcode fadeDir w14:fadeDir}, {@linkcode kx w14:kx}, {@linkcode ky w14:ky}, {@linkcode stA w14:stA}, {@linkcode stPos w14:stPos}, {@linkcode sx w14:sx}, {@linkcode sy w14:sy}
   */
  public static readonly reflection: XName = W14.w14.getName('reflection');

  /**
   * Represents the `w14:rev` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rot w14:rot}
   */
  public static readonly rev: XName = W14.w14.getName('rev');

  /**
   * Represents the `w14:rig` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lightRig w14:lightRig}
   */
  public static readonly rig: XName = W14.w14.getName('rig');

  /**
   * Represents the `w14:rot` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lightRig w14:lightRig}
   * - XML attributes: {@linkcode lat w14:lat}, {@linkcode lon w14:lon}, {@linkcode rev w14:rev}
   */
  public static readonly rot: XName = W14.w14.getName('rot');

  /**
   * Represents the `w14:round` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textOutline w14:textOutline}
   */
  public static readonly round: XName = W14.w14.getName('round');

  /**
   * Represents the `w14:sat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly sat: XName = W14.w14.getName('sat');

  /**
   * Represents the `w14:satMod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly satMod: XName = W14.w14.getName('satMod');

  /**
   * Represents the `w14:satOff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly satOff: XName = W14.w14.getName('satOff');

  /**
   * Represents the `w14:scaled` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lin w14:lin}
   */
  public static readonly scaled: XName = W14.w14.getName('scaled');

  /**
   * Represents the `w14:scene3d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode camera w14:camera}, {@linkcode lightRig w14:lightRig}
   */
  public static readonly scene3d: XName = W14.w14.getName('scene3d');

  /**
   * Represents the `w14:schemeClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contourClr w14:contourClr}, {@linkcode extrusionClr w14:extrusionClr}, {@linkcode glow w14:glow}, {@linkcode gs w14:gs}, {@linkcode shadow w14:shadow}, {@linkcode solidFill w14:solidFill}
   * - child XML elements: {@linkcode alpha w14:alpha}, {@linkcode hueMod w14:hueMod}, {@linkcode lum w14:lum}, {@linkcode lumMod w14:lumMod}, {@linkcode lumOff w14:lumOff}, {@linkcode sat w14:sat}, {@linkcode satMod w14:satMod}, {@linkcode satOff w14:satOff}, {@linkcode shade w14:shade}, {@linkcode tint w14:tint}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly schemeClr: XName = W14.w14.getName('schemeClr');

  /**
   * Represents the `w14:shade` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly shade: XName = W14.w14.getName('shade');

  /**
   * Represents the `w14:shadow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode algn w14:algn}, {@linkcode blurRad w14:blurRad}, {@linkcode dir w14:dir}, {@linkcode dist w14:dist}, {@linkcode kx w14:kx}, {@linkcode ky w14:ky}, {@linkcode sx w14:sx}, {@linkcode sy w14:sy}
   */
  public static readonly shadow: XName = W14.w14.getName('shadow');

  /**
   * Represents the `w14:solidFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textFill w14:textFill}, {@linkcode textOutline w14:textOutline}
   * - child XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   */
  public static readonly solidFill: XName = W14.w14.getName('solidFill');

  /**
   * Represents the `w14:srgbClr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contourClr w14:contourClr}, {@linkcode extrusionClr w14:extrusionClr}, {@linkcode glow w14:glow}, {@linkcode gs w14:gs}, {@linkcode shadow w14:shadow}, {@linkcode solidFill w14:solidFill}
   * - child XML elements: {@linkcode alpha w14:alpha}, {@linkcode hueMod w14:hueMod}, {@linkcode lum w14:lum}, {@linkcode lumMod w14:lumMod}, {@linkcode lumOff w14:lumOff}, {@linkcode sat w14:sat}, {@linkcode satMod w14:satMod}, {@linkcode satOff w14:satOff}, {@linkcode shade w14:shade}, {@linkcode tint w14:tint}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly srgbClr: XName = W14.w14.getName('srgbClr');

  /**
   * Represents the `w14:stA` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}
   */
  public static readonly stA: XName = W14.w14.getName('stA');

  /**
   * Represents the `w14:stPos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}
   */
  public static readonly stPos: XName = W14.w14.getName('stPos');

  /**
   * Represents the `w14:styleSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode stylisticSets w14:stylisticSets}
   * - XML attributes: {@linkcode id w14:id}, {@linkcode val w14:val}
   */
  public static readonly styleSet: XName = W14.w14.getName('styleSet');

  /**
   * Represents the `w14:stylisticSets` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode styleSet w14:styleSet}
   */
  public static readonly stylisticSets: XName = W14.w14.getName('stylisticSets');

  /**
   * Represents the `w14:sx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly sx: XName = W14.w14.getName('sx');

  /**
   * Represents the `w14:sy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode reflection w14:reflection}, {@linkcode shadow w14:shadow}
   */
  public static readonly sy: XName = W14.w14.getName('sy');

  /**
   * Represents the `w14:t` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fillToRect w14:fillToRect}
   */
  public static readonly t: XName = W14.w14.getName('t');

  /**
   * Represents the `w14:textFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode gradFill w14:gradFill}, {@linkcode noFill w14:noFill}, {@linkcode solidFill w14:solidFill}
   */
  public static readonly textFill: XName = W14.w14.getName('textFill');

  /**
   * Represents the `w14:textId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W.p w:p}, {@linkcode W.tr w:tr}
   */
  public static readonly textId: XName = W14.w14.getName('textId');

  /**
   * Represents the `w14:textOutline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode W.rPr w:rPr}
   * - child XML elements: {@linkcode bevel w14:bevel}, {@linkcode gradFill w14:gradFill}, {@linkcode miter w14:miter}, {@linkcode noFill w14:noFill}, {@linkcode prstDash w14:prstDash}, {@linkcode round w14:round}, {@linkcode solidFill w14:solidFill}
   * - XML attributes: {@linkcode algn w14:algn}, {@linkcode cap w14:cap}, {@linkcode cmpd w14:cmpd}, {@linkcode w w14:w}
   */
  public static readonly textOutline: XName = W14.w14.getName('textOutline');

  /**
   * Represents the `w14:tint` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemeClr w14:schemeClr}, {@linkcode srgbClr w14:srgbClr}
   * - XML attributes: {@linkcode val w14:val}
   */
  public static readonly tint: XName = W14.w14.getName('tint');

  /**
   * Represents the `w14:uncheckedState` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkbox w14:checkbox}
   * - XML attributes: {@linkcode font w14:font}, {@linkcode val w14:val}
   */
  public static readonly uncheckedState: XName = W14.w14.getName('uncheckedState');

  /**
   * Represents the `w14:val` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode alpha w14:alpha}, {@linkcode checked w14:checked}, {@linkcode checkedState w14:checkedState}, {@linkcode cntxtAlts w14:cntxtAlts}, {@linkcode conflictMode w14:conflictMode}, {@linkcode defaultImageDpi w14:defaultImageDpi}, {@linkcode discardImageEditingData w14:discardImageEditingData}, {@linkcode docId w14:docId}, {@linkcode hueMod w14:hueMod}, {@linkcode ligatures w14:ligatures}, {@linkcode lum w14:lum}, {@linkcode lumMod w14:lumMod}, {@linkcode lumOff w14:lumOff}, {@linkcode numForm w14:numForm}, {@linkcode numSpacing w14:numSpacing}, {@linkcode prstDash w14:prstDash}, {@linkcode sat w14:sat}, {@linkcode satMod w14:satMod}, {@linkcode satOff w14:satOff}, {@linkcode schemeClr w14:schemeClr}, {@linkcode shade w14:shade}, {@linkcode srgbClr w14:srgbClr}, {@linkcode styleSet w14:styleSet}, {@linkcode tint w14:tint}, {@linkcode uncheckedState w14:uncheckedState}
   */
  public static readonly val: XName = W14.w14.getName('val');

  /**
   * Represents the `w14:w` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bevelB w14:bevelB}, {@linkcode bevelT w14:bevelT}, {@linkcode textOutline w14:textOutline}
   */
  public static readonly w: XName = W14.w14.getName('w');

  /**
   * Represents the `w14:xfrm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode contentPart w14:contentPart}
   * - child XML elements: {@linkcode A.ext a:ext}, {@linkcode A.off a:off}
   */
  public static readonly xfrm: XName = W14.w14.getName('xfrm');
}
