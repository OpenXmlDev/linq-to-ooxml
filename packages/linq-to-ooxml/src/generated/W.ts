/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"` namespace.
 */
export class W {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `w` prefix.
   */
  public static readonly w: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('w'), W.w.namespaceName);
  }

  /**
   * Represents the `w:abstractNum` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numbering w:numbering}
   * - child XML elements: {@linkcode lvl w:lvl}, {@linkcode multiLevelType w:multiLevelType}, {@linkcode name_ w:name_}, {@linkcode nsid w:nsid}, {@linkcode numStyleLink w:numStyleLink}, {@linkcode styleLink w:styleLink}, {@linkcode tmpl w:tmpl}
   * - XML attributes: {@linkcode abstractNumId w:abstractNumId}
   */
  public static readonly abstractNum: XName = W.w.getName('abstractNum');

  /**
   * Represents the `w:abstractNumId` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode num w:num}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode abstractNum w:abstractNum}
   */
  public static readonly abstractNumId: XName = W.w.getName('abstractNumId');

  /**
   * Represents the `w:accent1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent1: XName = W.w.getName('accent1');

  /**
   * Represents the `w:accent2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent2: XName = W.w.getName('accent2');

  /**
   * Represents the `w:accent3` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent3: XName = W.w.getName('accent3');

  /**
   * Represents the `w:accent4` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent4: XName = W.w.getName('accent4');

  /**
   * Represents the `w:accent5` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent5: XName = W.w.getName('accent5');

  /**
   * Represents the `w:accent6` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly accent6: XName = W.w.getName('accent6');

  /**
   * Represents the `w:active` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode recipientData w:recipientData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly active: XName = W.w.getName('active');

  /**
   * Represents the `w:activeRecord` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly activeRecord: XName = W.w.getName('activeRecord');

  /**
   * Represents the `w:activeWritingStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode appName w:appName}, {@linkcode checkStyle w:checkStyle}, {@linkcode dllVersion w:dllVersion}, {@linkcode lang w:lang}, {@linkcode nlCheck w:nlCheck}, {@linkcode vendorID w:vendorID}
   */
  public static readonly activeWritingStyle: XName = W.w.getName('activeWritingStyle');

  /**
   * Represents the `w:actualPg` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode readModeInkLockDown w:readModeInkLockDown}
   */
  public static readonly actualPg: XName = W.w.getName('actualPg');

  /**
   * Represents the `w:addressFieldName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly addressFieldName: XName = W.w.getName('addressFieldName');

  /**
   * Represents the `w:adjustLineHeightInTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly adjustLineHeightInTable: XName = W.w.getName('adjustLineHeightInTable');

  /**
   * Represents the `w:adjustRightInd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly adjustRightInd: XName = W.w.getName('adjustRightInd');

  /**
   * Represents the `w:after` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly after: XName = W.w.getName('after');

  /**
   * Represents the `w:afterAutospacing` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly afterAutospacing: XName = W.w.getName('afterAutospacing');

  /**
   * Represents the `w:afterLines` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly afterLines: XName = W.w.getName('afterLines');

  /**
   * Represents the `w:algIdExt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly algIdExt: XName = W.w.getName('algIdExt');

  /**
   * Represents the `w:algIdExtSource` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly algIdExtSource: XName = W.w.getName('algIdExtSource');

  /**
   * Represents the `w:algorithmName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly algorithmName: XName = W.w.getName('algorithmName');

  /**
   * Represents the `w:alias` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly alias: XName = W.w.getName('alias');

  /**
   * Represents the `w:aliases` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly aliases: XName = W.w.getName('aliases');

  /**
   * Represents the `w:alignBordersAndEdges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly alignBordersAndEdges: XName = W.w.getName('alignBordersAndEdges');

  /**
   * Represents the `w:alignment` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ptab w:ptab}
   */
  public static readonly alignment: XName = W.w.getName('alignment');

  /**
   * Represents the `w:alignTablesRowByRow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly alignTablesRowByRow: XName = W.w.getName('alignTablesRowByRow');

  /**
   * Represents the `w:all` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode types w:types}
   */
  public static readonly all: XName = W.w.getName('all');

  /**
   * Represents the `w:allowPNG` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly allowPNG: XName = W.w.getName('allowPNG');

  /**
   * Represents the `w:allowSpaceOfSameStyleInTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly allowSpaceOfSameStyleInTable: XName = W.w.getName('allowSpaceOfSameStyleInTable');

  /**
   * Represents the `w:allStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly allStyles: XName = W.w.getName('allStyles');

  /**
   * Represents the `w:altChunk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode tc w:tc}, {@linkcode txbxContent w:txbxContent}
   * - child XML elements: {@linkcode altChunkPr w:altChunkPr}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly altChunk: XName = W.w.getName('altChunk');

  /**
   * Represents the `w:altChunkPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode altChunk w:altChunk}
   * - child XML elements: {@linkcode matchSrc w:matchSrc}
   */
  public static readonly altChunkPr: XName = W.w.getName('altChunkPr');

  /**
   * Represents the `w:alternateStyleNames` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly alternateStyleNames: XName = W.w.getName('alternateStyleNames');

  /**
   * Represents the `w:altName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly altName: XName = W.w.getName('altName');

  /**
   * Represents the `w:alwaysMergeEmptyNamespace` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly alwaysMergeEmptyNamespace: XName = W.w.getName('alwaysMergeEmptyNamespace');

  /**
   * Represents the `w:alwaysShowPlaceholderText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly alwaysShowPlaceholderText: XName = W.w.getName('alwaysShowPlaceholderText');

  /**
   * Represents the `w:anchor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode hyperlink w:hyperlink}
   */
  public static readonly anchor: XName = W.w.getName('anchor');

  /**
   * Represents the `w:anchorLock` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly anchorLock: XName = W.w.getName('anchorLock');

  /**
   * Represents the `w:annotationRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly annotationRef: XName = W.w.getName('annotationRef');

  /**
   * Represents the `w:applyBreakingRules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly applyBreakingRules: XName = W.w.getName('applyBreakingRules');

  /**
   * Represents the `w:appName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}
   */
  public static readonly appName: XName = W.w.getName('appName');

  /**
   * Represents the `w:ascii` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly ascii: XName = W.w.getName('ascii');

  /**
   * Represents the `w:asciiTheme` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly asciiTheme: XName = W.w.getName('asciiTheme');

  /**
   * Represents the `w:attachedSchema` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly attachedSchema: XName = W.w.getName('attachedSchema');

  /**
   * Represents the `w:attachedTemplate` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly attachedTemplate: XName = W.w.getName('attachedTemplate');

  /**
   * Represents the `w:attr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customXmlPr w:customXmlPr}
   * - XML attributes: {@linkcode name_ w:name_}, {@linkcode uri w:uri}, {@linkcode val w:val}
   */
  public static readonly attr: XName = W.w.getName('attr');

  /**
   * Represents the `w:author` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cellDel w:cellDel}, {@linkcode cellIns w:cellIns}, {@linkcode cellMerge w:cellMerge}, {@linkcode comment w:comment}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode numberingChange w:numberingChange}, {@linkcode pPrChange w:pPrChange}, {@linkcode rPrChange w:rPrChange}, {@linkcode sectPrChange w:sectPrChange}, {@linkcode tblPrChange w:tblPrChange}, {@linkcode tblPrExChange w:tblPrExChange}, {@linkcode tcPrChange w:tcPrChange}, {@linkcode trPrChange w:trPrChange}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly author: XName = W.w.getName('author');

  /**
   * Represents the `w:autoCaption` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode autoCaptions w:autoCaptions}
   * - XML attributes: {@linkcode caption w:caption}, {@linkcode name_ w:name_}
   */
  public static readonly autoCaption: XName = W.w.getName('autoCaption');

  /**
   * Represents the `w:autoCaptions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode captions w:captions}
   * - child XML elements: {@linkcode autoCaption w:autoCaption}
   */
  public static readonly autoCaptions: XName = W.w.getName('autoCaptions');

  /**
   * Represents the `w:autofitToFirstFixedWidthCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autofitToFirstFixedWidthCell: XName = W.w.getName('autofitToFirstFixedWidthCell');

  /**
   * Represents the `w:autoFormatOverride` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoFormatOverride: XName = W.w.getName('autoFormatOverride');

  /**
   * Represents the `w:autoHyphenation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoHyphenation: XName = W.w.getName('autoHyphenation');

  /**
   * Represents the `w:autoRedefine` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoRedefine: XName = W.w.getName('autoRedefine');

  /**
   * Represents the `w:autoSpaceDE` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoSpaceDE: XName = W.w.getName('autoSpaceDE');

  /**
   * Represents the `w:autoSpaceDN` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoSpaceDN: XName = W.w.getName('autoSpaceDN');

  /**
   * Represents the `w:autoSpaceLikeWord95` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly autoSpaceLikeWord95: XName = W.w.getName('autoSpaceLikeWord95');

  /**
   * Represents the `w:b` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly b: XName = W.w.getName('b');

  /**
   * Represents the `w:background` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode document w:document}, {@linkcode glossaryDocument w:glossaryDocument}
   * - child XML elements: {@linkcode V.background v:background}
   * - XML attributes: {@linkcode color w:color}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}
   */
  public static readonly background: XName = W.w.getName('background');

  /**
   * Represents the `w:balanceSingleByteDoubleByteWidth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly balanceSingleByteDoubleByteWidth: XName = W.w.getName('balanceSingleByteDoubleByteWidth');

  /**
   * Represents the `w:bar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pBdr w:pBdr}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly bar: XName = W.w.getName('bar');

  /**
   * Represents the `w:basedOn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly basedOn: XName = W.w.getName('basedOn');

  /**
   * Represents the `w:bCs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bCs: XName = W.w.getName('bCs');

  /**
   * Represents the `w:bdo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bdo: XName = W.w.getName('bdo');

  /**
   * Represents the `w:bdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly bdr: XName = W.w.getName('bdr');

  /**
   * Represents the `w:before` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly before: XName = W.w.getName('before');

  /**
   * Represents the `w:beforeAutospacing` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly beforeAutospacing: XName = W.w.getName('beforeAutospacing');

  /**
   * Represents the `w:beforeLines` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly beforeLines: XName = W.w.getName('beforeLines');

  /**
   * Represents the `w:behavior` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode behaviors w:behaviors}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly behavior: XName = W.w.getName('behavior');

  /**
   * Represents the `w:behaviors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}
   * - child XML elements: {@linkcode behavior w:behavior}
   */
  public static readonly behaviors: XName = W.w.getName('behaviors');

  /**
   * Represents the `w:between` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pBdr w:pBdr}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly between: XName = W.w.getName('between');

  /**
   * Represents the `w:bg1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly bg1: XName = W.w.getName('bg1');

  /**
   * Represents the `w:bg2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly bg2: XName = W.w.getName('bg2');

  /**
   * Represents the `w:bibliography` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly bibliography: XName = W.w.getName('bibliography');

  /**
   * Represents the `w:bidi` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lang w:lang}, {@linkcode themeFontLang w:themeFontLang}
   */
  public static readonly bidi: XName = W.w.getName('bidi');

  /**
   * Represents the `w:bidiVisual` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bidiVisual: XName = W.w.getName('bidiVisual');

  /**
   * Represents the `w:blockQuote` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly blockQuote: XName = W.w.getName('blockQuote');

  /**
   * Represents the `w:body` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode document w:document}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode sectPr w:sectPr}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly body: XName = W.w.getName('body');

  /**
   * Represents the `w:bodyDiv` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bodyDiv: XName = W.w.getName('bodyDiv');

  /**
   * Represents the `w:bookFoldPrinting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bookFoldPrinting: XName = W.w.getName('bookFoldPrinting');

  /**
   * Represents the `w:bookFoldPrintingSheets` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bookFoldPrintingSheets: XName = W.w.getName('bookFoldPrintingSheets');

  /**
   * Represents the `w:bookFoldRevPrinting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bookFoldRevPrinting: XName = W.w.getName('bookFoldRevPrinting');

  /**
   * Represents the `w:bookmarkEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly bookmarkEnd: XName = W.w.getName('bookmarkEnd');

  /**
   * Represents the `w:bookmarkStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode colFirst w:colFirst}, {@linkcode colLast w:colLast}, {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}, {@linkcode name_ w:name_}
   */
  public static readonly bookmarkStart: XName = W.w.getName('bookmarkStart');

  /**
   * Represents the `w:bordersDoNotSurroundFooter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bordersDoNotSurroundFooter: XName = W.w.getName('bordersDoNotSurroundFooter');

  /**
   * Represents the `w:bordersDoNotSurroundHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly bordersDoNotSurroundHeader: XName = W.w.getName('bordersDoNotSurroundHeader');

  /**
   * Represents the `w:bottom` XML elements and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode divBdr w:divBdr}, {@linkcode pBdr w:pBdr}, {@linkcode pgBorders w:pgBorders}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgMar w:pgMar}
   */
  public static readonly bottom: XName = W.w.getName('bottom');

  /**
   * Represents the `w:bottomFromText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly bottomFromText: XName = W.w.getName('bottomFromText');

  /**
   * Represents the `w:br` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode clear w:clear}, {@linkcode type w:type}
   */
  public static readonly br: XName = W.w.getName('br');

  /**
   * Represents the `w:cachedColBalance` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly cachedColBalance: XName = W.w.getName('cachedColBalance');

  /**
   * Represents the `w:calcOnExit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly calcOnExit: XName = W.w.getName('calcOnExit');

  /**
   * Represents the `w:calendar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode date w:date}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly calendar: XName = W.w.getName('calendar');

  /**
   * Represents the `w:cantSplit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly cantSplit: XName = W.w.getName('cantSplit');

  /**
   * Represents the `w:caps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly caps: XName = W.w.getName('caps');

  /**
   * Represents the `w:caption` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode captions w:captions}
   * - XML attributes: {@linkcode chapNum w:chapNum}, {@linkcode heading w:heading}, {@linkcode name_ w:name_}, {@linkcode noLabel w:noLabel}, {@linkcode numFmt w:numFmt}, {@linkcode pos w:pos}, {@linkcode sep w:sep}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode autoCaption w:autoCaption}
   */
  public static readonly caption: XName = W.w.getName('caption');

  /**
   * Represents the `w:captions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode autoCaptions w:autoCaptions}, {@linkcode caption w:caption}
   */
  public static readonly captions: XName = W.w.getName('captions');

  /**
   * Represents the `w:category` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}
   * - child XML elements: {@linkcode gallery w:gallery}, {@linkcode name_ w:name_}
   */
  public static readonly category: XName = W.w.getName('category');

  /**
   * Represents the `w:cellDel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly cellDel: XName = W.w.getName('cellDel');

  /**
   * Represents the `w:cellIns` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly cellIns: XName = W.w.getName('cellIns');

  /**
   * Represents the `w:cellMerge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}, {@linkcode vMerge w:vMerge}, {@linkcode vMergeOrig w:vMergeOrig}
   */
  public static readonly cellMerge: XName = W.w.getName('cellMerge');

  /**
   * Represents the `w:chapNum` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}
   */
  public static readonly chapNum: XName = W.w.getName('chapNum');

  /**
   * Represents the `w:chapSep` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgNumType w:pgNumType}
   */
  public static readonly chapSep: XName = W.w.getName('chapSep');

  /**
   * Represents the `w:chapStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgNumType w:pgNumType}
   */
  public static readonly chapStyle: XName = W.w.getName('chapStyle');

  /**
   * Represents the `w:char` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sym w:sym}
   */
  public static readonly char: XName = W.w.getName('char');

  /**
   * Represents the `w:characterSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode charset w:charset}
   */
  public static readonly characterSet: XName = W.w.getName('characterSet');

  /**
   * Represents the `w:characterSpacingControl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly characterSpacingControl: XName = W.w.getName('characterSpacingControl');

  /**
   * Represents the `w:charset` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode characterSet w:characterSet}, {@linkcode val w:val}
   */
  public static readonly charset: XName = W.w.getName('charset');

  /**
   * Represents the `w:charSpace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode docGrid w:docGrid}
   */
  public static readonly charSpace: XName = W.w.getName('charSpace');

  /**
   * Represents the `w:checkBox` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - child XML elements: {@linkcode checked w:checked}, {@linkcode default w:default}, {@linkcode size w:size}, {@linkcode sizeAuto w:sizeAuto}
   */
  public static readonly checkBox: XName = W.w.getName('checkBox');

  /**
   * Represents the `w:checked` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkBox w:checkBox}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly checked: XName = W.w.getName('checked');

  /**
   * Represents the `w:checkErrors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly checkErrors: XName = W.w.getName('checkErrors');

  /**
   * Represents the `w:checkStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}
   */
  public static readonly checkStyle: XName = W.w.getName('checkStyle');

  /**
   * Represents the `w:citation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly citation: XName = W.w.getName('citation');

  /**
   * Represents the `w:clear` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode br w:br}
   */
  public static readonly clear: XName = W.w.getName('clear');

  /**
   * Represents the `w:clearFormatting` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly clearFormatting: XName = W.w.getName('clearFormatting');

  /**
   * Represents the `w:clickAndTypeStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly clickAndTypeStyle: XName = W.w.getName('clickAndTypeStyle');

  /**
   * Represents the `w:clrSchemeMapping` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode accent1 w:accent1}, {@linkcode accent2 w:accent2}, {@linkcode accent3 w:accent3}, {@linkcode accent4 w:accent4}, {@linkcode accent5 w:accent5}, {@linkcode accent6 w:accent6}, {@linkcode bg1 w:bg1}, {@linkcode bg2 w:bg2}, {@linkcode followedHyperlink w:followedHyperlink}, {@linkcode hyperlink w:hyperlink}, {@linkcode t1 w:t1}, {@linkcode t2 w:t2}
   */
  public static readonly clrSchemeMapping: XName = W.w.getName('clrSchemeMapping');

  /**
   * Represents the `w:cnfStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode tcPr w:tcPr}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode evenHBand w:evenHBand}, {@linkcode evenVBand w:evenVBand}, {@linkcode firstColumn w:firstColumn}, {@linkcode firstRow w:firstRow}, {@linkcode firstRowFirstColumn w:firstRowFirstColumn}, {@linkcode firstRowLastColumn w:firstRowLastColumn}, {@linkcode lastColumn w:lastColumn}, {@linkcode lastRow w:lastRow}, {@linkcode lastRowFirstColumn w:lastRowFirstColumn}, {@linkcode lastRowLastColumn w:lastRowLastColumn}, {@linkcode oddHBand w:oddHBand}, {@linkcode oddVBand w:oddVBand}, {@linkcode val w:val}
   */
  public static readonly cnfStyle: XName = W.w.getName('cnfStyle');

  /**
   * Represents the `w:code` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgSz w:pgSz}
   */
  public static readonly code: XName = W.w.getName('code');

  /**
   * Represents the `w:col` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cols w:cols}
   * - XML attributes: {@linkcode space w:space}, {@linkcode w_ w:w_}
   */
  public static readonly col: XName = W.w.getName('col');

  /**
   * Represents the `w:colDelim` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly colDelim: XName = W.w.getName('colDelim');

  /**
   * Represents the `w:colFirst` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permStart w:permStart}
   */
  public static readonly colFirst: XName = W.w.getName('colFirst');

  /**
   * Represents the `w:colLast` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permStart w:permStart}
   */
  public static readonly colLast: XName = W.w.getName('colLast');

  /**
   * Represents the `w:color` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode framesetSplitbar w:framesetSplitbar}, {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode background w:background}, {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode shd w:shd}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}, {@linkcode u w:u}
   */
  public static readonly color: XName = W.w.getName('color');

  /**
   * Represents the `w:cols` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - child XML elements: {@linkcode col w:col}
   * - XML attributes: {@linkcode equalWidth w:equalWidth}, {@linkcode num w:num}, {@linkcode sep w:sep}, {@linkcode space w:space}
   */
  public static readonly cols: XName = W.w.getName('cols');

  /**
   * Represents the `w:column` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldMapData w:fieldMapData}, {@linkcode recipientData w:recipientData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly column: XName = W.w.getName('column');

  /**
   * Represents the `w:combine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode eastAsianLayout w:eastAsianLayout}
   */
  public static readonly combine: XName = W.w.getName('combine');

  /**
   * Represents the `w:combineBrackets` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode eastAsianLayout w:eastAsianLayout}
   */
  public static readonly combineBrackets: XName = W.w.getName('combineBrackets');

  /**
   * Represents the `w:comboBox` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode listItem w:listItem}
   * - XML attributes: {@linkcode lastValue w:lastValue}
   */
  public static readonly comboBox: XName = W.w.getName('comboBox');

  /**
   * Represents the `w:comment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comments w:comments}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode customXml w:customXml}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}, {@linkcode initials w:initials}
   */
  public static readonly comment: XName = W.w.getName('comment');

  /**
   * Represents the `w:commentRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly commentRangeEnd: XName = W.w.getName('commentRangeEnd');

  /**
   * Represents the `w:commentRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly commentRangeStart: XName = W.w.getName('commentRangeStart');

  /**
   * Represents the `w:commentReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly commentReference: XName = W.w.getName('commentReference');

  /**
   * Represents the `w:comments` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode comment w:comment}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode revisionView w:revisionView}
   */
  public static readonly comments: XName = W.w.getName('comments');

  /**
   * Represents the `w:compat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode adjustLineHeightInTable w:adjustLineHeightInTable}, {@linkcode alignTablesRowByRow w:alignTablesRowByRow}, {@linkcode allowSpaceOfSameStyleInTable w:allowSpaceOfSameStyleInTable}, {@linkcode applyBreakingRules w:applyBreakingRules}, {@linkcode autofitToFirstFixedWidthCell w:autofitToFirstFixedWidthCell}, {@linkcode autoSpaceLikeWord95 w:autoSpaceLikeWord95}, {@linkcode balanceSingleByteDoubleByteWidth w:balanceSingleByteDoubleByteWidth}, {@linkcode cachedColBalance w:cachedColBalance}, {@linkcode compatSetting w:compatSetting}, {@linkcode convMailMergeEsc w:convMailMergeEsc}, {@linkcode displayHangulFixedWidth w:displayHangulFixedWidth}, {@linkcode doNotAutofitConstrainedTables w:doNotAutofitConstrainedTables}, {@linkcode doNotBreakConstrainedForcedTable w:doNotBreakConstrainedForcedTable}, {@linkcode doNotBreakWrappedTables w:doNotBreakWrappedTables}, {@linkcode doNotExpandShiftReturn w:doNotExpandShiftReturn}, {@linkcode doNotLeaveBackslashAlone w:doNotLeaveBackslashAlone}, {@linkcode doNotSnapToGridInCell w:doNotSnapToGridInCell}, {@linkcode doNotSuppressIndentation w:doNotSuppressIndentation}, {@linkcode doNotSuppressParagraphBorders w:doNotSuppressParagraphBorders}, {@linkcode doNotUseEastAsianBreakRules w:doNotUseEastAsianBreakRules}, {@linkcode doNotUseHTMLParagraphAutoSpacing w:doNotUseHTMLParagraphAutoSpacing}, {@linkcode doNotUseIndentAsNumberingTabStop w:doNotUseIndentAsNumberingTabStop}, {@linkcode doNotVertAlignCellWithSp w:doNotVertAlignCellWithSp}, {@linkcode doNotVertAlignInTxbx w:doNotVertAlignInTxbx}, {@linkcode doNotWrapTextWithPunct w:doNotWrapTextWithPunct}, {@linkcode footnoteLayoutLikeWW8 w:footnoteLayoutLikeWW8}, {@linkcode forgetLastTabAlignment w:forgetLastTabAlignment}, {@linkcode growAutofit w:growAutofit}, {@linkcode layoutRawTableWidth w:layoutRawTableWidth}, {@linkcode layoutTableRowsApart w:layoutTableRowsApart}, {@linkcode lineWrapLikeWord6 w:lineWrapLikeWord6}, {@linkcode mwSmallCaps w:mwSmallCaps}, {@linkcode noColumnBalance w:noColumnBalance}, {@linkcode noExtraLineSpacing w:noExtraLineSpacing}, {@linkcode noLeading w:noLeading}, {@linkcode noSpaceRaiseLower w:noSpaceRaiseLower}, {@linkcode noTabHangInd w:noTabHangInd}, {@linkcode printBodyTextBeforeHeader w:printBodyTextBeforeHeader}, {@linkcode printColBlack w:printColBlack}, {@linkcode selectFldWithFirstOrLastChar w:selectFldWithFirstOrLastChar}, {@linkcode shapeLayoutLikeWW8 w:shapeLayoutLikeWW8}, {@linkcode showBreaksInFrames w:showBreaksInFrames}, {@linkcode spaceForUL w:spaceForUL}, {@linkcode spacingInWholePoints w:spacingInWholePoints}, {@linkcode splitPgBreakAndParaMark w:splitPgBreakAndParaMark}, {@linkcode subFontBySize w:subFontBySize}, {@linkcode suppressBottomSpacing w:suppressBottomSpacing}, {@linkcode suppressSpacingAtTopOfPage w:suppressSpacingAtTopOfPage}, {@linkcode suppressSpBfAfterPgBrk w:suppressSpBfAfterPgBrk}, {@linkcode suppressTopSpacing w:suppressTopSpacing}, {@linkcode suppressTopSpacingWP w:suppressTopSpacingWP}, {@linkcode swapBordersFacingPages w:swapBordersFacingPages}, {@linkcode truncateFontHeightsLikeWP6 w:truncateFontHeightsLikeWP6}, {@linkcode ulTrailSpace w:ulTrailSpace}, {@linkcode underlineTabInNumList w:underlineTabInNumList}, {@linkcode useAltKinsokuLineBreakRules w:useAltKinsokuLineBreakRules}, {@linkcode useAnsiKerningPairs w:useAnsiKerningPairs}, {@linkcode useFELayout w:useFELayout}, {@linkcode useNormalStyleForList w:useNormalStyleForList}, {@linkcode usePrinterMetrics w:usePrinterMetrics}, {@linkcode useSingleBorderforContiguousCells w:useSingleBorderforContiguousCells}, {@linkcode useWord2002TableStyleRules w:useWord2002TableStyleRules}, {@linkcode useWord97LineBreakRules w:useWord97LineBreakRules}, {@linkcode wpJustification w:wpJustification}, {@linkcode wpSpaceWidth w:wpSpaceWidth}, {@linkcode wrapTrailSpaces w:wrapTrailSpaces}
   */
  public static readonly compat: XName = W.w.getName('compat');

  /**
   * Represents the `w:compatSetting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode name_ w:name_}, {@linkcode uri w:uri}, {@linkcode val w:val}
   */
  public static readonly compatSetting: XName = W.w.getName('compatSetting');

  /**
   * Represents the `w:conformance` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode document w:document}
   */
  public static readonly conformance: XName = W.w.getName('conformance');

  /**
   * Represents the `w:connectString` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly connectString: XName = W.w.getName('connectString');

  /**
   * Represents the `w:consecutiveHyphenLimit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly consecutiveHyphenLimit: XName = W.w.getName('consecutiveHyphenLimit');

  /**
   * Represents the `w:contentPart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly contentPart: XName = W.w.getName('contentPart');

  /**
   * Represents the `w:contextualSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly contextualSpacing: XName = W.w.getName('contextualSpacing');

  /**
   * Represents the `w:continuationSeparator` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly continuationSeparator: XName = W.w.getName('continuationSeparator');

  /**
   * Represents the `w:control` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode object w:object}, {@linkcode pict w:pict}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode name_ w:name_}, {@linkcode shapeid w:shapeid}
   */
  public static readonly control: XName = W.w.getName('control');

  /**
   * Represents the `w:convMailMergeEsc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly convMailMergeEsc: XName = W.w.getName('convMailMergeEsc');

  /**
   * Represents the `w:count` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly count: XName = W.w.getName('count');

  /**
   * Represents the `w:countBy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lnNumType w:lnNumType}
   */
  public static readonly countBy: XName = W.w.getName('countBy');

  /**
   * Represents the `w:cr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly cr: XName = W.w.getName('cr');

  /**
   * Represents the `w:cryptAlgorithmClass` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptAlgorithmClass: XName = W.w.getName('cryptAlgorithmClass');

  /**
   * Represents the `w:cryptAlgorithmSid` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptAlgorithmSid: XName = W.w.getName('cryptAlgorithmSid');

  /**
   * Represents the `w:cryptAlgorithmType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptAlgorithmType: XName = W.w.getName('cryptAlgorithmType');

  /**
   * Represents the `w:cryptProvider` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptProvider: XName = W.w.getName('cryptProvider');

  /**
   * Represents the `w:cryptProviderType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptProviderType: XName = W.w.getName('cryptProviderType');

  /**
   * Represents the `w:cryptProviderTypeExt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptProviderTypeExt: XName = W.w.getName('cryptProviderTypeExt');

  /**
   * Represents the `w:cryptProviderTypeExtSource` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptProviderTypeExtSource: XName = W.w.getName('cryptProviderTypeExtSource');

  /**
   * Represents the `w:cryptSpinCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly cryptSpinCount: XName = W.w.getName('cryptSpinCount');

  /**
   * Represents the `w:cs` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly cs: XName = W.w.getName('cs');

  /**
   * Represents the `w:csb0` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly csb0: XName = W.w.getName('csb0');

  /**
   * Represents the `w:csb1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly csb1: XName = W.w.getName('csb1');

  /**
   * Represents the `w:cstheme` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly cstheme: XName = W.w.getName('cstheme');

  /**
   * Represents the `w:customMarkFollows` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode endnoteReference w:endnoteReference}, {@linkcode footnoteReference w:footnoteReference}
   */
  public static readonly customMarkFollows: XName = W.w.getName('customMarkFollows');

  /**
   * Represents the `w:customStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode style w:style}
   */
  public static readonly customStyle: XName = W.w.getName('customStyle');

  /**
   * Represents the `w:customStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly customStyles: XName = W.w.getName('customStyles');

  /**
   * Represents the `w:customXml` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode customXmlPr w:customXmlPr}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode element w:element}
   */
  public static readonly customXml: XName = W.w.getName('customXml');

  /**
   * Represents the `w:customXmlDelRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly customXmlDelRangeEnd: XName = W.w.getName('customXmlDelRangeEnd');

  /**
   * Represents the `w:customXmlDelRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly customXmlDelRangeStart: XName = W.w.getName('customXmlDelRangeStart');

  /**
   * Represents the `w:customXmlInsRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly customXmlInsRangeEnd: XName = W.w.getName('customXmlInsRangeEnd');

  /**
   * Represents the `w:customXmlInsRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly customXmlInsRangeStart: XName = W.w.getName('customXmlInsRangeStart');

  /**
   * Represents the `w:customXmlMoveFromRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly customXmlMoveFromRangeEnd: XName = W.w.getName('customXmlMoveFromRangeEnd');

  /**
   * Represents the `w:customXmlMoveFromRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly customXmlMoveFromRangeStart: XName = W.w.getName('customXmlMoveFromRangeStart');

  /**
   * Represents the `w:customXmlMoveToRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly customXmlMoveToRangeEnd: XName = W.w.getName('customXmlMoveToRangeEnd');

  /**
   * Represents the `w:customXmlMoveToRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly customXmlMoveToRangeStart: XName = W.w.getName('customXmlMoveToRangeStart');

  /**
   * Represents the `w:customXmlPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customXml w:customXml}
   * - child XML elements: {@linkcode attr w:attr}, {@linkcode placeholder w:placeholder}
   */
  public static readonly customXmlPr: XName = W.w.getName('customXmlPr');

  /**
   * Represents the `w:dataBinding` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode prefixMappings w:prefixMappings}, {@linkcode storeItemID w:storeItemID}, {@linkcode xpath w:xpath}
   */
  public static readonly dataBinding: XName = W.w.getName('dataBinding');

  /**
   * Represents the `w:dataSource` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly dataSource: XName = W.w.getName('dataSource');

  /**
   * Represents the `w:dataType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly dataType: XName = W.w.getName('dataType');

  /**
   * Represents the `w:date` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode calendar w:calendar}, {@linkcode dateFormat w:dateFormat}, {@linkcode lid w:lid}, {@linkcode storeMappedDataAs w:storeMappedDataAs}
   * - XML attributes: {@linkcode fullDate w:fullDate}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cellDel w:cellDel}, {@linkcode cellIns w:cellIns}, {@linkcode cellMerge w:cellMerge}, {@linkcode comment w:comment}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode numberingChange w:numberingChange}, {@linkcode pPrChange w:pPrChange}, {@linkcode rPrChange w:rPrChange}, {@linkcode sectPrChange w:sectPrChange}, {@linkcode tblPrChange w:tblPrChange}, {@linkcode tblPrExChange w:tblPrExChange}, {@linkcode tcPrChange w:tcPrChange}, {@linkcode trPrChange w:trPrChange}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly date: XName = W.w.getName('date');

  /**
   * Represents the `w:dateFormat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode date w:date}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly dateFormat: XName = W.w.getName('dateFormat');

  /**
   * Represents the `w:dayLong` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly dayLong: XName = W.w.getName('dayLong');

  /**
   * Represents the `w:dayShort` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly dayShort: XName = W.w.getName('dayShort');

  /**
   * Represents the `w:ddList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - child XML elements: {@linkcode default w:default}, {@linkcode listEntry w:listEntry}, {@linkcode result w:result}
   */
  public static readonly ddList: XName = W.w.getName('ddList');

  /**
   * Represents the `w:decimalSymbol` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly decimalSymbol: XName = W.w.getName('decimalSymbol');

  /**
   * Represents the `w:decorated` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode name_ w:name_}
   */
  public static readonly decorated: XName = W.w.getName('decorated');

  /**
   * Represents the `w:default` XML elements and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkBox w:checkBox}, {@linkcode ddList w:ddList}, {@linkcode textInput w:textInput}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode style w:style}
   */
  public static readonly default: XName = W.w.getName('default');

  /**
   * Represents the `w:defaultTableStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly defaultTableStyle: XName = W.w.getName('defaultTableStyle');

  /**
   * Represents the `w:defaultTabStop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly defaultTabStop: XName = W.w.getName('defaultTabStop');

  /**
   * Represents the `w:defLockedState` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly defLockedState: XName = W.w.getName('defLockedState');

  /**
   * Represents the `w:defQFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly defQFormat: XName = W.w.getName('defQFormat');

  /**
   * Represents the `w:defSemiHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly defSemiHidden: XName = W.w.getName('defSemiHidden');

  /**
   * Represents the `w:defUIPriority` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly defUIPriority: XName = W.w.getName('defUIPriority');

  /**
   * Represents the `w:defUnhideWhenUsed` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode latentStyles w:latentStyles}
   */
  public static readonly defUnhideWhenUsed: XName = W.w.getName('defUnhideWhenUsed');

  /**
   * Represents the `w:del` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.ctrlPr m:ctrlPr}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rPr w:rPr}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode trPr w:trPr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode rPr w:rPr}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly del: XName = W.w.getName('del');

  /**
   * Represents the `w:delInstrText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly delInstrText: XName = W.w.getName('delInstrText');

  /**
   * Represents the `w:delText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly delText: XName = W.w.getName('delText');

  /**
   * Represents the `w:description` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly description: XName = W.w.getName('description');

  /**
   * Represents the `w:destination` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly destination: XName = W.w.getName('destination');

  /**
   * Represents the `w:dir` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly dir: XName = W.w.getName('dir');

  /**
   * Represents the `w:directFormattingOnNumbering` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly directFormattingOnNumbering: XName = W.w.getName('directFormattingOnNumbering');

  /**
   * Represents the `w:directFormattingOnParagraphs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly directFormattingOnParagraphs: XName = W.w.getName('directFormattingOnParagraphs');

  /**
   * Represents the `w:directFormattingOnRuns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly directFormattingOnRuns: XName = W.w.getName('directFormattingOnRuns');

  /**
   * Represents the `w:directFormattingOnTables` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly directFormattingOnTables: XName = W.w.getName('directFormattingOnTables');

  /**
   * Represents the `w:dirty` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fldChar w:fldChar}, {@linkcode fldSimple w:fldSimple}
   */
  public static readonly dirty: XName = W.w.getName('dirty');

  /**
   * Represents the `w:displacedByCustomXml` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}
   */
  public static readonly displacedByCustomXml: XName = W.w.getName('displacedByCustomXml');

  /**
   * Represents the `w:display` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgBorders w:pgBorders}
   */
  public static readonly display: XName = W.w.getName('display');

  /**
   * Represents the `w:displayBackgroundShape` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly displayBackgroundShape: XName = W.w.getName('displayBackgroundShape');

  /**
   * Represents the `w:displayHangulFixedWidth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly displayHangulFixedWidth: XName = W.w.getName('displayHangulFixedWidth');

  /**
   * Represents the `w:displayHorizontalDrawingGridEvery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly displayHorizontalDrawingGridEvery: XName = W.w.getName('displayHorizontalDrawingGridEvery');

  /**
   * Represents the `w:displayText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode listItem w:listItem}
   */
  public static readonly displayText: XName = W.w.getName('displayText');

  /**
   * Represents the `w:displayVerticalDrawingGridEvery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly displayVerticalDrawingGridEvery: XName = W.w.getName('displayVerticalDrawingGridEvery');

  /**
   * Represents the `w:distance` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lnNumType w:lnNumType}
   */
  public static readonly distance: XName = W.w.getName('distance');

  /**
   * Represents the `w:div` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode divs w:divs}, {@linkcode divsChild w:divsChild}
   * - child XML elements: {@linkcode blockQuote w:blockQuote}, {@linkcode bodyDiv w:bodyDiv}, {@linkcode divBdr w:divBdr}, {@linkcode divsChild w:divsChild}, {@linkcode marBottom w:marBottom}, {@linkcode marLeft w:marLeft}, {@linkcode marRight w:marRight}, {@linkcode marTop w:marTop}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly div: XName = W.w.getName('div');

  /**
   * Represents the `w:divBdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode top w:top}
   */
  public static readonly divBdr: XName = W.w.getName('divBdr');

  /**
   * Represents the `w:divId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly divId: XName = W.w.getName('divId');

  /**
   * Represents the `w:divs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - child XML elements: {@linkcode div w:div}
   */
  public static readonly divs: XName = W.w.getName('divs');

  /**
   * Represents the `w:divsChild` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - child XML elements: {@linkcode div w:div}
   */
  public static readonly divsChild: XName = W.w.getName('divsChild');

  /**
   * Represents the `w:dllVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}
   */
  public static readonly dllVersion: XName = W.w.getName('dllVersion');

  /**
   * Represents the `w:docDefaults` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styles w:styles}
   * - child XML elements: {@linkcode pPrDefault w:pPrDefault}, {@linkcode rPrDefault w:rPrDefault}
   */
  public static readonly docDefaults: XName = W.w.getName('docDefaults');

  /**
   * Represents the `w:docGrid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode charSpace w:charSpace}, {@linkcode linePitch w:linePitch}, {@linkcode type w:type}
   */
  public static readonly docGrid: XName = W.w.getName('docGrid');

  /**
   * Represents the `w:docLocation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode hyperlink w:hyperlink}
   */
  public static readonly docLocation: XName = W.w.getName('docLocation');

  /**
   * Represents the `w:docPart` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docParts w:docParts}, {@linkcode placeholder w:placeholder}
   * - child XML elements: {@linkcode docPartBody w:docPartBody}, {@linkcode docPartPr w:docPartPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly docPart: XName = W.w.getName('docPart');

  /**
   * Represents the `w:docPartBody` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPart w:docPart}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode sectPr w:sectPr}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly docPartBody: XName = W.w.getName('docPartBody');

  /**
   * Represents the `w:docPartCategory` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartList w:docPartList}, {@linkcode docPartObj w:docPartObj}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly docPartCategory: XName = W.w.getName('docPartCategory');

  /**
   * Represents the `w:docPartGallery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartList w:docPartList}, {@linkcode docPartObj w:docPartObj}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly docPartGallery: XName = W.w.getName('docPartGallery');

  /**
   * Represents the `w:docPartList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode docPartCategory w:docPartCategory}, {@linkcode docPartGallery w:docPartGallery}, {@linkcode docPartUnique w:docPartUnique}
   */
  public static readonly docPartList: XName = W.w.getName('docPartList');

  /**
   * Represents the `w:docPartObj` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode docPartCategory w:docPartCategory}, {@linkcode docPartGallery w:docPartGallery}, {@linkcode docPartUnique w:docPartUnique}
   */
  public static readonly docPartObj: XName = W.w.getName('docPartObj');

  /**
   * Represents the `w:docPartPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPart w:docPart}
   * - child XML elements: {@linkcode behaviors w:behaviors}, {@linkcode category w:category}, {@linkcode description w:description}, {@linkcode guid w:guid}, {@linkcode name_ w:name_}, {@linkcode style w:style}, {@linkcode types w:types}
   */
  public static readonly docPartPr: XName = W.w.getName('docPartPr');

  /**
   * Represents the `w:docParts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode glossaryDocument w:glossaryDocument}
   * - child XML elements: {@linkcode docPart w:docPart}
   */
  public static readonly docParts: XName = W.w.getName('docParts');

  /**
   * Represents the `w:docPartUnique` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartList w:docPartList}, {@linkcode docPartObj w:docPartObj}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly docPartUnique: XName = W.w.getName('docPartUnique');

  /**
   * Represents the `w:document` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode background w:background}, {@linkcode body w:body}
   * - XML attributes: {@linkcode conformance w:conformance}
   */
  public static readonly document: XName = W.w.getName('document');

  /**
   * Represents the `w:documentProtection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode algIdExt w:algIdExt}, {@linkcode algIdExtSource w:algIdExtSource}, {@linkcode algorithmName w:algorithmName}, {@linkcode cryptAlgorithmClass w:cryptAlgorithmClass}, {@linkcode cryptAlgorithmSid w:cryptAlgorithmSid}, {@linkcode cryptAlgorithmType w:cryptAlgorithmType}, {@linkcode cryptProvider w:cryptProvider}, {@linkcode cryptProviderType w:cryptProviderType}, {@linkcode cryptProviderTypeExt w:cryptProviderTypeExt}, {@linkcode cryptProviderTypeExtSource w:cryptProviderTypeExtSource}, {@linkcode cryptSpinCount w:cryptSpinCount}, {@linkcode edit w:edit}, {@linkcode enforcement w:enforcement}, {@linkcode formatting w:formatting}, {@linkcode hash w:hash}, {@linkcode hashValue w:hashValue}, {@linkcode salt w:salt}, {@linkcode saltValue w:saltValue}, {@linkcode spinCount w:spinCount}
   */
  public static readonly documentProtection: XName = W.w.getName('documentProtection');

  /**
   * Represents the `w:documentType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly documentType: XName = W.w.getName('documentType');

  /**
   * Represents the `w:docVar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docVars w:docVars}
   * - XML attributes: {@linkcode name_ w:name_}, {@linkcode val w:val}
   */
  public static readonly docVar: XName = W.w.getName('docVar');

  /**
   * Represents the `w:docVars` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode docVar w:docVar}
   */
  public static readonly docVars: XName = W.w.getName('docVars');

  /**
   * Represents the `w:doNotAutoCompressPictures` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotAutoCompressPictures: XName = W.w.getName('doNotAutoCompressPictures');

  /**
   * Represents the `w:doNotAutofitConstrainedTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotAutofitConstrainedTables: XName = W.w.getName('doNotAutofitConstrainedTables');

  /**
   * Represents the `w:doNotBreakConstrainedForcedTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotBreakConstrainedForcedTable: XName = W.w.getName('doNotBreakConstrainedForcedTable');

  /**
   * Represents the `w:doNotBreakWrappedTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotBreakWrappedTables: XName = W.w.getName('doNotBreakWrappedTables');

  /**
   * Represents the `w:doNotDemarcateInvalidXml` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotDemarcateInvalidXml: XName = W.w.getName('doNotDemarcateInvalidXml');

  /**
   * Represents the `w:doNotDisplayPageBoundaries` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotDisplayPageBoundaries: XName = W.w.getName('doNotDisplayPageBoundaries');

  /**
   * Represents the `w:doNotExpandShiftReturn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotExpandShiftReturn: XName = W.w.getName('doNotExpandShiftReturn');

  /**
   * Represents the `w:doNotHyphenateCaps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotHyphenateCaps: XName = W.w.getName('doNotHyphenateCaps');

  /**
   * Represents the `w:doNotIncludeSubdocsInStats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotIncludeSubdocsInStats: XName = W.w.getName('doNotIncludeSubdocsInStats');

  /**
   * Represents the `w:doNotLeaveBackslashAlone` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotLeaveBackslashAlone: XName = W.w.getName('doNotLeaveBackslashAlone');

  /**
   * Represents the `w:doNotOrganizeInFolder` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotOrganizeInFolder: XName = W.w.getName('doNotOrganizeInFolder');

  /**
   * Represents the `w:doNotRelyOnCSS` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotRelyOnCSS: XName = W.w.getName('doNotRelyOnCSS');

  /**
   * Represents the `w:doNotSaveAsSingleFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotSaveAsSingleFile: XName = W.w.getName('doNotSaveAsSingleFile');

  /**
   * Represents the `w:doNotShadeFormData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotShadeFormData: XName = W.w.getName('doNotShadeFormData');

  /**
   * Represents the `w:doNotSnapToGridInCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotSnapToGridInCell: XName = W.w.getName('doNotSnapToGridInCell');

  /**
   * Represents the `w:doNotSuppressBlankLines` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotSuppressBlankLines: XName = W.w.getName('doNotSuppressBlankLines');

  /**
   * Represents the `w:doNotSuppressIndentation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotSuppressIndentation: XName = W.w.getName('doNotSuppressIndentation');

  /**
   * Represents the `w:doNotSuppressParagraphBorders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotSuppressParagraphBorders: XName = W.w.getName('doNotSuppressParagraphBorders');

  /**
   * Represents the `w:doNotTrackFormatting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotTrackFormatting: XName = W.w.getName('doNotTrackFormatting');

  /**
   * Represents the `w:doNotTrackMoves` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotTrackMoves: XName = W.w.getName('doNotTrackMoves');

  /**
   * Represents the `w:doNotUseEastAsianBreakRules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotUseEastAsianBreakRules: XName = W.w.getName('doNotUseEastAsianBreakRules');

  /**
   * Represents the `w:doNotUseHTMLParagraphAutoSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotUseHTMLParagraphAutoSpacing: XName = W.w.getName('doNotUseHTMLParagraphAutoSpacing');

  /**
   * Represents the `w:doNotUseIndentAsNumberingTabStop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotUseIndentAsNumberingTabStop: XName = W.w.getName('doNotUseIndentAsNumberingTabStop');

  /**
   * Represents the `w:doNotUseLongFileNames` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotUseLongFileNames: XName = W.w.getName('doNotUseLongFileNames');

  /**
   * Represents the `w:doNotUseMarginsForDrawingGridOrigin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotUseMarginsForDrawingGridOrigin: XName = W.w.getName('doNotUseMarginsForDrawingGridOrigin');

  /**
   * Represents the `w:doNotValidateAgainstSchema` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotValidateAgainstSchema: XName = W.w.getName('doNotValidateAgainstSchema');

  /**
   * Represents the `w:doNotVertAlignCellWithSp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotVertAlignCellWithSp: XName = W.w.getName('doNotVertAlignCellWithSp');

  /**
   * Represents the `w:doNotVertAlignInTxbx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotVertAlignInTxbx: XName = W.w.getName('doNotVertAlignInTxbx');

  /**
   * Represents the `w:doNotWrapTextWithPunct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly doNotWrapTextWithPunct: XName = W.w.getName('doNotWrapTextWithPunct');

  /**
   * Represents the `w:drawAspect` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectEmbed w:objectEmbed}, {@linkcode objectLink w:objectLink}
   */
  public static readonly drawAspect: XName = W.w.getName('drawAspect');

  /**
   * Represents the `w:drawing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode numPicBullet w:numPicBullet}, {@linkcode object w:object}, {@linkcode r w:r}
   * - child XML elements: {@linkcode WP.anchor wp:anchor}, {@linkcode WP.inline wp:inline}
   */
  public static readonly drawing: XName = W.w.getName('drawing');

  /**
   * Represents the `w:drawingGridHorizontalOrigin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly drawingGridHorizontalOrigin: XName = W.w.getName('drawingGridHorizontalOrigin');

  /**
   * Represents the `w:drawingGridHorizontalSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly drawingGridHorizontalSpacing: XName = W.w.getName('drawingGridHorizontalSpacing');

  /**
   * Represents the `w:drawingGridVerticalOrigin` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly drawingGridVerticalOrigin: XName = W.w.getName('drawingGridVerticalOrigin');

  /**
   * Represents the `w:drawingGridVerticalSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly drawingGridVerticalSpacing: XName = W.w.getName('drawingGridVerticalSpacing');

  /**
   * Represents the `w:dropCap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly dropCap: XName = W.w.getName('dropCap');

  /**
   * Represents the `w:dropDownList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode listItem w:listItem}
   * - XML attributes: {@linkcode lastValue w:lastValue}
   */
  public static readonly dropDownList: XName = W.w.getName('dropDownList');

  /**
   * Represents the `w:dstrike` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly dstrike: XName = W.w.getName('dstrike');

  /**
   * Represents the `w:dxaOrig` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode object w:object}
   */
  public static readonly dxaOrig: XName = W.w.getName('dxaOrig');

  /**
   * Represents the `w:dyaOrig` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode object w:object}
   */
  public static readonly dyaOrig: XName = W.w.getName('dyaOrig');

  /**
   * Represents the `w:dynamicAddress` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldMapData w:fieldMapData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly dynamicAddress: XName = W.w.getName('dynamicAddress');

  /**
   * Represents the `w:eastAsia` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lang w:lang}, {@linkcode rFonts w:rFonts}, {@linkcode themeFontLang w:themeFontLang}
   */
  public static readonly eastAsia: XName = W.w.getName('eastAsia');

  /**
   * Represents the `w:eastAsianLayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode combine w:combine}, {@linkcode combineBrackets w:combineBrackets}, {@linkcode id w:id}, {@linkcode vert w:vert}, {@linkcode vertCompress w:vertCompress}
   */
  public static readonly eastAsianLayout: XName = W.w.getName('eastAsianLayout');

  /**
   * Represents the `w:eastAsiaTheme` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly eastAsiaTheme: XName = W.w.getName('eastAsiaTheme');

  /**
   * Represents the `w:ed` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode permStart w:permStart}
   */
  public static readonly ed: XName = W.w.getName('ed');

  /**
   * Represents the `w:edGrp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode permStart w:permStart}
   */
  public static readonly edGrp: XName = W.w.getName('edGrp');

  /**
   * Represents the `w:edit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}
   */
  public static readonly edit: XName = W.w.getName('edit');

  /**
   * Represents the `w:effect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly effect: XName = W.w.getName('effect');

  /**
   * Represents the `w:element` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode customXml w:customXml}
   */
  public static readonly element: XName = W.w.getName('element');

  /**
   * Represents the `w:em` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly em: XName = W.w.getName('em');

  /**
   * Represents the `w:embedBold` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode fontKey w:fontKey}, {@linkcode subsetted w:subsetted}
   */
  public static readonly embedBold: XName = W.w.getName('embedBold');

  /**
   * Represents the `w:embedBoldItalic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode fontKey w:fontKey}, {@linkcode subsetted w:subsetted}
   */
  public static readonly embedBoldItalic: XName = W.w.getName('embedBoldItalic');

  /**
   * Represents the `w:embedItalic` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode fontKey w:fontKey}, {@linkcode subsetted w:subsetted}
   */
  public static readonly embedItalic: XName = W.w.getName('embedItalic');

  /**
   * Represents the `w:embedRegular` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode fontKey w:fontKey}, {@linkcode subsetted w:subsetted}
   */
  public static readonly embedRegular: XName = W.w.getName('embedRegular');

  /**
   * Represents the `w:embedSystemFonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly embedSystemFonts: XName = W.w.getName('embedSystemFonts');

  /**
   * Represents the `w:embedTrueTypeFonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly embedTrueTypeFonts: XName = W.w.getName('embedTrueTypeFonts');

  /**
   * Represents the `w:emboss` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly emboss: XName = W.w.getName('emboss');

  /**
   * Represents the `w:enabled` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly enabled: XName = W.w.getName('enabled');

  /**
   * Represents the `w:encoding` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly encoding: XName = W.w.getName('encoding');

  /**
   * Represents the `w:end` XML elements and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly end: XName = W.w.getName('end');

  /**
   * Represents the `w:endChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly endChars: XName = W.w.getName('endChars');

  /**
   * Represents the `w:endnote` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endnotePr w:endnotePr}, {@linkcode endnotes w:endnotes}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode id w:id}, {@linkcode type w:type}
   */
  public static readonly endnote: XName = W.w.getName('endnote');

  /**
   * Represents the `w:endnotePr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}, {@linkcode settings w:settings}
   * - child XML elements: {@linkcode endnote w:endnote}, {@linkcode numFmt w:numFmt}, {@linkcode numRestart w:numRestart}, {@linkcode numStart w:numStart}, {@linkcode pos w:pos}
   */
  public static readonly endnotePr: XName = W.w.getName('endnotePr');

  /**
   * Represents the `w:endnoteRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly endnoteRef: XName = W.w.getName('endnoteRef');

  /**
   * Represents the `w:endnoteReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode customMarkFollows w:customMarkFollows}, {@linkcode id w:id}
   */
  public static readonly endnoteReference: XName = W.w.getName('endnoteReference');

  /**
   * Represents the `w:endnotes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode endnote w:endnote}
   */
  public static readonly endnotes: XName = W.w.getName('endnotes');

  /**
   * Represents the `w:enforcement` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}
   */
  public static readonly enforcement: XName = W.w.getName('enforcement');

  /**
   * Represents the `w:entryMacro` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly entryMacro: XName = W.w.getName('entryMacro');

  /**
   * Represents the `w:equalWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cols w:cols}
   */
  public static readonly equalWidth: XName = W.w.getName('equalWidth');

  /**
   * Represents the `w:equation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly equation: XName = W.w.getName('equation');

  /**
   * Represents the `w:evenAndOddHeaders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly evenAndOddHeaders: XName = W.w.getName('evenAndOddHeaders');

  /**
   * Represents the `w:evenHBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly evenHBand: XName = W.w.getName('evenHBand');

  /**
   * Represents the `w:evenVBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly evenVBand: XName = W.w.getName('evenVBand');

  /**
   * Represents the `w:exitMacro` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly exitMacro: XName = W.w.getName('exitMacro');

  /**
   * Represents the `w:family` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly family: XName = W.w.getName('family');

  /**
   * Represents the `w:ffData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fldChar w:fldChar}
   * - child XML elements: {@linkcode calcOnExit w:calcOnExit}, {@linkcode checkBox w:checkBox}, {@linkcode ddList w:ddList}, {@linkcode enabled w:enabled}, {@linkcode entryMacro w:entryMacro}, {@linkcode exitMacro w:exitMacro}, {@linkcode helpText w:helpText}, {@linkcode name_ w:name_}, {@linkcode statusText w:statusText}, {@linkcode textInput w:textInput}
   */
  public static readonly ffData: XName = W.w.getName('ffData');

  /**
   * Represents the `w:fHdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly fHdr: XName = W.w.getName('fHdr');

  /**
   * Represents the `w:fieldCodes` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectEmbed w:objectEmbed}, {@linkcode objectLink w:objectLink}
   */
  public static readonly fieldCodes: XName = W.w.getName('fieldCodes');

  /**
   * Represents the `w:fieldMapData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - child XML elements: {@linkcode column w:column}, {@linkcode dynamicAddress w:dynamicAddress}, {@linkcode lid w:lid}, {@linkcode mappedName w:mappedName}, {@linkcode name_ w:name_}, {@linkcode type w:type}
   */
  public static readonly fieldMapData: XName = W.w.getName('fieldMapData');

  /**
   * Represents the `w:fill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shd w:shd}
   */
  public static readonly fill: XName = W.w.getName('fill');

  /**
   * Represents the `w:first` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode paperSrc w:paperSrc}
   */
  public static readonly first: XName = W.w.getName('first');

  /**
   * Represents the `w:firstColumn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}, {@linkcode tblLook w:tblLook}
   */
  public static readonly firstColumn: XName = W.w.getName('firstColumn');

  /**
   * Represents the `w:firstLine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly firstLine: XName = W.w.getName('firstLine');

  /**
   * Represents the `w:firstLineChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly firstLineChars: XName = W.w.getName('firstLineChars');

  /**
   * Represents the `w:firstRow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}, {@linkcode tblLook w:tblLook}
   */
  public static readonly firstRow: XName = W.w.getName('firstRow');

  /**
   * Represents the `w:firstRowFirstColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly firstRowFirstColumn: XName = W.w.getName('firstRowFirstColumn');

  /**
   * Represents the `w:firstRowLastColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly firstRowLastColumn: XName = W.w.getName('firstRowLastColumn');

  /**
   * Represents the `w:fitText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode id w:id}, {@linkcode val w:val}
   */
  public static readonly fitText: XName = W.w.getName('fitText');

  /**
   * Represents the `w:flatBorders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode framesetSplitbar w:framesetSplitbar}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly flatBorders: XName = W.w.getName('flatBorders');

  /**
   * Represents the `w:fldChar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - child XML elements: {@linkcode ffData w:ffData}, {@linkcode fldData w:fldData}, {@linkcode numberingChange w:numberingChange}
   * - XML attributes: {@linkcode dirty w:dirty}, {@linkcode fldCharType w:fldCharType}, {@linkcode fldLock w:fldLock}
   */
  public static readonly fldChar: XName = W.w.getName('fldChar');

  /**
   * Represents the `w:fldCharType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fldChar w:fldChar}
   */
  public static readonly fldCharType: XName = W.w.getName('fldCharType');

  /**
   * Represents the `w:fldData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fldChar w:fldChar}, {@linkcode fldSimple w:fldSimple}
   */
  public static readonly fldData: XName = W.w.getName('fldData');

  /**
   * Represents the `w:fldLock` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fldChar w:fldChar}, {@linkcode fldSimple w:fldSimple}
   */
  public static readonly fldLock: XName = W.w.getName('fldLock');

  /**
   * Represents the `w:fldSimple` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldData w:fldData}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode dirty w:dirty}, {@linkcode fldLock w:fldLock}, {@linkcode instr w:instr}
   */
  public static readonly fldSimple: XName = W.w.getName('fldSimple');

  /**
   * Represents the `w:fmt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgNumType w:pgNumType}
   */
  public static readonly fmt: XName = W.w.getName('fmt');

  /**
   * Represents the `w:followedHyperlink` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly followedHyperlink: XName = W.w.getName('followedHyperlink');

  /**
   * Represents the `w:font` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fonts w:fonts}
   * - child XML elements: {@linkcode altName w:altName}, {@linkcode charset w:charset}, {@linkcode embedBold w:embedBold}, {@linkcode embedBoldItalic w:embedBoldItalic}, {@linkcode embedItalic w:embedItalic}, {@linkcode embedRegular w:embedRegular}, {@linkcode family w:family}, {@linkcode notTrueType w:notTrueType}, {@linkcode panose1 w:panose1}, {@linkcode pitch w:pitch}, {@linkcode sig w:sig}
   * - XML attributes: {@linkcode name_ w:name_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sym w:sym}
   */
  public static readonly font: XName = W.w.getName('font');

  /**
   * Represents the `w:fontKey` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode embedBold w:embedBold}, {@linkcode embedBoldItalic w:embedBoldItalic}, {@linkcode embedItalic w:embedItalic}, {@linkcode embedRegular w:embedRegular}
   */
  public static readonly fontKey: XName = W.w.getName('fontKey');

  /**
   * Represents the `w:fonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode font w:font}
   */
  public static readonly fonts: XName = W.w.getName('fonts');

  /**
   * Represents the `w:fontSz` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode readModeInkLockDown w:readModeInkLockDown}
   */
  public static readonly fontSz: XName = W.w.getName('fontSz');

  /**
   * Represents the `w:footer` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgMar w:pgMar}
   */
  public static readonly footer: XName = W.w.getName('footer');

  /**
   * Represents the `w:footerReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode type w:type}
   */
  public static readonly footerReference: XName = W.w.getName('footerReference');

  /**
   * Represents the `w:footnote` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode footnotePr w:footnotePr}, {@linkcode footnotes w:footnotes}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode id w:id}, {@linkcode type w:type}
   */
  public static readonly footnote: XName = W.w.getName('footnote');

  /**
   * Represents the `w:footnoteLayoutLikeWW8` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly footnoteLayoutLikeWW8: XName = W.w.getName('footnoteLayoutLikeWW8');

  /**
   * Represents the `w:footnotePr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}, {@linkcode settings w:settings}
   * - child XML elements: {@linkcode footnote w:footnote}, {@linkcode numFmt w:numFmt}, {@linkcode numRestart w:numRestart}, {@linkcode numStart w:numStart}, {@linkcode pos w:pos}
   */
  public static readonly footnotePr: XName = W.w.getName('footnotePr');

  /**
   * Represents the `w:footnoteRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly footnoteRef: XName = W.w.getName('footnoteRef');

  /**
   * Represents the `w:footnoteReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode customMarkFollows w:customMarkFollows}, {@linkcode id w:id}
   */
  public static readonly footnoteReference: XName = W.w.getName('footnoteReference');

  /**
   * Represents the `w:footnotes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode footnote w:footnote}
   */
  public static readonly footnotes: XName = W.w.getName('footnotes');

  /**
   * Represents the `w:forceUpgrade` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   */
  public static readonly forceUpgrade: XName = W.w.getName('forceUpgrade');

  /**
   * Represents the `w:forgetLastTabAlignment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly forgetLastTabAlignment: XName = W.w.getName('forgetLastTabAlignment');

  /**
   * Represents the `w:format` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textInput w:textInput}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode numFmt w:numFmt}
   */
  public static readonly format: XName = W.w.getName('format');

  /**
   * Represents the `w:formatting` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode revisionView w:revisionView}
   */
  public static readonly formatting: XName = W.w.getName('formatting');

  /**
   * Represents the `w:formProt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly formProt: XName = W.w.getName('formProt');

  /**
   * Represents the `w:formsDesign` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly formsDesign: XName = W.w.getName('formsDesign');

  /**
   * Represents the `w:frame` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frameset w:frameset}
   * - child XML elements: {@linkcode linkedToFile w:linkedToFile}, {@linkcode marH w:marH}, {@linkcode marW w:marW}, {@linkcode name_ w:name_}, {@linkcode noResizeAllowed w:noResizeAllowed}, {@linkcode scrollbar w:scrollbar}, {@linkcode sourceFileName w:sourceFileName}, {@linkcode sz w:sz}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}
   */
  public static readonly frame: XName = W.w.getName('frame');

  /**
   * Represents the `w:frameLayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frameset w:frameset}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly frameLayout: XName = W.w.getName('frameLayout');

  /**
   * Represents the `w:framePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode anchorLock w:anchorLock}, {@linkcode dropCap w:dropCap}, {@linkcode h w:h}, {@linkcode hAnchor w:hAnchor}, {@linkcode hRule w:hRule}, {@linkcode hSpace w:hSpace}, {@linkcode lines w:lines}, {@linkcode vAnchor w:vAnchor}, {@linkcode vSpace w:vSpace}, {@linkcode w_ w:w_}, {@linkcode wrap w:wrap}, {@linkcode x w:x}, {@linkcode xAlign w:xAlign}, {@linkcode y w:y}, {@linkcode yAlign w:yAlign}
   */
  public static readonly framePr: XName = W.w.getName('framePr');

  /**
   * Represents the `w:frameset` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frameset w:frameset}, {@linkcode webSettings w:webSettings}
   * - child XML elements: {@linkcode frame w:frame}, {@linkcode frameLayout w:frameLayout}, {@linkcode frameset w:frameset}, {@linkcode framesetSplitbar w:framesetSplitbar}, {@linkcode sz w:sz}
   */
  public static readonly frameset: XName = W.w.getName('frameset');

  /**
   * Represents the `w:framesetSplitbar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frameset w:frameset}
   * - child XML elements: {@linkcode color w:color}, {@linkcode flatBorders w:flatBorders}, {@linkcode noBorder w:noBorder}, {@linkcode w_ w:w_}
   */
  public static readonly framesetSplitbar: XName = W.w.getName('framesetSplitbar');

  /**
   * Represents the `w:ftr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly ftr: XName = W.w.getName('ftr');

  /**
   * Represents the `w:fullDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode date w:date}
   */
  public static readonly fullDate: XName = W.w.getName('fullDate');

  /**
   * Represents the `w:gallery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode category w:category}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly gallery: XName = W.w.getName('gallery');

  /**
   * Represents the `w:glossaryDocument` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode background w:background}, {@linkcode docParts w:docParts}
   */
  public static readonly glossaryDocument: XName = W.w.getName('glossaryDocument');

  /**
   * Represents the `w:grammar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode proofState w:proofState}
   */
  public static readonly grammar: XName = W.w.getName('grammar');

  /**
   * Represents the `w:gridAfter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly gridAfter: XName = W.w.getName('gridAfter');

  /**
   * Represents the `w:gridBefore` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly gridBefore: XName = W.w.getName('gridBefore');

  /**
   * Represents the `w:gridCol` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblGrid w:tblGrid}
   * - XML attributes: {@linkcode w_ w:w_}
   */
  public static readonly gridCol: XName = W.w.getName('gridCol');

  /**
   * Represents the `w:gridSpan` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly gridSpan: XName = W.w.getName('gridSpan');

  /**
   * Represents the `w:group` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly group: XName = W.w.getName('group');

  /**
   * Represents the `w:growAutofit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly growAutofit: XName = W.w.getName('growAutofit');

  /**
   * Represents the `w:guid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly guid: XName = W.w.getName('guid');

  /**
   * Represents the `w:gutter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgMar w:pgMar}
   */
  public static readonly gutter: XName = W.w.getName('gutter');

  /**
   * Represents the `w:gutterAtTop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly gutterAtTop: XName = W.w.getName('gutterAtTop');

  /**
   * Represents the `w:h` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}, {@linkcode pgSz w:pgSz}, {@linkcode readModeInkLockDown w:readModeInkLockDown}
   */
  public static readonly h: XName = W.w.getName('h');

  /**
   * Represents the `w:hAnchor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly hAnchor: XName = W.w.getName('hAnchor');

  /**
   * Represents the `w:hanging` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly hanging: XName = W.w.getName('hanging');

  /**
   * Represents the `w:hangingChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly hangingChars: XName = W.w.getName('hangingChars');

  /**
   * Represents the `w:hAnsi` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly hAnsi: XName = W.w.getName('hAnsi');

  /**
   * Represents the `w:hAnsiTheme` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly hAnsiTheme: XName = W.w.getName('hAnsiTheme');

  /**
   * Represents the `w:hash` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly hash: XName = W.w.getName('hash');

  /**
   * Represents the `w:hashValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly hashValue: XName = W.w.getName('hashValue');

  /**
   * Represents the `w:hdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly hdr: XName = W.w.getName('hdr');

  /**
   * Represents the `w:hdrShapeDefaults` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode O.shapelayout o:shapelayout}
   */
  public static readonly hdrShapeDefaults: XName = W.w.getName('hdrShapeDefaults');

  /**
   * Represents the `w:header` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgMar w:pgMar}
   */
  public static readonly header: XName = W.w.getName('header');

  /**
   * Represents the `w:headerReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode type w:type}
   */
  public static readonly headerReference: XName = W.w.getName('headerReference');

  /**
   * Represents the `w:headerSource` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly headerSource: XName = W.w.getName('headerSource');

  /**
   * Represents the `w:heading` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}
   */
  public static readonly heading: XName = W.w.getName('heading');

  /**
   * Represents the `w:headingStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly headingStyles: XName = W.w.getName('headingStyles');

  /**
   * Represents the `w:helpText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode type w:type}, {@linkcode val w:val}
   */
  public static readonly helpText: XName = W.w.getName('helpText');

  /**
   * Represents the `w:hidden` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hidden: XName = W.w.getName('hidden');

  /**
   * Represents the `w:hideGrammaticalErrors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hideGrammaticalErrors: XName = W.w.getName('hideGrammaticalErrors');

  /**
   * Represents the `w:hideMark` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hideMark: XName = W.w.getName('hideMark');

  /**
   * Represents the `w:hideSpellingErrors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hideSpellingErrors: XName = W.w.getName('hideSpellingErrors');

  /**
   * Represents the `w:highlight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly highlight: XName = W.w.getName('highlight');

  /**
   * Represents the `w:hint` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode rFonts w:rFonts}
   */
  public static readonly hint: XName = W.w.getName('hint');

  /**
   * Represents the `w:history` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode hyperlink w:hyperlink}
   */
  public static readonly history: XName = W.w.getName('history');

  /**
   * Represents the `w:hMerge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hMerge: XName = W.w.getName('hMerge');

  /**
   * Represents the `w:horzAnchor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly horzAnchor: XName = W.w.getName('horzAnchor');

  /**
   * Represents the `w:hps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hps: XName = W.w.getName('hps');

  /**
   * Represents the `w:hpsBaseText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hpsBaseText: XName = W.w.getName('hpsBaseText');

  /**
   * Represents the `w:hpsRaise` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hpsRaise: XName = W.w.getName('hpsRaise');

  /**
   * Represents the `w:hRule` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}, {@linkcode trHeight w:trHeight}
   */
  public static readonly hRule: XName = W.w.getName('hRule');

  /**
   * Represents the `w:hSpace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly hSpace: XName = W.w.getName('hSpace');

  /**
   * Represents the `w:hyperlink` XML elements and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode anchor w:anchor}, {@linkcode docLocation w:docLocation}, {@linkcode history w:history}, {@linkcode tgtFrame w:tgtFrame}, {@linkcode tooltip w:tooltip}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly hyperlink: XName = W.w.getName('hyperlink');

  /**
   * Represents the `w:hyphenationZone` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly hyphenationZone: XName = W.w.getName('hyphenationZone');

  /**
   * Represents the `w:i` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly i: XName = W.w.getName('i');

  /**
   * Represents the `w:iCs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly iCs: XName = W.w.getName('iCs');

  /**
   * Represents the `w:id` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode cellDel w:cellDel}, {@linkcode cellIns w:cellIns}, {@linkcode cellMerge w:cellMerge}, {@linkcode comment w:comment}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode commentReference w:commentReference}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode div w:div}, {@linkcode eastAsianLayout w:eastAsianLayout}, {@linkcode endnote w:endnote}, {@linkcode endnoteReference w:endnoteReference}, {@linkcode fitText w:fitText}, {@linkcode footnote w:footnote}, {@linkcode footnoteReference w:footnoteReference}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode numberingChange w:numberingChange}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode pPrChange w:pPrChange}, {@linkcode rPrChange w:rPrChange}, {@linkcode sectPrChange w:sectPrChange}, {@linkcode tblGridChange w:tblGridChange}, {@linkcode tblPrChange w:tblPrChange}, {@linkcode tblPrExChange w:tblPrExChange}, {@linkcode tcPrChange w:tcPrChange}, {@linkcode trPrChange w:trPrChange}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly id: XName = W.w.getName('id');

  /**
   * Represents the `w:ignoreMixedContent` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly ignoreMixedContent: XName = W.w.getName('ignoreMixedContent');

  /**
   * Represents the `w:ilvl` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numPr w:numPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lvl w:lvl}, {@linkcode lvlOverride w:lvlOverride}
   */
  public static readonly ilvl: XName = W.w.getName('ilvl');

  /**
   * Represents the `w:imprint` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly imprint: XName = W.w.getName('imprint');

  /**
   * Represents the `w:ind` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode end w:end}, {@linkcode endChars w:endChars}, {@linkcode firstLine w:firstLine}, {@linkcode firstLineChars w:firstLineChars}, {@linkcode hanging w:hanging}, {@linkcode hangingChars w:hangingChars}, {@linkcode left w:left}, {@linkcode leftChars w:leftChars}, {@linkcode right w:right}, {@linkcode rightChars w:rightChars}, {@linkcode start w:start}, {@linkcode startChars w:startChars}
   */
  public static readonly ind: XName = W.w.getName('ind');

  /**
   * Represents the `w:initials` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode comment w:comment}
   */
  public static readonly initials: XName = W.w.getName('initials');

  /**
   * Represents the `w:inkAnnotations` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode revisionView w:revisionView}
   */
  public static readonly inkAnnotations: XName = W.w.getName('inkAnnotations');

  /**
   * Represents the `w:ins` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.ctrlPr m:ctrlPr}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode numPr w:numPr}, {@linkcode p w:p}, {@linkcode rPr w:rPr}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode trPr w:trPr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode rPr w:rPr}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly ins: XName = W.w.getName('ins');

  /**
   * Represents the `w:insDel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode revisionView w:revisionView}
   */
  public static readonly insDel: XName = W.w.getName('insDel');

  /**
   * Represents the `w:insideH` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblBorders w:tblBorders}, {@linkcode tcBorders w:tcBorders}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly insideH: XName = W.w.getName('insideH');

  /**
   * Represents the `w:insideV` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblBorders w:tblBorders}, {@linkcode tcBorders w:tcBorders}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly insideV: XName = W.w.getName('insideV');

  /**
   * Represents the `w:instr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode fldSimple w:fldSimple}
   */
  public static readonly instr: XName = W.w.getName('instr');

  /**
   * Represents the `w:instrText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly instrText: XName = W.w.getName('instrText');

  /**
   * Represents the `w:isLgl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly isLgl: XName = W.w.getName('isLgl');

  /**
   * Represents the `w:jc` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly jc: XName = W.w.getName('jc');

  /**
   * Represents the `w:keepLines` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly keepLines: XName = W.w.getName('keepLines');

  /**
   * Represents the `w:keepNext` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly keepNext: XName = W.w.getName('keepNext');

  /**
   * Represents the `w:kern` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly kern: XName = W.w.getName('kern');

  /**
   * Represents the `w:kinsoku` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly kinsoku: XName = W.w.getName('kinsoku');

  /**
   * Represents the `w:lang` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode bidi w:bidi}, {@linkcode eastAsia w:eastAsia}, {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}, {@linkcode noLineBreaksAfter w:noLineBreaksAfter}, {@linkcode noLineBreaksBefore w:noLineBreaksBefore}
   */
  public static readonly lang: XName = W.w.getName('lang');

  /**
   * Represents the `w:lastColumn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}, {@linkcode tblLook w:tblLook}
   */
  public static readonly lastColumn: XName = W.w.getName('lastColumn');

  /**
   * Represents the `w:lastRenderedPageBreak` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly lastRenderedPageBreak: XName = W.w.getName('lastRenderedPageBreak');

  /**
   * Represents the `w:lastRow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}, {@linkcode tblLook w:tblLook}
   */
  public static readonly lastRow: XName = W.w.getName('lastRow');

  /**
   * Represents the `w:lastRowFirstColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly lastRowFirstColumn: XName = W.w.getName('lastRowFirstColumn');

  /**
   * Represents the `w:lastRowLastColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly lastRowLastColumn: XName = W.w.getName('lastRowLastColumn');

  /**
   * Represents the `w:lastValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode comboBox w:comboBox}, {@linkcode dropDownList w:dropDownList}
   */
  public static readonly lastValue: XName = W.w.getName('lastValue');

  /**
   * Represents the `w:latentStyles` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styles w:styles}
   * - child XML elements: {@linkcode lsdException w:lsdException}
   * - XML attributes: {@linkcode count w:count}, {@linkcode defLockedState w:defLockedState}, {@linkcode defQFormat w:defQFormat}, {@linkcode defSemiHidden w:defSemiHidden}, {@linkcode defUIPriority w:defUIPriority}, {@linkcode defUnhideWhenUsed w:defUnhideWhenUsed}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly latentStyles: XName = W.w.getName('latentStyles');

  /**
   * Represents the `w:layoutRawTableWidth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly layoutRawTableWidth: XName = W.w.getName('layoutRawTableWidth');

  /**
   * Represents the `w:layoutTableRowsApart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly layoutTableRowsApart: XName = W.w.getName('layoutTableRowsApart');

  /**
   * Represents the `w:leader` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ptab w:ptab}, {@linkcode tab w:tab}
   */
  public static readonly leader: XName = W.w.getName('leader');

  /**
   * Represents the `w:left` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode divBdr w:divBdr}, {@linkcode pBdr w:pBdr}, {@linkcode pgBorders w:pgBorders}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}, {@linkcode pgMar w:pgMar}
   */
  public static readonly left: XName = W.w.getName('left');

  /**
   * Represents the `w:leftChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly leftChars: XName = W.w.getName('leftChars');

  /**
   * Represents the `w:leftFromText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly leftFromText: XName = W.w.getName('leftFromText');

  /**
   * Represents the `w:legacy` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode legacy w:legacy}, {@linkcode legacyIndent w:legacyIndent}, {@linkcode legacySpace w:legacySpace}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode legacy w:legacy}
   */
  public static readonly legacy: XName = W.w.getName('legacy');

  /**
   * Represents the `w:legacyIndent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode legacy w:legacy}
   */
  public static readonly legacyIndent: XName = W.w.getName('legacyIndent');

  /**
   * Represents the `w:legacySpace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode legacy w:legacy}
   */
  public static readonly legacySpace: XName = W.w.getName('legacySpace');

  /**
   * Represents the `w:lid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode date w:date}, {@linkcode fieldMapData w:fieldMapData}, {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lid: XName = W.w.getName('lid');

  /**
   * Represents the `w:line` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly line: XName = W.w.getName('line');

  /**
   * Represents the `w:linePitch` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode docGrid w:docGrid}
   */
  public static readonly linePitch: XName = W.w.getName('linePitch');

  /**
   * Represents the `w:lineRule` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode spacing w:spacing}
   */
  public static readonly lineRule: XName = W.w.getName('lineRule');

  /**
   * Represents the `w:lines` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly lines: XName = W.w.getName('lines');

  /**
   * Represents the `w:lineWrapLikeWord6` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lineWrapLikeWord6: XName = W.w.getName('lineWrapLikeWord6');

  /**
   * Represents the `w:link` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly link: XName = W.w.getName('link');

  /**
   * Represents the `w:linkedToFile` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly linkedToFile: XName = W.w.getName('linkedToFile');

  /**
   * Represents the `w:linkStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly linkStyles: XName = W.w.getName('linkStyles');

  /**
   * Represents the `w:linkToQuery` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly linkToQuery: XName = W.w.getName('linkToQuery');

  /**
   * Represents the `w:listEntry` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ddList w:ddList}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly listEntry: XName = W.w.getName('listEntry');

  /**
   * Represents the `w:listItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comboBox w:comboBox}, {@linkcode dropDownList w:dropDownList}
   * - XML attributes: {@linkcode displayText w:displayText}, {@linkcode value w:value}
   */
  public static readonly listItem: XName = W.w.getName('listItem');

  /**
   * Represents the `w:listSeparator` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly listSeparator: XName = W.w.getName('listSeparator');

  /**
   * Represents the `w:lnNumType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode countBy w:countBy}, {@linkcode distance w:distance}, {@linkcode restart w:restart}, {@linkcode start w:start}
   */
  public static readonly lnNumType: XName = W.w.getName('lnNumType');

  /**
   * Represents the `w:lock` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lock: XName = W.w.getName('lock');

  /**
   * Represents the `w:locked` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lsdException w:lsdException}
   */
  public static readonly locked: XName = W.w.getName('locked');

  /**
   * Represents the `w:lockedField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectLink w:objectLink}
   */
  public static readonly lockedField: XName = W.w.getName('lockedField');

  /**
   * Represents the `w:lsdException` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode latentStyles w:latentStyles}
   * - XML attributes: {@linkcode locked w:locked}, {@linkcode name_ w:name_}, {@linkcode qFormat w:qFormat}, {@linkcode semiHidden w:semiHidden}, {@linkcode uiPriority w:uiPriority}, {@linkcode unhideWhenUsed w:unhideWhenUsed}
   */
  public static readonly lsdException: XName = W.w.getName('lsdException');

  /**
   * Represents the `w:lvl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}, {@linkcode lvlOverride w:lvlOverride}
   * - child XML elements: {@linkcode isLgl w:isLgl}, {@linkcode legacy w:legacy}, {@linkcode lvlJc w:lvlJc}, {@linkcode lvlPicBulletId w:lvlPicBulletId}, {@linkcode lvlRestart w:lvlRestart}, {@linkcode lvlText w:lvlText}, {@linkcode numFmt w:numFmt}, {@linkcode pPr w:pPr}, {@linkcode pStyle w:pStyle}, {@linkcode rPr w:rPr}, {@linkcode start w:start}, {@linkcode suff w:suff}
   * - XML attributes: {@linkcode ilvl w:ilvl}, {@linkcode tentative w:tentative}, {@linkcode tplc w:tplc}
   */
  public static readonly lvl: XName = W.w.getName('lvl');

  /**
   * Represents the `w:lvlJc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lvlJc: XName = W.w.getName('lvlJc');

  /**
   * Represents the `w:lvlOverride` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode num w:num}
   * - child XML elements: {@linkcode lvl w:lvl}, {@linkcode startOverride w:startOverride}
   * - XML attributes: {@linkcode ilvl w:ilvl}
   */
  public static readonly lvlOverride: XName = W.w.getName('lvlOverride');

  /**
   * Represents the `w:lvlPicBulletId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lvlPicBulletId: XName = W.w.getName('lvlPicBulletId');

  /**
   * Represents the `w:lvlRestart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly lvlRestart: XName = W.w.getName('lvlRestart');

  /**
   * Represents the `w:lvlText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode null w:null}, {@linkcode val w:val}
   */
  public static readonly lvlText: XName = W.w.getName('lvlText');

  /**
   * Represents the `w:mailAsAttachment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mailAsAttachment: XName = W.w.getName('mailAsAttachment');

  /**
   * Represents the `w:mailMerge` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode activeRecord w:activeRecord}, {@linkcode addressFieldName w:addressFieldName}, {@linkcode checkErrors w:checkErrors}, {@linkcode connectString w:connectString}, {@linkcode dataSource w:dataSource}, {@linkcode dataType w:dataType}, {@linkcode destination w:destination}, {@linkcode doNotSuppressBlankLines w:doNotSuppressBlankLines}, {@linkcode headerSource w:headerSource}, {@linkcode linkToQuery w:linkToQuery}, {@linkcode mailAsAttachment w:mailAsAttachment}, {@linkcode mailSubject w:mailSubject}, {@linkcode mainDocumentType w:mainDocumentType}, {@linkcode odso w:odso}, {@linkcode query w:query}, {@linkcode viewMergedData w:viewMergedData}
   */
  public static readonly mailMerge: XName = W.w.getName('mailMerge');

  /**
   * Represents the `w:mailSubject` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mailSubject: XName = W.w.getName('mailSubject');

  /**
   * Represents the `w:mainDocumentType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mainDocumentType: XName = W.w.getName('mainDocumentType');

  /**
   * Represents the `w:mappedName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldMapData w:fieldMapData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mappedName: XName = W.w.getName('mappedName');

  /**
   * Represents the `w:marBottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marBottom: XName = W.w.getName('marBottom');

  /**
   * Represents the `w:marH` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marH: XName = W.w.getName('marH');

  /**
   * Represents the `w:markup` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode revisionView w:revisionView}
   */
  public static readonly markup: XName = W.w.getName('markup');

  /**
   * Represents the `w:marLeft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marLeft: XName = W.w.getName('marLeft');

  /**
   * Represents the `w:marRight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marRight: XName = W.w.getName('marRight');

  /**
   * Represents the `w:marTop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode div w:div}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marTop: XName = W.w.getName('marTop');

  /**
   * Represents the `w:marW` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly marW: XName = W.w.getName('marW');

  /**
   * Represents the `w:matchSrc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode altChunkPr w:altChunkPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly matchSrc: XName = W.w.getName('matchSrc');

  /**
   * Represents the `w:maxLength` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textInput w:textInput}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly maxLength: XName = W.w.getName('maxLength');

  /**
   * Represents the `w:mirrorIndents` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mirrorIndents: XName = W.w.getName('mirrorIndents');

  /**
   * Represents the `w:mirrorMargins` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mirrorMargins: XName = W.w.getName('mirrorMargins');

  /**
   * Represents the `w:monthLong` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly monthLong: XName = W.w.getName('monthLong');

  /**
   * Represents the `w:monthShort` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly monthShort: XName = W.w.getName('monthShort');

  /**
   * Represents the `w:moveFrom` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.ctrlPr m:ctrlPr}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rPr w:rPr}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode rPr w:rPr}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly moveFrom: XName = W.w.getName('moveFrom');

  /**
   * Represents the `w:moveFromRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly moveFromRangeEnd: XName = W.w.getName('moveFromRangeEnd');

  /**
   * Represents the `w:moveFromRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode colFirst w:colFirst}, {@linkcode colLast w:colLast}, {@linkcode date w:date}, {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}, {@linkcode name_ w:name_}
   */
  public static readonly moveFromRangeStart: XName = W.w.getName('moveFromRangeStart');

  /**
   * Represents the `w:moveTo` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.ctrlPr m:ctrlPr}, {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rPr w:rPr}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode rPr w:rPr}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly moveTo: XName = W.w.getName('moveTo');

  /**
   * Represents the `w:moveToRangeEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly moveToRangeEnd: XName = W.w.getName('moveToRangeEnd');

  /**
   * Represents the `w:moveToRangeStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdt w:sdt}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode author w:author}, {@linkcode colFirst w:colFirst}, {@linkcode colLast w:colLast}, {@linkcode date w:date}, {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}, {@linkcode name_ w:name_}
   */
  public static readonly moveToRangeStart: XName = W.w.getName('moveToRangeStart');

  /**
   * Represents the `w:movie` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pict w:pict}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly movie: XName = W.w.getName('movie');

  /**
   * Represents the `w:multiLevelType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly multiLevelType: XName = W.w.getName('multiLevelType');

  /**
   * Represents the `w:multiLine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode text w:text}
   */
  public static readonly multiLine: XName = W.w.getName('multiLine');

  /**
   * Represents the `w:mwSmallCaps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly mwSmallCaps: XName = W.w.getName('mwSmallCaps');

  /**
   * Represents the `w:name` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}, {@linkcode category w:category}, {@linkcode docPartPr w:docPartPr}, {@linkcode ffData w:ffData}, {@linkcode fieldMapData w:fieldMapData}, {@linkcode frame w:frame}, {@linkcode style w:style}
   * - XML attributes: {@linkcode decorated w:decorated}, {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode attr w:attr}, {@linkcode autoCaption w:autoCaption}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode caption w:caption}, {@linkcode compatSetting w:compatSetting}, {@linkcode control w:control}, {@linkcode docVar w:docVar}, {@linkcode font w:font}, {@linkcode lsdException w:lsdException}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveToRangeStart w:moveToRangeStart}
   */
  public static readonly name_: XName = W.w.getName('name');

  /**
   * Represents the `w:next` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly next: XName = W.w.getName('next');

  /**
   * Represents the `w:nlCheck` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}
   */
  public static readonly nlCheck: XName = W.w.getName('nlCheck');

  /**
   * Represents the `w:noBorder` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode framesetSplitbar w:framesetSplitbar}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noBorder: XName = W.w.getName('noBorder');

  /**
   * Represents the `w:noBreakHyphen` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly noBreakHyphen: XName = W.w.getName('noBreakHyphen');

  /**
   * Represents the `w:noColumnBalance` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noColumnBalance: XName = W.w.getName('noColumnBalance');

  /**
   * Represents the `w:noEndnote` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noEndnote: XName = W.w.getName('noEndnote');

  /**
   * Represents the `w:noExtraLineSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noExtraLineSpacing: XName = W.w.getName('noExtraLineSpacing');

  /**
   * Represents the `w:noHBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblLook w:tblLook}
   */
  public static readonly noHBand: XName = W.w.getName('noHBand');

  /**
   * Represents the `w:noLabel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}
   */
  public static readonly noLabel: XName = W.w.getName('noLabel');

  /**
   * Represents the `w:noLeading` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noLeading: XName = W.w.getName('noLeading');

  /**
   * Represents the `w:noLineBreaksAfter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode lang w:lang}, {@linkcode val w:val}
   */
  public static readonly noLineBreaksAfter: XName = W.w.getName('noLineBreaksAfter');

  /**
   * Represents the `w:noLineBreaksBefore` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode lang w:lang}, {@linkcode val w:val}
   */
  public static readonly noLineBreaksBefore: XName = W.w.getName('noLineBreaksBefore');

  /**
   * Represents the `w:noProof` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noProof: XName = W.w.getName('noProof');

  /**
   * Represents the `w:noPunctuationKerning` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noPunctuationKerning: XName = W.w.getName('noPunctuationKerning');

  /**
   * Represents the `w:noResizeAllowed` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noResizeAllowed: XName = W.w.getName('noResizeAllowed');

  /**
   * Represents the `w:noSpaceRaiseLower` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noSpaceRaiseLower: XName = W.w.getName('noSpaceRaiseLower');

  /**
   * Represents the `w:noTabHangInd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noTabHangInd: XName = W.w.getName('noTabHangInd');

  /**
   * Represents the `w:notTrueType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly notTrueType: XName = W.w.getName('notTrueType');

  /**
   * Represents the `w:noVBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblLook w:tblLook}
   */
  public static readonly noVBand: XName = W.w.getName('noVBand');

  /**
   * Represents the `w:noWrap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly noWrap: XName = W.w.getName('noWrap');

  /**
   * Represents the `w:nsid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly nsid: XName = W.w.getName('nsid');

  /**
   * Represents the `w:null` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lvlText w:lvlText}
   */
  public static readonly null: XName = W.w.getName('null');

  /**
   * Represents the `w:num` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numbering w:numbering}
   * - child XML elements: {@linkcode abstractNumId w:abstractNumId}, {@linkcode lvlOverride w:lvlOverride}
   * - XML attributes: {@linkcode numId w:numId}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cols w:cols}
   */
  public static readonly num: XName = W.w.getName('num');

  /**
   * Represents the `w:numbering` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode abstractNum w:abstractNum}, {@linkcode num w:num}, {@linkcode numIdMacAtCleanup w:numIdMacAtCleanup}, {@linkcode numPicBullet w:numPicBullet}
   */
  public static readonly numbering: XName = W.w.getName('numbering');

  /**
   * Represents the `w:numberingChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fldChar w:fldChar}, {@linkcode numPr w:numPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}, {@linkcode original w:original}
   */
  public static readonly numberingChange: XName = W.w.getName('numberingChange');

  /**
   * Represents the `w:numberingStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly numberingStyles: XName = W.w.getName('numberingStyles');

  /**
   * Represents the `w:numFmt` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endnotePr w:endnotePr}, {@linkcode footnotePr w:footnotePr}, {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode format w:format}, {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}
   */
  public static readonly numFmt: XName = W.w.getName('numFmt');

  /**
   * Represents the `w:numId` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numPr w:numPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode num w:num}
   */
  public static readonly numId: XName = W.w.getName('numId');

  /**
   * Represents the `w:numIdMacAtCleanup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numbering w:numbering}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly numIdMacAtCleanup: XName = W.w.getName('numIdMacAtCleanup');

  /**
   * Represents the `w:numPicBullet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode numbering w:numbering}
   * - child XML elements: {@linkcode drawing w:drawing}, {@linkcode pict w:pict}
   * - XML attributes: {@linkcode numPicBulletId w:numPicBulletId}
   */
  public static readonly numPicBullet: XName = W.w.getName('numPicBullet');

  /**
   * Represents the `w:numPicBulletId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode numPicBullet w:numPicBullet}
   */
  public static readonly numPicBulletId: XName = W.w.getName('numPicBulletId');

  /**
   * Represents the `w:numPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - child XML elements: {@linkcode ilvl w:ilvl}, {@linkcode ins w:ins}, {@linkcode numberingChange w:numberingChange}, {@linkcode numId w:numId}
   */
  public static readonly numPr: XName = W.w.getName('numPr');

  /**
   * Represents the `w:numRestart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endnotePr w:endnotePr}, {@linkcode footnotePr w:footnotePr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly numRestart: XName = W.w.getName('numRestart');

  /**
   * Represents the `w:numStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endnotePr w:endnotePr}, {@linkcode footnotePr w:footnotePr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly numStart: XName = W.w.getName('numStart');

  /**
   * Represents the `w:numStyleLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly numStyleLink: XName = W.w.getName('numStyleLink');

  /**
   * Represents the `w:object` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - child XML elements: {@linkcode O.OLEObject o:OLEObject}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}, {@linkcode control w:control}, {@linkcode drawing w:drawing}, {@linkcode objectEmbed w:objectEmbed}, {@linkcode objectLink w:objectLink}
   * - XML attributes: {@linkcode dxaOrig w:dxaOrig}, {@linkcode dyaOrig w:dyaOrig}, {@linkcode W14.anchorId w14:anchorId}
   */
  public static readonly object: XName = W.w.getName('object');

  /**
   * Represents the `w:objectEmbed` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode object w:object}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode drawAspect w:drawAspect}, {@linkcode fieldCodes w:fieldCodes}, {@linkcode progId w:progId}, {@linkcode shapeId_ w:shapeId_}
   */
  public static readonly objectEmbed: XName = W.w.getName('objectEmbed');

  /**
   * Represents the `w:objectLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode object w:object}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode drawAspect w:drawAspect}, {@linkcode fieldCodes w:fieldCodes}, {@linkcode lockedField w:lockedField}, {@linkcode progId w:progId}, {@linkcode shapeId_ w:shapeId_}, {@linkcode updateMode w:updateMode}
   */
  public static readonly objectLink: XName = W.w.getName('objectLink');

  /**
   * Represents the `w:oddHBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly oddHBand: XName = W.w.getName('oddHBand');

  /**
   * Represents the `w:oddVBand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cnfStyle w:cnfStyle}
   */
  public static readonly oddVBand: XName = W.w.getName('oddVBand');

  /**
   * Represents the `w:odso` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - child XML elements: {@linkcode colDelim w:colDelim}, {@linkcode fHdr w:fHdr}, {@linkcode fieldMapData w:fieldMapData}, {@linkcode recipientData w:recipientData}, {@linkcode src w:src}, {@linkcode table w:table}, {@linkcode type w:type}, {@linkcode udl w:udl}
   */
  public static readonly odso: XName = W.w.getName('odso');

  /**
   * Represents the `w:offsetFrom` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgBorders w:pgBorders}
   */
  public static readonly offsetFrom: XName = W.w.getName('offsetFrom');

  /**
   * Represents the `w:oMath` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly oMath: XName = W.w.getName('oMath');

  /**
   * Represents the `w:optimizeForBrowser` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly optimizeForBrowser: XName = W.w.getName('optimizeForBrowser');

  /**
   * Represents the `w:orient` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgSz w:pgSz}
   */
  public static readonly orient: XName = W.w.getName('orient');

  /**
   * Represents the `w:original` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode numberingChange w:numberingChange}
   */
  public static readonly original: XName = W.w.getName('original');

  /**
   * Represents the `w:other` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode paperSrc w:paperSrc}
   */
  public static readonly other: XName = W.w.getName('other');

  /**
   * Represents the `w:outline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly outline: XName = W.w.getName('outline');

  /**
   * Represents the `w:outlineLvl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly outlineLvl: XName = W.w.getName('outlineLvl');

  /**
   * Represents the `w:overflowPunct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly overflowPunct: XName = W.w.getName('overflowPunct');

  /**
   * Represents the `w:p` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode sdtContent w:sdtContent}, {@linkcode tc w:tc}, {@linkcode txbxContent w:txbxContent}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode pPr w:pPr}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode rsidDel w:rsidDel}, {@linkcode rsidP w:rsidP}, {@linkcode rsidR w:rsidR}, {@linkcode rsidRDefault w:rsidRDefault}, {@linkcode rsidRPr w:rsidRPr}, {@linkcode W14.noSpellErr w14:noSpellErr}, {@linkcode W14.paraId w14:paraId}, {@linkcode W14.textId w14:textId}
   */
  public static readonly p: XName = W.w.getName('p');

  /**
   * Represents the `w:pageBreakBefore` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly pageBreakBefore: XName = W.w.getName('pageBreakBefore');

  /**
   * Represents the `w:panose1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly panose1: XName = W.w.getName('panose1');

  /**
   * Represents the `w:paperSrc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode first w:first}, {@linkcode other w:other}
   */
  public static readonly paperSrc: XName = W.w.getName('paperSrc');

  /**
   * Represents the `w:pBdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - child XML elements: {@linkcode bar w:bar}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode top w:top}
   */
  public static readonly pBdr: XName = W.w.getName('pBdr');

  /**
   * Represents the `w:percent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode zoom w:zoom}
   */
  public static readonly percent: XName = W.w.getName('percent');

  /**
   * Represents the `w:permEnd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode id w:id}
   */
  public static readonly permEnd: XName = W.w.getName('permEnd');

  /**
   * Represents the `w:permStart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode colFirst w:colFirst}, {@linkcode colLast w:colLast}, {@linkcode displacedByCustomXml w:displacedByCustomXml}, {@linkcode ed w:ed}, {@linkcode edGrp w:edGrp}, {@linkcode id w:id}
   */
  public static readonly permStart: XName = W.w.getName('permStart');

  /**
   * Represents the `w:personal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly personal: XName = W.w.getName('personal');

  /**
   * Represents the `w:personalCompose` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly personalCompose: XName = W.w.getName('personalCompose');

  /**
   * Represents the `w:personalReply` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly personalReply: XName = W.w.getName('personalReply');

  /**
   * Represents the `w:pgBorders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode top w:top}
   * - XML attributes: {@linkcode display w:display}, {@linkcode offsetFrom w:offsetFrom}, {@linkcode zOrder w:zOrder}
   */
  public static readonly pgBorders: XName = W.w.getName('pgBorders');

  /**
   * Represents the `w:pgMar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode bottom w:bottom}, {@linkcode footer w:footer}, {@linkcode gutter w:gutter}, {@linkcode header w:header}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode top w:top}
   */
  public static readonly pgMar: XName = W.w.getName('pgMar');

  /**
   * Represents the `w:pgNum` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly pgNum: XName = W.w.getName('pgNum');

  /**
   * Represents the `w:pgNumType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode chapSep w:chapSep}, {@linkcode chapStyle w:chapStyle}, {@linkcode fmt w:fmt}, {@linkcode start w:start}
   */
  public static readonly pgNumType: XName = W.w.getName('pgNumType');

  /**
   * Represents the `w:pgSz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode code w:code}, {@linkcode h w:h}, {@linkcode orient w:orient}, {@linkcode w_ w:w_}
   */
  public static readonly pgSz: XName = W.w.getName('pgSz');

  /**
   * Represents the `w:pict` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode numPicBullet w:numPicBullet}, {@linkcode r w:r}
   * - child XML elements: {@linkcode O.OLEObject o:OLEObject}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}, {@linkcode control w:control}, {@linkcode movie w:movie}
   * - XML attributes: {@linkcode W14.anchorId w14:anchorId}
   */
  public static readonly pict: XName = W.w.getName('pict');

  /**
   * Represents the `w:picture` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly picture: XName = W.w.getName('picture');

  /**
   * Represents the `w:pitch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly pitch: XName = W.w.getName('pitch');

  /**
   * Represents the `w:pixelsPerInch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly pixelsPerInch: XName = W.w.getName('pixelsPerInch');

  /**
   * Represents the `w:placeholder` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customXmlPr w:customXmlPr}, {@linkcode sdtPr w:sdtPr}
   * - child XML elements: {@linkcode docPart w:docPart}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly placeholder: XName = W.w.getName('placeholder');

  /**
   * Represents the `w:pos` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode endnotePr w:endnotePr}, {@linkcode footnotePr w:footnotePr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}, {@linkcode tab w:tab}
   */
  public static readonly pos: XName = W.w.getName('pos');

  /**
   * Represents the `w:position` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly position: XName = W.w.getName('position');

  /**
   * Represents the `w:pPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}, {@linkcode p w:p}, {@linkcode pPrChange w:pPrChange}, {@linkcode pPrDefault w:pPrDefault}, {@linkcode style w:style}, {@linkcode tblStylePr w:tblStylePr}
   * - child XML elements: {@linkcode adjustRightInd w:adjustRightInd}, {@linkcode autoSpaceDE w:autoSpaceDE}, {@linkcode autoSpaceDN w:autoSpaceDN}, {@linkcode bidi w:bidi}, {@linkcode cnfStyle w:cnfStyle}, {@linkcode contextualSpacing w:contextualSpacing}, {@linkcode divId w:divId}, {@linkcode framePr w:framePr}, {@linkcode ind w:ind}, {@linkcode jc w:jc}, {@linkcode keepLines w:keepLines}, {@linkcode keepNext w:keepNext}, {@linkcode kinsoku w:kinsoku}, {@linkcode mirrorIndents w:mirrorIndents}, {@linkcode numPr w:numPr}, {@linkcode outlineLvl w:outlineLvl}, {@linkcode overflowPunct w:overflowPunct}, {@linkcode pageBreakBefore w:pageBreakBefore}, {@linkcode pBdr w:pBdr}, {@linkcode pPrChange w:pPrChange}, {@linkcode pStyle w:pStyle}, {@linkcode rPr w:rPr}, {@linkcode sectPr w:sectPr}, {@linkcode shd w:shd}, {@linkcode snapToGrid w:snapToGrid}, {@linkcode spacing w:spacing}, {@linkcode suppressAutoHyphens w:suppressAutoHyphens}, {@linkcode suppressLineNumbers w:suppressLineNumbers}, {@linkcode suppressOverlap w:suppressOverlap}, {@linkcode tabs w:tabs}, {@linkcode textAlignment w:textAlignment}, {@linkcode textboxTightWrap w:textboxTightWrap}, {@linkcode textDirection w:textDirection}, {@linkcode topLinePunct w:topLinePunct}, {@linkcode widowControl w:widowControl}, {@linkcode wordWrap w:wordWrap}
   */
  public static readonly pPr: XName = W.w.getName('pPr');

  /**
   * Represents the `w:pPrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - child XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly pPrChange: XName = W.w.getName('pPrChange');

  /**
   * Represents the `w:pPrDefault` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docDefaults w:docDefaults}
   * - child XML elements: {@linkcode pPr w:pPr}
   */
  public static readonly pPrDefault: XName = W.w.getName('pPrDefault');

  /**
   * Represents the `w:prefixMappings` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode dataBinding w:dataBinding}, {@linkcode W15.dataBinding w15:dataBinding}
   */
  public static readonly prefixMappings: XName = W.w.getName('prefixMappings');

  /**
   * Represents the `w:printBodyTextBeforeHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printBodyTextBeforeHeader: XName = W.w.getName('printBodyTextBeforeHeader');

  /**
   * Represents the `w:printColBlack` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printColBlack: XName = W.w.getName('printColBlack');

  /**
   * Represents the `w:printerSettings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly printerSettings: XName = W.w.getName('printerSettings');

  /**
   * Represents the `w:printFormsData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printFormsData: XName = W.w.getName('printFormsData');

  /**
   * Represents the `w:printFractionalCharacterWidth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printFractionalCharacterWidth: XName = W.w.getName('printFractionalCharacterWidth');

  /**
   * Represents the `w:printPostScriptOverText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printPostScriptOverText: XName = W.w.getName('printPostScriptOverText');

  /**
   * Represents the `w:printTwoOnOne` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly printTwoOnOne: XName = W.w.getName('printTwoOnOne');

  /**
   * Represents the `w:progId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectEmbed w:objectEmbed}, {@linkcode objectLink w:objectLink}
   */
  public static readonly progId: XName = W.w.getName('progId');

  /**
   * Represents the `w:proofErr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - XML attributes: {@linkcode type w:type}
   */
  public static readonly proofErr: XName = W.w.getName('proofErr');

  /**
   * Represents the `w:proofState` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode grammar w:grammar}, {@linkcode spelling w:spelling}
   */
  public static readonly proofState: XName = W.w.getName('proofState');

  /**
   * Represents the `w:pStyle` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}, {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly pStyle: XName = W.w.getName('pStyle');

  /**
   * Represents the `w:ptab` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode alignment w:alignment}, {@linkcode leader w:leader}, {@linkcode relativeTo w:relativeTo}
   */
  public static readonly ptab: XName = W.w.getName('ptab');

  /**
   * Represents the `w:qFormat` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lsdException w:lsdException}
   */
  public static readonly qFormat: XName = W.w.getName('qFormat');

  /**
   * Represents the `w:query` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly query: XName = W.w.getName('query');

  /**
   * Represents the `w:r` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.oMathPara m:oMathPara}, {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode annotationRef w:annotationRef}, {@linkcode br w:br}, {@linkcode commentReference w:commentReference}, {@linkcode continuationSeparator w:continuationSeparator}, {@linkcode cr w:cr}, {@linkcode dayLong w:dayLong}, {@linkcode dayShort w:dayShort}, {@linkcode delInstrText w:delInstrText}, {@linkcode delText w:delText}, {@linkcode drawing w:drawing}, {@linkcode endnoteRef w:endnoteRef}, {@linkcode endnoteReference w:endnoteReference}, {@linkcode fldChar w:fldChar}, {@linkcode footnoteRef w:footnoteRef}, {@linkcode footnoteReference w:footnoteReference}, {@linkcode instrText w:instrText}, {@linkcode lastRenderedPageBreak w:lastRenderedPageBreak}, {@linkcode monthLong w:monthLong}, {@linkcode monthShort w:monthShort}, {@linkcode noBreakHyphen w:noBreakHyphen}, {@linkcode object w:object}, {@linkcode pgNum w:pgNum}, {@linkcode pict w:pict}, {@linkcode ptab w:ptab}, {@linkcode rPr w:rPr}, {@linkcode ruby w:ruby}, {@linkcode separator w:separator}, {@linkcode softHyphen w:softHyphen}, {@linkcode sym w:sym}, {@linkcode t w:t}, {@linkcode tab w:tab}, {@linkcode yearLong w:yearLong}, {@linkcode yearShort w:yearShort}
   * - XML attributes: {@linkcode rsidDel w:rsidDel}, {@linkcode rsidR w:rsidR}, {@linkcode rsidRPr w:rsidRPr}
   */
  public static readonly r: XName = W.w.getName('r');

  /**
   * Represents the `w:readModeInkLockDown` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode actualPg w:actualPg}, {@linkcode fontSz w:fontSz}, {@linkcode h w:h}, {@linkcode w_ w:w_}
   */
  public static readonly readModeInkLockDown: XName = W.w.getName('readModeInkLockDown');

  /**
   * Represents the `w:recipientData` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}, {@linkcode recipients w:recipients}
   * - child XML elements: {@linkcode active w:active}, {@linkcode column w:column}, {@linkcode uniqueTag w:uniqueTag}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly recipientData: XName = W.w.getName('recipientData');

  /**
   * Represents the `w:recipients` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode recipientData w:recipientData}
   */
  public static readonly recipients: XName = W.w.getName('recipients');

  /**
   * Represents the `w:recommended` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode writeProtection w:writeProtection}
   */
  public static readonly recommended: XName = W.w.getName('recommended');

  /**
   * Represents the `w:relativeTo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ptab w:ptab}
   */
  public static readonly relativeTo: XName = W.w.getName('relativeTo');

  /**
   * Represents the `w:relyOnVML` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly relyOnVML: XName = W.w.getName('relyOnVML');

  /**
   * Represents the `w:removeDateAndTime` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly removeDateAndTime: XName = W.w.getName('removeDateAndTime');

  /**
   * Represents the `w:removePersonalInformation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly removePersonalInformation: XName = W.w.getName('removePersonalInformation');

  /**
   * Represents the `w:restart` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lnNumType w:lnNumType}
   */
  public static readonly restart: XName = W.w.getName('restart');

  /**
   * Represents the `w:result` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ddList w:ddList}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly result: XName = W.w.getName('result');

  /**
   * Represents the `w:revisionView` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode comments w:comments}, {@linkcode formatting w:formatting}, {@linkcode inkAnnotations w:inkAnnotations}, {@linkcode insDel w:insDel}, {@linkcode markup w:markup}
   */
  public static readonly revisionView: XName = W.w.getName('revisionView');

  /**
   * Represents the `w:rFonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode ascii w:ascii}, {@linkcode asciiTheme w:asciiTheme}, {@linkcode cs w:cs}, {@linkcode cstheme w:cstheme}, {@linkcode eastAsia w:eastAsia}, {@linkcode eastAsiaTheme w:eastAsiaTheme}, {@linkcode hAnsi w:hAnsi}, {@linkcode hAnsiTheme w:hAnsiTheme}, {@linkcode hint w:hint}
   */
  public static readonly rFonts: XName = W.w.getName('rFonts');

  /**
   * Represents the `w:richText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   */
  public static readonly richText: XName = W.w.getName('richText');

  /**
   * Represents the `w:right` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode divBdr w:divBdr}, {@linkcode pBdr w:pBdr}, {@linkcode pgBorders w:pgBorders}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}, {@linkcode pgMar w:pgMar}
   */
  public static readonly right: XName = W.w.getName('right');

  /**
   * Represents the `w:rightChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly rightChars: XName = W.w.getName('rightChars');

  /**
   * Represents the `w:rightFromText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly rightFromText: XName = W.w.getName('rightFromText');

  /**
   * Represents the `w:rPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.ctrlPr m:ctrlPr}, {@linkcode M.r m:r}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode lvl w:lvl}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode pPr w:pPr}, {@linkcode r w:r}, {@linkcode rPrChange w:rPrChange}, {@linkcode rPrDefault w:rPrDefault}, {@linkcode sdtEndPr w:sdtEndPr}, {@linkcode sdtPr w:sdtPr}, {@linkcode style w:style}, {@linkcode tblStylePr w:tblStylePr}
   * - child XML elements: {@linkcode b w:b}, {@linkcode bCs w:bCs}, {@linkcode bdr w:bdr}, {@linkcode caps w:caps}, {@linkcode color w:color}, {@linkcode cs w:cs}, {@linkcode del w:del}, {@linkcode dstrike w:dstrike}, {@linkcode eastAsianLayout w:eastAsianLayout}, {@linkcode effect w:effect}, {@linkcode em w:em}, {@linkcode emboss w:emboss}, {@linkcode fitText w:fitText}, {@linkcode highlight w:highlight}, {@linkcode i w:i}, {@linkcode iCs w:iCs}, {@linkcode imprint w:imprint}, {@linkcode ins w:ins}, {@linkcode kern w:kern}, {@linkcode lang w:lang}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode noProof w:noProof}, {@linkcode oMath w:oMath}, {@linkcode outline w:outline}, {@linkcode position w:position}, {@linkcode rFonts w:rFonts}, {@linkcode rPrChange w:rPrChange}, {@linkcode rStyle w:rStyle}, {@linkcode rtl w:rtl}, {@linkcode shadow w:shadow}, {@linkcode shd w:shd}, {@linkcode smallCaps w:smallCaps}, {@linkcode snapToGrid w:snapToGrid}, {@linkcode spacing w:spacing}, {@linkcode specVanish w:specVanish}, {@linkcode strike w:strike}, {@linkcode sz w:sz}, {@linkcode szCs w:szCs}, {@linkcode u w:u}, {@linkcode vanish w:vanish}, {@linkcode vertAlign w:vertAlign}, {@linkcode w_ w:w_}, {@linkcode webHidden w:webHidden}, {@linkcode W14.cntxtAlts w14:cntxtAlts}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.glow w14:glow}, {@linkcode W14.ligatures w14:ligatures}, {@linkcode W14.numForm w14:numForm}, {@linkcode W14.numSpacing w14:numSpacing}, {@linkcode W14.props3d w14:props3d}, {@linkcode W14.reflection w14:reflection}, {@linkcode W14.scene3d w14:scene3d}, {@linkcode W14.shadow w14:shadow}, {@linkcode W14.stylisticSets w14:stylisticSets}, {@linkcode W14.textFill w14:textFill}, {@linkcode W14.textOutline w14:textOutline}
   */
  public static readonly rPr: XName = W.w.getName('rPr');

  /**
   * Represents the `w:rPrChange` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - child XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly rPrChange: XName = W.w.getName('rPrChange');

  /**
   * Represents the `w:rPrDefault` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docDefaults w:docDefaults}
   * - child XML elements: {@linkcode rPr w:rPr}
   */
  public static readonly rPrDefault: XName = W.w.getName('rPrDefault');

  /**
   * Represents the `w:rsid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rsids w:rsids}, {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rsid: XName = W.w.getName('rsid');

  /**
   * Represents the `w:rsidDel` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode p w:p}, {@linkcode r w:r}, {@linkcode sectPr w:sectPr}, {@linkcode tr w:tr}
   */
  public static readonly rsidDel: XName = W.w.getName('rsidDel');

  /**
   * Represents the `w:rsidP` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode p w:p}
   */
  public static readonly rsidP: XName = W.w.getName('rsidP');

  /**
   * Represents the `w:rsidR` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode p w:p}, {@linkcode r w:r}, {@linkcode sectPr w:sectPr}, {@linkcode tr w:tr}
   */
  public static readonly rsidR: XName = W.w.getName('rsidR');

  /**
   * Represents the `w:rsidRDefault` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode p w:p}
   */
  public static readonly rsidRDefault: XName = W.w.getName('rsidRDefault');

  /**
   * Represents the `w:rsidRoot` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rsids w:rsids}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rsidRoot: XName = W.w.getName('rsidRoot');

  /**
   * Represents the `w:rsidRPr` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode p w:p}, {@linkcode r w:r}, {@linkcode sectPr w:sectPr}, {@linkcode tr w:tr}
   */
  public static readonly rsidRPr: XName = W.w.getName('rsidRPr');

  /**
   * Represents the `w:rsids` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode rsid w:rsid}, {@linkcode rsidRoot w:rsidRoot}
   */
  public static readonly rsids: XName = W.w.getName('rsids');

  /**
   * Represents the `w:rsidSect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sectPr w:sectPr}
   */
  public static readonly rsidSect: XName = W.w.getName('rsidSect');

  /**
   * Represents the `w:rsidTr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tr w:tr}
   */
  public static readonly rsidTr: XName = W.w.getName('rsidTr');

  /**
   * Represents the `w:rStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rStyle: XName = W.w.getName('rStyle');

  /**
   * Represents the `w:rt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ruby w:ruby}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly rt: XName = W.w.getName('rt');

  /**
   * Represents the `w:rtl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rtl: XName = W.w.getName('rtl');

  /**
   * Represents the `w:rtlGutter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rtlGutter: XName = W.w.getName('rtlGutter');

  /**
   * Represents the `w:ruby` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - child XML elements: {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode rubyPr w:rubyPr}
   */
  public static readonly ruby: XName = W.w.getName('ruby');

  /**
   * Represents the `w:rubyAlign` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rubyPr w:rubyPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly rubyAlign: XName = W.w.getName('rubyAlign');

  /**
   * Represents the `w:rubyBase` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ruby w:ruby}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly rubyBase: XName = W.w.getName('rubyBase');

  /**
   * Represents the `w:rubyPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ruby w:ruby}
   * - child XML elements: {@linkcode dirty w:dirty}, {@linkcode hps w:hps}, {@linkcode hpsBaseText w:hpsBaseText}, {@linkcode hpsRaise w:hpsRaise}, {@linkcode lid w:lid}, {@linkcode rubyAlign w:rubyAlign}
   */
  public static readonly rubyPr: XName = W.w.getName('rubyPr');

  /**
   * Represents the `w:salt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly salt: XName = W.w.getName('salt');

  /**
   * Represents the `w:saltValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly saltValue: XName = W.w.getName('saltValue');

  /**
   * Represents the `w:saveFormsData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly saveFormsData: XName = W.w.getName('saveFormsData');

  /**
   * Represents the `w:saveInvalidXml` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly saveInvalidXml: XName = W.w.getName('saveInvalidXml');

  /**
   * Represents the `w:savePreviewPicture` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly savePreviewPicture: XName = W.w.getName('savePreviewPicture');

  /**
   * Represents the `w:saveSubsetFonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly saveSubsetFonts: XName = W.w.getName('saveSubsetFonts');

  /**
   * Represents the `w:saveThroughXslt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode R.id r:id}, {@linkcode solutionID w:solutionID}
   */
  public static readonly saveThroughXslt: XName = W.w.getName('saveThroughXslt');

  /**
   * Represents the `w:saveXmlDataOnly` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly saveXmlDataOnly: XName = W.w.getName('saveXmlDataOnly');

  /**
   * Represents the `w:scrollbar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly scrollbar: XName = W.w.getName('scrollbar');

  /**
   * Represents the `w:sdt` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.deg m:deg}, {@linkcode M.den m:den}, {@linkcode M.e m:e}, {@linkcode M.fName m:fName}, {@linkcode M.lim m:lim}, {@linkcode M.num m:num}, {@linkcode M.oMath m:oMath}, {@linkcode M.sub m:sub}, {@linkcode M.sup m:sup}, {@linkcode bdo w:bdo}, {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode fldSimple w:fldSimple}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveTo w:moveTo}, {@linkcode p w:p}, {@linkcode rt w:rt}, {@linkcode rubyBase w:rubyBase}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode txbxContent w:txbxContent}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   * - child XML elements: {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode sdtContent w:sdtContent}, {@linkcode sdtEndPr w:sdtEndPr}, {@linkcode sdtPr w:sdtPr}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly sdt: XName = W.w.getName('sdt');

  /**
   * Represents the `w:sdtContent` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdt w:sdt}
   * - child XML elements: {@linkcode M.acc m:acc}, {@linkcode M.bar m:bar}, {@linkcode M.borderBox m:borderBox}, {@linkcode M.box m:box}, {@linkcode M.d m:d}, {@linkcode M.eqArr m:eqArr}, {@linkcode M.f m:f}, {@linkcode M.func m:func}, {@linkcode M.groupChr m:groupChr}, {@linkcode M.limLow m:limLow}, {@linkcode M.limUpp m:limUpp}, {@linkcode M.m_ m:m_}, {@linkcode M.nary m:nary}, {@linkcode M.oMath m:oMath}, {@linkcode M.oMathPara m:oMathPara}, {@linkcode M.phant m:phant}, {@linkcode M.r m:r}, {@linkcode M.rad m:rad}, {@linkcode M.sPre m:sPre}, {@linkcode M.sSub m:sSub}, {@linkcode M.sSubSup m:sSubSup}, {@linkcode M.sSup m:sSup}, {@linkcode bdo w:bdo}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode r w:r}, {@linkcode sdt w:sdt}, {@linkcode subDoc w:subDoc}, {@linkcode tbl w:tbl}, {@linkcode tc w:tc}, {@linkcode tr w:tr}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly sdtContent: XName = W.w.getName('sdtContent');

  /**
   * Represents the `w:sdtEndPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdt w:sdt}
   * - child XML elements: {@linkcode rPr w:rPr}
   */
  public static readonly sdtEndPr: XName = W.w.getName('sdtEndPr');

  /**
   * Represents the `w:sdtPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdt w:sdt}
   * - child XML elements: {@linkcode alias w:alias}, {@linkcode bibliography w:bibliography}, {@linkcode citation w:citation}, {@linkcode comboBox w:comboBox}, {@linkcode dataBinding w:dataBinding}, {@linkcode date w:date}, {@linkcode docPartList w:docPartList}, {@linkcode docPartObj w:docPartObj}, {@linkcode dropDownList w:dropDownList}, {@linkcode equation w:equation}, {@linkcode group w:group}, {@linkcode id w:id}, {@linkcode lock w:lock}, {@linkcode picture w:picture}, {@linkcode placeholder w:placeholder}, {@linkcode richText w:richText}, {@linkcode rPr w:rPr}, {@linkcode showingPlcHdr w:showingPlcHdr}, {@linkcode tag w:tag}, {@linkcode temporary w:temporary}, {@linkcode text w:text}, {@linkcode W14.checkbox w14:checkbox}, {@linkcode W14.entityPicker w14:entityPicker}, {@linkcode W15.appearance w15:appearance}, {@linkcode W15.color w15:color}, {@linkcode W15.dataBinding w15:dataBinding}, {@linkcode W15.repeatingSection w15:repeatingSection}, {@linkcode W15.repeatingSectionItem w15:repeatingSectionItem}, {@linkcode W15.webExtensionCreated w15:webExtensionCreated}, {@linkcode W15.webExtensionLinked w15:webExtensionLinked}
   */
  public static readonly sdtPr: XName = W.w.getName('sdtPr');

  /**
   * Represents the `w:sectPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode body w:body}, {@linkcode docPartBody w:docPartBody}, {@linkcode pPr w:pPr}, {@linkcode sectPrChange w:sectPrChange}
   * - child XML elements: {@linkcode bidi w:bidi}, {@linkcode cols w:cols}, {@linkcode docGrid w:docGrid}, {@linkcode endnotePr w:endnotePr}, {@linkcode footerReference w:footerReference}, {@linkcode footnotePr w:footnotePr}, {@linkcode formProt w:formProt}, {@linkcode headerReference w:headerReference}, {@linkcode lnNumType w:lnNumType}, {@linkcode noEndnote w:noEndnote}, {@linkcode paperSrc w:paperSrc}, {@linkcode pgBorders w:pgBorders}, {@linkcode pgMar w:pgMar}, {@linkcode pgNumType w:pgNumType}, {@linkcode pgSz w:pgSz}, {@linkcode printerSettings w:printerSettings}, {@linkcode rtlGutter w:rtlGutter}, {@linkcode sectPrChange w:sectPrChange}, {@linkcode textDirection w:textDirection}, {@linkcode titlePg w:titlePg}, {@linkcode type w:type}, {@linkcode vAlign w:vAlign}, {@linkcode W15.footnoteColumns w15:footnoteColumns}
   * - XML attributes: {@linkcode rsidDel w:rsidDel}, {@linkcode rsidR w:rsidR}, {@linkcode rsidRPr w:rsidRPr}, {@linkcode rsidSect w:rsidSect}
   */
  public static readonly sectPr: XName = W.w.getName('sectPr');

  /**
   * Represents the `w:sectPrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - child XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly sectPrChange: XName = W.w.getName('sectPrChange');

  /**
   * Represents the `w:selectFldWithFirstOrLastChar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly selectFldWithFirstOrLastChar: XName = W.w.getName('selectFldWithFirstOrLastChar');

  /**
   * Represents the `w:semiHidden` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lsdException w:lsdException}
   */
  public static readonly semiHidden: XName = W.w.getName('semiHidden');

  /**
   * Represents the `w:sep` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode caption w:caption}, {@linkcode cols w:cols}
   */
  public static readonly sep: XName = W.w.getName('sep');

  /**
   * Represents the `w:separator` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly separator: XName = W.w.getName('separator');

  /**
   * Represents the `w:settings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode M.mathPr m:mathPr}, {@linkcode SL.schemaLibrary sl:schemaLibrary}, {@linkcode activeWritingStyle w:activeWritingStyle}, {@linkcode alignBordersAndEdges w:alignBordersAndEdges}, {@linkcode alwaysMergeEmptyNamespace w:alwaysMergeEmptyNamespace}, {@linkcode alwaysShowPlaceholderText w:alwaysShowPlaceholderText}, {@linkcode attachedSchema w:attachedSchema}, {@linkcode attachedTemplate w:attachedTemplate}, {@linkcode autoFormatOverride w:autoFormatOverride}, {@linkcode autoHyphenation w:autoHyphenation}, {@linkcode bookFoldPrinting w:bookFoldPrinting}, {@linkcode bookFoldPrintingSheets w:bookFoldPrintingSheets}, {@linkcode bookFoldRevPrinting w:bookFoldRevPrinting}, {@linkcode bordersDoNotSurroundFooter w:bordersDoNotSurroundFooter}, {@linkcode bordersDoNotSurroundHeader w:bordersDoNotSurroundHeader}, {@linkcode captions w:captions}, {@linkcode characterSpacingControl w:characterSpacingControl}, {@linkcode clickAndTypeStyle w:clickAndTypeStyle}, {@linkcode clrSchemeMapping w:clrSchemeMapping}, {@linkcode compat w:compat}, {@linkcode consecutiveHyphenLimit w:consecutiveHyphenLimit}, {@linkcode decimalSymbol w:decimalSymbol}, {@linkcode defaultTableStyle w:defaultTableStyle}, {@linkcode defaultTabStop w:defaultTabStop}, {@linkcode displayBackgroundShape w:displayBackgroundShape}, {@linkcode displayHorizontalDrawingGridEvery w:displayHorizontalDrawingGridEvery}, {@linkcode displayVerticalDrawingGridEvery w:displayVerticalDrawingGridEvery}, {@linkcode documentProtection w:documentProtection}, {@linkcode documentType w:documentType}, {@linkcode docVars w:docVars}, {@linkcode doNotAutoCompressPictures w:doNotAutoCompressPictures}, {@linkcode doNotDemarcateInvalidXml w:doNotDemarcateInvalidXml}, {@linkcode doNotDisplayPageBoundaries w:doNotDisplayPageBoundaries}, {@linkcode doNotHyphenateCaps w:doNotHyphenateCaps}, {@linkcode doNotIncludeSubdocsInStats w:doNotIncludeSubdocsInStats}, {@linkcode doNotShadeFormData w:doNotShadeFormData}, {@linkcode doNotTrackFormatting w:doNotTrackFormatting}, {@linkcode doNotTrackMoves w:doNotTrackMoves}, {@linkcode doNotUseMarginsForDrawingGridOrigin w:doNotUseMarginsForDrawingGridOrigin}, {@linkcode doNotValidateAgainstSchema w:doNotValidateAgainstSchema}, {@linkcode drawingGridHorizontalOrigin w:drawingGridHorizontalOrigin}, {@linkcode drawingGridHorizontalSpacing w:drawingGridHorizontalSpacing}, {@linkcode drawingGridVerticalOrigin w:drawingGridVerticalOrigin}, {@linkcode drawingGridVerticalSpacing w:drawingGridVerticalSpacing}, {@linkcode embedSystemFonts w:embedSystemFonts}, {@linkcode embedTrueTypeFonts w:embedTrueTypeFonts}, {@linkcode endnotePr w:endnotePr}, {@linkcode evenAndOddHeaders w:evenAndOddHeaders}, {@linkcode footnotePr w:footnotePr}, {@linkcode forceUpgrade w:forceUpgrade}, {@linkcode formsDesign w:formsDesign}, {@linkcode gutterAtTop w:gutterAtTop}, {@linkcode hdrShapeDefaults w:hdrShapeDefaults}, {@linkcode hideGrammaticalErrors w:hideGrammaticalErrors}, {@linkcode hideSpellingErrors w:hideSpellingErrors}, {@linkcode hyphenationZone w:hyphenationZone}, {@linkcode ignoreMixedContent w:ignoreMixedContent}, {@linkcode linkStyles w:linkStyles}, {@linkcode listSeparator w:listSeparator}, {@linkcode mailMerge w:mailMerge}, {@linkcode mirrorMargins w:mirrorMargins}, {@linkcode noLineBreaksAfter w:noLineBreaksAfter}, {@linkcode noLineBreaksBefore w:noLineBreaksBefore}, {@linkcode noPunctuationKerning w:noPunctuationKerning}, {@linkcode printFormsData w:printFormsData}, {@linkcode printFractionalCharacterWidth w:printFractionalCharacterWidth}, {@linkcode printPostScriptOverText w:printPostScriptOverText}, {@linkcode printTwoOnOne w:printTwoOnOne}, {@linkcode proofState w:proofState}, {@linkcode readModeInkLockDown w:readModeInkLockDown}, {@linkcode removeDateAndTime w:removeDateAndTime}, {@linkcode removePersonalInformation w:removePersonalInformation}, {@linkcode revisionView w:revisionView}, {@linkcode rsids w:rsids}, {@linkcode saveFormsData w:saveFormsData}, {@linkcode saveInvalidXml w:saveInvalidXml}, {@linkcode savePreviewPicture w:savePreviewPicture}, {@linkcode saveSubsetFonts w:saveSubsetFonts}, {@linkcode saveThroughXslt w:saveThroughXslt}, {@linkcode saveXmlDataOnly w:saveXmlDataOnly}, {@linkcode shapeDefaults w:shapeDefaults}, {@linkcode showEnvelope w:showEnvelope}, {@linkcode showXMLTags w:showXMLTags}, {@linkcode strictFirstAndLastChars w:strictFirstAndLastChars}, {@linkcode styleLockQFSet w:styleLockQFSet}, {@linkcode styleLockTheme w:styleLockTheme}, {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}, {@linkcode stylePaneSortMethod w:stylePaneSortMethod}, {@linkcode summaryLength w:summaryLength}, {@linkcode themeFontLang w:themeFontLang}, {@linkcode trackRevisions w:trackRevisions}, {@linkcode uiCompat97To2003 w:uiCompat97To2003}, {@linkcode updateFields w:updateFields}, {@linkcode useXSLTWhenSaving w:useXSLTWhenSaving}, {@linkcode view w:view}, {@linkcode writeProtection w:writeProtection}, {@linkcode zoom w:zoom}, {@linkcode W14.conflictMode w14:conflictMode}, {@linkcode W14.defaultImageDpi w14:defaultImageDpi}, {@linkcode W14.discardImageEditingData w14:discardImageEditingData}, {@linkcode W14.docId w14:docId}, {@linkcode W15.chartTrackingRefBased w15:chartTrackingRefBased}, {@linkcode W15.docId w15:docId}
   */
  public static readonly settings: XName = W.w.getName('settings');

  /**
   * Represents the `w:shadow` XML element and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}
   */
  public static readonly shadow: XName = W.w.getName('shadow');

  /**
   * Represents the `w:shapeDefaults` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - child XML elements: {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode O.shapelayout o:shapelayout}
   */
  public static readonly shapeDefaults: XName = W.w.getName('shapeDefaults');

  /**
   * Represents the `w:shapeid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode control w:control}
   */
  public static readonly shapeid: XName = W.w.getName('shapeid');

  /**
   * Represents the `w:shapeId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectEmbed w:objectEmbed}, {@linkcode objectLink w:objectLink}
   */
  public static readonly shapeId_: XName = W.w.getName('shapeId');

  /**
   * Represents the `w:shapeLayoutLikeWW8` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly shapeLayoutLikeWW8: XName = W.w.getName('shapeLayoutLikeWW8');

  /**
   * Represents the `w:shd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode rPr w:rPr}, {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}, {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode color w:color}, {@linkcode fill w:fill}, {@linkcode themeColor w:themeColor}, {@linkcode themeFill w:themeFill}, {@linkcode themeFillShade w:themeFillShade}, {@linkcode themeFillTint w:themeFillTint}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly shd: XName = W.w.getName('shd');

  /**
   * Represents the `w:showBreaksInFrames` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly showBreaksInFrames: XName = W.w.getName('showBreaksInFrames');

  /**
   * Represents the `w:showEnvelope` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly showEnvelope: XName = W.w.getName('showEnvelope');

  /**
   * Represents the `w:showingPlcHdr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly showingPlcHdr: XName = W.w.getName('showingPlcHdr');

  /**
   * Represents the `w:showXMLTags` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly showXMLTags: XName = W.w.getName('showXMLTags');

  /**
   * Represents the `w:sig` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font w:font}
   * - XML attributes: {@linkcode csb0 w:csb0}, {@linkcode csb1 w:csb1}, {@linkcode usb0 w:usb0}, {@linkcode usb1 w:usb1}, {@linkcode usb2 w:usb2}, {@linkcode usb3 w:usb3}
   */
  public static readonly sig: XName = W.w.getName('sig');

  /**
   * Represents the `w:size` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkBox w:checkBox}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly size: XName = W.w.getName('size');

  /**
   * Represents the `w:sizeAuto` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode checkBox w:checkBox}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly sizeAuto: XName = W.w.getName('sizeAuto');

  /**
   * Represents the `w:smallCaps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly smallCaps: XName = W.w.getName('smallCaps');

  /**
   * Represents the `w:snapToGrid` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly snapToGrid: XName = W.w.getName('snapToGrid');

  /**
   * Represents the `w:softHyphen` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly softHyphen: XName = W.w.getName('softHyphen');

  /**
   * Represents the `w:solutionID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode saveThroughXslt w:saveThroughXslt}
   */
  public static readonly solutionID: XName = W.w.getName('solutionID');

  /**
   * Represents the `w:sourceFileName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sourceFileName: XName = W.w.getName('sourceFileName');

  /**
   * Represents the `w:space` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode col w:col}, {@linkcode cols w:cols}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}
   */
  public static readonly space: XName = W.w.getName('space');

  /**
   * Represents the `w:spaceForUL` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly spaceForUL: XName = W.w.getName('spaceForUL');

  /**
   * Represents the `w:spacing` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode after w:after}, {@linkcode afterAutospacing w:afterAutospacing}, {@linkcode afterLines w:afterLines}, {@linkcode before w:before}, {@linkcode beforeAutospacing w:beforeAutospacing}, {@linkcode beforeLines w:beforeLines}, {@linkcode line w:line}, {@linkcode lineRule w:lineRule}, {@linkcode val w:val}
   */
  public static readonly spacing: XName = W.w.getName('spacing');

  /**
   * Represents the `w:spacingInWholePoints` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly spacingInWholePoints: XName = W.w.getName('spacingInWholePoints');

  /**
   * Represents the `w:specVanish` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly specVanish: XName = W.w.getName('specVanish');

  /**
   * Represents the `w:spelling` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode proofState w:proofState}
   */
  public static readonly spelling: XName = W.w.getName('spelling');

  /**
   * Represents the `w:spinCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode documentProtection w:documentProtection}, {@linkcode writeProtection w:writeProtection}
   */
  public static readonly spinCount: XName = W.w.getName('spinCount');

  /**
   * Represents the `w:splitPgBreakAndParaMark` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly splitPgBreakAndParaMark: XName = W.w.getName('splitPgBreakAndParaMark');

  /**
   * Represents the `w:src` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly src: XName = W.w.getName('src');

  /**
   * Represents the `w:start` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}, {@linkcode lnNumType w:lnNumType}, {@linkcode pgNumType w:pgNumType}
   */
  public static readonly start: XName = W.w.getName('start');

  /**
   * Represents the `w:startChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode ind w:ind}
   */
  public static readonly startChars: XName = W.w.getName('startChars');

  /**
   * Represents the `w:startOverride` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvlOverride w:lvlOverride}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly startOverride: XName = W.w.getName('startOverride');

  /**
   * Represents the `w:statusText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - XML attributes: {@linkcode type w:type}, {@linkcode val w:val}
   */
  public static readonly statusText: XName = W.w.getName('statusText');

  /**
   * Represents the `w:storeItemID` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode dataBinding w:dataBinding}, {@linkcode W15.dataBinding w15:dataBinding}
   */
  public static readonly storeItemID: XName = W.w.getName('storeItemID');

  /**
   * Represents the `w:storeMappedDataAs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode date w:date}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly storeMappedDataAs: XName = W.w.getName('storeMappedDataAs');

  /**
   * Represents the `w:strictFirstAndLastChars` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly strictFirstAndLastChars: XName = W.w.getName('strictFirstAndLastChars');

  /**
   * Represents the `w:strike` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly strike: XName = W.w.getName('strike');

  /**
   * Represents the `w:style` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}, {@linkcode styles w:styles}
   * - child XML elements: {@linkcode aliases w:aliases}, {@linkcode autoRedefine w:autoRedefine}, {@linkcode basedOn w:basedOn}, {@linkcode hidden w:hidden}, {@linkcode link w:link}, {@linkcode locked w:locked}, {@linkcode name_ w:name_}, {@linkcode next w:next}, {@linkcode personal w:personal}, {@linkcode personalCompose w:personalCompose}, {@linkcode personalReply w:personalReply}, {@linkcode pPr w:pPr}, {@linkcode qFormat w:qFormat}, {@linkcode rPr w:rPr}, {@linkcode rsid w:rsid}, {@linkcode semiHidden w:semiHidden}, {@linkcode tblPr w:tblPr}, {@linkcode tblStylePr w:tblStylePr}, {@linkcode tcPr w:tcPr}, {@linkcode trPr w:trPr}, {@linkcode uiPriority w:uiPriority}, {@linkcode unhideWhenUsed w:unhideWhenUsed}
   * - XML attributes: {@linkcode customStyle w:customStyle}, {@linkcode default w:default}, {@linkcode styleId w:styleId}, {@linkcode type w:type}, {@linkcode val w:val}
   */
  public static readonly style: XName = W.w.getName('style');

  /**
   * Represents the `w:styleId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode style w:style}
   */
  public static readonly styleId: XName = W.w.getName('styleId');

  /**
   * Represents the `w:styleLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly styleLink: XName = W.w.getName('styleLink');

  /**
   * Represents the `w:styleLockQFSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly styleLockQFSet: XName = W.w.getName('styleLockQFSet');

  /**
   * Represents the `w:styleLockTheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly styleLockTheme: XName = W.w.getName('styleLockTheme');

  /**
   * Represents the `w:stylePaneFormatFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode allStyles w:allStyles}, {@linkcode alternateStyleNames w:alternateStyleNames}, {@linkcode clearFormatting w:clearFormatting}, {@linkcode customStyles w:customStyles}, {@linkcode directFormattingOnNumbering w:directFormattingOnNumbering}, {@linkcode directFormattingOnParagraphs w:directFormattingOnParagraphs}, {@linkcode directFormattingOnRuns w:directFormattingOnRuns}, {@linkcode directFormattingOnTables w:directFormattingOnTables}, {@linkcode headingStyles w:headingStyles}, {@linkcode latentStyles w:latentStyles}, {@linkcode numberingStyles w:numberingStyles}, {@linkcode stylesInUse w:stylesInUse}, {@linkcode tableStyles w:tableStyles}, {@linkcode top3HeadingStyles w:top3HeadingStyles}, {@linkcode val w:val}, {@linkcode visibleStyles w:visibleStyles}
   */
  public static readonly stylePaneFormatFilter: XName = W.w.getName('stylePaneFormatFilter');

  /**
   * Represents the `w:stylePaneSortMethod` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly stylePaneSortMethod: XName = W.w.getName('stylePaneSortMethod');

  /**
   * Represents the `w:styles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode docDefaults w:docDefaults}, {@linkcode latentStyles w:latentStyles}, {@linkcode style w:style}
   */
  public static readonly styles: XName = W.w.getName('styles');

  /**
   * Represents the `w:stylesInUse` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly stylesInUse: XName = W.w.getName('stylesInUse');

  /**
   * Represents the `w:subDoc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bdo w:bdo}, {@linkcode customXml w:customXml}, {@linkcode dir w:dir}, {@linkcode fldSimple w:fldSimple}, {@linkcode hyperlink w:hyperlink}, {@linkcode p w:p}, {@linkcode sdtContent w:sdtContent}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly subDoc: XName = W.w.getName('subDoc');

  /**
   * Represents the `w:subFontBySize` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly subFontBySize: XName = W.w.getName('subFontBySize');

  /**
   * Represents the `w:subsetted` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode embedBold w:embedBold}, {@linkcode embedBoldItalic w:embedBoldItalic}, {@linkcode embedItalic w:embedItalic}, {@linkcode embedRegular w:embedRegular}
   */
  public static readonly subsetted: XName = W.w.getName('subsetted');

  /**
   * Represents the `w:suff` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode lvl w:lvl}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suff: XName = W.w.getName('suff');

  /**
   * Represents the `w:summaryLength` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly summaryLength: XName = W.w.getName('summaryLength');

  /**
   * Represents the `w:suppressAutoHyphens` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressAutoHyphens: XName = W.w.getName('suppressAutoHyphens');

  /**
   * Represents the `w:suppressBottomSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressBottomSpacing: XName = W.w.getName('suppressBottomSpacing');

  /**
   * Represents the `w:suppressLineNumbers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressLineNumbers: XName = W.w.getName('suppressLineNumbers');

  /**
   * Represents the `w:suppressOverlap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressOverlap: XName = W.w.getName('suppressOverlap');

  /**
   * Represents the `w:suppressSpacingAtTopOfPage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressSpacingAtTopOfPage: XName = W.w.getName('suppressSpacingAtTopOfPage');

  /**
   * Represents the `w:suppressSpBfAfterPgBrk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressSpBfAfterPgBrk: XName = W.w.getName('suppressSpBfAfterPgBrk');

  /**
   * Represents the `w:suppressTopSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressTopSpacing: XName = W.w.getName('suppressTopSpacing');

  /**
   * Represents the `w:suppressTopSpacingWP` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly suppressTopSpacingWP: XName = W.w.getName('suppressTopSpacingWP');

  /**
   * Represents the `w:swapBordersFacingPages` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly swapBordersFacingPages: XName = W.w.getName('swapBordersFacingPages');

  /**
   * Represents the `w:sym` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode char w:char}, {@linkcode font w:font}
   */
  public static readonly sym: XName = W.w.getName('sym');

  /**
   * Represents the `w:sz` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode frame w:frame}, {@linkcode frameset w:frameset}, {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}
   */
  public static readonly sz: XName = W.w.getName('sz');

  /**
   * Represents the `w:szCs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly szCs: XName = W.w.getName('szCs');

  /**
   * Represents the `w:t` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly t: XName = W.w.getName('t');

  /**
   * Represents the `w:t1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly t1: XName = W.w.getName('t1');

  /**
   * Represents the `w:t2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clrSchemeMapping w:clrSchemeMapping}
   */
  public static readonly t2: XName = W.w.getName('t2');

  /**
   * Represents the `w:tab` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}, {@linkcode tabs w:tabs}
   * - XML attributes: {@linkcode leader w:leader}, {@linkcode pos w:pos}, {@linkcode val w:val}
   */
  public static readonly tab: XName = W.w.getName('tab');

  /**
   * Represents the `w:table` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly table: XName = W.w.getName('table');

  /**
   * Represents the `w:tableStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly tableStyles: XName = W.w.getName('tableStyles');

  /**
   * Represents the `w:tabs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - child XML elements: {@linkcode tab w:tab}
   */
  public static readonly tabs: XName = W.w.getName('tabs');

  /**
   * Represents the `w:tag` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tag: XName = W.w.getName('tag');

  /**
   * Represents the `w:targetScreenSz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webSettings w:webSettings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly targetScreenSz: XName = W.w.getName('targetScreenSz');

  /**
   * Represents the `w:tbl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode body w:body}, {@linkcode comment w:comment}, {@linkcode customXml w:customXml}, {@linkcode docPartBody w:docPartBody}, {@linkcode endnote w:endnote}, {@linkcode footnote w:footnote}, {@linkcode ftr w:ftr}, {@linkcode hdr w:hdr}, {@linkcode sdtContent w:sdtContent}, {@linkcode tc w:tc}, {@linkcode txbxContent w:txbxContent}
   * - child XML elements: {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tblGrid w:tblGrid}, {@linkcode tblPr w:tblPr}, {@linkcode tr w:tr}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly tbl: XName = W.w.getName('tbl');

  /**
   * Represents the `w:tblBorders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode top w:top}
   */
  public static readonly tblBorders: XName = W.w.getName('tblBorders');

  /**
   * Represents the `w:tblCaption` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblCaption: XName = W.w.getName('tblCaption');

  /**
   * Represents the `w:tblCellMar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode top w:top}
   */
  public static readonly tblCellMar: XName = W.w.getName('tblCellMar');

  /**
   * Represents the `w:tblCellSpacing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly tblCellSpacing: XName = W.w.getName('tblCellSpacing');

  /**
   * Represents the `w:tblDescription` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblDescription: XName = W.w.getName('tblDescription');

  /**
   * Represents the `w:tblGrid` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tbl w:tbl}, {@linkcode tblGridChange w:tblGridChange}
   * - child XML elements: {@linkcode gridCol w:gridCol}, {@linkcode tblGridChange w:tblGridChange}
   */
  public static readonly tblGrid: XName = W.w.getName('tblGrid');

  /**
   * Represents the `w:tblGridChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblGrid w:tblGrid}
   * - child XML elements: {@linkcode tblGrid w:tblGrid}
   * - XML attributes: {@linkcode id w:id}
   */
  public static readonly tblGridChange: XName = W.w.getName('tblGridChange');

  /**
   * Represents the `w:tblHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblHeader: XName = W.w.getName('tblHeader');

  /**
   * Represents the `w:tblInd` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly tblInd: XName = W.w.getName('tblInd');

  /**
   * Represents the `w:tblLayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - XML attributes: {@linkcode type w:type}
   */
  public static readonly tblLayout: XName = W.w.getName('tblLayout');

  /**
   * Represents the `w:tblLook` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - XML attributes: {@linkcode firstColumn w:firstColumn}, {@linkcode firstRow w:firstRow}, {@linkcode lastColumn w:lastColumn}, {@linkcode lastRow w:lastRow}, {@linkcode noHBand w:noHBand}, {@linkcode noVBand w:noVBand}, {@linkcode val w:val}
   */
  public static readonly tblLook: XName = W.w.getName('tblLook');

  /**
   * Represents the `w:tblOverlap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblOverlap: XName = W.w.getName('tblOverlap');

  /**
   * Represents the `w:tblpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode bottomFromText w:bottomFromText}, {@linkcode horzAnchor w:horzAnchor}, {@linkcode leftFromText w:leftFromText}, {@linkcode rightFromText w:rightFromText}, {@linkcode tblpX w:tblpX}, {@linkcode tblpXSpec w:tblpXSpec}, {@linkcode tblpY w:tblpY}, {@linkcode tblpYSpec w:tblpYSpec}, {@linkcode topFromText w:topFromText}, {@linkcode vertAnchor w:vertAnchor}
   */
  public static readonly tblpPr: XName = W.w.getName('tblpPr');

  /**
   * Represents the `w:tblPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}, {@linkcode tbl w:tbl}, {@linkcode tblPrChange w:tblPrChange}, {@linkcode tblStylePr w:tblStylePr}
   * - child XML elements: {@linkcode bidiVisual w:bidiVisual}, {@linkcode jc w:jc}, {@linkcode shd w:shd}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCaption w:tblCaption}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tblCellSpacing w:tblCellSpacing}, {@linkcode tblDescription w:tblDescription}, {@linkcode tblInd w:tblInd}, {@linkcode tblLayout w:tblLayout}, {@linkcode tblLook w:tblLook}, {@linkcode tblOverlap w:tblOverlap}, {@linkcode tblpPr w:tblpPr}, {@linkcode tblPrChange w:tblPrChange}, {@linkcode tblStyle w:tblStyle}, {@linkcode tblStyleColBandSize w:tblStyleColBandSize}, {@linkcode tblStyleRowBandSize w:tblStyleRowBandSize}, {@linkcode tblW w:tblW}
   */
  public static readonly tblPr: XName = W.w.getName('tblPr');

  /**
   * Represents the `w:tblPrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - child XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly tblPrChange: XName = W.w.getName('tblPrChange');

  /**
   * Represents the `w:tblPrEx` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPrExChange w:tblPrExChange}, {@linkcode tr w:tr}
   * - child XML elements: {@linkcode jc w:jc}, {@linkcode shd w:shd}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tblCellSpacing w:tblCellSpacing}, {@linkcode tblInd w:tblInd}, {@linkcode tblLayout w:tblLayout}, {@linkcode tblLook w:tblLook}, {@linkcode tblPrExChange w:tblPrExChange}, {@linkcode tblW w:tblW}
   */
  public static readonly tblPrEx: XName = W.w.getName('tblPrEx');

  /**
   * Represents the `w:tblPrExChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPrEx w:tblPrEx}
   * - child XML elements: {@linkcode tblPrEx w:tblPrEx}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly tblPrExChange: XName = W.w.getName('tblPrExChange');

  /**
   * Represents the `w:tblpX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly tblpX: XName = W.w.getName('tblpX');

  /**
   * Represents the `w:tblpXSpec` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly tblpXSpec: XName = W.w.getName('tblpXSpec');

  /**
   * Represents the `w:tblpY` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly tblpY: XName = W.w.getName('tblpY');

  /**
   * Represents the `w:tblpYSpec` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly tblpYSpec: XName = W.w.getName('tblpYSpec');

  /**
   * Represents the `w:tblStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblStyle: XName = W.w.getName('tblStyle');

  /**
   * Represents the `w:tblStyleColBandSize` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblStyleColBandSize: XName = W.w.getName('tblStyleColBandSize');

  /**
   * Represents the `w:tblStylePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - child XML elements: {@linkcode pPr w:pPr}, {@linkcode rPr w:rPr}, {@linkcode tblPr w:tblPr}, {@linkcode tcPr w:tcPr}, {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode type w:type}
   */
  public static readonly tblStylePr: XName = W.w.getName('tblStylePr');

  /**
   * Represents the `w:tblStyleRowBandSize` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tblStyleRowBandSize: XName = W.w.getName('tblStyleRowBandSize');

  /**
   * Represents the `w:tblW` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tblPr w:tblPr}, {@linkcode tblPrEx w:tblPrEx}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly tblW: XName = W.w.getName('tblW');

  /**
   * Represents the `w:tc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customXml w:customXml}, {@linkcode sdtContent w:sdtContent}, {@linkcode tr w:tr}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode tcPr w:tcPr}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly tc: XName = W.w.getName('tc');

  /**
   * Represents the `w:tcBorders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}
   */
  public static readonly tcBorders: XName = W.w.getName('tcBorders');

  /**
   * Represents the `w:tcFitText` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tcFitText: XName = W.w.getName('tcFitText');

  /**
   * Represents the `w:tcMar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - child XML elements: {@linkcode bottom w:bottom}, {@linkcode end w:end}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode top w:top}
   */
  public static readonly tcMar: XName = W.w.getName('tcMar');

  /**
   * Represents the `w:tcPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}, {@linkcode tblStylePr w:tblStylePr}, {@linkcode tc w:tc}, {@linkcode tcPrChange w:tcPrChange}
   * - child XML elements: {@linkcode cellDel w:cellDel}, {@linkcode cellIns w:cellIns}, {@linkcode cellMerge w:cellMerge}, {@linkcode cnfStyle w:cnfStyle}, {@linkcode gridSpan w:gridSpan}, {@linkcode hideMark w:hideMark}, {@linkcode hMerge w:hMerge}, {@linkcode noWrap w:noWrap}, {@linkcode shd w:shd}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcFitText w:tcFitText}, {@linkcode tcMar w:tcMar}, {@linkcode tcPrChange w:tcPrChange}, {@linkcode tcW w:tcW}, {@linkcode textDirection w:textDirection}, {@linkcode vAlign w:vAlign}, {@linkcode vMerge w:vMerge}
   */
  public static readonly tcPr: XName = W.w.getName('tcPr');

  /**
   * Represents the `w:tcPrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - child XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly tcPrChange: XName = W.w.getName('tcPrChange');

  /**
   * Represents the `w:tcW` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly tcW: XName = W.w.getName('tcW');

  /**
   * Represents the `w:temporary` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly temporary: XName = W.w.getName('temporary');

  /**
   * Represents the `w:tentative` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lvl w:lvl}
   */
  public static readonly tentative: XName = W.w.getName('tentative');

  /**
   * Represents the `w:text` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sdtPr w:sdtPr}
   * - XML attributes: {@linkcode multiLine w:multiLine}
   */
  public static readonly text: XName = W.w.getName('text');

  /**
   * Represents the `w:textAlignment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly textAlignment: XName = W.w.getName('textAlignment');

  /**
   * Represents the `w:textboxTightWrap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly textboxTightWrap: XName = W.w.getName('textboxTightWrap');

  /**
   * Represents the `w:textDirection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}, {@linkcode sectPr w:sectPr}, {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly textDirection: XName = W.w.getName('textDirection');

  /**
   * Represents the `w:textInput` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ffData w:ffData}
   * - child XML elements: {@linkcode default w:default}, {@linkcode format w:format}, {@linkcode maxLength w:maxLength}, {@linkcode type w:type}
   */
  public static readonly textInput: XName = W.w.getName('textInput');

  /**
   * Represents the `w:tgtFrame` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode hyperlink w:hyperlink}
   */
  public static readonly tgtFrame: XName = W.w.getName('tgtFrame');

  /**
   * Represents the `w:themeColor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode background w:background}, {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode color w:color}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode shd w:shd}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}, {@linkcode u w:u}, {@linkcode W15.color w15:color}
   */
  public static readonly themeColor: XName = W.w.getName('themeColor');

  /**
   * Represents the `w:themeFill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shd w:shd}
   */
  public static readonly themeFill: XName = W.w.getName('themeFill');

  /**
   * Represents the `w:themeFillShade` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shd w:shd}
   */
  public static readonly themeFillShade: XName = W.w.getName('themeFillShade');

  /**
   * Represents the `w:themeFillTint` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shd w:shd}
   */
  public static readonly themeFillTint: XName = W.w.getName('themeFillTint');

  /**
   * Represents the `w:themeFontLang` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode bidi w:bidi}, {@linkcode eastAsia w:eastAsia}, {@linkcode val w:val}
   */
  public static readonly themeFontLang: XName = W.w.getName('themeFontLang');

  /**
   * Represents the `w:themeShade` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode background w:background}, {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode color w:color}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode shd w:shd}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}, {@linkcode u w:u}, {@linkcode W15.color w15:color}
   */
  public static readonly themeShade: XName = W.w.getName('themeShade');

  /**
   * Represents the `w:themeTint` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode background w:background}, {@linkcode bar w:bar}, {@linkcode bdr w:bdr}, {@linkcode between w:between}, {@linkcode bottom w:bottom}, {@linkcode color w:color}, {@linkcode end w:end}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode left w:left}, {@linkcode right w:right}, {@linkcode shd w:shd}, {@linkcode start w:start}, {@linkcode tl2br w:tl2br}, {@linkcode top w:top}, {@linkcode tr2bl w:tr2bl}, {@linkcode u w:u}, {@linkcode W15.color w15:color}
   */
  public static readonly themeTint: XName = W.w.getName('themeTint');

  /**
   * Represents the `w:titlePg` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly titlePg: XName = W.w.getName('titlePg');

  /**
   * Represents the `w:tl2br` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBorders w:tcBorders}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly tl2br: XName = W.w.getName('tl2br');

  /**
   * Represents the `w:tmpl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode abstractNum w:abstractNum}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly tmpl: XName = W.w.getName('tmpl');

  /**
   * Represents the `w:tooltip` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode hyperlink w:hyperlink}
   */
  public static readonly tooltip: XName = W.w.getName('tooltip');

  /**
   * Represents the `w:top` XML elements and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode divBdr w:divBdr}, {@linkcode pBdr w:pBdr}, {@linkcode pgBorders w:pgBorders}, {@linkcode tblBorders w:tblBorders}, {@linkcode tblCellMar w:tblCellMar}, {@linkcode tcBorders w:tcBorders}, {@linkcode tcMar w:tcMar}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode type w:type}, {@linkcode val w:val}, {@linkcode w_ w:w_}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgMar w:pgMar}
   */
  public static readonly top: XName = W.w.getName('top');

  /**
   * Represents the `w:top3HeadingStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly top3HeadingStyles: XName = W.w.getName('top3HeadingStyles');

  /**
   * Represents the `w:topFromText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly topFromText: XName = W.w.getName('topFromText');

  /**
   * Represents the `w:topLinePunct` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly topLinePunct: XName = W.w.getName('topLinePunct');

  /**
   * Represents the `w:tplc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lvl w:lvl}
   */
  public static readonly tplc: XName = W.w.getName('tplc');

  /**
   * Represents the `w:tr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customXml w:customXml}, {@linkcode sdtContent w:sdtContent}, {@linkcode tbl w:tbl}
   * - child XML elements: {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tblPrEx w:tblPrEx}, {@linkcode tc w:tc}, {@linkcode trPr w:trPr}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   * - XML attributes: {@linkcode rsidDel w:rsidDel}, {@linkcode rsidR w:rsidR}, {@linkcode rsidRPr w:rsidRPr}, {@linkcode rsidTr w:rsidTr}, {@linkcode W14.paraId w14:paraId}, {@linkcode W14.textId w14:textId}
   */
  public static readonly tr: XName = W.w.getName('tr');

  /**
   * Represents the `w:tr2bl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcBorders w:tcBorders}
   * - XML attributes: {@linkcode color w:color}, {@linkcode frame w:frame}, {@linkcode shadow w:shadow}, {@linkcode space w:space}, {@linkcode sz w:sz}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly tr2bl: XName = W.w.getName('tr2bl');

  /**
   * Represents the `w:trackRevisions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly trackRevisions: XName = W.w.getName('trackRevisions');

  /**
   * Represents the `w:trHeight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode hRule w:hRule}, {@linkcode val w:val}
   */
  public static readonly trHeight: XName = W.w.getName('trHeight');

  /**
   * Represents the `w:trPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}, {@linkcode tblStylePr w:tblStylePr}, {@linkcode tr w:tr}, {@linkcode trPrChange w:trPrChange}
   * - child XML elements: {@linkcode cantSplit w:cantSplit}, {@linkcode cnfStyle w:cnfStyle}, {@linkcode del w:del}, {@linkcode divId w:divId}, {@linkcode gridAfter w:gridAfter}, {@linkcode gridBefore w:gridBefore}, {@linkcode hidden w:hidden}, {@linkcode ins w:ins}, {@linkcode jc w:jc}, {@linkcode tblCellSpacing w:tblCellSpacing}, {@linkcode tblHeader w:tblHeader}, {@linkcode trHeight w:trHeight}, {@linkcode trPrChange w:trPrChange}, {@linkcode wAfter w:wAfter}, {@linkcode wBefore w:wBefore}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}
   */
  public static readonly trPr: XName = W.w.getName('trPr');

  /**
   * Represents the `w:trPrChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - child XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode author w:author}, {@linkcode date w:date}, {@linkcode id w:id}
   */
  public static readonly trPrChange: XName = W.w.getName('trPrChange');

  /**
   * Represents the `w:truncateFontHeightsLikeWP6` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly truncateFontHeightsLikeWP6: XName = W.w.getName('truncateFontHeightsLikeWP6');

  /**
   * Represents the `w:txbxContent` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.textbox v:textbox}, {@linkcode WPS.txbx wps:txbx}
   * - child XML elements: {@linkcode altChunk w:altChunk}, {@linkcode bookmarkEnd w:bookmarkEnd}, {@linkcode bookmarkStart w:bookmarkStart}, {@linkcode commentRangeEnd w:commentRangeEnd}, {@linkcode commentRangeStart w:commentRangeStart}, {@linkcode contentPart w:contentPart}, {@linkcode customXml w:customXml}, {@linkcode customXmlDelRangeEnd w:customXmlDelRangeEnd}, {@linkcode customXmlDelRangeStart w:customXmlDelRangeStart}, {@linkcode customXmlInsRangeEnd w:customXmlInsRangeEnd}, {@linkcode customXmlInsRangeStart w:customXmlInsRangeStart}, {@linkcode customXmlMoveFromRangeEnd w:customXmlMoveFromRangeEnd}, {@linkcode customXmlMoveFromRangeStart w:customXmlMoveFromRangeStart}, {@linkcode customXmlMoveToRangeEnd w:customXmlMoveToRangeEnd}, {@linkcode customXmlMoveToRangeStart w:customXmlMoveToRangeStart}, {@linkcode del w:del}, {@linkcode ins w:ins}, {@linkcode moveFrom w:moveFrom}, {@linkcode moveFromRangeEnd w:moveFromRangeEnd}, {@linkcode moveFromRangeStart w:moveFromRangeStart}, {@linkcode moveTo w:moveTo}, {@linkcode moveToRangeEnd w:moveToRangeEnd}, {@linkcode moveToRangeStart w:moveToRangeStart}, {@linkcode p w:p}, {@linkcode permEnd w:permEnd}, {@linkcode permStart w:permStart}, {@linkcode proofErr w:proofErr}, {@linkcode sdt w:sdt}, {@linkcode tbl w:tbl}, {@linkcode W14.conflictDel w14:conflictDel}, {@linkcode W14.conflictIns w14:conflictIns}, {@linkcode W14.customXmlConflictDelRangeEnd w14:customXmlConflictDelRangeEnd}, {@linkcode W14.customXmlConflictDelRangeStart w14:customXmlConflictDelRangeStart}, {@linkcode W14.customXmlConflictInsRangeEnd w14:customXmlConflictInsRangeEnd}, {@linkcode W14.customXmlConflictInsRangeStart w14:customXmlConflictInsRangeStart}
   */
  public static readonly txbxContent: XName = W.w.getName('txbxContent');

  /**
   * Represents the `w:type` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldMapData w:fieldMapData}, {@linkcode odso w:odso}, {@linkcode sectPr w:sectPr}, {@linkcode textInput w:textInput}, {@linkcode types w:types}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom w:bottom}, {@linkcode br w:br}, {@linkcode docGrid w:docGrid}, {@linkcode end w:end}, {@linkcode endnote w:endnote}, {@linkcode footerReference w:footerReference}, {@linkcode footnote w:footnote}, {@linkcode headerReference w:headerReference}, {@linkcode helpText w:helpText}, {@linkcode left w:left}, {@linkcode proofErr w:proofErr}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode statusText w:statusText}, {@linkcode style w:style}, {@linkcode tblCellSpacing w:tblCellSpacing}, {@linkcode tblInd w:tblInd}, {@linkcode tblLayout w:tblLayout}, {@linkcode tblStylePr w:tblStylePr}, {@linkcode tblW w:tblW}, {@linkcode tcW w:tcW}, {@linkcode top w:top}, {@linkcode wAfter w:wAfter}, {@linkcode wBefore w:wBefore}
   */
  public static readonly type: XName = W.w.getName('type');

  /**
   * Represents the `w:types` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode docPartPr w:docPartPr}
   * - child XML elements: {@linkcode type w:type}
   * - XML attributes: {@linkcode all w:all}
   */
  public static readonly types: XName = W.w.getName('types');

  /**
   * Represents the `w:u` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode color w:color}, {@linkcode themeColor w:themeColor}, {@linkcode themeShade w:themeShade}, {@linkcode themeTint w:themeTint}, {@linkcode val w:val}
   */
  public static readonly u: XName = W.w.getName('u');

  /**
   * Represents the `w:udl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode odso w:odso}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly udl: XName = W.w.getName('udl');

  /**
   * Represents the `w:uiCompat97To2003` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly uiCompat97To2003: XName = W.w.getName('uiCompat97To2003');

  /**
   * Represents the `w:uiPriority` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lsdException w:lsdException}
   */
  public static readonly uiPriority: XName = W.w.getName('uiPriority');

  /**
   * Represents the `w:ulTrailSpace` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly ulTrailSpace: XName = W.w.getName('ulTrailSpace');

  /**
   * Represents the `w:underlineTabInNumList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly underlineTabInNumList: XName = W.w.getName('underlineTabInNumList');

  /**
   * Represents the `w:unhideWhenUsed` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode style w:style}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode lsdException w:lsdException}
   */
  public static readonly unhideWhenUsed: XName = W.w.getName('unhideWhenUsed');

  /**
   * Represents the `w:uniqueTag` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode recipientData w:recipientData}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly uniqueTag: XName = W.w.getName('uniqueTag');

  /**
   * Represents the `w:updateFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly updateFields: XName = W.w.getName('updateFields');

  /**
   * Represents the `w:updateMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode objectLink w:objectLink}
   */
  public static readonly updateMode: XName = W.w.getName('updateMode');

  /**
   * Represents the `w:uri` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode attr w:attr}, {@linkcode compatSetting w:compatSetting}
   */
  public static readonly uri: XName = W.w.getName('uri');

  /**
   * Represents the `w:usb0` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly usb0: XName = W.w.getName('usb0');

  /**
   * Represents the `w:usb1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly usb1: XName = W.w.getName('usb1');

  /**
   * Represents the `w:usb2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly usb2: XName = W.w.getName('usb2');

  /**
   * Represents the `w:usb3` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode sig w:sig}
   */
  public static readonly usb3: XName = W.w.getName('usb3');

  /**
   * Represents the `w:useAltKinsokuLineBreakRules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useAltKinsokuLineBreakRules: XName = W.w.getName('useAltKinsokuLineBreakRules');

  /**
   * Represents the `w:useAnsiKerningPairs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useAnsiKerningPairs: XName = W.w.getName('useAnsiKerningPairs');

  /**
   * Represents the `w:useFELayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useFELayout: XName = W.w.getName('useFELayout');

  /**
   * Represents the `w:useNormalStyleForList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useNormalStyleForList: XName = W.w.getName('useNormalStyleForList');

  /**
   * Represents the `w:usePrinterMetrics` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly usePrinterMetrics: XName = W.w.getName('usePrinterMetrics');

  /**
   * Represents the `w:useSingleBorderforContiguousCells` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useSingleBorderforContiguousCells: XName = W.w.getName('useSingleBorderforContiguousCells');

  /**
   * Represents the `w:useWord2002TableStyleRules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useWord2002TableStyleRules: XName = W.w.getName('useWord2002TableStyleRules');

  /**
   * Represents the `w:useWord97LineBreakRules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useWord97LineBreakRules: XName = W.w.getName('useWord97LineBreakRules');

  /**
   * Represents the `w:useXSLTWhenSaving` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly useXSLTWhenSaving: XName = W.w.getName('useXSLTWhenSaving');

  /**
   * Represents the `w:val` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode abstractNumId w:abstractNumId}, {@linkcode active w:active}, {@linkcode activeRecord w:activeRecord}, {@linkcode addressFieldName w:addressFieldName}, {@linkcode adjustLineHeightInTable w:adjustLineHeightInTable}, {@linkcode adjustRightInd w:adjustRightInd}, {@linkcode alias w:alias}, {@linkcode aliases w:aliases}, {@linkcode alignBordersAndEdges w:alignBordersAndEdges}, {@linkcode alignTablesRowByRow w:alignTablesRowByRow}, {@linkcode allowPNG w:allowPNG}, {@linkcode allowSpaceOfSameStyleInTable w:allowSpaceOfSameStyleInTable}, {@linkcode altName w:altName}, {@linkcode alwaysMergeEmptyNamespace w:alwaysMergeEmptyNamespace}, {@linkcode alwaysShowPlaceholderText w:alwaysShowPlaceholderText}, {@linkcode applyBreakingRules w:applyBreakingRules}, {@linkcode attachedSchema w:attachedSchema}, {@linkcode attr w:attr}, {@linkcode autofitToFirstFixedWidthCell w:autofitToFirstFixedWidthCell}, {@linkcode autoFormatOverride w:autoFormatOverride}, {@linkcode autoHyphenation w:autoHyphenation}, {@linkcode autoRedefine w:autoRedefine}, {@linkcode autoSpaceDE w:autoSpaceDE}, {@linkcode autoSpaceDN w:autoSpaceDN}, {@linkcode autoSpaceLikeWord95 w:autoSpaceLikeWord95}, {@linkcode b w:b}, {@linkcode balanceSingleByteDoubleByteWidth w:balanceSingleByteDoubleByteWidth}, {@linkcode bar w:bar}, {@linkcode basedOn w:basedOn}, {@linkcode bCs w:bCs}, {@linkcode bdo w:bdo}, {@linkcode bdr w:bdr}, {@linkcode behavior w:behavior}, {@linkcode between w:between}, {@linkcode bidi w:bidi}, {@linkcode bidiVisual w:bidiVisual}, {@linkcode blockQuote w:blockQuote}, {@linkcode bodyDiv w:bodyDiv}, {@linkcode bookFoldPrinting w:bookFoldPrinting}, {@linkcode bookFoldPrintingSheets w:bookFoldPrintingSheets}, {@linkcode bookFoldRevPrinting w:bookFoldRevPrinting}, {@linkcode bordersDoNotSurroundFooter w:bordersDoNotSurroundFooter}, {@linkcode bordersDoNotSurroundHeader w:bordersDoNotSurroundHeader}, {@linkcode bottom w:bottom}, {@linkcode cachedColBalance w:cachedColBalance}, {@linkcode calcOnExit w:calcOnExit}, {@linkcode calendar w:calendar}, {@linkcode cantSplit w:cantSplit}, {@linkcode caps w:caps}, {@linkcode characterSpacingControl w:characterSpacingControl}, {@linkcode charset w:charset}, {@linkcode checked w:checked}, {@linkcode checkErrors w:checkErrors}, {@linkcode clickAndTypeStyle w:clickAndTypeStyle}, {@linkcode cnfStyle w:cnfStyle}, {@linkcode colDelim w:colDelim}, {@linkcode color w:color}, {@linkcode column w:column}, {@linkcode compatSetting w:compatSetting}, {@linkcode connectString w:connectString}, {@linkcode consecutiveHyphenLimit w:consecutiveHyphenLimit}, {@linkcode contextualSpacing w:contextualSpacing}, {@linkcode convMailMergeEsc w:convMailMergeEsc}, {@linkcode cs w:cs}, {@linkcode dataType w:dataType}, {@linkcode dateFormat w:dateFormat}, {@linkcode decimalSymbol w:decimalSymbol}, {@linkcode default w:default}, {@linkcode defaultTableStyle w:defaultTableStyle}, {@linkcode defaultTabStop w:defaultTabStop}, {@linkcode description w:description}, {@linkcode destination w:destination}, {@linkcode dir w:dir}, {@linkcode dirty w:dirty}, {@linkcode displayBackgroundShape w:displayBackgroundShape}, {@linkcode displayHangulFixedWidth w:displayHangulFixedWidth}, {@linkcode displayHorizontalDrawingGridEvery w:displayHorizontalDrawingGridEvery}, {@linkcode displayVerticalDrawingGridEvery w:displayVerticalDrawingGridEvery}, {@linkcode divId w:divId}, {@linkcode docPart w:docPart}, {@linkcode docPartCategory w:docPartCategory}, {@linkcode docPartGallery w:docPartGallery}, {@linkcode docPartUnique w:docPartUnique}, {@linkcode documentType w:documentType}, {@linkcode docVar w:docVar}, {@linkcode doNotAutoCompressPictures w:doNotAutoCompressPictures}, {@linkcode doNotAutofitConstrainedTables w:doNotAutofitConstrainedTables}, {@linkcode doNotBreakConstrainedForcedTable w:doNotBreakConstrainedForcedTable}, {@linkcode doNotBreakWrappedTables w:doNotBreakWrappedTables}, {@linkcode doNotDemarcateInvalidXml w:doNotDemarcateInvalidXml}, {@linkcode doNotDisplayPageBoundaries w:doNotDisplayPageBoundaries}, {@linkcode doNotExpandShiftReturn w:doNotExpandShiftReturn}, {@linkcode doNotHyphenateCaps w:doNotHyphenateCaps}, {@linkcode doNotIncludeSubdocsInStats w:doNotIncludeSubdocsInStats}, {@linkcode doNotLeaveBackslashAlone w:doNotLeaveBackslashAlone}, {@linkcode doNotOrganizeInFolder w:doNotOrganizeInFolder}, {@linkcode doNotRelyOnCSS w:doNotRelyOnCSS}, {@linkcode doNotSaveAsSingleFile w:doNotSaveAsSingleFile}, {@linkcode doNotShadeFormData w:doNotShadeFormData}, {@linkcode doNotSnapToGridInCell w:doNotSnapToGridInCell}, {@linkcode doNotSuppressBlankLines w:doNotSuppressBlankLines}, {@linkcode doNotSuppressIndentation w:doNotSuppressIndentation}, {@linkcode doNotSuppressParagraphBorders w:doNotSuppressParagraphBorders}, {@linkcode doNotTrackFormatting w:doNotTrackFormatting}, {@linkcode doNotTrackMoves w:doNotTrackMoves}, {@linkcode doNotUseEastAsianBreakRules w:doNotUseEastAsianBreakRules}, {@linkcode doNotUseHTMLParagraphAutoSpacing w:doNotUseHTMLParagraphAutoSpacing}, {@linkcode doNotUseIndentAsNumberingTabStop w:doNotUseIndentAsNumberingTabStop}, {@linkcode doNotUseLongFileNames w:doNotUseLongFileNames}, {@linkcode doNotUseMarginsForDrawingGridOrigin w:doNotUseMarginsForDrawingGridOrigin}, {@linkcode doNotValidateAgainstSchema w:doNotValidateAgainstSchema}, {@linkcode doNotVertAlignCellWithSp w:doNotVertAlignCellWithSp}, {@linkcode doNotVertAlignInTxbx w:doNotVertAlignInTxbx}, {@linkcode doNotWrapTextWithPunct w:doNotWrapTextWithPunct}, {@linkcode drawingGridHorizontalOrigin w:drawingGridHorizontalOrigin}, {@linkcode drawingGridHorizontalSpacing w:drawingGridHorizontalSpacing}, {@linkcode drawingGridVerticalOrigin w:drawingGridVerticalOrigin}, {@linkcode drawingGridVerticalSpacing w:drawingGridVerticalSpacing}, {@linkcode dstrike w:dstrike}, {@linkcode dynamicAddress w:dynamicAddress}, {@linkcode effect w:effect}, {@linkcode em w:em}, {@linkcode embedSystemFonts w:embedSystemFonts}, {@linkcode embedTrueTypeFonts w:embedTrueTypeFonts}, {@linkcode emboss w:emboss}, {@linkcode enabled w:enabled}, {@linkcode encoding w:encoding}, {@linkcode end w:end}, {@linkcode entryMacro w:entryMacro}, {@linkcode evenAndOddHeaders w:evenAndOddHeaders}, {@linkcode exitMacro w:exitMacro}, {@linkcode family w:family}, {@linkcode fHdr w:fHdr}, {@linkcode fitText w:fitText}, {@linkcode flatBorders w:flatBorders}, {@linkcode footnoteLayoutLikeWW8 w:footnoteLayoutLikeWW8}, {@linkcode forgetLastTabAlignment w:forgetLastTabAlignment}, {@linkcode format w:format}, {@linkcode formProt w:formProt}, {@linkcode formsDesign w:formsDesign}, {@linkcode frameLayout w:frameLayout}, {@linkcode gallery w:gallery}, {@linkcode gridAfter w:gridAfter}, {@linkcode gridBefore w:gridBefore}, {@linkcode gridSpan w:gridSpan}, {@linkcode growAutofit w:growAutofit}, {@linkcode guid w:guid}, {@linkcode gutterAtTop w:gutterAtTop}, {@linkcode helpText w:helpText}, {@linkcode hidden w:hidden}, {@linkcode hideGrammaticalErrors w:hideGrammaticalErrors}, {@linkcode hideMark w:hideMark}, {@linkcode hideSpellingErrors w:hideSpellingErrors}, {@linkcode highlight w:highlight}, {@linkcode hMerge w:hMerge}, {@linkcode hps w:hps}, {@linkcode hpsBaseText w:hpsBaseText}, {@linkcode hpsRaise w:hpsRaise}, {@linkcode hyphenationZone w:hyphenationZone}, {@linkcode i w:i}, {@linkcode iCs w:iCs}, {@linkcode id w:id}, {@linkcode ignoreMixedContent w:ignoreMixedContent}, {@linkcode ilvl w:ilvl}, {@linkcode imprint w:imprint}, {@linkcode insideH w:insideH}, {@linkcode insideV w:insideV}, {@linkcode isLgl w:isLgl}, {@linkcode jc w:jc}, {@linkcode keepLines w:keepLines}, {@linkcode keepNext w:keepNext}, {@linkcode kern w:kern}, {@linkcode kinsoku w:kinsoku}, {@linkcode lang w:lang}, {@linkcode layoutRawTableWidth w:layoutRawTableWidth}, {@linkcode layoutTableRowsApart w:layoutTableRowsApart}, {@linkcode left w:left}, {@linkcode lid w:lid}, {@linkcode lineWrapLikeWord6 w:lineWrapLikeWord6}, {@linkcode link w:link}, {@linkcode linkedToFile w:linkedToFile}, {@linkcode linkStyles w:linkStyles}, {@linkcode linkToQuery w:linkToQuery}, {@linkcode listEntry w:listEntry}, {@linkcode listSeparator w:listSeparator}, {@linkcode lock w:lock}, {@linkcode locked w:locked}, {@linkcode lvlJc w:lvlJc}, {@linkcode lvlPicBulletId w:lvlPicBulletId}, {@linkcode lvlRestart w:lvlRestart}, {@linkcode lvlText w:lvlText}, {@linkcode mailAsAttachment w:mailAsAttachment}, {@linkcode mailSubject w:mailSubject}, {@linkcode mainDocumentType w:mainDocumentType}, {@linkcode mappedName w:mappedName}, {@linkcode marBottom w:marBottom}, {@linkcode marH w:marH}, {@linkcode marLeft w:marLeft}, {@linkcode marRight w:marRight}, {@linkcode marTop w:marTop}, {@linkcode marW w:marW}, {@linkcode matchSrc w:matchSrc}, {@linkcode maxLength w:maxLength}, {@linkcode mirrorIndents w:mirrorIndents}, {@linkcode mirrorMargins w:mirrorMargins}, {@linkcode multiLevelType w:multiLevelType}, {@linkcode mwSmallCaps w:mwSmallCaps}, {@linkcode name_ w:name_}, {@linkcode next w:next}, {@linkcode noBorder w:noBorder}, {@linkcode noColumnBalance w:noColumnBalance}, {@linkcode noEndnote w:noEndnote}, {@linkcode noExtraLineSpacing w:noExtraLineSpacing}, {@linkcode noLeading w:noLeading}, {@linkcode noLineBreaksAfter w:noLineBreaksAfter}, {@linkcode noLineBreaksBefore w:noLineBreaksBefore}, {@linkcode noProof w:noProof}, {@linkcode noPunctuationKerning w:noPunctuationKerning}, {@linkcode noResizeAllowed w:noResizeAllowed}, {@linkcode noSpaceRaiseLower w:noSpaceRaiseLower}, {@linkcode noTabHangInd w:noTabHangInd}, {@linkcode notTrueType w:notTrueType}, {@linkcode noWrap w:noWrap}, {@linkcode nsid w:nsid}, {@linkcode numFmt w:numFmt}, {@linkcode numId w:numId}, {@linkcode numIdMacAtCleanup w:numIdMacAtCleanup}, {@linkcode numRestart w:numRestart}, {@linkcode numStart w:numStart}, {@linkcode numStyleLink w:numStyleLink}, {@linkcode oMath w:oMath}, {@linkcode optimizeForBrowser w:optimizeForBrowser}, {@linkcode outline w:outline}, {@linkcode outlineLvl w:outlineLvl}, {@linkcode overflowPunct w:overflowPunct}, {@linkcode pageBreakBefore w:pageBreakBefore}, {@linkcode panose1 w:panose1}, {@linkcode personal w:personal}, {@linkcode personalCompose w:personalCompose}, {@linkcode personalReply w:personalReply}, {@linkcode pitch w:pitch}, {@linkcode pixelsPerInch w:pixelsPerInch}, {@linkcode placeholder w:placeholder}, {@linkcode pos w:pos}, {@linkcode position w:position}, {@linkcode printBodyTextBeforeHeader w:printBodyTextBeforeHeader}, {@linkcode printColBlack w:printColBlack}, {@linkcode printFormsData w:printFormsData}, {@linkcode printFractionalCharacterWidth w:printFractionalCharacterWidth}, {@linkcode printPostScriptOverText w:printPostScriptOverText}, {@linkcode printTwoOnOne w:printTwoOnOne}, {@linkcode pStyle w:pStyle}, {@linkcode qFormat w:qFormat}, {@linkcode query w:query}, {@linkcode relyOnVML w:relyOnVML}, {@linkcode removeDateAndTime w:removeDateAndTime}, {@linkcode removePersonalInformation w:removePersonalInformation}, {@linkcode result w:result}, {@linkcode right w:right}, {@linkcode rsid w:rsid}, {@linkcode rsidRoot w:rsidRoot}, {@linkcode rStyle w:rStyle}, {@linkcode rtl w:rtl}, {@linkcode rtlGutter w:rtlGutter}, {@linkcode rubyAlign w:rubyAlign}, {@linkcode saveFormsData w:saveFormsData}, {@linkcode saveInvalidXml w:saveInvalidXml}, {@linkcode savePreviewPicture w:savePreviewPicture}, {@linkcode saveSubsetFonts w:saveSubsetFonts}, {@linkcode saveXmlDataOnly w:saveXmlDataOnly}, {@linkcode scrollbar w:scrollbar}, {@linkcode selectFldWithFirstOrLastChar w:selectFldWithFirstOrLastChar}, {@linkcode semiHidden w:semiHidden}, {@linkcode shadow w:shadow}, {@linkcode shapeLayoutLikeWW8 w:shapeLayoutLikeWW8}, {@linkcode shd w:shd}, {@linkcode showBreaksInFrames w:showBreaksInFrames}, {@linkcode showEnvelope w:showEnvelope}, {@linkcode showingPlcHdr w:showingPlcHdr}, {@linkcode showXMLTags w:showXMLTags}, {@linkcode size w:size}, {@linkcode sizeAuto w:sizeAuto}, {@linkcode smallCaps w:smallCaps}, {@linkcode snapToGrid w:snapToGrid}, {@linkcode spaceForUL w:spaceForUL}, {@linkcode spacing w:spacing}, {@linkcode spacingInWholePoints w:spacingInWholePoints}, {@linkcode specVanish w:specVanish}, {@linkcode splitPgBreakAndParaMark w:splitPgBreakAndParaMark}, {@linkcode start w:start}, {@linkcode startOverride w:startOverride}, {@linkcode statusText w:statusText}, {@linkcode storeMappedDataAs w:storeMappedDataAs}, {@linkcode strictFirstAndLastChars w:strictFirstAndLastChars}, {@linkcode strike w:strike}, {@linkcode style w:style}, {@linkcode styleLink w:styleLink}, {@linkcode styleLockQFSet w:styleLockQFSet}, {@linkcode styleLockTheme w:styleLockTheme}, {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}, {@linkcode stylePaneSortMethod w:stylePaneSortMethod}, {@linkcode subFontBySize w:subFontBySize}, {@linkcode suff w:suff}, {@linkcode summaryLength w:summaryLength}, {@linkcode suppressAutoHyphens w:suppressAutoHyphens}, {@linkcode suppressBottomSpacing w:suppressBottomSpacing}, {@linkcode suppressLineNumbers w:suppressLineNumbers}, {@linkcode suppressOverlap w:suppressOverlap}, {@linkcode suppressSpacingAtTopOfPage w:suppressSpacingAtTopOfPage}, {@linkcode suppressSpBfAfterPgBrk w:suppressSpBfAfterPgBrk}, {@linkcode suppressTopSpacing w:suppressTopSpacing}, {@linkcode suppressTopSpacingWP w:suppressTopSpacingWP}, {@linkcode swapBordersFacingPages w:swapBordersFacingPages}, {@linkcode sz w:sz}, {@linkcode szCs w:szCs}, {@linkcode tab w:tab}, {@linkcode table w:table}, {@linkcode tag w:tag}, {@linkcode targetScreenSz w:targetScreenSz}, {@linkcode tblCaption w:tblCaption}, {@linkcode tblDescription w:tblDescription}, {@linkcode tblHeader w:tblHeader}, {@linkcode tblLook w:tblLook}, {@linkcode tblOverlap w:tblOverlap}, {@linkcode tblStyle w:tblStyle}, {@linkcode tblStyleColBandSize w:tblStyleColBandSize}, {@linkcode tblStyleRowBandSize w:tblStyleRowBandSize}, {@linkcode tcFitText w:tcFitText}, {@linkcode temporary w:temporary}, {@linkcode textAlignment w:textAlignment}, {@linkcode textboxTightWrap w:textboxTightWrap}, {@linkcode textDirection w:textDirection}, {@linkcode themeFontLang w:themeFontLang}, {@linkcode titlePg w:titlePg}, {@linkcode tl2br w:tl2br}, {@linkcode tmpl w:tmpl}, {@linkcode top w:top}, {@linkcode topLinePunct w:topLinePunct}, {@linkcode tr2bl w:tr2bl}, {@linkcode trackRevisions w:trackRevisions}, {@linkcode trHeight w:trHeight}, {@linkcode truncateFontHeightsLikeWP6 w:truncateFontHeightsLikeWP6}, {@linkcode type w:type}, {@linkcode u w:u}, {@linkcode udl w:udl}, {@linkcode uiCompat97To2003 w:uiCompat97To2003}, {@linkcode uiPriority w:uiPriority}, {@linkcode ulTrailSpace w:ulTrailSpace}, {@linkcode underlineTabInNumList w:underlineTabInNumList}, {@linkcode unhideWhenUsed w:unhideWhenUsed}, {@linkcode uniqueTag w:uniqueTag}, {@linkcode updateFields w:updateFields}, {@linkcode useAltKinsokuLineBreakRules w:useAltKinsokuLineBreakRules}, {@linkcode useAnsiKerningPairs w:useAnsiKerningPairs}, {@linkcode useFELayout w:useFELayout}, {@linkcode useNormalStyleForList w:useNormalStyleForList}, {@linkcode usePrinterMetrics w:usePrinterMetrics}, {@linkcode useSingleBorderforContiguousCells w:useSingleBorderforContiguousCells}, {@linkcode useWord2002TableStyleRules w:useWord2002TableStyleRules}, {@linkcode useWord97LineBreakRules w:useWord97LineBreakRules}, {@linkcode useXSLTWhenSaving w:useXSLTWhenSaving}, {@linkcode vAlign w:vAlign}, {@linkcode vanish w:vanish}, {@linkcode vertAlign w:vertAlign}, {@linkcode view w:view}, {@linkcode viewMergedData w:viewMergedData}, {@linkcode vMerge w:vMerge}, {@linkcode w_ w:w_}, {@linkcode webHidden w:webHidden}, {@linkcode widowControl w:widowControl}, {@linkcode wordWrap w:wordWrap}, {@linkcode wpJustification w:wpJustification}, {@linkcode wpSpaceWidth w:wpSpaceWidth}, {@linkcode wrapTrailSpaces w:wrapTrailSpaces}, {@linkcode zoom w:zoom}, {@linkcode W15.chartTrackingRefBased w15:chartTrackingRefBased}, {@linkcode W15.collapsed w15:collapsed}, {@linkcode W15.color w15:color}, {@linkcode W15.doNotAllowInsertDeleteSection w15:doNotAllowInsertDeleteSection}, {@linkcode W15.footnoteColumns w15:footnoteColumns}, {@linkcode W15.sectionTitle w15:sectionTitle}, {@linkcode W15.webExtensionCreated w15:webExtensionCreated}, {@linkcode W15.webExtensionLinked w15:webExtensionLinked}
   */
  public static readonly val: XName = W.w.getName('val');

  /**
   * Represents the `w:vAlign` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sectPr w:sectPr}, {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly vAlign: XName = W.w.getName('vAlign');

  /**
   * Represents the `w:value` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode listItem w:listItem}
   */
  public static readonly value: XName = W.w.getName('value');

  /**
   * Represents the `w:vAnchor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly vAnchor: XName = W.w.getName('vAnchor');

  /**
   * Represents the `w:vanish` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly vanish: XName = W.w.getName('vanish');

  /**
   * Represents the `w:vendorID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode activeWritingStyle w:activeWritingStyle}
   */
  public static readonly vendorID: XName = W.w.getName('vendorID');

  /**
   * Represents the `w:vert` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode eastAsianLayout w:eastAsianLayout}
   */
  public static readonly vert: XName = W.w.getName('vert');

  /**
   * Represents the `w:vertAlign` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly vertAlign: XName = W.w.getName('vertAlign');

  /**
   * Represents the `w:vertAnchor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode tblpPr w:tblpPr}
   */
  public static readonly vertAnchor: XName = W.w.getName('vertAnchor');

  /**
   * Represents the `w:vertCompress` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode eastAsianLayout w:eastAsianLayout}
   */
  public static readonly vertCompress: XName = W.w.getName('vertCompress');

  /**
   * Represents the `w:view` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly view: XName = W.w.getName('view');

  /**
   * Represents the `w:viewMergedData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mailMerge w:mailMerge}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly viewMergedData: XName = W.w.getName('viewMergedData');

  /**
   * Represents the `w:visibleStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode stylePaneFormatFilter w:stylePaneFormatFilter}
   */
  public static readonly visibleStyles: XName = W.w.getName('visibleStyles');

  /**
   * Represents the `w:vMerge` XML element and attribute.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tcPr w:tcPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cellMerge w:cellMerge}
   */
  public static readonly vMerge: XName = W.w.getName('vMerge');

  /**
   * Represents the `w:vMergeOrig` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode cellMerge w:cellMerge}
   */
  public static readonly vMergeOrig: XName = W.w.getName('vMergeOrig');

  /**
   * Represents the `w:vSpace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly vSpace: XName = W.w.getName('vSpace');

  /**
   * Represents the `w:w` XML elements and attributes.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode framesetSplitbar w:framesetSplitbar}, {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   *
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom w:bottom}, {@linkcode col w:col}, {@linkcode end w:end}, {@linkcode framePr w:framePr}, {@linkcode gridCol w:gridCol}, {@linkcode left w:left}, {@linkcode pgSz w:pgSz}, {@linkcode readModeInkLockDown w:readModeInkLockDown}, {@linkcode right w:right}, {@linkcode start w:start}, {@linkcode tblCellSpacing w:tblCellSpacing}, {@linkcode tblInd w:tblInd}, {@linkcode tblW w:tblW}, {@linkcode tcW w:tcW}, {@linkcode top w:top}, {@linkcode wAfter w:wAfter}, {@linkcode wBefore w:wBefore}
   */
  public static readonly w_: XName = W.w.getName('w');

  /**
   * Represents the `w:wAfter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly wAfter: XName = W.w.getName('wAfter');

  /**
   * Represents the `w:wBefore` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode trPr w:trPr}
   * - XML attributes: {@linkcode type w:type}, {@linkcode w_ w:w_}
   */
  public static readonly wBefore: XName = W.w.getName('wBefore');

  /**
   * Represents the `w:webHidden` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr w:rPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly webHidden: XName = W.w.getName('webHidden');

  /**
   * Represents the `w:webSettings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode allowPNG w:allowPNG}, {@linkcode divs w:divs}, {@linkcode doNotOrganizeInFolder w:doNotOrganizeInFolder}, {@linkcode doNotRelyOnCSS w:doNotRelyOnCSS}, {@linkcode doNotSaveAsSingleFile w:doNotSaveAsSingleFile}, {@linkcode doNotUseLongFileNames w:doNotUseLongFileNames}, {@linkcode encoding w:encoding}, {@linkcode frameset w:frameset}, {@linkcode optimizeForBrowser w:optimizeForBrowser}, {@linkcode pixelsPerInch w:pixelsPerInch}, {@linkcode relyOnVML w:relyOnVML}, {@linkcode targetScreenSz w:targetScreenSz}
   */
  public static readonly webSettings: XName = W.w.getName('webSettings');

  /**
   * Represents the `w:widowControl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly widowControl: XName = W.w.getName('widowControl');

  /**
   * Represents the `w:wordWrap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pPr w:pPr}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly wordWrap: XName = W.w.getName('wordWrap');

  /**
   * Represents the `w:wpJustification` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly wpJustification: XName = W.w.getName('wpJustification');

  /**
   * Represents the `w:wpSpaceWidth` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly wpSpaceWidth: XName = W.w.getName('wpSpaceWidth');

  /**
   * Represents the `w:wrap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly wrap: XName = W.w.getName('wrap');

  /**
   * Represents the `w:wrapTrailSpaces` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode compat w:compat}
   * - XML attributes: {@linkcode val w:val}
   */
  public static readonly wrapTrailSpaces: XName = W.w.getName('wrapTrailSpaces');

  /**
   * Represents the `w:writeProtection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode algIdExt w:algIdExt}, {@linkcode algIdExtSource w:algIdExtSource}, {@linkcode algorithmName w:algorithmName}, {@linkcode cryptAlgorithmClass w:cryptAlgorithmClass}, {@linkcode cryptAlgorithmSid w:cryptAlgorithmSid}, {@linkcode cryptAlgorithmType w:cryptAlgorithmType}, {@linkcode cryptProvider w:cryptProvider}, {@linkcode cryptProviderType w:cryptProviderType}, {@linkcode cryptProviderTypeExt w:cryptProviderTypeExt}, {@linkcode cryptProviderTypeExtSource w:cryptProviderTypeExtSource}, {@linkcode cryptSpinCount w:cryptSpinCount}, {@linkcode hash w:hash}, {@linkcode hashValue w:hashValue}, {@linkcode recommended w:recommended}, {@linkcode salt w:salt}, {@linkcode saltValue w:saltValue}, {@linkcode spinCount w:spinCount}
   */
  public static readonly writeProtection: XName = W.w.getName('writeProtection');

  /**
   * Represents the `w:x` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly x: XName = W.w.getName('x');

  /**
   * Represents the `w:xAlign` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly xAlign: XName = W.w.getName('xAlign');

  /**
   * Represents the `w:xpath` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode dataBinding w:dataBinding}, {@linkcode W15.dataBinding w15:dataBinding}
   */
  public static readonly xpath: XName = W.w.getName('xpath');

  /**
   * Represents the `w:y` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly y: XName = W.w.getName('y');

  /**
   * Represents the `w:yAlign` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode framePr w:framePr}
   */
  public static readonly yAlign: XName = W.w.getName('yAlign');

  /**
   * Represents the `w:yearLong` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly yearLong: XName = W.w.getName('yearLong');

  /**
   * Represents the `w:yearShort` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode M.r m:r}, {@linkcode r w:r}
   */
  public static readonly yearShort: XName = W.w.getName('yearShort');

  /**
   * Represents the `w:zoom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode settings w:settings}
   * - XML attributes: {@linkcode percent w:percent}, {@linkcode val w:val}
   */
  public static readonly zoom: XName = W.w.getName('zoom');

  /**
   * Represents the `w:zOrder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode pgBorders w:pgBorders}
   */
  public static readonly zOrder: XName = W.w.getName('zOrder');
}
