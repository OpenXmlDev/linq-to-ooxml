/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"` namespace.
 */
export class M {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `m` prefix.
   */
  public static readonly m: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/officeDocument/2006/math'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('m'), M.m.namespaceName);
  }

  /**
   * Represents the `m:acc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode accPr m:accPr}, {@linkcode e m:e}
   */
  public static readonly acc: XName = M.m.getName('acc');

  /**
   * Represents the `m:accPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode acc m:acc}
   * - child XML elements: {@linkcode chr m:chr}, {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly accPr: XName = M.m.getName('accPr');

  /**
   * Represents the `m:aln` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode boxPr m:boxPr}, {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly aln: XName = M.m.getName('aln');

  /**
   * Represents the `m:alnAt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode brk m:brk}
   */
  public static readonly alnAt: XName = M.m.getName('alnAt');

  /**
   * Represents the `m:alnScr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sSubSupPr m:sSubSupPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly alnScr: XName = M.m.getName('alnScr');

  /**
   * Represents the `m:argPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode sub m:sub}, {@linkcode sup m:sup}
   * - child XML elements: {@linkcode argSz m:argSz}
   */
  public static readonly argPr: XName = M.m.getName('argPr');

  /**
   * Represents the `m:argSz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode argPr m:argPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly argSz: XName = M.m.getName('argSz');

  /**
   * Represents the `m:bar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode barPr m:barPr}, {@linkcode e m:e}
   */
  public static readonly bar: XName = M.m.getName('bar');

  /**
   * Represents the `m:barPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bar m:bar}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}, {@linkcode pos m:pos}
   */
  public static readonly barPr: XName = M.m.getName('barPr');

  /**
   * Represents the `m:baseJc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArrPr m:eqArrPr}, {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly baseJc: XName = M.m.getName('baseJc');

  /**
   * Represents the `m:begChr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dPr m:dPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly begChr: XName = M.m.getName('begChr');

  /**
   * Represents the `m:borderBox` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode borderBoxPr m:borderBoxPr}, {@linkcode e m:e}
   */
  public static readonly borderBox: XName = M.m.getName('borderBox');

  /**
   * Represents the `m:borderBoxPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBox m:borderBox}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}, {@linkcode hideBot m:hideBot}, {@linkcode hideLeft m:hideLeft}, {@linkcode hideRight m:hideRight}, {@linkcode hideTop m:hideTop}, {@linkcode strikeBLTR m:strikeBLTR}, {@linkcode strikeH m:strikeH}, {@linkcode strikeTLBR m:strikeTLBR}, {@linkcode strikeV m:strikeV}
   */
  public static readonly borderBoxPr: XName = M.m.getName('borderBoxPr');

  /**
   * Represents the `m:box` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode boxPr m:boxPr}, {@linkcode e m:e}
   */
  public static readonly box: XName = M.m.getName('box');

  /**
   * Represents the `m:boxPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode box m:box}
   * - child XML elements: {@linkcode aln m:aln}, {@linkcode brk m:brk}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode diff m:diff}, {@linkcode noBreak m:noBreak}, {@linkcode opEmu m:opEmu}
   */
  public static readonly boxPr: XName = M.m.getName('boxPr');

  /**
   * Represents the `m:brk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode boxPr m:boxPr}, {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode alnAt m:alnAt}, {@linkcode val m:val}
   */
  public static readonly brk: XName = M.m.getName('brk');

  /**
   * Represents the `m:brkBin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly brkBin: XName = M.m.getName('brkBin');

  /**
   * Represents the `m:brkBinSub` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly brkBinSub: XName = M.m.getName('brkBinSub');

  /**
   * Represents the `m:cGp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly cGp: XName = M.m.getName('cGp');

  /**
   * Represents the `m:cGpRule` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly cGpRule: XName = M.m.getName('cGpRule');

  /**
   * Represents the `m:chr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accPr m:accPr}, {@linkcode groupChrPr m:groupChrPr}, {@linkcode naryPr m:naryPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly chr: XName = M.m.getName('chr');

  /**
   * Represents the `m:count` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mcPr m:mcPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly count: XName = M.m.getName('count');

  /**
   * Represents the `m:cSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly cSp: XName = M.m.getName('cSp');

  /**
   * Represents the `m:ctrlPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode accPr m:accPr}, {@linkcode barPr m:barPr}, {@linkcode borderBoxPr m:borderBoxPr}, {@linkcode boxPr m:boxPr}, {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode dPr m:dPr}, {@linkcode e m:e}, {@linkcode eqArrPr m:eqArrPr}, {@linkcode fName m:fName}, {@linkcode fPr m:fPr}, {@linkcode funcPr m:funcPr}, {@linkcode groupChrPr m:groupChrPr}, {@linkcode lim m:lim}, {@linkcode limLowPr m:limLowPr}, {@linkcode limUppPr m:limUppPr}, {@linkcode mPr m:mPr}, {@linkcode naryPr m:naryPr}, {@linkcode num m:num}, {@linkcode phantPr m:phantPr}, {@linkcode radPr m:radPr}, {@linkcode sPrePr m:sPrePr}, {@linkcode sSubPr m:sSubPr}, {@linkcode sSubSupPr m:sSubSupPr}, {@linkcode sSupPr m:sSupPr}, {@linkcode sub m:sub}, {@linkcode sup m:sup}
   * - child XML elements: {@linkcode W.del w:del}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.rPr w:rPr}
   */
  public static readonly ctrlPr: XName = M.m.getName('ctrlPr');

  /**
   * Represents the `m:d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode dPr m:dPr}, {@linkcode e m:e}
   */
  public static readonly d: XName = M.m.getName('d');

  /**
   * Represents the `m:defJc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly defJc: XName = M.m.getName('defJc');

  /**
   * Represents the `m:deg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rad m:rad}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly deg: XName = M.m.getName('deg');

  /**
   * Represents the `m:degHide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode radPr m:radPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly degHide: XName = M.m.getName('degHide');

  /**
   * Represents the `m:den` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode f m:f}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly den: XName = M.m.getName('den');

  /**
   * Represents the `m:diff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode boxPr m:boxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly diff: XName = M.m.getName('diff');

  /**
   * Represents the `m:dispDef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly dispDef: XName = M.m.getName('dispDef');

  /**
   * Represents the `m:dPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode d m:d}
   * - child XML elements: {@linkcode begChr m:begChr}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode endChr m:endChr}, {@linkcode grow m:grow}, {@linkcode sepChr m:sepChr}, {@linkcode shp m:shp}
   */
  public static readonly dPr: XName = M.m.getName('dPr');

  /**
   * Represents the `m:e` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode acc m:acc}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode mr m:mr}, {@linkcode nary m:nary}, {@linkcode phant m:phant}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly e: XName = M.m.getName('e');

  /**
   * Represents the `m:endChr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dPr m:dPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly endChr: XName = M.m.getName('endChr');

  /**
   * Represents the `m:eqArr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode eqArrPr m:eqArrPr}
   */
  public static readonly eqArr: XName = M.m.getName('eqArr');

  /**
   * Represents the `m:eqArrPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArr m:eqArr}
   * - child XML elements: {@linkcode baseJc m:baseJc}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode maxDist m:maxDist}, {@linkcode objDist m:objDist}, {@linkcode rSp m:rSp}, {@linkcode rSpRule m:rSpRule}
   */
  public static readonly eqArrPr: XName = M.m.getName('eqArrPr');

  /**
   * Represents the `m:f` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode den m:den}, {@linkcode fPr m:fPr}, {@linkcode num m:num}
   */
  public static readonly f: XName = M.m.getName('f');

  /**
   * Represents the `m:fName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode func m:func}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly fName: XName = M.m.getName('fName');

  /**
   * Represents the `m:fPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode f m:f}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}, {@linkcode type m:type}
   */
  public static readonly fPr: XName = M.m.getName('fPr');

  /**
   * Represents the `m:func` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode funcPr m:funcPr}
   */
  public static readonly func: XName = M.m.getName('func');

  /**
   * Represents the `m:funcPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode func m:func}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly funcPr: XName = M.m.getName('funcPr');

  /**
   * Represents the `m:groupChr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode groupChrPr m:groupChrPr}
   */
  public static readonly groupChr: XName = M.m.getName('groupChr');

  /**
   * Represents the `m:groupChrPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupChr m:groupChr}
   * - child XML elements: {@linkcode chr m:chr}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode pos m:pos}, {@linkcode vertJc m:vertJc}
   */
  public static readonly groupChrPr: XName = M.m.getName('groupChrPr');

  /**
   * Represents the `m:grow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dPr m:dPr}, {@linkcode naryPr m:naryPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly grow: XName = M.m.getName('grow');

  /**
   * Represents the `m:hideBot` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly hideBot: XName = M.m.getName('hideBot');

  /**
   * Represents the `m:hideLeft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly hideLeft: XName = M.m.getName('hideLeft');

  /**
   * Represents the `m:hideRight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly hideRight: XName = M.m.getName('hideRight');

  /**
   * Represents the `m:hideTop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly hideTop: XName = M.m.getName('hideTop');

  /**
   * Represents the `m:interSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly interSp: XName = M.m.getName('interSp');

  /**
   * Represents the `m:intLim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly intLim: XName = M.m.getName('intLim');

  /**
   * Represents the `m:intraSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly intraSp: XName = M.m.getName('intraSp');

  /**
   * Represents the `m:jc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oMathParaPr m:oMathParaPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly jc: XName = M.m.getName('jc');

  /**
   * Represents the `m:lim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly lim: XName = M.m.getName('lim');

  /**
   * Represents the `m:limLoc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode naryPr m:naryPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly limLoc: XName = M.m.getName('limLoc');

  /**
   * Represents the `m:limLow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode lim m:lim}, {@linkcode limLowPr m:limLowPr}
   */
  public static readonly limLow: XName = M.m.getName('limLow');

  /**
   * Represents the `m:limLowPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode limLow m:limLow}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly limLowPr: XName = M.m.getName('limLowPr');

  /**
   * Represents the `m:limUpp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode lim m:lim}, {@linkcode limUppPr m:limUppPr}
   */
  public static readonly limUpp: XName = M.m.getName('limUpp');

  /**
   * Represents the `m:limUppPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode limUpp m:limUpp}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly limUppPr: XName = M.m.getName('limUppPr');

  /**
   * Represents the `m:lit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly lit: XName = M.m.getName('lit');

  /**
   * Represents the `m:lMargin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly lMargin: XName = M.m.getName('lMargin');

  /**
   * Represents the `m:m` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode mPr m:mPr}, {@linkcode mr m:mr}
   */
  public static readonly m_: XName = M.m.getName('m');

  /**
   * Represents the `m:mathFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly mathFont: XName = M.m.getName('mathFont');

  /**
   * Represents the `m:mathPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - child XML elements: {@linkcode brkBin m:brkBin}, {@linkcode brkBinSub m:brkBinSub}, {@linkcode defJc m:defJc}, {@linkcode dispDef m:dispDef}, {@linkcode interSp m:interSp}, {@linkcode intLim m:intLim}, {@linkcode intraSp m:intraSp}, {@linkcode lMargin m:lMargin}, {@linkcode mathFont m:mathFont}, {@linkcode naryLim m:naryLim}, {@linkcode postSp m:postSp}, {@linkcode preSp m:preSp}, {@linkcode rMargin m:rMargin}, {@linkcode smallFrac m:smallFrac}, {@linkcode wrapIndent m:wrapIndent}, {@linkcode wrapRight m:wrapRight}
   */
  public static readonly mathPr: XName = M.m.getName('mathPr');

  /**
   * Represents the `m:maxDist` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArrPr m:eqArrPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly maxDist: XName = M.m.getName('maxDist');

  /**
   * Represents the `m:mc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mcs m:mcs}
   * - child XML elements: {@linkcode mcPr m:mcPr}
   */
  public static readonly mc: XName = M.m.getName('mc');

  /**
   * Represents the `m:mcJc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mcPr m:mcPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly mcJc: XName = M.m.getName('mcJc');

  /**
   * Represents the `m:mcPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mc m:mc}
   * - child XML elements: {@linkcode count m:count}, {@linkcode mcJc m:mcJc}
   */
  public static readonly mcPr: XName = M.m.getName('mcPr');

  /**
   * Represents the `m:mcs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mPr m:mPr}
   * - child XML elements: {@linkcode mc m:mc}
   */
  public static readonly mcs: XName = M.m.getName('mcs');

  /**
   * Represents the `m:mPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode m_ m:m_}
   * - child XML elements: {@linkcode baseJc m:baseJc}, {@linkcode cGp m:cGp}, {@linkcode cGpRule m:cGpRule}, {@linkcode cSp m:cSp}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode mcs m:mcs}, {@linkcode plcHide m:plcHide}, {@linkcode rSp m:rSp}, {@linkcode rSpRule m:rSpRule}
   */
  public static readonly mPr: XName = M.m.getName('mPr');

  /**
   * Represents the `m:mr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode m_ m:m_}
   * - child XML elements: {@linkcode e m:e}
   */
  public static readonly mr: XName = M.m.getName('mr');

  /**
   * Represents the `m:nary` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode naryPr m:naryPr}, {@linkcode sub m:sub}, {@linkcode sup m:sup}
   */
  public static readonly nary: XName = M.m.getName('nary');

  /**
   * Represents the `m:naryLim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly naryLim: XName = M.m.getName('naryLim');

  /**
   * Represents the `m:naryPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nary m:nary}
   * - child XML elements: {@linkcode chr m:chr}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode grow m:grow}, {@linkcode limLoc m:limLoc}, {@linkcode subHide m:subHide}, {@linkcode supHide m:supHide}
   */
  public static readonly naryPr: XName = M.m.getName('naryPr');

  /**
   * Represents the `m:noBreak` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode boxPr m:boxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly noBreak: XName = M.m.getName('noBreak');

  /**
   * Represents the `m:nor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly nor: XName = M.m.getName('nor');

  /**
   * Represents the `m:num` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode f m:f}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly num: XName = M.m.getName('num');

  /**
   * Represents the `m:objDist` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArrPr m:eqArrPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly objDist: XName = M.m.getName('objDist');

  /**
   * Represents the `m:oMath` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly oMath: XName = M.m.getName('oMath');

  /**
   * Represents the `m:oMathPara` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode oMath m:oMath}, {@linkcode oMathParaPr m:oMathParaPr}, {@linkcode r m:r}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.r w:r}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly oMathPara: XName = M.m.getName('oMathPara');

  /**
   * Represents the `m:oMathParaPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oMathPara m:oMathPara}
   * - child XML elements: {@linkcode jc m:jc}
   */
  public static readonly oMathParaPr: XName = M.m.getName('oMathParaPr');

  /**
   * Represents the `m:opEmu` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode boxPr m:boxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly opEmu: XName = M.m.getName('opEmu');

  /**
   * Represents the `m:phant` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode phantPr m:phantPr}
   */
  public static readonly phant: XName = M.m.getName('phant');

  /**
   * Represents the `m:phantPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phant m:phant}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}, {@linkcode show m:show}, {@linkcode transp m:transp}, {@linkcode zeroAsc m:zeroAsc}, {@linkcode zeroDesc m:zeroDesc}, {@linkcode zeroWid m:zeroWid}
   */
  public static readonly phantPr: XName = M.m.getName('phantPr');

  /**
   * Represents the `m:plcHide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly plcHide: XName = M.m.getName('plcHide');

  /**
   * Represents the `m:pos` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode barPr m:barPr}, {@linkcode groupChrPr m:groupChrPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly pos: XName = M.m.getName('pos');

  /**
   * Represents the `m:postSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly postSp: XName = M.m.getName('postSp');

  /**
   * Represents the `m:preSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly preSp: XName = M.m.getName('preSp');

  /**
   * Represents the `m:r` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode rPr m:rPr}, {@linkcode t m:t}, {@linkcode W.annotationRef w:annotationRef}, {@linkcode W.br w:br}, {@linkcode W.commentReference w:commentReference}, {@linkcode W.continuationSeparator w:continuationSeparator}, {@linkcode W.cr w:cr}, {@linkcode W.dayLong w:dayLong}, {@linkcode W.dayShort w:dayShort}, {@linkcode W.delInstrText w:delInstrText}, {@linkcode W.delText w:delText}, {@linkcode W.drawing w:drawing}, {@linkcode W.endnoteRef w:endnoteRef}, {@linkcode W.endnoteReference w:endnoteReference}, {@linkcode W.fldChar w:fldChar}, {@linkcode W.footnoteRef w:footnoteRef}, {@linkcode W.footnoteReference w:footnoteReference}, {@linkcode W.instrText w:instrText}, {@linkcode W.lastRenderedPageBreak w:lastRenderedPageBreak}, {@linkcode W.monthLong w:monthLong}, {@linkcode W.monthShort w:monthShort}, {@linkcode W.noBreakHyphen w:noBreakHyphen}, {@linkcode W.object w:object}, {@linkcode W.pgNum w:pgNum}, {@linkcode W.pict w:pict}, {@linkcode W.ptab w:ptab}, {@linkcode W.rPr w:rPr}, {@linkcode W.ruby w:ruby}, {@linkcode W.separator w:separator}, {@linkcode W.softHyphen w:softHyphen}, {@linkcode W.sym w:sym}, {@linkcode W.t w:t}, {@linkcode W.tab w:tab}, {@linkcode W.yearLong w:yearLong}, {@linkcode W.yearShort w:yearShort}
   */
  public static readonly r: XName = M.m.getName('r');

  /**
   * Represents the `m:rad` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode deg m:deg}, {@linkcode e m:e}, {@linkcode radPr m:radPr}
   */
  public static readonly rad: XName = M.m.getName('rad');

  /**
   * Represents the `m:radPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rad m:rad}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}, {@linkcode degHide m:degHide}
   */
  public static readonly radPr: XName = M.m.getName('radPr');

  /**
   * Represents the `m:rMargin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly rMargin: XName = M.m.getName('rMargin');

  /**
   * Represents the `m:rPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode r m:r}
   * - child XML elements: {@linkcode aln m:aln}, {@linkcode brk m:brk}, {@linkcode lit m:lit}, {@linkcode nor m:nor}, {@linkcode scr m:scr}, {@linkcode sty m:sty}
   */
  public static readonly rPr: XName = M.m.getName('rPr');

  /**
   * Represents the `m:rSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArrPr m:eqArrPr}, {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly rSp: XName = M.m.getName('rSp');

  /**
   * Represents the `m:rSpRule` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode eqArrPr m:eqArrPr}, {@linkcode mPr m:mPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly rSpRule: XName = M.m.getName('rSpRule');

  /**
   * Represents the `m:scr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly scr: XName = M.m.getName('scr');

  /**
   * Represents the `m:sepChr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dPr m:dPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly sepChr: XName = M.m.getName('sepChr');

  /**
   * Represents the `m:show` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phantPr m:phantPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly show: XName = M.m.getName('show');

  /**
   * Represents the `m:shp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dPr m:dPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly shp: XName = M.m.getName('shp');

  /**
   * Represents the `m:smallFrac` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly smallFrac: XName = M.m.getName('smallFrac');

  /**
   * Represents the `m:sPre` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode sPrePr m:sPrePr}, {@linkcode sub m:sub}, {@linkcode sup m:sup}
   */
  public static readonly sPre: XName = M.m.getName('sPre');

  /**
   * Represents the `m:sPrePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sPre m:sPre}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly sPrePr: XName = M.m.getName('sPrePr');

  /**
   * Represents the `m:sSub` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode sSubPr m:sSubPr}, {@linkcode sub m:sub}
   */
  public static readonly sSub: XName = M.m.getName('sSub');

  /**
   * Represents the `m:sSubPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sSub m:sSub}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly sSubPr: XName = M.m.getName('sSubPr');

  /**
   * Represents the `m:sSubSup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode sSubSupPr m:sSubSupPr}, {@linkcode sub m:sub}, {@linkcode sup m:sup}
   */
  public static readonly sSubSup: XName = M.m.getName('sSubSup');

  /**
   * Represents the `m:sSubSupPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sSubSup m:sSubSup}
   * - child XML elements: {@linkcode alnScr m:alnScr}, {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly sSubSupPr: XName = M.m.getName('sSubSupPr');

  /**
   * Represents the `m:sSup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode deg m:deg}, {@linkcode den m:den}, {@linkcode e m:e}, {@linkcode fName m:fName}, {@linkcode lim m:lim}, {@linkcode num m:num}, {@linkcode oMath m:oMath}, {@linkcode sub m:sub}, {@linkcode sup m:sup}, {@linkcode W.bdo w:bdo}, {@linkcode W.customXml w:customXml}, {@linkcode W.del w:del}, {@linkcode W.dir w:dir}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.p w:p}, {@linkcode W.rt w:rt}, {@linkcode W.rubyBase w:rubyBase}, {@linkcode W.sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode e m:e}, {@linkcode sSupPr m:sSupPr}, {@linkcode sup m:sup}
   */
  public static readonly sSup: XName = M.m.getName('sSup');

  /**
   * Represents the `m:sSupPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sSup m:sSup}
   * - child XML elements: {@linkcode ctrlPr m:ctrlPr}
   */
  public static readonly sSupPr: XName = M.m.getName('sSupPr');

  /**
   * Represents the `m:strikeBLTR` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly strikeBLTR: XName = M.m.getName('strikeBLTR');

  /**
   * Represents the `m:strikeH` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly strikeH: XName = M.m.getName('strikeH');

  /**
   * Represents the `m:strikeTLBR` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly strikeTLBR: XName = M.m.getName('strikeTLBR');

  /**
   * Represents the `m:strikeV` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borderBoxPr m:borderBoxPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly strikeV: XName = M.m.getName('strikeV');

  /**
   * Represents the `m:sty` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr m:rPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly sty: XName = M.m.getName('sty');

  /**
   * Represents the `m:sub` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nary m:nary}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly sub: XName = M.m.getName('sub');

  /**
   * Represents the `m:subHide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode naryPr m:naryPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly subHide: XName = M.m.getName('subHide');

  /**
   * Represents the `m:sup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode nary m:nary}, {@linkcode sPre m:sPre}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}
   * - child XML elements: {@linkcode acc m:acc}, {@linkcode argPr m:argPr}, {@linkcode bar m:bar}, {@linkcode borderBox m:borderBox}, {@linkcode box m:box}, {@linkcode ctrlPr m:ctrlPr}, {@linkcode d m:d}, {@linkcode eqArr m:eqArr}, {@linkcode f m:f}, {@linkcode func m:func}, {@linkcode groupChr m:groupChr}, {@linkcode limLow m:limLow}, {@linkcode limUpp m:limUpp}, {@linkcode m_ m:m_}, {@linkcode nary m:nary}, {@linkcode oMath m:oMath}, {@linkcode oMathPara m:oMathPara}, {@linkcode phant m:phant}, {@linkcode r m:r}, {@linkcode rad m:rad}, {@linkcode sPre m:sPre}, {@linkcode sSub m:sSub}, {@linkcode sSubSup m:sSubSup}, {@linkcode sSup m:sSup}, {@linkcode W.bookmarkEnd w:bookmarkEnd}, {@linkcode W.bookmarkStart w:bookmarkStart}, {@linkcode W.commentRangeEnd w:commentRangeEnd}, {@linkcode W.commentRangeStart w:commentRangeStart}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.customXml w:customXml}, {@linkcode W.customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode W.customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode W.customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode W.customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode W.customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode W.customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode W.customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode W.customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode W.del w:del}, {@linkcode W.fldSimple w:fldSimple}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.ins w:ins}, {@linkcode W.moveFrom w:moveFrom}, {@linkcode W.moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode W.moveFromRangeStart w:moveFromRangeStart}, {@linkcode W.moveTo w:moveTo}, {@linkcode W.moveToRangeEnd w:moveToRangeEnd}, {@linkcode W.moveToRangeStart w:moveToRangeStart}, {@linkcode W.permEnd w:permEnd}, {@linkcode W.permStart w:permStart}, {@linkcode W.proofErr w:proofErr}, {@linkcode W.sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly sup: XName = M.m.getName('sup');

  /**
   * Represents the `m:supHide` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode naryPr m:naryPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly supHide: XName = M.m.getName('supHide');

  /**
   * Represents the `m:t` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode r m:r}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly t: XName = M.m.getName('t');

  /**
   * Represents the `m:transp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phantPr m:phantPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly transp: XName = M.m.getName('transp');

  /**
   * Represents the `m:type` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fPr m:fPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly type: XName = M.m.getName('type');

  /**
   * Represents the `m:val` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode aln m:aln}, {@linkcode alnScr m:alnScr}, {@linkcode argSz m:argSz}, {@linkcode baseJc m:baseJc}, {@linkcode begChr m:begChr}, {@linkcode brk m:brk}, {@linkcode brkBin m:brkBin}, {@linkcode brkBinSub m:brkBinSub}, {@linkcode cGp m:cGp}, {@linkcode cGpRule m:cGpRule}, {@linkcode chr m:chr}, {@linkcode count m:count}, {@linkcode cSp m:cSp}, {@linkcode defJc m:defJc}, {@linkcode degHide m:degHide}, {@linkcode diff m:diff}, {@linkcode dispDef m:dispDef}, {@linkcode endChr m:endChr}, {@linkcode grow m:grow}, {@linkcode hideBot m:hideBot}, {@linkcode hideLeft m:hideLeft}, {@linkcode hideRight m:hideRight}, {@linkcode hideTop m:hideTop}, {@linkcode interSp m:interSp}, {@linkcode intLim m:intLim}, {@linkcode intraSp m:intraSp}, {@linkcode jc m:jc}, {@linkcode limLoc m:limLoc}, {@linkcode lit m:lit}, {@linkcode lMargin m:lMargin}, {@linkcode mathFont m:mathFont}, {@linkcode maxDist m:maxDist}, {@linkcode mcJc m:mcJc}, {@linkcode naryLim m:naryLim}, {@linkcode noBreak m:noBreak}, {@linkcode nor m:nor}, {@linkcode objDist m:objDist}, {@linkcode opEmu m:opEmu}, {@linkcode plcHide m:plcHide}, {@linkcode pos m:pos}, {@linkcode postSp m:postSp}, {@linkcode preSp m:preSp}, {@linkcode rMargin m:rMargin}, {@linkcode rSp m:rSp}, {@linkcode rSpRule m:rSpRule}, {@linkcode scr m:scr}, {@linkcode sepChr m:sepChr}, {@linkcode show m:show}, {@linkcode shp m:shp}, {@linkcode smallFrac m:smallFrac}, {@linkcode strikeBLTR m:strikeBLTR}, {@linkcode strikeH m:strikeH}, {@linkcode strikeTLBR m:strikeTLBR}, {@linkcode strikeV m:strikeV}, {@linkcode sty m:sty}, {@linkcode subHide m:subHide}, {@linkcode supHide m:supHide}, {@linkcode transp m:transp}, {@linkcode type m:type}, {@linkcode vertJc m:vertJc}, {@linkcode wrapIndent m:wrapIndent}, {@linkcode wrapRight m:wrapRight}, {@linkcode zeroAsc m:zeroAsc}, {@linkcode zeroDesc m:zeroDesc}, {@linkcode zeroWid m:zeroWid}
   */
  public static readonly val: XName = M.m.getName('val');

  /**
   * Represents the `m:vertJc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupChrPr m:groupChrPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly vertJc: XName = M.m.getName('vertJc');

  /**
   * Represents the `m:wrapIndent` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly wrapIndent: XName = M.m.getName('wrapIndent');

  /**
   * Represents the `m:wrapRight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mathPr m:mathPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly wrapRight: XName = M.m.getName('wrapRight');

  /**
   * Represents the `m:zeroAsc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phantPr m:phantPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly zeroAsc: XName = M.m.getName('zeroAsc');

  /**
   * Represents the `m:zeroDesc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phantPr m:phantPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly zeroDesc: XName = M.m.getName('zeroDesc');

  /**
   * Represents the `m:zeroWid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode phantPr m:phantPr}
   * - XML attributes: {@linkcode val m:val}
   */
  public static readonly zeroWid: XName = M.m.getName('zeroWid');
}
