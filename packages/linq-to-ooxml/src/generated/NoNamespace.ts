/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XName fields for the empty namespace.
 */
export class NoNamespace {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Represents the `a` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.alphaRepl alphaRepl}, {@linkcode X.c c}
   */
  public static readonly a: XName = XNamespace.none.getName('a');

  /**
   * Represents the `aboveAverage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly aboveAverage: XName =
    XNamespace.none.getName('aboveAverage');

  /**
   * Represents the `aca` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly aca: XName = XNamespace.none.getName('aca');

  /**
   * Represents the `accel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly accel: XName = XNamespace.none.getName('accel');

  /**
   * Represents the `accent1` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent1: XName = XNamespace.none.getName('accent1');

  /**
   * Represents the `accent2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent2: XName = XNamespace.none.getName('accent2');

  /**
   * Represents the `accent3` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent3: XName = XNamespace.none.getName('accent3');

  /**
   * Represents the `accent4` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent4: XName = XNamespace.none.getName('accent4');

  /**
   * Represents the `accent5` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent5: XName = XNamespace.none.getName('accent5');

  /**
   * Represents the `accent6` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly accent6: XName = XNamespace.none.getName('accent6');

  /**
   * Represents the `accentbar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly accentbar: XName =
    XNamespace.none.getName('accentbar');

  /**
   * Represents the `accumulate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cBhvr cBhvr}
   */
  public static readonly accumulate: XName =
    XNamespace.none.getName('accumulate');

  /**
   * Represents the `accuracyVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.workbookPr workbookPr}
   */
  public static readonly accuracyVersion: XName =
    XNamespace.none.getName('accuracyVersion');

  /**
   * Represents the `action` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}, {@linkcode X.format format}, {@linkcode X.rcmt rcmt}, {@linkcode X.rcv rcv}, {@linkcode X.rrc rrc}
   */
  public static readonly action: XName = XNamespace.none.getName('action');

  /**
   * Represents the `actionId` XML name.
   */
  public static readonly actionId: XName = XNamespace.none.getName('actionId');

  /**
   * Represents the `activeCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.selection selection}
   */
  public static readonly activeCell: XName =
    XNamespace.none.getName('activeCell');

  /**
   * Represents the `activeCellId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.selection selection}
   */
  public static readonly activeCellId: XName =
    XNamespace.none.getName('activeCellId');

  /**
   * Represents the `activeCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly activeCol: XName =
    XNamespace.none.getName('activeCol');

  /**
   * Represents the `activePane` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pane pane}
   */
  public static readonly activePane: XName =
    XNamespace.none.getName('activePane');

  /**
   * Represents the `activePresent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.cfRule cfRule}
   */
  public static readonly activePresent: XName =
    XNamespace.none.getName('activePresent');

  /**
   * Represents the `activeRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly activeRow: XName =
    XNamespace.none.getName('activeRow');

  /**
   * Represents the `activeSheetId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly activeSheetId: XName =
    XNamespace.none.getName('activeSheetId');

  /**
   * Represents the `activeTab` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookView workbookView}
   */
  public static readonly activeTab: XName =
    XNamespace.none.getName('activeTab');

  /**
   * Represents the `additive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cBhvr cBhvr}
   */
  public static readonly additive: XName = XNamespace.none.getName('additive');

  /**
   * Represents the `addlxml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly addlxml: XName = XNamespace.none.getName('addlxml');

  /**
   * Represents the `addlXml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly addlXml_: XName = XNamespace.none.getName('addlXml');

  /**
   * Represents the `adj` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly adj: XName = XNamespace.none.getName('adj');

  /**
   * Represents the `adjust` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly adjust: XName = XNamespace.none.getName('adjust');

  /**
   * Represents the `adjustColumnWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly adjustColumnWidth: XName =
    XNamespace.none.getName('adjustColumnWidth');

  /**
   * Represents the `adjusthandles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly adjusthandles: XName =
    XNamespace.none.getName('adjusthandles');

  /**
   * Represents the `advAuto` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldP bldP}
   */
  public static readonly advAuto: XName = XNamespace.none.getName('advAuto');

  /**
   * Represents the `advClick` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.transition transition}
   */
  public static readonly advClick: XName = XNamespace.none.getName('advClick');

  /**
   * Represents the `advise` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ddeItem ddeItem}, {@linkcode X.oleItem oleItem}, {@linkcode X14.oleItem oleItem}
   */
  public static readonly advise: XName = XNamespace.none.getName('advise');

  /**
   * Represents the `advTm` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.transition transition}
   */
  public static readonly advTm: XName = XNamespace.none.getName('advTm');

  /**
   * Represents the `afterEffect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly afterEffect: XName =
    XNamespace.none.getName('afterEffect');

  /**
   * Represents the `aggregatedColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.cacheHierarchy cacheHierarchy}
   */
  public static readonly aggregatedColumn: XName =
    XNamespace.none.getName('aggregatedColumn');

  /**
   * Represents the `algIdExt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly algIdExt: XName = XNamespace.none.getName('algIdExt');

  /**
   * Represents the `algIdExtSource` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly algIdExtSource: XName =
    XNamespace.none.getName('algIdExtSource');

  /**
   * Represents the `algn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.ln ln}, {@linkcode A.lnB lnB}, {@linkcode A.lnBlToTr lnBlToTr}, {@linkcode A.lnL lnL}, {@linkcode A.lnR lnR}, {@linkcode A.lnT lnT}, {@linkcode A.lnTlToBr lnTlToBr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.outerShdw outerShdw}, {@linkcode A.pPr pPr}, {@linkcode A.reflection reflection}, {@linkcode A.tab tab}, {@linkcode A.tile tile}, {@linkcode A.uLn uLn}, {@linkcode A14.hiddenLine hiddenLine}
   */
  public static readonly algn: XName = XNamespace.none.getName('algn');

  /**
   * Represents the `algorithmName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}, {@linkcode X.fileSharing fileSharing}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly algorithmName: XName =
    XNamespace.none.getName('algorithmName');

  /**
   * Represents the `align` XML name.
   */
  public static readonly align: XName = XNamespace.none.getName('align');

  /**
   * Represents the `alignLabel` XML name.
   */
  public static readonly alignLabel: XName =
    XNamespace.none.getName('alignLabel');

  /**
   * Represents the `alignment` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.phoneticPr phoneticPr}
   */
  public static readonly alignment: XName =
    XNamespace.none.getName('alignment');

  /**
   * Represents the `alignmentLevel` XML name.
   */
  public static readonly alignmentLevel: XName =
    XNamespace.none.getName('alignmentLevel');

  /**
   * Represents the `alignshape` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly alignshape: XName =
    XNamespace.none.getName('alignshape');

  /**
   * Represents the `alignWithMargins` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headerFooter headerFooter}
   */
  public static readonly alignWithMargins: XName =
    XNamespace.none.getName('alignWithMargins');

  /**
   * Represents the `allCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly allCaption: XName =
    XNamespace.none.getName('allCaption');

  /**
   * Represents the `allDrilled` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly allDrilled: XName =
    XNamespace.none.getName('allDrilled');

  /**
   * Represents the `allocationMethod` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotChange pivotChange}, {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly allocationMethod: XName =
    XNamespace.none.getName('allocationMethod');

  /**
   * Represents the `allowBlank` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly allowBlank: XName =
    XNamespace.none.getName('allowBlank');

  /**
   * Represents the `allowcomments` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly allowcomments: XName =
    XNamespace.none.getName('allowcomments');

  /**
   * Represents the `allowComments` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly allowComments_: XName =
    XNamespace.none.getName('allowComments');

  /**
   * Represents the `allowedTaskSizes` XML name.
   */
  public static readonly allowedTaskSizes: XName =
    XNamespace.none.getName('allowedTaskSizes');

  /**
   * Represents the `allowOverlap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}
   */
  public static readonly allowOverlap: XName =
    XNamespace.none.getName('allowOverlap');

  /**
   * Represents the `allowPng` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}, {@linkcode X.webPublishing webPublishing}
   */
  public static readonly allowPng: XName = XNamespace.none.getName('allowPng');

  /**
   * Represents the `allowRefreshQuery` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly allowRefreshQuery: XName =
    XNamespace.none.getName('allowRefreshQuery');

  /**
   * Represents the `allUniqueName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly allUniqueName: XName =
    XNamespace.none.getName('allUniqueName');

  /**
   * Represents the `alt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly alt: XName = XNamespace.none.getName('alt');

  /**
   * Represents the `altLang` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly altLang: XName = XNamespace.none.getName('altLang');

  /**
   * Represents the `altText` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}, {@linkcode X14.pivotTableDefinition pivotTableDefinition}, {@linkcode X14.table table}
   */
  public static readonly altText: XName = XNamespace.none.getName('altText');

  /**
   * Represents the `altTextSummary` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}, {@linkcode X14.table table}
   */
  public static readonly altTextSummary: XName =
    XNamespace.none.getName('altTextSummary');

  /**
   * Represents the `alwaysShow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly alwaysShow: XName =
    XNamespace.none.getName('alwaysShow');

  /**
   * Represents the `amount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.sharpenSoften sharpenSoften}
   */
  public static readonly amount: XName = XNamespace.none.getName('amount');

  /**
   * Represents the `amt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.alphaModFix alphaModFix}, {@linkcode A.tint tint}
   */
  public static readonly amt: XName = XNamespace.none.getName('amt');

  /**
   * Represents the `anchor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode A.tcPr tcPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly anchor: XName = XNamespace.none.getName('anchor');

  /**
   * Represents the `anchorCtr` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode A.tcPr tcPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly anchorCtr: XName =
    XNamespace.none.getName('anchorCtr');

  /**
   * Represents the `anchorx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W10.wrap wrap}
   */
  public static readonly anchorx: XName = XNamespace.none.getName('anchorx');

  /**
   * Represents the `anchory` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W10.wrap wrap}
   */
  public static readonly anchory: XName = XNamespace.none.getName('anchory');

  /**
   * Represents the `and` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customFilters customFilters}, {@linkcode X14.customFilters customFilters}
   */
  public static readonly and: XName = XNamespace.none.getName('and');

  /**
   * Represents the `ang` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxn cxn}, {@linkcode A.lin lin}
   */
  public static readonly ang: XName = XNamespace.none.getName('ang');

  /**
   * Represents the `angle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}, {@linkcode V.fill fill}
   */
  public static readonly angle: XName = XNamespace.none.getName('angle');

  /**
   * Represents the `animBg` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bldChart bldChart}, {@linkcode P.bldOleChart bldOleChart}, {@linkcode P.bldP bldP}
   */
  public static readonly animBg: XName = XNamespace.none.getName('animBg');

  /**
   * Represents the `annotation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.ink ink}
   */
  public static readonly annotation: XName =
    XNamespace.none.getName('annotation');

  /**
   * Represents the `Append` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly Append: XName = XNamespace.none.getName('Append');

  /**
   * Represents the `apply` XML name.
   */
  public static readonly apply: XName = XNamespace.none.getName('apply');

  /**
   * Represents the `applyAlignment` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyAlignment: XName =
    XNamespace.none.getName('applyAlignment');

  /**
   * Represents the `applyAlignmentFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyAlignmentFormats: XName = XNamespace.none.getName(
    'applyAlignmentFormats'
  );

  /**
   * Represents the `applyBorder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyBorder: XName =
    XNamespace.none.getName('applyBorder');

  /**
   * Represents the `applyBorderFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyBorderFormats: XName =
    XNamespace.none.getName('applyBorderFormats');

  /**
   * Represents the `applyFill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyFill: XName =
    XNamespace.none.getName('applyFill');

  /**
   * Represents the `applyFont` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyFont: XName =
    XNamespace.none.getName('applyFont');

  /**
   * Represents the `applyFontFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyFontFormats: XName =
    XNamespace.none.getName('applyFontFormats');

  /**
   * Represents the `applyNumberFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyNumberFormat: XName =
    XNamespace.none.getName('applyNumberFormat');

  /**
   * Represents the `applyNumberFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyNumberFormats: XName =
    XNamespace.none.getName('applyNumberFormats');

  /**
   * Represents the `applyPatternFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyPatternFormats: XName = XNamespace.none.getName(
    'applyPatternFormats'
  );

  /**
   * Represents the `applyProtection` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly applyProtection: XName =
    XNamespace.none.getName('applyProtection');

  /**
   * Represents the `applyStyles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.outlinePr outlinePr}
   */
  public static readonly applyStyles: XName =
    XNamespace.none.getName('applyStyles');

  /**
   * Represents the `applyWidthHeightFormats` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly applyWidthHeightFormats: XName =
    XNamespace.none.getName('applyWidthHeightFormats');

  /**
   * Represents the `appName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileVersion fileVersion}
   */
  public static readonly appName: XName = XNamespace.none.getName('appName');

  /**
   * Represents the `appref` XML name.
   */
  public static readonly appref: XName = XNamespace.none.getName('appref');

  /**
   * Represents the `appRef` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.webExtension webExtension}
   */
  public static readonly appRef_: XName = XNamespace.none.getName('appRef');

  /**
   * Represents the `arcsize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.roundrect roundrect}
   */
  public static readonly arcsize: XName = XNamespace.none.getName('arcsize');

  /**
   * Represents the `arg` XML name.
   */
  public static readonly arg: XName = XNamespace.none.getName('arg');

  /**
   * Represents the `array` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedColumnFormula calculatedColumnFormula}, {@linkcode X.totalsRowFormula totalsRowFormula}, {@linkcode X.undo undo}
   */
  public static readonly array: XName = XNamespace.none.getName('array');

  /**
   * Represents the `arrowok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly arrowok: XName = XNamespace.none.getName('arrowok');

  /**
   * Represents the `ascender` XML name.
   */
  public static readonly ascender: XName = XNamespace.none.getName('ascender');

  /**
   * Represents the `aspect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly aspect: XName = XNamespace.none.getName('aspect');

  /**
   * Represents the `aspectratio` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly aspectratio: XName =
    XNamespace.none.getName('aspectratio');

  /**
   * Represents the `assign` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly assign: XName = XNamespace.none.getName('assign');

  /**
   * Represents the `assignedTo` XML name.
   */
  public static readonly assignedTo: XName =
    XNamespace.none.getName('assignedTo');

  /**
   * Represents the `asteriskTotals` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly asteriskTotals: XName =
    XNamespace.none.getName('asteriskTotals');

  /**
   * Represents the `attribute` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly attribute: XName =
    XNamespace.none.getName('attribute');

  /**
   * Represents the `author` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly author: XName = XNamespace.none.getName('author');

  /**
   * Represents the `authorId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cm cm}, {@linkcode P15.parentCm parentCm}, {@linkcode X.comment comment}
   */
  public static readonly authorId: XName = XNamespace.none.getName('authorId');

  /**
   * Represents the `auto` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.bgColor bgColor}, {@linkcode X.color color}, {@linkcode X.fgColor fgColor}, {@linkcode X.tabColor tabColor}, {@linkcode X14.axisColor axisColor}, {@linkcode X14.borderColor borderColor}, {@linkcode X14.color color}, {@linkcode X14.colorAxis colorAxis}, {@linkcode X14.colorFirst colorFirst}, {@linkcode X14.colorHigh colorHigh}, {@linkcode X14.colorLast colorLast}, {@linkcode X14.colorLow colorLow}, {@linkcode X14.colorMarkers colorMarkers}, {@linkcode X14.colorNegative colorNegative}, {@linkcode X14.colorSeries colorSeries}, {@linkcode X14.fillColor fillColor}, {@linkcode X14.negativeBorderColor negativeBorderColor}, {@linkcode X14.negativeFillColor negativeFillColor}
   */
  public static readonly auto: XName = XNamespace.none.getName('auto');

  /**
   * Represents the `autoAdjust` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.restoredLeft restoredLeft}, {@linkcode P.restoredTop restoredTop}
   */
  public static readonly autoAdjust: XName =
    XNamespace.none.getName('autoAdjust');

  /**
   * Represents the `autoApply` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly autoApply: XName =
    XNamespace.none.getName('autoApply');

  /**
   * Represents the `autoCompressPictures` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}, {@linkcode X.workbookPr workbookPr}
   */
  public static readonly autoCompressPictures: XName = XNamespace.none.getName(
    'autoCompressPictures'
  );

  /**
   * Represents the `autoDelete` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.connection connection}
   */
  public static readonly autoDelete: XName =
    XNamespace.none.getName('autoDelete');

  /**
   * Represents the `autoEnd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly autoEnd: XName = XNamespace.none.getName('autoEnd');

  /**
   * Represents the `autoFill` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly autoFill: XName = XNamespace.none.getName('autoFill');

  /**
   * Represents the `autoFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly autoFilter: XName =
    XNamespace.none.getName('autoFilter');

  /**
   * Represents the `autoFilterDateGrouping` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookView workbookView}
   */
  public static readonly autoFilterDateGrouping: XName =
    XNamespace.none.getName('autoFilterDateGrouping');

  /**
   * Represents the `AutoFit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly AutoFit: XName = XNamespace.none.getName('AutoFit');

  /**
   * Represents the `autoformat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly autoformat: XName =
    XNamespace.none.getName('autoformat');

  /**
   * Represents the `autoFormatId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}, {@linkcode X.raf raf}
   */
  public static readonly autoFormatId: XName =
    XNamespace.none.getName('autoFormatId');

  /**
   * Represents the `autolayout` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly autolayout: XName =
    XNamespace.none.getName('autolayout');

  /**
   * Represents the `autoLine` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly autoLine: XName = XNamespace.none.getName('autoLine');

  /**
   * Represents the `autoLoad` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.oleObject oleObject}
   */
  public static readonly autoLoad: XName = XNamespace.none.getName('autoLoad');

  /**
   * Represents the `autoPage` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.consolidation consolidation}
   */
  public static readonly autoPage: XName = XNamespace.none.getName('autoPage');

  /**
   * Represents the `autoPageBreaks` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetUpPr pageSetUpPr}
   */
  public static readonly autoPageBreaks: XName =
    XNamespace.none.getName('autoPageBreaks');

  /**
   * Represents the `autoPict` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly autoPict: XName = XNamespace.none.getName('autoPict');

  /**
   * Represents the `autoRecover` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileRecoveryPr fileRecoveryPr}
   */
  public static readonly autoRecover: XName =
    XNamespace.none.getName('autoRecover');

  /**
   * Represents the `autoRepublish` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}
   */
  public static readonly autoRepublish: XName =
    XNamespace.none.getName('autoRepublish');

  /**
   * Represents the `autoRev` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly autoRev: XName = XNamespace.none.getName('autoRev');

  /**
   * Represents the `autorotationcenter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly autorotationcenter: XName =
    XNamespace.none.getName('autorotationcenter');

  /**
   * Represents the `autoScale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}
   */
  public static readonly autoScale: XName =
    XNamespace.none.getName('autoScale');

  /**
   * Represents the `autoShow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly autoShow: XName = XNamespace.none.getName('autoShow');

  /**
   * Represents the `autoStart` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly autoStart: XName =
    XNamespace.none.getName('autoStart');

  /**
   * Represents the `autoUpdate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly autoUpdate: XName =
    XNamespace.none.getName('autoUpdate');

  /**
   * Represents the `autoUpdateAnimBg` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldP bldP}
   */
  public static readonly autoUpdateAnimBg: XName =
    XNamespace.none.getName('autoUpdateAnimBg');

  /**
   * Represents the `avgSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly avgSubtotal: XName =
    XNamespace.none.getName('avgSubtotal');

  /**
   * Represents the `axis` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X.pivotField pivotField}, {@linkcode X.pivotSelection pivotSelection}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly axis: XName = XNamespace.none.getName('axis');

  /**
   * Represents the `axisPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly axisPosition: XName =
    XNamespace.none.getName('axisPosition');

  /**
   * Represents the `b` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.fillRect fillRect}, {@linkcode A.fillToRect fillToRect}, {@linkcode A.rect rect}, {@linkcode A.rPr rPr}, {@linkcode A.scrgbClr scrgbClr}, {@linkcode A.srcRect srcRect}, {@linkcode A.tcTxStyle tcTxStyle}, {@linkcode A.tileRect tileRect}, {@linkcode A14.backgroundRemoval backgroundRemoval}, {@linkcode P.rgb rgb}, {@linkcode WP.effectExtent effectExtent}, {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X15.x x}
   */
  public static readonly b: XName = XNamespace.none.getName('b');

  /**
   * Represents the `backdepth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly backdepth: XName =
    XNamespace.none.getName('backdepth');

  /**
   * Represents the `background` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly background: XName =
    XNamespace.none.getName('background');

  /**
   * Represents the `backgroundQuery` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly backgroundQuery: XName =
    XNamespace.none.getName('backgroundQuery');

  /**
   * Represents the `backgroundRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly backgroundRefresh: XName =
    XNamespace.none.getName('backgroundRefresh');

  /**
   * Represents the `backupFile` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly backupFile: XName =
    XNamespace.none.getName('backupFile');

  /**
   * Represents the `backwards` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.iterate iterate}
   */
  public static readonly backwards: XName =
    XNamespace.none.getName('backwards');

  /**
   * Represents the `bandCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}
   */
  public static readonly bandCol: XName = XNamespace.none.getName('bandCol');

  /**
   * Represents the `bandRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}
   */
  public static readonly bandRow: XName = XNamespace.none.getName('bandRow');

  /**
   * Represents the `base` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fieldGroup fieldGroup}
   */
  public static readonly base: XName = XNamespace.none.getName('base');

  /**
   * Represents the `baseColWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly baseColWidth: XName =
    XNamespace.none.getName('baseColWidth');

  /**
   * Represents the `baseField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataField dataField}
   */
  public static readonly baseField: XName =
    XNamespace.none.getName('baseField');

  /**
   * Represents the `baseItem` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataField dataField}
   */
  public static readonly baseItem: XName = XNamespace.none.getName('baseItem');

  /**
   * Represents the `baseline` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly baseline: XName = XNamespace.none.getName('baseline');

  /**
   * Represents the `baseType` XML name.
   */
  public static readonly baseType: XName = XNamespace.none.getName('baseType');

  /**
   * Represents the `bc` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X15.x x}
   */
  public static readonly bc: XName = XNamespace.none.getName('bc');

  /**
   * Represents the `beginModifierType` XML name.
   */
  public static readonly beginModifierType: XName =
    XNamespace.none.getName('beginModifierType');

  /**
   * Represents the `behindDoc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}
   */
  public static readonly behindDoc: XName =
    XNamespace.none.getName('behindDoc');

  /**
   * Represents the `bestFit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.col col}
   */
  public static readonly bestFit: XName = XNamespace.none.getName('bestFit');

  /**
   * Represents the `bg1` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly bg1: XName = XNamespace.none.getName('bg1');

  /**
   * Represents the `bg2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly bg2: XName = XNamespace.none.getName('bg2');

  /**
   * Represents the `bilevel` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly bilevel: XName = XNamespace.none.getName('bilevel');

  /**
   * Represents the `bIns` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly bIns: XName = XNamespace.none.getName('bIns');

  /**
   * Represents the `blackAndWhite` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly blackAndWhite: XName =
    XNamespace.none.getName('blackAndWhite');

  /**
   * Represents the `blacklevel` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly blacklevel: XName =
    XNamespace.none.getName('blacklevel');

  /**
   * Represents the `blank` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filters filters}
   */
  public static readonly blank: XName = XNamespace.none.getName('blank');

  /**
   * Represents the `bld` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bldChart bldChart}, {@linkcode A.bldDgm bldDgm}, {@linkcode P.bldDgm bldDgm}, {@linkcode P.bldOleChart bldOleChart}
   */
  public static readonly bld: XName = XNamespace.none.getName('bld');

  /**
   * Represents the `bldLvl` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldP bldP}, {@linkcode P.cTn cTn}
   */
  public static readonly bldLvl: XName = XNamespace.none.getName('bldLvl');

  /**
   * Represents the `bldStep` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.chart chart}, {@linkcode A.dgm dgm}
   */
  public static readonly bldStep: XName = XNamespace.none.getName('bldStep');

  /**
   * Represents the `blend` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blend blend}, {@linkcode A.fillOverlay fillOverlay}
   */
  public static readonly blend: XName = XNamespace.none.getName('blend');

  /**
   * Represents the `blipPhldr` XML name.
   */
  public static readonly blipPhldr: XName =
    XNamespace.none.getName('blipPhldr');

  /**
   * Represents the `blurRad` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.innerShdw innerShdw}, {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}
   */
  public static readonly blurRad: XName = XNamespace.none.getName('blurRad');

  /**
   * Represents the `bmk` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly bmk: XName = XNamespace.none.getName('bmk');

  /**
   * Represents the `bmkName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.bmkTgt bmkTgt}
   */
  public static readonly bmkName: XName = XNamespace.none.getName('bmkName');

  /**
   * Represents the `bookmarkIdSeed` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly bookmarkIdSeed: XName =
    XNamespace.none.getName('bookmarkIdSeed');

  /**
   * Represents the `boolean` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}
   */
  public static readonly boolean: XName = XNamespace.none.getName('boolean');

  /**
   * Represents the `border` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly border: XName = XNamespace.none.getName('border');

  /**
   * Represents the `borderId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly borderId: XName = XNamespace.none.getName('borderId');

  /**
   * Represents the `bottom` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X.gradientFill gradientFill}, {@linkcode X.pageMargins pageMargins}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly bottom: XName = XNamespace.none.getName('bottom');

  /**
   * Represents the `boxStyle` XML name.
   */
  public static readonly boxStyle: XName = XNamespace.none.getName('boxStyle');

  /**
   * Represents the `bright` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.lum lum}, {@linkcode A14.brightnessContrast brightnessContrast}
   */
  public static readonly bright: XName = XNamespace.none.getName('bright');

  /**
   * Represents the `brightness` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly brightness: XName =
    XNamespace.none.getName('brightness');

  /**
   * Represents the `brushRef` XML name.
   */
  public static readonly brushRef: XName = XNamespace.none.getName('brushRef');

  /**
   * Represents the `brushSize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticPaintBrush artisticPaintBrush}, {@linkcode A14.artisticWatercolorSponge artisticWatercolorSponge}
   */
  public static readonly brushSize: XName =
    XNamespace.none.getName('brushSize');

  /**
   * Represents the `build` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldP bldP}
   */
  public static readonly build: XName = XNamespace.none.getName('build');

  /**
   * Represents the `builtIn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.snd snd}, {@linkcode A.wavAudioFile wavAudioFile}, {@linkcode P.snd snd}, {@linkcode P.sndTgt sndTgt}
   */
  public static readonly builtIn: XName = XNamespace.none.getName('builtIn');

  /**
   * Represents the `builtInGroupCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.functionGroups functionGroups}
   */
  public static readonly builtInGroupCount: XName =
    XNamespace.none.getName('builtInGroupCount');

  /**
   * Represents the `builtinId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cellStyle cellStyle}
   */
  public static readonly builtinId: XName =
    XNamespace.none.getName('builtinId');

  /**
   * Represents the `bw` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.photoAlbum photoAlbum}
   */
  public static readonly bw: XName = XNamespace.none.getName('bw');

  /**
   * Represents the `bwMode` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.grpSpPr grpSpPr}, {@linkcode A.spPr spPr}, {@linkcode A14.contentPart contentPart}, {@linkcode A15.backgroundPr backgroundPr}, {@linkcode P.bg bg}, {@linkcode P.grpSpPr grpSpPr}, {@linkcode P.spPr spPr}, {@linkcode WPG.grpSpPr grpSpPr}, {@linkcode WPS.spPr spPr}
   */
  public static readonly bwMode: XName = XNamespace.none.getName('bwMode');

  /**
   * Represents the `bwNormal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.backgroundPr backgroundPr}
   */
  public static readonly bwNormal: XName = XNamespace.none.getName('bwNormal');

  /**
   * Represents the `bwPure` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.backgroundPr backgroundPr}
   */
  public static readonly bwPure: XName = XNamespace.none.getName('bwPure');

  /**
   * Represents the `bx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly bx: XName = XNamespace.none.getName('bx');

  /**
   * Represents the `by` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim anim}, {@linkcode P.animRot animRot}, {@linkcode P.cBhvr cBhvr}
   */
  public static readonly by: XName = XNamespace.none.getName('by');

  /**
   * Represents the `byPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.reference reference}
   */
  public static readonly byPosition: XName =
    XNamespace.none.getName('byPosition');

  /**
   * Represents the `c` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.b b}, {@linkcode X.d d}, {@linkcode X.e e}, {@linkcode X.item item}, {@linkcode X.m m}, {@linkcode X.ms ms}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.sortByTuple sortByTuple}, {@linkcode X.t t}, {@linkcode X.tpls tpls}, {@linkcode X14.i i}
   */
  public static readonly c: XName = XNamespace.none.getName('c');

  /**
   * Represents the `ca` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly ca: XName = XNamespace.none.getName('ca');

  /**
   * Represents the `cache` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicer slicer}, {@linkcode X15.timeline timeline}
   */
  public static readonly cache: XName = XNamespace.none.getName('cache');

  /**
   * Represents the `cacheId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCache pivotCache}, {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X15.pivotTableData pivotTableData}
   */
  public static readonly cacheId: XName = XNamespace.none.getName('cacheId');

  /**
   * Represents the `cacheIdCreatedVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotCacheIdVersion pivotCacheIdVersion}
   */
  public static readonly cacheIdCreatedVersion: XName = XNamespace.none.getName(
    'cacheIdCreatedVersion'
  );

  /**
   * Represents the `cacheIdSupportedVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotCacheIdVersion pivotCacheIdVersion}
   */
  public static readonly cacheIdSupportedVersion: XName =
    XNamespace.none.getName('cacheIdSupportedVersion');

  /**
   * Represents the `cacheIndex` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly cacheIndex: XName =
    XNamespace.none.getName('cacheIndex');

  /**
   * Represents the `calcCompleted` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly calcCompleted: XName =
    XNamespace.none.getName('calcCompleted');

  /**
   * Represents the `calcId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly calcId: XName = XNamespace.none.getName('calcId');

  /**
   * Represents the `calcmode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim anim}
   */
  public static readonly calcmode: XName = XNamespace.none.getName('calcmode');

  /**
   * Represents the `calcMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly calcMode_: XName = XNamespace.none.getName('calcMode');

  /**
   * Represents the `calcOnSave` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly calcOnSave: XName =
    XNamespace.none.getName('calcOnSave');

  /**
   * Represents the `calculatedColumn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly calculatedColumn: XName =
    XNamespace.none.getName('calculatedColumn');

  /**
   * Represents the `calculatedMembersInFilters` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly calculatedMembersInFilters: XName =
    XNamespace.none.getName('calculatedMembersInFilters');

  /**
   * Represents the `calendarType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filters filters}
   */
  public static readonly calendarType: XName =
    XNamespace.none.getName('calendarType');

  /**
   * Represents the `canvasRef` XML name.
   */
  public static readonly canvasRef: XName =
    XNamespace.none.getName('canvasRef');

  /**
   * Represents the `canvasTransformRef` XML name.
   */
  public static readonly canvasTransformRef: XName =
    XNamespace.none.getName('canvasTransformRef');

  /**
   * Represents the `cap` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.ln ln}, {@linkcode A.lnB lnB}, {@linkcode A.lnBlToTr lnBlToTr}, {@linkcode A.lnL lnL}, {@linkcode A.lnR lnR}, {@linkcode A.lnT lnT}, {@linkcode A.lnTlToBr lnTlToBr}, {@linkcode A.rPr rPr}, {@linkcode A.uLn uLn}, {@linkcode A14.hiddenLine hiddenLine}, {@linkcode X.pageField pageField}
   */
  public static readonly cap: XName = XNamespace.none.getName('cap');

  /**
   * Represents the `caption` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.dimension dimension}, {@linkcode X.group group}, {@linkcode X.groupLevel groupLevel}, {@linkcode X.kpi kpi}, {@linkcode X.measureGroup measureGroup}, {@linkcode X.pivotHierarchy pivotHierarchy}, {@linkcode X14.slicer slicer}, {@linkcode X15.timeline timeline}
   */
  public static readonly caption: XName = XNamespace.none.getName('caption');

  /**
   * Represents the `caseSensitive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortState sortState}
   */
  public static readonly caseSensitive: XName =
    XNamespace.none.getName('caseSensitive');

  /**
   * Represents the `categoryIdx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.chart chart}
   */
  public static readonly categoryIdx: XName =
    XNamespace.none.getName('categoryIdx');

  /**
   * Represents the `categoryName` XML name.
   */
  public static readonly categoryName: XName =
    XNamespace.none.getName('categoryName');

  /**
   * Represents the `cell` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}, {@linkcode X.rcmt rcmt}
   */
  public static readonly cell: XName = XNamespace.none.getName('cell');

  /**
   * Represents the `cellColor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.colorFilter colorFilter}
   */
  public static readonly cellColor: XName =
    XNamespace.none.getName('cellColor');

  /**
   * Represents the `cellComments` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly cellComments: XName =
    XNamespace.none.getName('cellComments');

  /**
   * Represents the `cellMeta` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly cellMeta: XName = XNamespace.none.getName('cellMeta');

  /**
   * Represents the `cellRange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.cameraTool cameraTool}
   */
  public static readonly cellRange: XName =
    XNamespace.none.getName('cellRange');

  /**
   * Represents the `centerVertically` XML name.
   */
  public static readonly centerVertically: XName =
    XNamespace.none.getName('centerVertically');

  /**
   * Represents the `centroid` XML name.
   */
  public static readonly centroid: XName = XNamespace.none.getName('centroid');

  /**
   * Represents the `cf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}
   */
  public static readonly cf: XName = XNamespace.none.getName('cf');

  /**
   * Represents the `cfe` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly cfe: XName = XNamespace.none.getName('cfe');

  /**
   * Represents the `cff` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly cff: XName = XNamespace.none.getName('cff');

  /**
   * Represents the `cfo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly cfo: XName = XNamespace.none.getName('cfo');

  /**
   * Represents the `changesSavedWin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly changesSavedWin: XName =
    XNamespace.none.getName('changesSavedWin');

  /**
   * Represents the `channel` XML name.
   */
  public static readonly channel: XName = XNamespace.none.getName('channel');

  /**
   * Represents the `char` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buChar buChar}
   */
  public static readonly char: XName = XNamespace.none.getName('char');

  /**
   * Represents the `characterSet` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X.webPublishing webPublishing}, {@linkcode X15.textPr textPr}
   */
  public static readonly characterSet: XName =
    XNamespace.none.getName('characterSet');

  /**
   * Represents the `charset` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buFont buFont}, {@linkcode A.cs cs}, {@linkcode A.ea ea}, {@linkcode A.latin latin}, {@linkcode A.sym sym}, {@linkcode P.font font}
   */
  public static readonly charset: XName = XNamespace.none.getName('charset');

  /**
   * Represents the `chart` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.chartFormat chartFormat}
   */
  public static readonly chart: XName = XNamespace.none.getName('chart');

  /**
   * Represents the `chartFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly chartFormat: XName =
    XNamespace.none.getName('chartFormat');

  /**
   * Represents the `chartTrackingRefBase` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.workbookPr workbookPr}
   */
  public static readonly chartTrackingRefBase: XName = XNamespace.none.getName(
    'chartTrackingRefBase'
  );

  /**
   * Represents the `che` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly che: XName = XNamespace.none.getName('che');

  /**
   * Represents the `checkCompatibility` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly checkCompatibility: XName =
    XNamespace.none.getName('checkCompatibility');

  /**
   * Represents the `checked` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly checked: XName = XNamespace.none.getName('checked');

  /**
   * Represents the `chf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly chf: XName = XNamespace.none.getName('chf');

  /**
   * Represents the `cho` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly cho: XName = XNamespace.none.getName('cho');

  /**
   * Represents the `chOrder` XML name.
   */
  public static readonly chOrder: XName = XNamespace.none.getName('chOrder');

  /**
   * Represents the `chromakey` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata imagedata}
   */
  public static readonly chromakey: XName =
    XNamespace.none.getName('chromakey');

  /**
   * Represents the `class` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly class: XName = XNamespace.none.getName('class');

  /**
   * Represents the `classificationOutcomeType` XML name.
   */
  public static readonly classificationOutcomeType: XName =
    XNamespace.none.getName('classificationOutcomeType');

  /**
   * Represents the `clearAll` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly clearAll: XName = XNamespace.none.getName('clearAll');

  /**
   * Represents the `clearComments` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly clearComments: XName =
    XNamespace.none.getName('clearComments');

  /**
   * Represents the `clearContents` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly clearContents: XName =
    XNamespace.none.getName('clearContents');

  /**
   * Represents the `clearFormats` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly clearFormats: XName =
    XNamespace.none.getName('clearFormats');

  /**
   * Represents the `click` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly click: XName = XNamespace.none.getName('click');

  /**
   * Represents the `clientInsertedTime` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sldSyncPr sldSyncPr}
   */
  public static readonly clientInsertedTime: XName =
    XNamespace.none.getName('clientInsertedTime');

  /**
   * Represents the `clipped` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableField queryTableField}, {@linkcode X15.queryTable queryTable}
   */
  public static readonly clipped: XName = XNamespace.none.getName('clipped');

  /**
   * Represents the `clr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly clr: XName = XNamespace.none.getName('clr');

  /**
   * Represents the `clrIdx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cmAuthor cmAuthor}
   */
  public static readonly clrIdx: XName = XNamespace.none.getName('clrIdx');

  /**
   * Represents the `clrMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.prnPr prnPr}
   */
  public static readonly clrMode: XName = XNamespace.none.getName('clrMode');

  /**
   * Represents the `clrSpc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animClr animClr}
   */
  public static readonly clrSpc: XName = XNamespace.none.getName('clrSpc');

  /**
   * Represents the `cm` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.c c}, {@linkcode X.nc nc}, {@linkcode X.oc oc}
   */
  public static readonly cm: XName = XNamespace.none.getName('cm');

  /**
   * Represents the `cmd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cmd cmd}
   */
  public static readonly cmd: XName = XNamespace.none.getName('cmd');

  /**
   * Represents the `cmpd` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ln ln}, {@linkcode A.lnB lnB}, {@linkcode A.lnBlToTr lnBlToTr}, {@linkcode A.lnL lnL}, {@linkcode A.lnR lnR}, {@linkcode A.lnT lnT}, {@linkcode A.lnTlToBr lnTlToBr}, {@linkcode A.uLn uLn}, {@linkcode A14.hiddenLine hiddenLine}
   */
  public static readonly cmpd: XName = XNamespace.none.getName('cmpd');

  /**
   * Represents the `cnt` XML name.
   */
  public static readonly cnt: XName = XNamespace.none.getName('cnt');

  /**
   * Represents the `codeName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileVersion fileVersion}, {@linkcode X.sheetPr sheetPr}, {@linkcode X.workbookPr workbookPr}
   */
  public static readonly codeName: XName = XNamespace.none.getName('codeName');

  /**
   * Represents the `codePage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X.webPublishing webPublishing}, {@linkcode X15.textPr textPr}
   */
  public static readonly codePage: XName = XNamespace.none.getName('codePage');

  /**
   * Represents the `coerce` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly coerce: XName = XNamespace.none.getName('coerce');

  /**
   * Represents the `coherent3DOff` XML name.
   */
  public static readonly coherent3DOff: XName =
    XNamespace.none.getName('coherent3DOff');

  /**
   * Represents the `colGrandTotals` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly colGrandTotals: XName =
    XNamespace.none.getName('colGrandTotals');

  /**
   * Represents the `colHeaderCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly colHeaderCaption: XName =
    XNamespace.none.getName('colHeaderCaption');

  /**
   * Represents the `colHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}
   */
  public static readonly colHidden: XName =
    XNamespace.none.getName('colHidden');

  /**
   * Represents the `colId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filterColumn filterColumn}
   */
  public static readonly colId: XName = XNamespace.none.getName('colId');

  /**
   * Represents the `collapse` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sld sld}
   */
  public static readonly collapse: XName = XNamespace.none.getName('collapse');

  /**
   * Represents the `collapsed` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.col col}, {@linkcode X.row row}
   */
  public static readonly collapsed: XName =
    XNamespace.none.getName('collapsed');

  /**
   * Represents the `collapsedLevelsAreSubtotals` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly collapsedLevelsAreSubtotals: XName =
    XNamespace.none.getName('collapsedLevelsAreSubtotals');

  /**
   * Represents the `color` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.extrusion extrusion}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}, {@linkcode V.stroke stroke}
   */
  public static readonly color: XName = XNamespace.none.getName('color');

  /**
   * Represents the `color2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}, {@linkcode V.stroke stroke}
   */
  public static readonly color2: XName = XNamespace.none.getName('color2');

  /**
   * Represents the `colored` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly colored: XName = XNamespace.none.getName('colored');

  /**
   * Represents the `colorId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly colorId: XName = XNamespace.none.getName('colorId');

  /**
   * Represents the `colors` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.colormru colormru}, {@linkcode V.fill fill}
   */
  public static readonly colors: XName = XNamespace.none.getName('colors');

  /**
   * Represents the `colorTemp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.colorTemperature colorTemperature}
   */
  public static readonly colorTemp: XName =
    XNamespace.none.getName('colorTemp');

  /**
   * Represents the `colPageCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.location location}
   */
  public static readonly colPageCount: XName =
    XNamespace.none.getName('colPageCount');

  /**
   * Represents the `cols` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.values values}, {@linkcode X14.values values}
   */
  public static readonly cols: XName = XNamespace.none.getName('cols');

  /**
   * Represents the `column` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.tableSlicerCache tableSlicerCache}
   */
  public static readonly column: XName = XNamespace.none.getName('column');

  /**
   * Represents the `columnCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicer slicer}, {@linkcode X14.tupleSet tupleSet}, {@linkcode X15.pivotTableData pivotTableData}
   */
  public static readonly columnCount: XName =
    XNamespace.none.getName('columnCount');

  /**
   * Represents the `columns` XML name.
   */
  public static readonly columns: XName = XNamespace.none.getName('columns');

  /**
   * Represents the `columnSort` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortState sortState}
   */
  public static readonly columnSort: XName =
    XNamespace.none.getName('columnSort');

  /**
   * Represents the `columnWidthPercent` XML name.
   */
  public static readonly columnWidthPercent: XName =
    XNamespace.none.getName('columnWidthPercent');

  /**
   * Represents the `comma` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly comma: XName = XNamespace.none.getName('comma');

  /**
   * Represents the `command` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dbPr dbPr}
   */
  public static readonly command: XName = XNamespace.none.getName('command');

  /**
   * Represents the `commandType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dbPr dbPr}
   */
  public static readonly commandType: XName =
    XNamespace.none.getName('commandType');

  /**
   * Represents the `comment` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}, {@linkcode X.scenario scenario}, {@linkcode X.table table}
   */
  public static readonly comment: XName = XNamespace.none.getName('comment');

  /**
   * Represents the `compact` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly compact: XName = XNamespace.none.getName('compact');

  /**
   * Represents the `compactData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly compactData: XName =
    XNamespace.none.getName('compactData');

  /**
   * Represents the `compatLnSpc` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly compatLnSpc: XName =
    XNamespace.none.getName('compatLnSpc');

  /**
   * Represents the `compatMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly compatMode: XName =
    XNamespace.none.getName('compatMode');

  /**
   * Represents the `complete` XML name.
   */
  public static readonly complete: XName = XNamespace.none.getName('complete');

  /**
   * Represents the `composite` XML name.
   */
  public static readonly composite: XName =
    XNamespace.none.getName('composite');

  /**
   * Represents the `concurrent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.seq seq}
   */
  public static readonly concurrent: XName =
    XNamespace.none.getName('concurrent');

  /**
   * Represents the `concurrentCalc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly concurrentCalc: XName =
    XNamespace.none.getName('concurrentCalc');

  /**
   * Represents the `concurrentManualCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly concurrentManualCount: XName = XNamespace.none.getName(
    'concurrentManualCount'
  );

  /**
   * Represents the `conformance` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}, {@linkcode X.workbook workbook}
   */
  public static readonly conformance: XName =
    XNamespace.none.getName('conformance');

  /**
   * Represents the `connection` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dbPr dbPr}, {@linkcode X15.dataFeedPr dataFeedPr}, {@linkcode X15.modelTable modelTable}, {@linkcode X15.oledbPr oledbPr}
   */
  public static readonly connection: XName =
    XNamespace.none.getName('connection');

  /**
   * Represents the `connectionId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheSource cacheSource}, {@linkcode X.queryTable queryTable}, {@linkcode X.singleXmlCell singleXmlCell}, {@linkcode X.table table}
   */
  public static readonly connectionId: XName =
    XNamespace.none.getName('connectionId');

  /**
   * Represents the `ConnectionID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.DataBinding DataBinding}
   */
  public static readonly ConnectionID_: XName =
    XNamespace.none.getName('ConnectionID');

  /**
   * Represents the `connectloc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.proxy proxy}
   */
  public static readonly connectloc: XName =
    XNamespace.none.getName('connectloc');

  /**
   * Represents the `connectorLines` XML name.
   */
  public static readonly connectorLines: XName =
    XNamespace.none.getName('connectorLines');

  /**
   * Represents the `consecutive` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X.webPr webPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly consecutive: XName =
    XNamespace.none.getName('consecutive');

  /**
   * Represents the `constrainbounds` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly constrainbounds: XName =
    XNamespace.none.getName('constrainbounds');

  /**
   * Represents the `containsBlank` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsBlank: XName =
    XNamespace.none.getName('containsBlank');

  /**
   * Represents the `containsDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsDate: XName =
    XNamespace.none.getName('containsDate');

  /**
   * Represents the `containsInteger` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsInteger: XName =
    XNamespace.none.getName('containsInteger');

  /**
   * Represents the `containsMixedTypes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsMixedTypes: XName =
    XNamespace.none.getName('containsMixedTypes');

  /**
   * Represents the `containsNonDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsNonDate: XName =
    XNamespace.none.getName('containsNonDate');

  /**
   * Represents the `containsNumber` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsNumber: XName =
    XNamespace.none.getName('containsNumber');

  /**
   * Represents the `containsSemiMixedTypes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsSemiMixedTypes: XName =
    XNamespace.none.getName('containsSemiMixedTypes');

  /**
   * Represents the `containsString` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly containsString: XName =
    XNamespace.none.getName('containsString');

  /**
   * Represents the `content` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly content: XName = XNamespace.none.getName('content');

  /**
   * Represents the `contentBits` XML name.
   */
  public static readonly contentBits: XName =
    XNamespace.none.getName('contentBits');

  /**
   * Represents the `contentType` XML name.
   */
  public static readonly contentType: XName =
    XNamespace.none.getName('contentType');

  /**
   * Represents the `contextRef` XML name.
   */
  public static readonly contextRef: XName =
    XNamespace.none.getName('contextRef');

  /**
   * Represents the `continuation` XML name.
   */
  public static readonly continuation: XName =
    XNamespace.none.getName('continuation');

  /**
   * Represents the `contourW` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.sp3d sp3d}, {@linkcode A14.hiddenSp3d hiddenSp3d}
   */
  public static readonly contourW: XName = XNamespace.none.getName('contourW');

  /**
   * Represents the `contrast` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.lum lum}, {@linkcode A14.brightnessContrast brightnessContrast}
   */
  public static readonly contrast: XName = XNamespace.none.getName('contrast');

  /**
   * Represents the `control1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.curve curve}
   */
  public static readonly control1: XName = XNamespace.none.getName('control1');

  /**
   * Represents the `control2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.curve curve}
   */
  public static readonly control2: XName = XNamespace.none.getName('control2');

  /**
   * Represents the `coordorigin` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly coordorigin: XName =
    XNamespace.none.getName('coordorigin');

  /**
   * Represents the `coordsize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly coordsize: XName =
    XNamespace.none.getName('coordsize');

  /**
   * Represents the `copies` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly copies: XName = XNamespace.none.getName('copies');

  /**
   * Represents the `copy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly copy: XName = XNamespace.none.getName('copy');

  /**
   * Represents the `count` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.borders borders}, {@linkcode X.cacheFields cacheFields}, {@linkcode X.cacheHierarchies cacheHierarchies}, {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.calculatedItems calculatedItems}, {@linkcode X.calculatedMembers calculatedMembers}, {@linkcode X.cellMetadata cellMetadata}, {@linkcode X.cellStyles cellStyles}, {@linkcode X.cellStyleXfs cellStyleXfs}, {@linkcode X.cellXfs cellXfs}, {@linkcode X.chartFormats chartFormats}, {@linkcode X.colBreaks colBreaks}, {@linkcode X.colFields colFields}, {@linkcode X.colHierarchiesUsage colHierarchiesUsage}, {@linkcode X.colItems colItems}, {@linkcode X.conditionalFormats conditionalFormats}, {@linkcode X.dataFields dataFields}, {@linkcode X.dataRefs dataRefs}, {@linkcode X.dataValidations dataValidations}, {@linkcode X.dimensions dimensions}, {@linkcode X.discretePr discretePr}, {@linkcode X.dxfs dxfs}, {@linkcode X.entries entries}, {@linkcode X.fieldsUsage fieldsUsage}, {@linkcode X.fills fills}, {@linkcode X.filters filters}, {@linkcode X.fonts fonts}, {@linkcode X.formats formats}, {@linkcode X.futureMetadata futureMetadata}, {@linkcode X.groupItems groupItems}, {@linkcode X.groupLevels groupLevels}, {@linkcode X.groupMembers groupMembers}, {@linkcode X.groups groups}, {@linkcode X.items items}, {@linkcode X.kpis kpis}, {@linkcode X.maps maps}, {@linkcode X.mdxMetadata mdxMetadata}, {@linkcode X.measureGroups measureGroups}, {@linkcode X.members members}, {@linkcode X.mergeCells mergeCells}, {@linkcode X.metadataStrings metadataStrings}, {@linkcode X.metadataTypes metadataTypes}, {@linkcode X.mps mps}, {@linkcode X.numFmts numFmts}, {@linkcode X.page page}, {@linkcode X.pageFields pageFields}, {@linkcode X.pages pages}, {@linkcode X.parameters parameters}, {@linkcode X.pivotAreas pivotAreas}, {@linkcode X.pivotCacheRecords pivotCacheRecords}, {@linkcode X.pivotFields pivotFields}, {@linkcode X.pivotHierarchies pivotHierarchies}, {@linkcode X.pivotSelection pivotSelection}, {@linkcode X.queryCache queryCache}, {@linkcode X.queryTableDeletedFields queryTableDeletedFields}, {@linkcode X.queryTableFields queryTableFields}, {@linkcode X.rangeSets rangeSets}, {@linkcode X.reference reference}, {@linkcode X.references references}, {@linkcode X.reviewedList reviewedList}, {@linkcode X.rowBreaks rowBreaks}, {@linkcode X.rowFields rowFields}, {@linkcode X.rowHierarchiesUsage rowHierarchiesUsage}, {@linkcode X.rowItems rowItems}, {@linkcode X.scenario scenario}, {@linkcode X.serverFormats serverFormats}, {@linkcode X.set set}, {@linkcode X.sets sets}, {@linkcode X.sharedItems sharedItems}, {@linkcode X.sheetIdMap sheetIdMap}, {@linkcode X.sst sst}, {@linkcode X.tableColumns tableColumns}, {@linkcode X.tableParts tableParts}, {@linkcode X.tables tables}, {@linkcode X.tableStyle tableStyle}, {@linkcode X.tableStyles tableStyles}, {@linkcode X.textFields textFields}, {@linkcode X.users users}, {@linkcode X.valueMetadata valueMetadata}, {@linkcode X.webPublishItems webPublishItems}, {@linkcode X.webPublishObjects webPublishObjects}, {@linkcode X14.argumentDescriptions argumentDescriptions}, {@linkcode X14.calculatedMembers calculatedMembers}, {@linkcode X14.conditionalFormats conditionalFormats}, {@linkcode X14.dataValidations dataValidations}, {@linkcode X14.dxfs dxfs}, {@linkcode X14.items items}, {@linkcode X14.level level}, {@linkcode X14.levels levels}, {@linkcode X14.pivotAreas pivotAreas}, {@linkcode X14.selections selections}, {@linkcode X14.setLevels setLevels}, {@linkcode X15.dxfs dxfs}, {@linkcode X15.pivotRow pivotRow}, {@linkcode X15.slicerCacheHideItemsWithNoData slicerCacheHideItemsWithNoData}, {@linkcode X15.slicerCacheOlapLevelName slicerCacheOlapLevelName}
   */
  public static readonly count: XName = XNamespace.none.getName('count');

  /**
   * Represents the `countASubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly countASubtotal: XName =
    XNamespace.none.getName('countASubtotal');

  /**
   * Represents the `countSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly countSubtotal: XName =
    XNamespace.none.getName('countSubtotal');

  /**
   * Represents the `cp` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.b b}, {@linkcode X.d d}, {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}
   */
  public static readonly cp: XName = XNamespace.none.getName('cp');

  /**
   * Represents the `crackSpacing` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticCement artisticCement}
   */
  public static readonly crackSpacing: XName =
    XNamespace.none.getName('crackSpacing');

  /**
   * Represents the `crashSave` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileRecoveryPr fileRecoveryPr}
   */
  public static readonly crashSave: XName =
    XNamespace.none.getName('crashSave');

  /**
   * Represents the `created` XML name.
   */
  public static readonly created: XName = XNamespace.none.getName('created');

  /**
   * Represents the `createdVersion` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}, {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly createdVersion: XName =
    XNamespace.none.getName('createdVersion');

  /**
   * Represents the `credentials` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly credentials: XName =
    XNamespace.none.getName('credentials');

  /**
   * Represents the `cropbottom` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly cropbottom: XName =
    XNamespace.none.getName('cropbottom');

  /**
   * Represents the `cropleft` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly cropleft: XName = XNamespace.none.getName('cropleft');

  /**
   * Represents the `cropping` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly cropping: XName = XNamespace.none.getName('cropping');

  /**
   * Represents the `cropright` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly cropright: XName =
    XNamespace.none.getName('cropright');

  /**
   * Represents the `croptop` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly croptop: XName = XNamespace.none.getName('croptop');

  /**
   * Represents the `crossFilter` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.level level}, {@linkcode X14.tabular tabular}, {@linkcode X15.tableSlicerCache tableSlicerCache}
   */
  public static readonly crossFilter: XName =
    XNamespace.none.getName('crossFilter');

  /**
   * Represents the `cryptAlgorithmClass` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptAlgorithmClass: XName = XNamespace.none.getName(
    'cryptAlgorithmClass'
  );

  /**
   * Represents the `cryptAlgorithmSid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptAlgorithmSid: XName =
    XNamespace.none.getName('cryptAlgorithmSid');

  /**
   * Represents the `cryptAlgorithmType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptAlgorithmType: XName =
    XNamespace.none.getName('cryptAlgorithmType');

  /**
   * Represents the `cryptProvider` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptProvider: XName =
    XNamespace.none.getName('cryptProvider');

  /**
   * Represents the `cryptProviderType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptProviderType: XName =
    XNamespace.none.getName('cryptProviderType');

  /**
   * Represents the `cryptProviderTypeExt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptProviderTypeExt: XName = XNamespace.none.getName(
    'cryptProviderTypeExt'
  );

  /**
   * Represents the `cryptProviderTypeExtSource` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly cryptProviderTypeExtSource: XName =
    XNamespace.none.getName('cryptProviderTypeExtSource');

  /**
   * Represents the `cs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly cs: XName = XNamespace.none.getName('cs');

  /**
   * Represents the `csCatId` XML name.
   */
  public static readonly csCatId: XName = XNamespace.none.getName('csCatId');

  /**
   * Represents the `css` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishing webPublishing}
   */
  public static readonly css: XName = XNamespace.none.getName('css');

  /**
   * Represents the `cstate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blip blip}
   */
  public static readonly cstate: XName = XNamespace.none.getName('cstate');

  /**
   * Represents the `csTypeId` XML name.
   */
  public static readonly csTypeId: XName = XNamespace.none.getName('csTypeId');

  /**
   * Represents the `ct` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.t t}
   */
  public static readonly ct: XName = XNamespace.none.getName('ct');

  /**
   * Represents the `culture` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.serverFormat serverFormat}, {@linkcode X14.connection connection}
   */
  public static readonly culture: XName = XNamespace.none.getName('culture');

  /**
   * Represents the `current` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.scenarios scenarios}
   */
  public static readonly current: XName = XNamespace.none.getName('current');

  /**
   * Represents the `custAng` XML name.
   */
  public static readonly custAng: XName = XNamespace.none.getName('custAng');

  /**
   * Represents the `custFlipHor` XML name.
   */
  public static readonly custFlipHor: XName =
    XNamespace.none.getName('custFlipHor');

  /**
   * Represents the `custFlipVert` XML name.
   */
  public static readonly custFlipVert: XName =
    XNamespace.none.getName('custFlipVert');

  /**
   * Represents the `custLinFactNeighborX` XML name.
   */
  public static readonly custLinFactNeighborX: XName = XNamespace.none.getName(
    'custLinFactNeighborX'
  );

  /**
   * Represents the `custLinFactNeighborY` XML name.
   */
  public static readonly custLinFactNeighborY: XName = XNamespace.none.getName(
    'custLinFactNeighborY'
  );

  /**
   * Represents the `custLinFactX` XML name.
   */
  public static readonly custLinFactX: XName =
    XNamespace.none.getName('custLinFactX');

  /**
   * Represents the `custLinFactY` XML name.
   */
  public static readonly custLinFactY: XName =
    XNamespace.none.getName('custLinFactY');

  /**
   * Represents the `custom` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.iconSet iconSet}
   */
  public static readonly custom: XName = XNamespace.none.getName('custom');

  /**
   * Represents the `customBuiltin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cellStyle cellStyle}
   */
  public static readonly customBuiltin: XName =
    XNamespace.none.getName('customBuiltin');

  /**
   * Represents the `customFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}
   */
  public static readonly customFormat: XName =
    XNamespace.none.getName('customFormat');

  /**
   * Represents the `customHeight` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}, {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly customHeight: XName =
    XNamespace.none.getName('customHeight');

  /**
   * Represents the `customList` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortCondition sortCondition}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly customList: XName =
    XNamespace.none.getName('customList');

  /**
   * Represents the `customListSort` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X14.tabular tabular}, {@linkcode X15.tableSlicerCache tableSlicerCache}
   */
  public static readonly customListSort: XName =
    XNamespace.none.getName('customListSort');

  /**
   * Represents the `customMenu` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly customMenu: XName =
    XNamespace.none.getName('customMenu');

  /**
   * Represents the `customRecognizerId` XML name.
   */
  public static readonly customRecognizerId: XName =
    XNamespace.none.getName('customRecognizerId');

  /**
   * Represents the `customRollUp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.groupLevel groupLevel}
   */
  public static readonly customRollUp: XName =
    XNamespace.none.getName('customRollUp');

  /**
   * Represents the `customView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly customView: XName =
    XNamespace.none.getName('customView');

  /**
   * Represents the `customWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.col col}
   */
  public static readonly customWidth: XName =
    XNamespace.none.getName('customWidth');

  /**
   * Represents the `custRadScaleInc` XML name.
   */
  public static readonly custRadScaleInc: XName =
    XNamespace.none.getName('custRadScaleInc');

  /**
   * Represents the `custRadScaleRad` XML name.
   */
  public static readonly custRadScaleRad: XName =
    XNamespace.none.getName('custRadScaleRad');

  /**
   * Represents the `custScaleX` XML name.
   */
  public static readonly custScaleX: XName =
    XNamespace.none.getName('custScaleX');

  /**
   * Represents the `custScaleY` XML name.
   */
  public static readonly custScaleY: XName =
    XNamespace.none.getName('custScaleY');

  /**
   * Represents the `custSzX` XML name.
   */
  public static readonly custSzX: XName = XNamespace.none.getName('custSzX');

  /**
   * Represents the `custSzY` XML name.
   */
  public static readonly custSzY: XName = XNamespace.none.getName('custSzY');

  /**
   * Represents the `custT` XML name.
   */
  public static readonly custT: XName = XNamespace.none.getName('custT');

  /**
   * Represents the `cx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.chExt chExt}, {@linkcode A.ext ext}, {@linkcode P.gridSpacing gridSpacing}, {@linkcode P.notesSz notesSz}, {@linkcode P.sldSz sldSz}, {@linkcode WP.extent extent}
   */
  public static readonly cx: XName = XNamespace.none.getName('cx');

  /**
   * Represents the `cxnId` XML name.
   */
  public static readonly cxnId: XName = XNamespace.none.getName('cxnId');

  /**
   * Represents the `cy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.chExt chExt}, {@linkcode A.ext ext}, {@linkcode P.gridSpacing gridSpacing}, {@linkcode P.notesSz notesSz}, {@linkcode P.sldSz sldSz}, {@linkcode WP.extent extent}
   */
  public static readonly cy: XName = XNamespace.none.getName('cy');

  /**
   * Represents the `d` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ds ds}, {@linkcode A.sx sx}, {@linkcode A.sy sy}, {@linkcode X.item item}, {@linkcode X14.rowItem rowItem}
   */
  public static readonly d: XName = XNamespace.none.getName('d');

  /**
   * Represents the `dashstyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly dashstyle: XName =
    XNamespace.none.getName('dashstyle');

  /**
   * Represents the `data` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.idmap idmap}, {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly data: XName = XNamespace.none.getName('data');

  /**
   * Represents the `databaseField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}
   */
  public static readonly databaseField: XName =
    XNamespace.none.getName('databaseField');

  /**
   * Represents the `DataBindingLoadMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.DataBinding DataBinding}
   */
  public static readonly DataBindingLoadMode: XName = XNamespace.none.getName(
    'DataBindingLoadMode'
  );

  /**
   * Represents the `DataBindingName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.DataBinding DataBinding}
   */
  public static readonly DataBindingName: XName =
    XNamespace.none.getName('DataBindingName');

  /**
   * Represents the `dataBound` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableField queryTableField}
   */
  public static readonly dataBound: XName =
    XNamespace.none.getName('dataBound');

  /**
   * Represents the `dataCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly dataCaption: XName =
    XNamespace.none.getName('dataCaption');

  /**
   * Represents the `dataCellStyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly dataCellStyle: XName =
    XNamespace.none.getName('dataCellStyle');

  /**
   * Represents the `dataDxfId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly dataDxfId: XName =
    XNamespace.none.getName('dataDxfId');

  /**
   * Represents the `dataExtractLoad` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileRecoveryPr fileRecoveryPr}
   */
  public static readonly dataExtractLoad: XName =
    XNamespace.none.getName('dataExtractLoad');

  /**
   * Represents the `dataField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly dataField: XName =
    XNamespace.none.getName('dataField');

  /**
   * Represents the `dataOnly` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly dataOnly: XName = XNamespace.none.getName('dataOnly');

  /**
   * Represents the `dataOnRows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly dataOnRows: XName =
    XNamespace.none.getName('dataOnRows');

  /**
   * Represents the `dataPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly dataPosition: XName =
    XNamespace.none.getName('dataPosition');

  /**
   * Represents the `dataSourceSort` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly dataSourceSort: XName =
    XNamespace.none.getName('dataSourceSort');

  /**
   * Represents the `date1904` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly date1904: XName = XNamespace.none.getName('date1904');

  /**
   * Represents the `dateAxis` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly dateAxis: XName = XNamespace.none.getName('dateAxis');

  /**
   * Represents the `dateCompatibility` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly dateCompatibility: XName =
    XNamespace.none.getName('dateCompatibility');

  /**
   * Represents the `dateTime` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.header header}, {@linkcode X.userInfo userInfo}
   */
  public static readonly dateTime: XName = XNamespace.none.getName('dateTime');

  /**
   * Represents the `dateTimeGrouping` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly dateTimeGrouping: XName =
    XNamespace.none.getName('dateTimeGrouping');

  /**
   * Represents the `day` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly day: XName = XNamespace.none.getName('day');

  /**
   * Represents the `dde` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.objectPr objectPr}
   */
  public static readonly dde: XName = XNamespace.none.getName('dde');

  /**
   * Represents the `ddeService` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ddeLink ddeLink}
   */
  public static readonly ddeService: XName =
    XNamespace.none.getName('ddeService');

  /**
   * Represents the `ddeTopic` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ddeLink ddeLink}
   */
  public static readonly ddeTopic: XName = XNamespace.none.getName('ddeTopic');

  /**
   * Represents the `decel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly decel: XName = XNamespace.none.getName('decel');

  /**
   * Represents the `decimal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly decimal: XName = XNamespace.none.getName('decimal');

  /**
   * Represents the `decoupled` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotCacheDecoupled pivotCacheDecoupled}
   */
  public static readonly decoupled: XName =
    XNamespace.none.getName('decoupled');

  /**
   * Represents the `def` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblStyleLst tblStyleLst}
   */
  public static readonly def: XName = XNamespace.none.getName('def');

  /**
   * Represents the `default` XML name.
   */
  public static readonly default: XName = XNamespace.none.getName('default');

  /**
   * Represents the `defaultAttributeDrillState` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly defaultAttributeDrillState: XName =
    XNamespace.none.getName('defaultAttributeDrillState');

  /**
   * Represents the `defaultColWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly defaultColWidth: XName =
    XNamespace.none.getName('defaultColWidth');

  /**
   * Represents the `defaultGridColor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly defaultGridColor: XName =
    XNamespace.none.getName('defaultGridColor');

  /**
   * Represents the `defaultImageDpi` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.workbookPr workbookPr}
   */
  public static readonly defaultImageDpi: XName =
    XNamespace.none.getName('defaultImageDpi');

  /**
   * Represents the `defaultMemberUniqueName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly defaultMemberUniqueName: XName =
    XNamespace.none.getName('defaultMemberUniqueName');

  /**
   * Represents the `defaultPivotStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableStyles tableStyles}
   */
  public static readonly defaultPivotStyle: XName =
    XNamespace.none.getName('defaultPivotStyle');

  /**
   * Represents the `defaultRowHeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly defaultRowHeight: XName =
    XNamespace.none.getName('defaultRowHeight');

  /**
   * Represents the `defaultSize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly defaultSize: XName =
    XNamespace.none.getName('defaultSize');

  /**
   * Represents the `defaultSlicerStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicerStyles slicerStyles}
   */
  public static readonly defaultSlicerStyle: XName =
    XNamespace.none.getName('defaultSlicerStyle');

  /**
   * Represents the `defaultSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly defaultSubtotal: XName =
    XNamespace.none.getName('defaultSubtotal');

  /**
   * Represents the `defaultTableStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableStyles tableStyles}
   */
  public static readonly defaultTableStyle: XName =
    XNamespace.none.getName('defaultTableStyle');

  /**
   * Represents the `defaultThemeVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly defaultThemeVersion: XName = XNamespace.none.getName(
    'defaultThemeVersion'
  );

  /**
   * Represents the `defaultTimelineStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timelineStyles timelineStyles}
   */
  public static readonly defaultTimelineStyle: XName = XNamespace.none.getName(
    'defaultTimelineStyle'
  );

  /**
   * Represents the `defStyle` XML name.
   */
  public static readonly defStyle: XName = XNamespace.none.getName('defStyle');

  /**
   * Represents the `defTabSz` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}
   */
  public static readonly defTabSz: XName = XNamespace.none.getName('defTabSz');

  /**
   * Represents the `degree` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.gradientFill gradientFill}
   */
  public static readonly degree: XName = XNamespace.none.getName('degree');

  /**
   * Represents the `del1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly del1: XName = XNamespace.none.getName('del1');

  /**
   * Represents the `del2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly del2: XName = XNamespace.none.getName('del2');

  /**
   * Represents the `delay` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cond cond}, {@linkcode P.endSync endSync}
   */
  public static readonly delay: XName = XNamespace.none.getName('delay');

  /**
   * Represents the `delete` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly delete: XName = XNamespace.none.getName('delete');

  /**
   * Represents the `deleteColumns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly deleteColumns: XName =
    XNamespace.none.getName('deleteColumns');

  /**
   * Represents the `deleted` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.inputCells inputCells}
   */
  public static readonly deleted: XName = XNamespace.none.getName('deleted');

  /**
   * Represents the `deleteRows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly deleteRows: XName =
    XNamespace.none.getName('deleteRows');

  /**
   * Represents the `delimited` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly delimited: XName =
    XNamespace.none.getName('delimited');

  /**
   * Represents the `delimiter` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly delimiter: XName =
    XNamespace.none.getName('delimiter');

  /**
   * Represents the `denormalized` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xmlColumnPr xmlColumnPr}
   */
  public static readonly denormalized: XName =
    XNamespace.none.getName('denormalized');

  /**
   * Represents the `descender` XML name.
   */
  public static readonly descender: XName =
    XNamespace.none.getName('descender');

  /**
   * Represents the `descending` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortCondition sortCondition}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly descending: XName =
    XNamespace.none.getName('descending');

  /**
   * Represents the `descr` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvPr cNvPr}, {@linkcode A14.cNvPr cNvPr}, {@linkcode P.cNvPr cNvPr}, {@linkcode P14.cNvPr cNvPr}, {@linkcode W14.cNvPr cNvPr}, {@linkcode WP.docPr docPr}, {@linkcode WPG.cNvPr cNvPr}, {@linkcode WPS.cNvPr cNvPr}
   */
  public static readonly descr: XName = XNamespace.none.getName('descr');

  /**
   * Represents the `description` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.definedName definedName}, {@linkcode X.filter filter}, {@linkcode X.rdn rdn}
   */
  public static readonly description: XName =
    XNamespace.none.getName('description');

  /**
   * Represents the `destId` XML name.
   */
  public static readonly destId: XName = XNamespace.none.getName('destId');

  /**
   * Represents the `destination` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rm rm}
   */
  public static readonly destination: XName =
    XNamespace.none.getName('destination');

  /**
   * Represents the `destinationFile` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}
   */
  public static readonly destinationFile: XName =
    XNamespace.none.getName('destinationFile');

  /**
   * Represents the `destOrd` XML name.
   */
  public static readonly destOrd: XName = XNamespace.none.getName('destOrd');

  /**
   * Represents the `detail` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticPhotocopy artisticPhotocopy}
   */
  public static readonly detail: XName = XNamespace.none.getName('detail');

  /**
   * Represents the `dgmbasetextscale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly dgmbasetextscale: XName =
    XNamespace.none.getName('dgmbasetextscale');

  /**
   * Represents the `dgmfontsize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly dgmfontsize: XName =
    XNamespace.none.getName('dgmfontsize');

  /**
   * Represents the `dgmscalex` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly dgmscalex: XName =
    XNamespace.none.getName('dgmscalex');

  /**
   * Represents the `dgmscaley` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly dgmscaley: XName =
    XNamespace.none.getName('dgmscaley');

  /**
   * Represents the `dgmstyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}
   */
  public static readonly dgmstyle: XName = XNamespace.none.getName('dgmstyle');

  /**
   * Represents the `diagonalDown` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.border border}
   */
  public static readonly diagonalDown: XName =
    XNamespace.none.getName('diagonalDown');

  /**
   * Represents the `diagonalUp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.border border}
   */
  public static readonly diagonalUp: XName =
    XNamespace.none.getName('diagonalUp');

  /**
   * Represents the `differentFirst` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headerFooter headerFooter}
   */
  public static readonly differentFirst: XName =
    XNamespace.none.getName('differentFirst');

  /**
   * Represents the `differentOddEven` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headerFooter headerFooter}
   */
  public static readonly differentOddEven: XName =
    XNamespace.none.getName('differentOddEven');

  /**
   * Represents the `diffusity` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly diffusity: XName =
    XNamespace.none.getName('diffusity');

  /**
   * Represents the `dimension` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.map map}, {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly dimension: XName =
    XNamespace.none.getName('dimension');

  /**
   * Represents the `dimensionUniqueName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly dimensionUniqueName: XName = XNamespace.none.getName(
    'dimensionUniqueName'
  );

  /**
   * Represents the `dir` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.innerShdw innerShdw}, {@linkcode A.lightRig lightRig}, {@linkcode A.outerShdw outerShdw}, {@linkcode A.prstShdw prstShdw}, {@linkcode A.reflection reflection}, {@linkcode P.animClr animClr}, {@linkcode P.blinds blinds}, {@linkcode P.checker checker}, {@linkcode P.comb comb}, {@linkcode P.cover cover}, {@linkcode P.pull pull}, {@linkcode P.push push}, {@linkcode P.randomBar randomBar}, {@linkcode P.split split}, {@linkcode P.strips strips}, {@linkcode P.wipe wipe}, {@linkcode P.zoom zoom}, {@linkcode P14.conveyor conveyor}, {@linkcode P14.doors doors}, {@linkcode P14.ferris ferris}, {@linkcode P14.flip flip}, {@linkcode P14.flythrough flythrough}, {@linkcode P14.gallery gallery}, {@linkcode P14.glitter glitter}, {@linkcode P14.pan pan}, {@linkcode P14.prism prism}, {@linkcode P14.reveal reveal}, {@linkcode P14.ripple ripple}, {@linkcode P14.shred shred}, {@linkcode P14.switch switch}, {@linkcode P14.vortex vortex}, {@linkcode P14.warp warp}, {@linkcode P14.window window}
   */
  public static readonly dir: XName = XNamespace.none.getName('dir');

  /**
   * Represents the `direction` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly direction: XName =
    XNamespace.none.getName('direction');

  /**
   * Represents the `dirty` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly dirty: XName = XNamespace.none.getName('dirty');

  /**
   * Represents the `disabled` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly disabled: XName = XNamespace.none.getName('disabled');

  /**
   * Represents the `disableEdit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly disableEdit: XName =
    XNamespace.none.getName('disableEdit');

  /**
   * Represents the `disableFieldList` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly disableFieldList: XName =
    XNamespace.none.getName('disableFieldList');

  /**
   * Represents the `disablePrompts` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidations dataValidations}, {@linkcode X14.dataValidations dataValidations}
   */
  public static readonly disablePrompts: XName =
    XNamespace.none.getName('disablePrompts');

  /**
   * Represents the `disableRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly disableRefresh: XName =
    XNamespace.none.getName('disableRefresh');

  /**
   * Represents the `discardImageEditData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.workbookPr workbookPr}
   */
  public static readonly discardImageEditData: XName = XNamespace.none.getName(
    'discardImageEditData'
  );

  /**
   * Represents the `disjunction-type` XML name.
   */
  public static readonly disjunction_type: XName =
    XNamespace.none.getName('disjunction-type');

  /**
   * Represents the `diskRevisions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly diskRevisions: XName =
    XNamespace.none.getName('diskRevisions');

  /**
   * Represents the `display` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}, {@linkcode X.hyperlink hyperlink}
   */
  public static readonly display: XName = XNamespace.none.getName('display');

  /**
   * Represents the `displayEmptyCellsAs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly displayEmptyCellsAs: XName = XNamespace.none.getName(
    'displayEmptyCellsAs'
  );

  /**
   * Represents the `displayFolder` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.kpi kpi}, {@linkcode X14.calculatedMember calculatedMember}
   */
  public static readonly displayFolder: XName =
    XNamespace.none.getName('displayFolder');

  /**
   * Represents the `displayHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly displayHidden: XName =
    XNamespace.none.getName('displayHidden');

  /**
   * Represents the `displayName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly displayName: XName =
    XNamespace.none.getName('displayName');

  /**
   * Represents the `displayXAxis` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly displayXAxis: XName =
    XNamespace.none.getName('displayXAxis');

  /**
   * Represents the `dist` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.innerShdw innerShdw}, {@linkcode A.outerShdw outerShdw}, {@linkcode A.prstShdw prstShdw}, {@linkcode A.reflection reflection}
   */
  public static readonly dist: XName = XNamespace.none.getName('dist');

  /**
   * Represents the `distance` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly distance: XName = XNamespace.none.getName('distance');

  /**
   * Represents the `distB` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}, {@linkcode WP.inline inline}, {@linkcode WP.wrapSquare wrapSquare}, {@linkcode WP.wrapTopAndBottom wrapTopAndBottom}
   */
  public static readonly distB: XName = XNamespace.none.getName('distB');

  /**
   * Represents the `distL` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}, {@linkcode WP.inline inline}, {@linkcode WP.wrapSquare wrapSquare}, {@linkcode WP.wrapThrough wrapThrough}, {@linkcode WP.wrapTight wrapTight}
   */
  public static readonly distL: XName = XNamespace.none.getName('distL');

  /**
   * Represents the `distR` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}, {@linkcode WP.inline inline}, {@linkcode WP.wrapSquare wrapSquare}, {@linkcode WP.wrapThrough wrapThrough}, {@linkcode WP.wrapTight wrapTight}
   */
  public static readonly distR: XName = XNamespace.none.getName('distR');

  /**
   * Represents the `distT` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}, {@linkcode WP.inline inline}, {@linkcode WP.wrapSquare wrapSquare}, {@linkcode WP.wrapTopAndBottom wrapTopAndBottom}
   */
  public static readonly distT: XName = XNamespace.none.getName('distT');

  /**
   * Represents the `divId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}
   */
  public static readonly divId: XName = XNamespace.none.getName('divId');

  /**
   * Represents the `dn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly dn: XName = XNamespace.none.getName('dn');

  /**
   * Represents the `dockstate` XML name.
   */
  public static readonly dockstate: XName =
    XNamespace.none.getName('dockstate');

  /**
   * Represents the `documentID` XML name.
   */
  public static readonly documentID: XName =
    XNamespace.none.getName('documentID');

  /**
   * Represents the `done` XML name.
   */
  public static readonly done: XName = XNamespace.none.getName('done');

  /**
   * Represents the `double` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}
   */
  public static readonly double: XName = XNamespace.none.getName('double');

  /**
   * Represents the `dpi` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blipFill blipFill}, {@linkcode P.blipFill blipFill}, {@linkcode X.webPublishing webPublishing}
   */
  public static readonly dpi: XName = XNamespace.none.getName('dpi');

  /**
   * Represents the `dr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly dr: XName = XNamespace.none.getName('dr');

  /**
   * Represents the `draft` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly draft: XName = XNamespace.none.getName('draft');

  /**
   * Represents the `dragOff` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly dragOff: XName = XNamespace.none.getName('dragOff');

  /**
   * Represents the `dragToCol` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly dragToCol: XName =
    XNamespace.none.getName('dragToCol');

  /**
   * Represents the `dragToData` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly dragToData: XName =
    XNamespace.none.getName('dragToData');

  /**
   * Represents the `dragToPage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly dragToPage: XName =
    XNamespace.none.getName('dragToPage');

  /**
   * Represents the `dragToRow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly dragToRow: XName =
    XNamespace.none.getName('dragToRow');

  /**
   * Represents the `DrawAspect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly DrawAspect: XName =
    XNamespace.none.getName('DrawAspect');

  /**
   * Represents the `drillThrough` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.queryTable queryTable}
   */
  public static readonly drillThrough: XName =
    XNamespace.none.getName('drillThrough');

  /**
   * Represents the `drop` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly drop: XName = XNamespace.none.getName('drop');

  /**
   * Represents the `dropauto` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly dropauto: XName = XNamespace.none.getName('dropauto');

  /**
   * Represents the `dropLines` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly dropLines: XName =
    XNamespace.none.getName('dropLines');

  /**
   * Represents the `dropStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly dropStyle: XName =
    XNamespace.none.getName('dropStyle');

  /**
   * Represents the `dt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cm cm}, {@linkcode P.hf hf}
   */
  public static readonly dt: XName = XNamespace.none.getName('dt');

  /**
   * Represents the `dT` XML name.
   */
  public static readonly dT_: XName = XNamespace.none.getName('dT');

  /**
   * Represents the `dt2D` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly dt2D: XName = XNamespace.none.getName('dt2D');

  /**
   * Represents the `dtr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly dtr: XName = XNamespace.none.getName('dtr');

  /**
   * Represents the `dueDate` XML name.
   */
  public static readonly dueDate: XName = XNamespace.none.getName('dueDate');

  /**
   * Represents the `dur` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly dur: XName = XNamespace.none.getName('dur');

  /**
   * Represents the `duration` XML name.
   */
  public static readonly duration: XName = XNamespace.none.getName('duration');

  /**
   * Represents the `dvAspect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.oleObject oleObject}
   */
  public static readonly dvAspect: XName = XNamespace.none.getName('dvAspect');

  /**
   * Represents the `dx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.norm norm}, {@linkcode A.up up}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly dx: XName = XNamespace.none.getName('dx');

  /**
   * Represents the `dxf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}
   */
  public static readonly dxf: XName = XNamespace.none.getName('dxf');

  /**
   * Represents the `dxfid` XML name.
   */
  public static readonly dxfid: XName = XNamespace.none.getName('dxfid');

  /**
   * Represents the `dxfId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X.colorFilter colorFilter}, {@linkcode X.format format}, {@linkcode X.sortCondition sortCondition}, {@linkcode X.tableStyleElement tableStyleElement}, {@linkcode X14.slicerStyleElement slicerStyleElement}, {@linkcode X14.sortCondition sortCondition}, {@linkcode X15.timelineStyleElement timelineStyleElement}
   */
  public static readonly dxfId_: XName = XNamespace.none.getName('dxfId');

  /**
   * Represents the `dy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.norm norm}, {@linkcode A.up up}
   */
  public static readonly dy: XName = XNamespace.none.getName('dy');

  /**
   * Represents the `dynamicSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.calculatedMember calculatedMember}
   */
  public static readonly dynamicSet: XName =
    XNamespace.none.getName('dynamicSet');

  /**
   * Represents the `dz` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.norm norm}, {@linkcode A.up up}
   */
  public static readonly dz: XName = XNamespace.none.getName('dz');

  /**
   * Represents the `e` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.item item}
   */
  public static readonly e: XName = XNamespace.none.getName('e');

  /**
   * Represents the `eaLnBrk` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}
   */
  public static readonly eaLnBrk: XName = XNamespace.none.getName('eaLnBrk');

  /**
   * Represents the `eb` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rPh rPh}
   */
  public static readonly eb: XName = XNamespace.none.getName('eb');

  /**
   * Represents the `edge` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}, {@linkcode X.rrc rrc}
   */
  public static readonly edge: XName = XNamespace.none.getName('edge');

  /**
   * Represents the `edit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly edit: XName = XNamespace.none.getName('edit');

  /**
   * Represents the `editas` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.group group}
   */
  public static readonly editas: XName = XNamespace.none.getName('editas');

  /**
   * Represents the `editAs` XML name.
   */
  public static readonly editAs_: XName = XNamespace.none.getName('editAs');

  /**
   * Represents the `editData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly editData: XName = XNamespace.none.getName('editData');

  /**
   * Represents the `edited` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.wrapPolygon wrapPolygon}
   */
  public static readonly edited: XName = XNamespace.none.getName('edited');

  /**
   * Represents the `editPage` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly editPage: XName = XNamespace.none.getName('editPage');

  /**
   * Represents the `editVal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly editVal: XName = XNamespace.none.getName('editVal');

  /**
   * Represents the `embeddedDataId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.connection connection}
   */
  public static readonly embeddedDataId: XName =
    XNamespace.none.getName('embeddedDataId');

  /**
   * Represents the `embeddedHtml` XML name.
   */
  public static readonly embeddedHtml: XName =
    XNamespace.none.getName('embeddedHtml');

  /**
   * Represents the `embedTrueTypeFonts` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly embedTrueTypeFonts: XName =
    XNamespace.none.getName('embedTrueTypeFonts');

  /**
   * Represents the `embosscolor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata imagedata}
   */
  public static readonly embosscolor: XName =
    XNamespace.none.getName('embosscolor');

  /**
   * Represents the `emptyCellReference` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly emptyCellReference: XName =
    XNamespace.none.getName('emptyCellReference');

  /**
   * Represents the `enabled` XML name.
   */
  public static readonly enabled: XName = XNamespace.none.getName('enabled');

  /**
   * Represents the `enableDrill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly enableDrill: XName =
    XNamespace.none.getName('enableDrill');

  /**
   * Represents the `enableEdit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly enableEdit: XName =
    XNamespace.none.getName('enableEdit');

  /**
   * Represents the `enableFieldProperties` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly enableFieldProperties: XName = XNamespace.none.getName(
    'enableFieldProperties'
  );

  /**
   * Represents the `enableFormatConditionsCalculation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly enableFormatConditionsCalculation: XName =
    XNamespace.none.getName('enableFormatConditionsCalculation');

  /**
   * Represents the `enableRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly enableRefresh: XName =
    XNamespace.none.getName('enableRefresh');

  /**
   * Represents the `enableWizard` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly enableWizard: XName =
    XNamespace.none.getName('enableWizard');

  /**
   * Represents the `encoding` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly encoding: XName = XNamespace.none.getName('encoding');

  /**
   * Represents the `end` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A16.cxnDERefs cxnDERefs}, {@linkcode O.proxy proxy}, {@linkcode P.charRg charRg}, {@linkcode P.pRg pRg}, {@linkcode P.sldRg sldRg}, {@linkcode P14.trim trim}
   */
  public static readonly end: XName = XNamespace.none.getName('end');

  /**
   * Represents the `endA` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.reflection reflection}
   */
  public static readonly endA: XName = XNamespace.none.getName('endA');

  /**
   * Represents the `endangle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}
   */
  public static readonly endangle: XName = XNamespace.none.getName('endangle');

  /**
   * Represents the `endarrow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly endarrow: XName = XNamespace.none.getName('endarrow');

  /**
   * Represents the `endarrowlength` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly endarrowlength: XName =
    XNamespace.none.getName('endarrowlength');

  /**
   * Represents the `endarrowwidth` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly endarrowwidth: XName =
    XNamespace.none.getName('endarrowwidth');

  /**
   * Represents the `endcap` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly endcap: XName = XNamespace.none.getName('endcap');

  /**
   * Represents the `endDate` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}, {@linkcode X15.bounds bounds}, {@linkcode X15.selection selection}
   */
  public static readonly endDate: XName = XNamespace.none.getName('endDate');

  /**
   * Represents the `endModifierType` XML name.
   */
  public static readonly endModifierType: XName =
    XNamespace.none.getName('endModifierType');

  /**
   * Represents the `endNum` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly endNum: XName = XNamespace.none.getName('endNum');

  /**
   * Represents the `endOfListFormulaUpdate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}
   */
  public static readonly endOfListFormulaUpdate: XName =
    XNamespace.none.getName('endOfListFormulaUpdate');

  /**
   * Represents the `endPos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.reflection reflection}
   */
  public static readonly endPos: XName = XNamespace.none.getName('endPos');

  /**
   * Represents the `endSnd` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}
   */
  public static readonly endSnd: XName = XNamespace.none.getName('endSnd');

  /**
   * Represents the `eol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rrc rrc}
   */
  public static readonly eol: XName = XNamespace.none.getName('eol');

  /**
   * Represents the `eqn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.f f}
   */
  public static readonly eqn: XName = XNamespace.none.getName('eqn');

  /**
   * Represents the `equalAverage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly equalAverage: XName =
    XNamespace.none.getName('equalAverage');

  /**
   * Represents the `equationxml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.shape shape}
   */
  public static readonly equationxml: XName =
    XNamespace.none.getName('equationxml');

  /**
   * Represents the `err` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly err: XName = XNamespace.none.getName('err');

  /**
   * Represents the `error` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly error: XName = XNamespace.none.getName('error');

  /**
   * Represents the `errorCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly errorCaption: XName =
    XNamespace.none.getName('errorCaption');

  /**
   * Represents the `errors` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly errors: XName = XNamespace.none.getName('errors');

  /**
   * Represents the `errorStyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly errorStyle: XName =
    XNamespace.none.getName('errorStyle');

  /**
   * Represents the `errorTitle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly errorTitle: XName =
    XNamespace.none.getName('errorTitle');

  /**
   * Represents the `evalError` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly evalError: XName =
    XNamespace.none.getName('evalError');

  /**
   * Represents the `evalOrder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly evalOrder: XName =
    XNamespace.none.getName('evalOrder');

  /**
   * Represents the `evt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cond cond}, {@linkcode P.endSync endSync}
   */
  public static readonly evt: XName = XNamespace.none.getName('evt');

  /**
   * Represents the `evtFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly evtFilter: XName =
    XNamespace.none.getName('evtFilter');

  /**
   * Represents the `excludeFromRefreshAll` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.connection connection}
   */
  public static readonly excludeFromRefreshAll: XName = XNamespace.none.getName(
    'excludeFromRefreshAll'
  );

  /**
   * Represents the `exclusive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly exclusive: XName =
    XNamespace.none.getName('exclusive');

  /**
   * Represents the `exp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly exp: XName = XNamespace.none.getName('exp');

  /**
   * Represents the `expand` XML name.
   */
  public static readonly expand: XName = XNamespace.none.getName('expand');

  /**
   * Represents the `extendable` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly extendable: XName =
    XNamespace.none.getName('extendable');

  /**
   * Represents the `extrusioncolor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.colormenu colormenu}
   */
  public static readonly extrusioncolor: XName =
    XNamespace.none.getName('extrusioncolor');

  /**
   * Represents the `extrusionH` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.sp3d sp3d}, {@linkcode A14.hiddenSp3d hiddenSp3d}
   */
  public static readonly extrusionH: XName =
    XNamespace.none.getName('extrusionH');

  /**
   * Represents the `extrusionOk` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.path path}
   */
  public static readonly extrusionOk: XName =
    XNamespace.none.getName('extrusionOk');

  /**
   * Represents the `f` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.b b}, {@linkcode X.d d}, {@linkcode X.e e}, {@linkcode X.item item}, {@linkcode X.m m}, {@linkcode X.mdx mdx}, {@linkcode X.n n}, {@linkcode X.s s}
   */
  public static readonly f: XName = XNamespace.none.getName('f');

  /**
   * Represents the `facet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly facet: XName = XNamespace.none.getName('facet');

  /**
   * Represents the `fact` XML name.
   */
  public static readonly fact: XName = XNamespace.none.getName('fact');

  /**
   * Represents the `fadeDir` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.reflection reflection}
   */
  public static readonly fadeDir: XName = XNamespace.none.getName('fadeDir');

  /**
   * Represents the `fc` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X15.x x}
   */
  public static readonly fc: XName = XNamespace.none.getName('fc');

  /**
   * Represents the `fi` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.t t}
   */
  public static readonly fi: XName = XNamespace.none.getName('fi');

  /**
   * Represents the `field` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedItem calculatedItem}, {@linkcode X.mp mp}, {@linkcode X.pivotArea pivotArea}, {@linkcode X.reference reference}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly field: XName = XNamespace.none.getName('field');

  /**
   * Represents the `fieldId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rqt rqt}
   */
  public static readonly fieldId: XName = XNamespace.none.getName('fieldId');

  /**
   * Represents the `fieldIdWrapped` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly fieldIdWrapped: XName =
    XNamespace.none.getName('fieldIdWrapped');

  /**
   * Represents the `fieldListSortAscending` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly fieldListSortAscending: XName =
    XNamespace.none.getName('fieldListSortAscending');

  /**
   * Represents the `fieldPosition` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly fieldPosition: XName =
    XNamespace.none.getName('fieldPosition');

  /**
   * Represents the `fieldPrintTitles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly fieldPrintTitles: XName =
    XNamespace.none.getName('fieldPrintTitles');

  /**
   * Represents the `FileBinding` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.DataBinding DataBinding}
   */
  public static readonly FileBinding: XName =
    XNamespace.none.getName('FileBinding');

  /**
   * Represents the `FileBindingName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.DataBinding DataBinding}
   */
  public static readonly FileBindingName: XName =
    XNamespace.none.getName('FileBindingName');

  /**
   * Represents the `fileType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly fileType: XName = XNamespace.none.getName('fileType');

  /**
   * Represents the `fill` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.path path}, {@linkcode O.shapedefaults shapedefaults}, {@linkcode P.cTn cTn}, {@linkcode V.background background}
   */
  public static readonly fill: XName = XNamespace.none.getName('fill');

  /**
   * Represents the `fillcolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.colormenu colormenu}, {@linkcode O.shapedefaults shapedefaults}, {@linkcode V.arc arc}, {@linkcode V.background background}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly fillcolor: XName =
    XNamespace.none.getName('fillcolor');

  /**
   * Represents the `fillDownLabels` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotField pivotField}
   */
  public static readonly fillDownLabels: XName =
    XNamespace.none.getName('fillDownLabels');

  /**
   * Represents the `fillDownLabelsDefault` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly fillDownLabelsDefault: XName = XNamespace.none.getName(
    'fillDownLabelsDefault'
  );

  /**
   * Represents the `filled` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly filled: XName = XNamespace.none.getName('filled');

  /**
   * Represents the `fillFormulas` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}, {@linkcode X.queryTableField queryTableField}
   */
  public static readonly fillFormulas: XName =
    XNamespace.none.getName('fillFormulas');

  /**
   * Represents the `fillId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly fillId: XName = XNamespace.none.getName('fillId');

  /**
   * Represents the `fillok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly fillok: XName = XNamespace.none.getName('fillok');

  /**
   * Represents the `filltype` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly filltype: XName = XNamespace.none.getName('filltype');

  /**
   * Represents the `filter` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animEffect animEffect}, {@linkcode X.customSheetView customSheetView}
   */
  public static readonly filter: XName = XNamespace.none.getName('filter');

  /**
   * Represents the `filterId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly filterId: XName = XNamespace.none.getName('filterId');

  /**
   * Represents the `filterMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly filterMode: XName =
    XNamespace.none.getName('filterMode');

  /**
   * Represents the `filterPivotName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly filterPivotName: XName =
    XNamespace.none.getName('filterPivotName');

  /**
   * Represents the `filterPrivacy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly filterPrivacy: XName =
    XNamespace.none.getName('filterPrivacy');

  /**
   * Represents the `filterTabId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly filterTabId: XName =
    XNamespace.none.getName('filterTabId');

  /**
   * Represents the `filterType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly filterType: XName =
    XNamespace.none.getName('filterType');

  /**
   * Represents the `filterUnique` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly filterUnique: XName =
    XNamespace.none.getName('filterUnique');

  /**
   * Represents the `filterVal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.top10 top10}
   */
  public static readonly filterVal: XName =
    XNamespace.none.getName('filterVal');

  /**
   * Represents the `final` XML name.
   */
  public static readonly final: XName = XNamespace.none.getName('final');

  /**
   * Represents the `first` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.main main}, {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly first: XName = XNamespace.none.getName('first');

  /**
   * Represents the `firstBackgroundRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly firstBackgroundRefresh: XName =
    XNamespace.none.getName('firstBackgroundRefresh');

  /**
   * Represents the `firstButton` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly firstButton: XName =
    XNamespace.none.getName('firstButton');

  /**
   * Represents the `firstCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}
   */
  public static readonly firstCol: XName = XNamespace.none.getName('firstCol');

  /**
   * Represents the `firstColumnMaxWidth` XML name.
   */
  public static readonly firstColumnMaxWidth: XName = XNamespace.none.getName(
    'firstColumnMaxWidth'
  );

  /**
   * Represents the `firstColumnMinWidth` XML name.
   */
  public static readonly firstColumnMinWidth: XName = XNamespace.none.getName(
    'firstColumnMinWidth'
  );

  /**
   * Represents the `firstDataCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.location location}
   */
  public static readonly firstDataCol: XName =
    XNamespace.none.getName('firstDataCol');

  /**
   * Represents the `firstDataRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.location location}
   */
  public static readonly firstDataRow: XName =
    XNamespace.none.getName('firstDataRow');

  /**
   * Represents the `firstHeaderRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.location location}
   */
  public static readonly firstHeaderRow: XName =
    XNamespace.none.getName('firstHeaderRow');

  /**
   * Represents the `firstPageNumber` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly firstPageNumber: XName =
    XNamespace.none.getName('firstPageNumber');

  /**
   * Represents the `firstRow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}, {@linkcode X.textPr textPr}, {@linkcode X.webPr webPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly firstRow: XName = XNamespace.none.getName('firstRow');

  /**
   * Represents the `firstSheet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookView workbookView}
   */
  public static readonly firstSheet: XName =
    XNamespace.none.getName('firstSheet');

  /**
   * Represents the `firstSlideNum` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly firstSlideNum: XName =
    XNamespace.none.getName('firstSlideNum');

  /**
   * Represents the `fitpath` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textpath textpath}
   */
  public static readonly fitpath: XName = XNamespace.none.getName('fitpath');

  /**
   * Represents the `fitshape` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textpath textpath}
   */
  public static readonly fitshape: XName = XNamespace.none.getName('fitshape');

  /**
   * Represents the `fitToHeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly fitToHeight: XName =
    XNamespace.none.getName('fitToHeight');

  /**
   * Represents the `fitToPage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.pageSetUpPr pageSetUpPr}
   */
  public static readonly fitToPage: XName =
    XNamespace.none.getName('fitToPage');

  /**
   * Represents the `fitToWidth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly fitToWidth: XName =
    XNamespace.none.getName('fitToWidth');

  /**
   * Represents the `flattenHierarchies` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.cacheHierarchy cacheHierarchy}, {@linkcode X14.calculatedMember calculatedMember}
   */
  public static readonly flattenHierarchies: XName =
    XNamespace.none.getName('flattenHierarchies');

  /**
   * Represents the `fld` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataField dataField}, {@linkcode X.filter filter}, {@linkcode X.pageField pageField}, {@linkcode X.tpl tpl}
   */
  public static readonly fld: XName = XNamespace.none.getName('fld');

  /**
   * Represents the `flip` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.gradFill gradFill}, {@linkcode A.tile tile}
   */
  public static readonly flip: XName = XNamespace.none.getName('flip');

  /**
   * Represents the `flipH` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.xfrm xfrm}, {@linkcode A14.xfrm xfrm}, {@linkcode P.xfrm xfrm}, {@linkcode P14.xfrm xfrm}, {@linkcode W14.xfrm xfrm}, {@linkcode WPG.xfrm xfrm}
   */
  public static readonly flipH: XName = XNamespace.none.getName('flipH');

  /**
   * Represents the `flipV` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.xfrm xfrm}, {@linkcode A14.xfrm xfrm}, {@linkcode P.xfrm xfrm}, {@linkcode P14.xfrm xfrm}, {@linkcode W14.xfrm xfrm}, {@linkcode WPG.xfrm xfrm}
   */
  public static readonly flipV: XName = XNamespace.none.getName('flipV');

  /**
   * Represents the `fLocksText` XML name.
   */
  public static readonly fLocksText: XName =
    XNamespace.none.getName('fLocksText');

  /**
   * Represents the `fLocksWithSheet` XML name.
   */
  public static readonly fLocksWithSheet: XName =
    XNamespace.none.getName('fLocksWithSheet');

  /**
   * Represents the `fmla` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.gd gd}, {@linkcode P.tav tav}
   */
  public static readonly fmla: XName = XNamespace.none.getName('fmla');

  /**
   * Represents the `fmlaGroup` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly fmlaGroup: XName =
    XNamespace.none.getName('fmlaGroup');

  /**
   * Represents the `fmlaLink` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly fmlaLink: XName = XNamespace.none.getName('fmlaLink');

  /**
   * Represents the `fmlaRange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly fmlaRange: XName =
    XNamespace.none.getName('fmlaRange');

  /**
   * Represents the `fmlaTxbx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly fmlaTxbx: XName = XNamespace.none.getName('fmlaTxbx');

  /**
   * Represents the `fmtid` XML name.
   */
  public static readonly fmtid: XName = XNamespace.none.getName('fmtid');

  /**
   * Represents the `focus` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly focus: XName = XNamespace.none.getName('focus');

  /**
   * Represents the `focusposition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly focusposition: XName =
    XNamespace.none.getName('focusposition');

  /**
   * Represents the `focussize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly focussize: XName =
    XNamespace.none.getName('focussize');

  /**
   * Represents the `folHlink` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly folHlink: XName = XNamespace.none.getName('folHlink');

  /**
   * Represents the `followColorScheme` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.embed embed}
   */
  public static readonly followColorScheme: XName =
    XNamespace.none.getName('followColorScheme');

  /**
   * Represents the `fontAlgn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}
   */
  public static readonly fontAlgn: XName = XNamespace.none.getName('fontAlgn');

  /**
   * Represents the `fontId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.phoneticPr phoneticPr}, {@linkcode X.xf xf}
   */
  public static readonly fontId: XName = XNamespace.none.getName('fontId');

  /**
   * Represents the `fontScale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.normAutofit normAutofit}
   */
  public static readonly fontScale: XName =
    XNamespace.none.getName('fontScale');

  /**
   * Represents the `footer` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageMargins pageMargins}
   */
  public static readonly footer: XName = XNamespace.none.getName('footer');

  /**
   * Represents the `for` XML name.
   */
  public static readonly for: XName = XNamespace.none.getName('for');

  /**
   * Represents the `forceAA` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly forceAA: XName = XNamespace.none.getName('forceAA');

  /**
   * Represents the `forceFullCalc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly forceFullCalc: XName =
    XNamespace.none.getName('forceFullCalc');

  /**
   * Represents the `foredepth` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly foredepth: XName =
    XNamespace.none.getName('foredepth');

  /**
   * Represents the `format` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.chartFormat chartFormat}, {@linkcode X.serverFormat serverFormat}
   */
  public static readonly format: XName = XNamespace.none.getName('format');

  /**
   * Represents the `formatCells` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly formatCells: XName =
    XNamespace.none.getName('formatCells');

  /**
   * Represents the `formatCode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.numFmt numFmt}
   */
  public static readonly formatCode: XName =
    XNamespace.none.getName('formatCode');

  /**
   * Represents the `formatColumns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly formatColumns: XName =
    XNamespace.none.getName('formatColumns');

  /**
   * Represents the `formatIdx` XML name.
   */
  public static readonly formatIdx: XName =
    XNamespace.none.getName('formatIdx');

  /**
   * Represents the `formatRows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly formatRows: XName =
    XNamespace.none.getName('formatRows');

  /**
   * Represents the `formula` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.calculatedItem calculatedItem}, {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly formula: XName = XNamespace.none.getName('formula');

  /**
   * Represents the `formulaRange` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly formulaRange: XName =
    XNamespace.none.getName('formulaRange');

  /**
   * Represents the `forName` XML name.
   */
  public static readonly forName: XName = XNamespace.none.getName('forName');

  /**
   * Represents the `fov` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.camera camera}
   */
  public static readonly fov: XName = XNamespace.none.getName('fov');

  /**
   * Represents the `fPrintsWithSheet` XML name.
   */
  public static readonly fPrintsWithSheet: XName =
    XNamespace.none.getName('fPrintsWithSheet');

  /**
   * Represents the `fPublished` XML name.
   */
  public static readonly fPublished: XName =
    XNamespace.none.getName('fPublished');

  /**
   * Represents the `frame` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.photoAlbum photoAlbum}
   */
  public static readonly frame: XName = XNamespace.none.getName('frame');

  /**
   * Represents the `frameSlides` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.prnPr prnPr}
   */
  public static readonly frameSlides: XName =
    XNamespace.none.getName('frameSlides');

  /**
   * Represents the `from` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim anim}, {@linkcode P.animRot animRot}, {@linkcode P.cBhvr cBhvr}, {@linkcode V.curve curve}, {@linkcode V.line line}
   */
  public static readonly from: XName = XNamespace.none.getName('from');

  /**
   * Represents the `fromColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.modelRelationship modelRelationship}
   */
  public static readonly fromColumn: XName =
    XNamespace.none.getName('fromColumn');

  /**
   * Represents the `fromTable` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.modelRelationship modelRelationship}
   */
  public static readonly fromTable: XName =
    XNamespace.none.getName('fromTable');

  /**
   * Represents the `fromWordArt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly fromWordArt: XName =
    XNamespace.none.getName('fromWordArt');

  /**
   * Represents the `frozen` XML name.
   */
  public static readonly frozen: XName = XNamespace.none.getName('frozen');

  /**
   * Represents the `ftr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.hf hf}
   */
  public static readonly ftr: XName = XNamespace.none.getName('ftr');

  /**
   * Represents the `fullCalcOnLoad` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}, {@linkcode X.sheetCalcPr sheetCalcPr}
   */
  public static readonly fullCalcOnLoad: XName =
    XNamespace.none.getName('fullCalcOnLoad');

  /**
   * Represents the `fullPrecision` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly fullPrecision: XName =
    XNamespace.none.getName('fullPrecision');

  /**
   * Represents the `fullScrn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.video video}
   */
  public static readonly fullScrn: XName = XNamespace.none.getName('fullScrn');

  /**
   * Represents the `func` XML name.
   */
  public static readonly func: XName = XNamespace.none.getName('func');

  /**
   * Represents the `function` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataConsolidate dataConsolidate}, {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly function: XName = XNamespace.none.getName('function');

  /**
   * Represents the `functionGroupId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly functionGroupId: XName =
    XNamespace.none.getName('functionGroupId');

  /**
   * Represents the `g` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.scrgbClr scrgbClr}, {@linkcode P.rgb rgb}
   */
  public static readonly g: XName = XNamespace.none.getName('g');

  /**
   * Represents the `gain` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly gain: XName = XNamespace.none.getName('gain');

  /**
   * Represents the `gamma` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly gamma: XName = XNamespace.none.getName('gamma');

  /**
   * Represents the `gap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly gap: XName = XNamespace.none.getName('gap');

  /**
   * Represents the `gapWidth` XML name.
   */
  public static readonly gapWidth: XName = XNamespace.none.getName('gapWidth');

  /**
   * Represents the `gdRefAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly gdRefAng: XName = XNamespace.none.getName('gdRefAng');

  /**
   * Represents the `gdRefR` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly gdRefR: XName = XNamespace.none.getName('gdRefR');

  /**
   * Represents the `gdRefX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly gdRefX: XName = XNamespace.none.getName('gdRefX');

  /**
   * Represents the `gdRefY` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly gdRefY: XName = XNamespace.none.getName('gdRefY');

  /**
   * Represents the `getAltText` XML name.
   */
  public static readonly getAltText: XName =
    XNamespace.none.getName('getAltText');

  /**
   * Represents the `getContent` XML name.
   */
  public static readonly getContent: XName =
    XNamespace.none.getName('getContent');

  /**
   * Represents the `getDescription` XML name.
   */
  public static readonly getDescription: XName =
    XNamespace.none.getName('getDescription');

  /**
   * Represents the `getEnabled` XML name.
   */
  public static readonly getEnabled: XName =
    XNamespace.none.getName('getEnabled');

  /**
   * Represents the `getHelperText` XML name.
   */
  public static readonly getHelperText: XName =
    XNamespace.none.getName('getHelperText');

  /**
   * Represents the `getImage` XML name.
   */
  public static readonly getImage: XName = XNamespace.none.getName('getImage');

  /**
   * Represents the `getItemCount` XML name.
   */
  public static readonly getItemCount: XName =
    XNamespace.none.getName('getItemCount');

  /**
   * Represents the `getItemHeight` XML name.
   */
  public static readonly getItemHeight: XName =
    XNamespace.none.getName('getItemHeight');

  /**
   * Represents the `getItemID` XML name.
   */
  public static readonly getItemID: XName =
    XNamespace.none.getName('getItemID');

  /**
   * Represents the `getItemImage` XML name.
   */
  public static readonly getItemImage: XName =
    XNamespace.none.getName('getItemImage');

  /**
   * Represents the `getItemLabel` XML name.
   */
  public static readonly getItemLabel: XName =
    XNamespace.none.getName('getItemLabel');

  /**
   * Represents the `getItemScreentip` XML name.
   */
  public static readonly getItemScreentip: XName =
    XNamespace.none.getName('getItemScreentip');

  /**
   * Represents the `getItemSupertip` XML name.
   */
  public static readonly getItemSupertip: XName =
    XNamespace.none.getName('getItemSupertip');

  /**
   * Represents the `getItemWidth` XML name.
   */
  public static readonly getItemWidth: XName =
    XNamespace.none.getName('getItemWidth');

  /**
   * Represents the `getKeytip` XML name.
   */
  public static readonly getKeytip: XName =
    XNamespace.none.getName('getKeytip');

  /**
   * Represents the `getLabel` XML name.
   */
  public static readonly getLabel: XName = XNamespace.none.getName('getLabel');

  /**
   * Represents the `getPressed` XML name.
   */
  public static readonly getPressed: XName =
    XNamespace.none.getName('getPressed');

  /**
   * Represents the `getScreentip` XML name.
   */
  public static readonly getScreentip: XName =
    XNamespace.none.getName('getScreentip');

  /**
   * Represents the `getSelectedItemID` XML name.
   */
  public static readonly getSelectedItemID: XName =
    XNamespace.none.getName('getSelectedItemID');

  /**
   * Represents the `getSelectedItemIndex` XML name.
   */
  public static readonly getSelectedItemIndex: XName = XNamespace.none.getName(
    'getSelectedItemIndex'
  );

  /**
   * Represents the `getShowImage` XML name.
   */
  public static readonly getShowImage: XName =
    XNamespace.none.getName('getShowImage');

  /**
   * Represents the `getShowLabel` XML name.
   */
  public static readonly getShowLabel: XName =
    XNamespace.none.getName('getShowLabel');

  /**
   * Represents the `getSize` XML name.
   */
  public static readonly getSize: XName = XNamespace.none.getName('getSize');

  /**
   * Represents the `getStyle` XML name.
   */
  public static readonly getStyle: XName = XNamespace.none.getName('getStyle');

  /**
   * Represents the `getSupertip` XML name.
   */
  public static readonly getSupertip: XName =
    XNamespace.none.getName('getSupertip');

  /**
   * Represents the `getTarget` XML name.
   */
  public static readonly getTarget: XName =
    XNamespace.none.getName('getTarget');

  /**
   * Represents the `getText` XML name.
   */
  public static readonly getText: XName = XNamespace.none.getName('getText');

  /**
   * Represents the `getTitle` XML name.
   */
  public static readonly getTitle: XName = XNamespace.none.getName('getTitle');

  /**
   * Represents the `getVisible` XML name.
   */
  public static readonly getVisible: XName =
    XNamespace.none.getName('getVisible');

  /**
   * Represents the `ghostCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly ghostCol: XName = XNamespace.none.getName('ghostCol');

  /**
   * Represents the `ghostRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly ghostRow: XName = XNamespace.none.getName('ghostRow');

  /**
   * Represents the `goal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.kpi kpi}
   */
  public static readonly goal: XName = XNamespace.none.getName('goal');

  /**
   * Represents the `gradient` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly gradient: XName = XNamespace.none.getName('gradient');

  /**
   * Represents the `gradientshapeok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly gradientshapeok: XName =
    XNamespace.none.getName('gradientshapeok');

  /**
   * Represents the `grainSize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticFilmGrain artisticFilmGrain}
   */
  public static readonly grainSize: XName =
    XNamespace.none.getName('grainSize');

  /**
   * Represents the `grandCol` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly grandCol: XName = XNamespace.none.getName('grandCol');

  /**
   * Represents the `grandRow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly grandRow: XName = XNamespace.none.getName('grandRow');

  /**
   * Represents the `grandTotalCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly grandTotalCaption: XName =
    XNamespace.none.getName('grandTotalCaption');

  /**
   * Represents the `grayscale` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.image image}, {@linkcode V.imagedata imagedata}
   */
  public static readonly grayscale: XName =
    XNamespace.none.getName('grayscale');

  /**
   * Represents the `gridDropZones` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly gridDropZones: XName =
    XNamespace.none.getName('gridDropZones');

  /**
   * Represents the `gridLines` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.printOptions printOptions}
   */
  public static readonly gridLines: XName =
    XNamespace.none.getName('gridLines');

  /**
   * Represents the `gridLinesSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.printOptions printOptions}
   */
  public static readonly gridLinesSet: XName =
    XNamespace.none.getName('gridLinesSet');

  /**
   * Represents the `gridSize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticLightScreen artisticLightScreen}
   */
  public static readonly gridSize: XName = XNamespace.none.getName('gridSize');

  /**
   * Represents the `gridSpan` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tc tc}
   */
  public static readonly gridSpan: XName = XNamespace.none.getName('gridSpan');

  /**
   * Represents the `group` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.groupMember groupMember}
   */
  public static readonly group: XName = XNamespace.none.getName('group');

  /**
   * Represents the `groupBy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly groupBy: XName = XNamespace.none.getName('groupBy');

  /**
   * Represents the `grouping` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly grouping: XName = XNamespace.none.getName('grouping');

  /**
   * Represents the `groupInterval` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly groupInterval: XName =
    XNamespace.none.getName('groupInterval');

  /**
   * Represents the `grow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blur blur}
   */
  public static readonly grow: XName = XNamespace.none.getName('grow');

  /**
   * Represents the `growShrinkType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly growShrinkType: XName =
    XNamespace.none.getName('growShrinkType');

  /**
   * Represents the `grpId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldDgm bldDgm}, {@linkcode P.bldGraphic bldGraphic}, {@linkcode P.bldOleChart bldOleChart}, {@linkcode P.bldP bldP}, {@linkcode P.cTn cTn}
   */
  public static readonly grpId: XName = XNamespace.none.getName('grpId');

  /**
   * Represents the `gte` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfvo cfvo}, {@linkcode X14.cfvo cfvo}
   */
  public static readonly gte: XName = XNamespace.none.getName('gte');

  /**
   * Represents the `guid` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.comment comment}, {@linkcode X.customSheetView customSheetView}, {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.header header}, {@linkcode X.headers headers}, {@linkcode X.rcmt rcmt}, {@linkcode X.rcv rcv}, {@linkcode X.userInfo userInfo}
   */
  public static readonly guid: XName = XNamespace.none.getName('guid');

  /**
   * Represents the `h` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bevel bevel}, {@linkcode A.bevelB bevelB}, {@linkcode A.bevelT bevelT}, {@linkcode A.path path}, {@linkcode A.tr tr}, {@linkcode P.hsl hsl}, {@linkcode X.item item}
   */
  public static readonly h: XName = XNamespace.none.getName('h');

  /**
   * Represents the `hangingPunct` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}
   */
  public static readonly hangingPunct: XName =
    XNamespace.none.getName('hangingPunct');

  /**
   * Represents the `hasBounce` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.flythrough flythrough}
   */
  public static readonly hasBounce: XName =
    XNamespace.none.getName('hasBounce');

  /**
   * Represents the `hasCustomPrompt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.ph ph}
   */
  public static readonly hasCustomPrompt: XName =
    XNamespace.none.getName('hasCustomPrompt');

  /**
   * Represents the `hashData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly hashData: XName = XNamespace.none.getName('hashData');

  /**
   * Represents the `hashValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}, {@linkcode X.fileSharing fileSharing}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly hashValue: XName =
    XNamespace.none.getName('hashValue');

  /**
   * Represents the `hdr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.hf hf}
   */
  public static readonly hdr: XName = XNamespace.none.getName('hdr');

  /**
   * Represents the `header` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageMargins pageMargins}
   */
  public static readonly header: XName = XNamespace.none.getName('header');

  /**
   * Represents the `headerRowBorderDxfId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly headerRowBorderDxfId: XName = XNamespace.none.getName(
    'headerRowBorderDxfId'
  );

  /**
   * Represents the `headerRowCellStyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly headerRowCellStyle: XName =
    XNamespace.none.getName('headerRowCellStyle');

  /**
   * Represents the `headerRowCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly headerRowCount: XName =
    XNamespace.none.getName('headerRowCount');

  /**
   * Represents the `headerRowDxfId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly headerRowDxfId: XName =
    XNamespace.none.getName('headerRowDxfId');

  /**
   * Represents the `headers` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}, {@linkcode X15.modelTextPr modelTextPr}
   */
  public static readonly headers: XName = XNamespace.none.getName('headers');

  /**
   * Represents the `headersInLastRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly headersInLastRefresh: XName = XNamespace.none.getName(
    'headersInLastRefresh'
  );

  /**
   * Represents the `headings` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.printOptions printOptions}
   */
  public static readonly headings: XName = XNamespace.none.getName('headings');

  /**
   * Represents the `height` XML name.
   */
  public static readonly height: XName = XNamespace.none.getName('height');

  /**
   * Represents the `help` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly help: XName = XNamespace.none.getName('help');

  /**
   * Represents the `helperText` XML name.
   */
  public static readonly helperText: XName =
    XNamespace.none.getName('helperText');

  /**
   * Represents the `hidden` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvPr cNvPr}, {@linkcode A14.cNvPr cNvPr}, {@linkcode P.cNvPr cNvPr}, {@linkcode P14.cNvPr cNvPr}, {@linkcode W14.cNvPr cNvPr}, {@linkcode WP.anchor anchor}, {@linkcode WP.docPr docPr}, {@linkcode WPG.cNvPr cNvPr}, {@linkcode WPS.cNvPr cNvPr}, {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.cellStyle cellStyle}, {@linkcode X.col col}, {@linkcode X.definedName definedName}, {@linkcode X.protection protection}, {@linkcode X.rdn rdn}, {@linkcode X.row row}, {@linkcode X.scenario scenario}
   */
  public static readonly hidden: XName = XNamespace.none.getName('hidden');

  /**
   * Represents the `hiddenButton` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filterColumn filterColumn}
   */
  public static readonly hiddenButton: XName =
    XNamespace.none.getName('hiddenButton');

  /**
   * Represents the `hiddenColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly hiddenColumn: XName =
    XNamespace.none.getName('hiddenColumn');

  /**
   * Represents the `hiddenColumns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly hiddenColumns: XName =
    XNamespace.none.getName('hiddenColumns');

  /**
   * Represents the `hiddenLevel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly hiddenLevel: XName =
    XNamespace.none.getName('hiddenLevel');

  /**
   * Represents the `hiddenRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly hiddenRow: XName =
    XNamespace.none.getName('hiddenRow');

  /**
   * Represents the `hiddenRows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly hiddenRows: XName =
    XNamespace.none.getName('hiddenRows');

  /**
   * Represents the `hiddenSlides` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.prnPr prnPr}
   */
  public static readonly hiddenSlides: XName =
    XNamespace.none.getName('hiddenSlides');

  /**
   * Represents the `hideGeom` XML name.
   */
  public static readonly hideGeom: XName = XNamespace.none.getName('hideGeom');

  /**
   * Represents the `hideLastTrans` XML name.
   */
  public static readonly hideLastTrans: XName =
    XNamespace.none.getName('hideLastTrans');

  /**
   * Represents the `hideNewItems` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly hideNewItems: XName =
    XNamespace.none.getName('hideNewItems');

  /**
   * Represents the `hidePivotFieldList` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly hidePivotFieldList: XName =
    XNamespace.none.getName('hidePivotFieldList');

  /**
   * Represents the `hideValuesRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly hideValuesRow: XName =
    XNamespace.none.getName('hideValuesRow');

  /**
   * Represents the `hier` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageField pageField}, {@linkcode X.tpl tpl}
   */
  public static readonly hier: XName = XNamespace.none.getName('hier');

  /**
   * Represents the `hierarchizeDistinct` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.cacheHierarchy cacheHierarchy}, {@linkcode X14.calculatedMember calculatedMember}
   */
  public static readonly hierarchizeDistinct: XName = XNamespace.none.getName(
    'hierarchizeDistinct'
  );

  /**
   * Represents the `hierarchy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.calculatedMember calculatedMember}, {@linkcode X14.setLevel setLevel}
   */
  public static readonly hierarchy: XName =
    XNamespace.none.getName('hierarchy');

  /**
   * Represents the `hierarchyName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.header header}
   */
  public static readonly hierarchyName: XName =
    XNamespace.none.getName('hierarchyName');

  /**
   * Represents the `hierarchyUsage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.colHierarchyUsage colHierarchyUsage}, {@linkcode X.rowHierarchyUsage rowHierarchyUsage}
   */
  public static readonly hierarchyUsage: XName =
    XNamespace.none.getName('hierarchyUsage');

  /**
   * Represents the `high` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly high: XName = XNamespace.none.getName('high');

  /**
   * Represents the `highlightClick` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}
   */
  public static readonly highlightClick: XName =
    XNamespace.none.getName('highlightClick');

  /**
   * Represents the `history` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}, {@linkcode X.headers headers}
   */
  public static readonly history: XName = XNamespace.none.getName('history');

  /**
   * Represents the `hlink` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly hlink: XName = XNamespace.none.getName('hlink');

  /**
   * Represents the `hMerge` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tc tc}
   */
  public static readonly hMerge: XName = XNamespace.none.getName('hMerge');

  /**
   * Represents the `horiz` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly horiz: XName = XNamespace.none.getName('horiz');

  /**
   * Represents the `horizontal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly horizontal: XName =
    XNamespace.none.getName('horizontal');

  /**
   * Represents the `horizontalCentered` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.printOptions printOptions}
   */
  public static readonly horizontalCentered: XName =
    XNamespace.none.getName('horizontalCentered');

  /**
   * Represents the `horizontalDpi` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly horizontalDpi: XName =
    XNamespace.none.getName('horizontalDpi');

  /**
   * Represents the `horzBarState` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.normalViewPr normalViewPr}
   */
  public static readonly horzBarState: XName =
    XNamespace.none.getName('horzBarState');

  /**
   * Represents the `horzOverflow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode A.tcPr tcPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly horzOverflow: XName =
    XNamespace.none.getName('horzOverflow');

  /**
   * Represents the `hotPoints` XML name.
   */
  public static readonly hotPoints: XName =
    XNamespace.none.getName('hotPoints');

  /**
   * Represents the `hour` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly hour: XName = XNamespace.none.getName('hour');

  /**
   * Represents the `how` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.r r}
   */
  public static readonly how: XName = XNamespace.none.getName('how');

  /**
   * Represents the `hR` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.arcTo arcTo}
   */
  public static readonly hR: XName = XNamespace.none.getName('hR');

  /**
   * Represents the `href` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly href: XName = XNamespace.none.getName('href');

  /**
   * Represents the `ht` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}
   */
  public static readonly ht: XName = XNamespace.none.getName('ht');

  /**
   * Represents the `htmlFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly htmlFormat: XName =
    XNamespace.none.getName('htmlFormat');

  /**
   * Represents the `htmlTables` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly htmlTables: XName =
    XNamespace.none.getName('htmlTables');

  /**
   * Represents the `hue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hsl hsl}, {@linkcode A.hslClr hslClr}, {@linkcode A.tint tint}
   */
  public static readonly hue: XName = XNamespace.none.getName('hue');

  /**
   * Represents the `hueDir` XML name.
   */
  public static readonly hueDir: XName = XNamespace.none.getName('hueDir');

  /**
   * Represents the `i` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}, {@linkcode A.tcTxStyle tcTxStyle}, {@linkcode O.ink ink}, {@linkcode X.c c}, {@linkcode X.e e}, {@linkcode X.i i}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X15.c c}, {@linkcode X15.x x}
   */
  public static readonly i: XName = XNamespace.none.getName('i');

  /**
   * Represents the `i1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangeSet rangeSet}
   */
  public static readonly i1: XName = XNamespace.none.getName('i1');

  /**
   * Represents the `i2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangeSet rangeSet}
   */
  public static readonly i2: XName = XNamespace.none.getName('i2');

  /**
   * Represents the `i3` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangeSet rangeSet}
   */
  public static readonly i3: XName = XNamespace.none.getName('i3');

  /**
   * Represents the `i4` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangeSet rangeSet}
   */
  public static readonly i4: XName = XNamespace.none.getName('i4');

  /**
   * Represents the `icon` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.oleItem oleItem}, {@linkcode X14.oleItem oleItem}
   */
  public static readonly icon: XName = XNamespace.none.getName('icon');

  /**
   * Represents the `iconId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.iconFilter iconFilter}, {@linkcode X.sortCondition sortCondition}, {@linkcode X14.cfIcon cfIcon}, {@linkcode X14.iconFilter iconFilter}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly iconId: XName = XNamespace.none.getName('iconId');

  /**
   * Represents the `iconSet` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.iconFilter iconFilter}, {@linkcode X.iconSet iconSet}, {@linkcode X.sortCondition sortCondition}, {@linkcode X14.cfIcon cfIcon}, {@linkcode X14.iconFilter iconFilter}, {@linkcode X14.iconSet iconSet}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly iconSet: XName = XNamespace.none.getName('iconSet');

  /**
   * Represents the `id` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvPr cNvPr}, {@linkcode A.dgm dgm}, {@linkcode A.endCxn endCxn}, {@linkcode A.fld fld}, {@linkcode A.stCxn stCxn}, {@linkcode A14.cNvPr cNvPr}, {@linkcode A15.signatureLine signatureLine}, {@linkcode A16.creationId creationId}, {@linkcode O.r r}, {@linkcode O.signatureline signatureline}, {@linkcode O.skew skew}, {@linkcode P.cmAuthor cmAuthor}, {@linkcode P.cNvPr cNvPr}, {@linkcode P.cTn cTn}, {@linkcode P.custShow custShow}, {@linkcode P.sldId sldId}, {@linkcode P.sldLayoutId sldLayoutId}, {@linkcode P.sldMasterId sldMasterId}, {@linkcode P14.cNvPr cNvPr}, {@linkcode P14.section section}, {@linkcode P14.sldId sldId}, {@linkcode P15.guide guide}, {@linkcode V.arc arc}, {@linkcode V.background background}, {@linkcode V.curve curve}, {@linkcode V.fill fill}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.imagedata imagedata}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.path path}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shadow shadow}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}, {@linkcode V.stroke stroke}, {@linkcode V.textbox textbox}, {@linkcode V.textpath textpath}, {@linkcode W14.cNvPr cNvPr}, {@linkcode WP.docPr docPr}, {@linkcode WPG.cNvPr cNvPr}, {@linkcode WPS.cNvPr cNvPr}, {@linkcode WPS.linkedTxbx linkedTxbx}, {@linkcode WPS.txbx txbx}, {@linkcode X.brk brk}, {@linkcode X.connection connection}, {@linkcode X.filter filter}, {@linkcode X.group group}, {@linkcode X.queryTableField queryTableField}, {@linkcode X.singleXmlCell singleXmlCell}, {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}, {@linkcode X.userInfo userInfo}, {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}, {@linkcode X.xmlCellPr xmlCellPr}, {@linkcode X14.cfRule cfRule}, {@linkcode X14.conditionalFormat conditionalFormat}, {@linkcode X14.datastoreItem datastoreItem}, {@linkcode X15.connection connection}, {@linkcode X15.modelTable modelTable}
   */
  public static readonly id: XName = XNamespace.none.getName('id');

  /**
   * Represents the `ID` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}, {@linkcode X.Schema Schema}
   */
  public static readonly ID_: XName = XNamespace.none.getName('ID');

  /**
   * Represents the `idcntr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.rel rel}
   */
  public static readonly idcntr: XName = XNamespace.none.getName('idcntr');

  /**
   * Represents the `iddest` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.rel rel}
   */
  public static readonly iddest: XName = XNamespace.none.getName('iddest');

  /**
   * Represents the `idMso` XML name.
   */
  public static readonly idMso: XName = XNamespace.none.getName('idMso');

  /**
   * Represents the `idQ` XML name.
   */
  public static readonly idQ: XName = XNamespace.none.getName('idQ');

  /**
   * Represents the `idref` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.proxy proxy}, {@linkcode O.r r}
   */
  public static readonly idref: XName = XNamespace.none.getName('idref');

  /**
   * Represents the `idsrc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.rel rel}
   */
  public static readonly idsrc: XName = XNamespace.none.getName('idsrc');

  /**
   * Represents the `idx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.effectRef effectRef}, {@linkcode A.endCxn endCxn}, {@linkcode A.fillRef fillRef}, {@linkcode A.fontRef fontRef}, {@linkcode A.lnRef lnRef}, {@linkcode A.stCxn stCxn}, {@linkcode P.bgRef bgRef}, {@linkcode P.cm cm}, {@linkcode P.ph ph}, {@linkcode P15.parentCm parentCm}
   */
  public static readonly idx: XName = XNamespace.none.getName('idx');

  /**
   * Represents the `ignore` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.cacheField cacheField}, {@linkcode X14.cacheHierarchy cacheHierarchy}, {@linkcode X14.pivotField pivotField}, {@linkcode X14.pivotHierarchy pivotHierarchy}
   */
  public static readonly ignore: XName = XNamespace.none.getName('ignore');

  /**
   * Represents the `iLevel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cellStyle cellStyle}
   */
  public static readonly iLevel: XName = XNamespace.none.getName('iLevel');

  /**
   * Represents the `image` XML name.
   */
  public static readonly image: XName = XNamespace.none.getName('image');

  /**
   * Represents the `imagealignshape` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly imagealignshape: XName =
    XNamespace.none.getName('imagealignshape');

  /**
   * Represents the `imageaspect` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly imageaspect: XName =
    XNamespace.none.getName('imageaspect');

  /**
   * Represents the `imageMso` XML name.
   */
  public static readonly imageMso: XName = XNamespace.none.getName('imageMso');

  /**
   * Represents the `imagesize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly imagesize: XName =
    XNamespace.none.getName('imagesize');

  /**
   * Represents the `iMeasureFld` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly iMeasureFld: XName =
    XNamespace.none.getName('iMeasureFld');

  /**
   * Represents the `iMeasureHier` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly iMeasureHier: XName =
    XNamespace.none.getName('iMeasureHier');

  /**
   * Represents the `imeMode` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly imeMode: XName = XNamespace.none.getName('imeMode');

  /**
   * Represents the `imgH` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.control control}, {@linkcode P.oleObj oleObj}
   */
  public static readonly imgH: XName = XNamespace.none.getName('imgH');

  /**
   * Represents the `imgSz` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly imgSz: XName = XNamespace.none.getName('imgSz');

  /**
   * Represents the `imgW` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.control control}, {@linkcode P.oleObj oleObj}
   */
  public static readonly imgW: XName = XNamespace.none.getName('imgW');

  /**
   * Represents the `immersive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly immersive: XName =
    XNamespace.none.getName('immersive');

  /**
   * Represents the `in` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.fade fade}, {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X15.x x}
   */
  public static readonly in: XName = XNamespace.none.getName('in');

  /**
   * Represents the `inc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly inc: XName = XNamespace.none.getName('inc');

  /**
   * Represents the `includeHiddenRowCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly includeHiddenRowCol: XName = XNamespace.none.getName(
    'includeHiddenRowCol'
  );

  /**
   * Represents the `includeNewItemsInFilter` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly includeNewItemsInFilter: XName =
    XNamespace.none.getName('includeNewItemsInFilter');

  /**
   * Represents the `includePrintSettings` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly includePrintSettings: XName = XNamespace.none.getName(
    'includePrintSettings'
  );

  /**
   * Represents the `indent` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}, {@linkcode X.alignment alignment}, {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly indent: XName = XNamespace.none.getName('indent');

  /**
   * Represents the `index` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}, {@linkcode X14.argumentDescription argumentDescription}, {@linkcode X15.cachedUniqueName cachedUniqueName}
   */
  public static readonly index: XName = XNamespace.none.getName('index');

  /**
   * Represents the `indexed` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.bgColor bgColor}, {@linkcode X.color color}, {@linkcode X.fgColor fgColor}, {@linkcode X.tabColor tabColor}, {@linkcode X14.axisColor axisColor}, {@linkcode X14.borderColor borderColor}, {@linkcode X14.color color}, {@linkcode X14.colorAxis colorAxis}, {@linkcode X14.colorFirst colorFirst}, {@linkcode X14.colorHigh colorHigh}, {@linkcode X14.colorLast colorLast}, {@linkcode X14.colorLow colorLow}, {@linkcode X14.colorMarkers colorMarkers}, {@linkcode X14.colorNegative colorNegative}, {@linkcode X14.colorSeries colorSeries}, {@linkcode X14.fillColor fillColor}, {@linkcode X14.negativeBorderColor negativeBorderColor}, {@linkcode X14.negativeFillColor negativeFillColor}
   */
  public static readonly indexed: XName = XNamespace.none.getName('indexed');

  /**
   * Represents the `initial` XML name.
   */
  public static readonly initial: XName = XNamespace.none.getName('initial');

  /**
   * Represents the `initials` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cmAuthor cmAuthor}
   */
  public static readonly initials: XName = XNamespace.none.getName('initials');

  /**
   * Represents the `inkSourceRef` XML name.
   */
  public static readonly inkSourceRef: XName =
    XNamespace.none.getName('inkSourceRef');

  /**
   * Represents the `insertAfterMso` XML name.
   */
  public static readonly insertAfterMso: XName =
    XNamespace.none.getName('insertAfterMso');

  /**
   * Represents the `insertAfterQ` XML name.
   */
  public static readonly insertAfterQ: XName =
    XNamespace.none.getName('insertAfterQ');

  /**
   * Represents the `insertBeforeMso` XML name.
   */
  public static readonly insertBeforeMso: XName =
    XNamespace.none.getName('insertBeforeMso');

  /**
   * Represents the `insertBeforeQ` XML name.
   */
  public static readonly insertBeforeQ: XName =
    XNamespace.none.getName('insertBeforeQ');

  /**
   * Represents the `insertBlankRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly insertBlankRow: XName =
    XNamespace.none.getName('insertBlankRow');

  /**
   * Represents the `insertColumns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly insertColumns: XName =
    XNamespace.none.getName('insertColumns');

  /**
   * Represents the `insertHyperlinks` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly insertHyperlinks: XName =
    XNamespace.none.getName('insertHyperlinks');

  /**
   * Represents the `insertPageBreak` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly insertPageBreak: XName =
    XNamespace.none.getName('insertPageBreak');

  /**
   * Represents the `insertRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly insertRow: XName =
    XNamespace.none.getName('insertRow');

  /**
   * Represents the `insertRows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly insertRows: XName =
    XNamespace.none.getName('insertRows');

  /**
   * Represents the `insertRowShift` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly insertRowShift: XName =
    XNamespace.none.getName('insertRowShift');

  /**
   * Represents the `inset` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textbox textbox}
   */
  public static readonly inset: XName = XNamespace.none.getName('inset');

  /**
   * Represents the `insetpen` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}, {@linkcode V.stroke stroke}
   */
  public static readonly insetpen: XName = XNamespace.none.getName('insetpen');

  /**
   * Represents the `insetpenok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly insetpenok: XName =
    XNamespace.none.getName('insetpenok');

  /**
   * Represents the `integer` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}
   */
  public static readonly integer: XName = XNamespace.none.getName('integer');

  /**
   * Represents the `intensity` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticGlowDiffused artisticGlowDiffused}, {@linkcode A14.artisticPaintStrokes artisticPaintStrokes}
   */
  public static readonly intensity: XName =
    XNamespace.none.getName('intensity');

  /**
   * Represents the `intermediate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly intermediate: XName =
    XNamespace.none.getName('intermediate');

  /**
   * Represents the `interpolation` XML name.
   */
  public static readonly interpolation: XName =
    XNamespace.none.getName('interpolation');

  /**
   * Represents the `interval` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly interval: XName = XNamespace.none.getName('interval');

  /**
   * Represents the `intervalClosed` XML name.
   */
  public static readonly intervalClosed: XName =
    XNamespace.none.getName('intervalClosed');

  /**
   * Represents the `invalEndChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.kinsoku kinsoku}
   */
  public static readonly invalEndChars: XName =
    XNamespace.none.getName('invalEndChars');

  /**
   * Represents the `invalid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly invalid: XName = XNamespace.none.getName('invalid');

  /**
   * Represents the `invalidateContentOnDrop` XML name.
   */
  public static readonly invalidateContentOnDrop: XName =
    XNamespace.none.getName('invalidateContentOnDrop');

  /**
   * Represents the `invalidUrl` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}
   */
  public static readonly invalidUrl: XName =
    XNamespace.none.getName('invalidUrl');

  /**
   * Represents the `invalStChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.kinsoku kinsoku}
   */
  public static readonly invalStChars: XName =
    XNamespace.none.getName('invalStChars');

  /**
   * Represents the `invertible` XML name.
   */
  public static readonly invertible: XName =
    XNamespace.none.getName('invertible');

  /**
   * Represents the `invx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly invx: XName = XNamespace.none.getName('invx');

  /**
   * Represents the `invX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P15.prstTrans prstTrans}
   */
  public static readonly invX_: XName = XNamespace.none.getName('invX');

  /**
   * Represents the `invy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly invy: XName = XNamespace.none.getName('invy');

  /**
   * Represents the `invY` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P15.prstTrans prstTrans}
   */
  public static readonly invY_: XName = XNamespace.none.getName('invY');

  /**
   * Represents the `isActiveX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.objectPr objectPr}
   */
  public static readonly isActiveX: XName =
    XNamespace.none.getName('isActiveX');

  /**
   * Represents the `isComment` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.cNvContentPartPr cNvContentPartPr}, {@linkcode P14.cNvContentPartPr cNvContentPartPr}, {@linkcode W14.cNvContentPartPr cNvContentPartPr}
   */
  public static readonly isComment: XName =
    XNamespace.none.getName('isComment');

  /**
   * Represents the `isContent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.prism prism}
   */
  public static readonly isContent: XName =
    XNamespace.none.getName('isContent');

  /**
   * Represents the `isCountDistinct` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.dataField dataField}
   */
  public static readonly isCountDistinct: XName =
    XNamespace.none.getName('isCountDistinct');

  /**
   * Represents the `isDefinitive` XML name.
   */
  public static readonly isDefinitive: XName =
    XNamespace.none.getName('isDefinitive');

  /**
   * Represents the `isInverted` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.prism prism}
   */
  public static readonly isInverted: XName =
    XNamespace.none.getName('isInverted');

  /**
   * Represents the `isLegacyGroup` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.nonVisualGroupProps nonVisualGroupProps}
   */
  public static readonly isLegacyGroup: XName =
    XNamespace.none.getName('isLegacyGroup');

  /**
   * Represents the `isNarration` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.audio audio}
   */
  public static readonly isNarration: XName =
    XNamespace.none.getName('isNarration');

  /**
   * Represents the `isPhoto` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.nvPr nvPr}, {@linkcode P14.nvPr nvPr}
   */
  public static readonly isPhoto: XName = XNamespace.none.getName('isPhoto');

  /**
   * Represents the `issignatureline` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly issignatureline: XName =
    XNamespace.none.getName('issignatureline');

  /**
   * Represents the `isSignatureLine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly isSignatureLine_: XName =
    XNamespace.none.getName('isSignatureLine');

  /**
   * Represents the `item` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageField pageField}, {@linkcode X.tpl tpl}
   */
  public static readonly item: XName = XNamespace.none.getName('item');

  /**
   * Represents the `itemHeight` XML name.
   */
  public static readonly itemHeight: XName =
    XNamespace.none.getName('itemHeight');

  /**
   * Represents the `itemPageCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly itemPageCount: XName =
    XNamespace.none.getName('itemPageCount');

  /**
   * Represents the `itemPrintTitles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly itemPrintTitles: XName =
    XNamespace.none.getName('itemPrintTitles');

  /**
   * Represents the `itemSize` XML name.
   */
  public static readonly itemSize: XName = XNamespace.none.getName('itemSize');

  /**
   * Represents the `itemWidth` XML name.
   */
  public static readonly itemWidth: XName =
    XNamespace.none.getName('itemWidth');

  /**
   * Represents the `iterate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly iterate: XName = XNamespace.none.getName('iterate');

  /**
   * Represents the `iterateCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly iterateCount: XName =
    XNamespace.none.getName('iterateCount');

  /**
   * Represents the `iterateDelta` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly iterateDelta: XName =
    XNamespace.none.getName('iterateDelta');

  /**
   * Represents the `joinstyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly joinstyle: XName =
    XNamespace.none.getName('joinstyle');

  /**
   * Represents the `justifyLastLine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly justifyLastLine: XName =
    XNamespace.none.getName('justifyLastLine');

  /**
   * Represents the `justLastX` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly justLastX: XName =
    XNamespace.none.getName('justLastX');

  /**
   * Represents the `keepAlive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly keepAlive: XName =
    XNamespace.none.getName('keepAlive');

  /**
   * Represents the `keepChangeHistory` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly keepChangeHistory: XName =
    XNamespace.none.getName('keepChangeHistory');

  /**
   * Represents the `kern` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly kern: XName = XNamespace.none.getName('kern');

  /**
   * Represents the `keyAttribute` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly keyAttribute: XName =
    XNamespace.none.getName('keyAttribute');

  /**
   * Represents the `keytip` XML name.
   */
  public static readonly keytip: XName = XNamespace.none.getName('keytip');

  /**
   * Represents the `kumimoji` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly kumimoji: XName = XNamespace.none.getName('kumimoji');

  /**
   * Represents the `kx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}, {@linkcode A.xfrm xfrm}
   */
  public static readonly kx: XName = XNamespace.none.getName('kx');

  /**
   * Represents the `ky` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}, {@linkcode A.xfrm xfrm}
   */
  public static readonly ky: XName = XNamespace.none.getName('ky');

  /**
   * Represents the `l` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.fillRect fillRect}, {@linkcode A.fillToRect fillToRect}, {@linkcode A.rect rect}, {@linkcode A.srcRect srcRect}, {@linkcode A.tileRect tileRect}, {@linkcode A14.backgroundRemoval backgroundRemoval}, {@linkcode P.hsl hsl}, {@linkcode WP.effectExtent effectExtent}, {@linkcode X.c c}
   */
  public static readonly l: XName = XNamespace.none.getName('l');

  /**
   * Represents the `label` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly label: XName = XNamespace.none.getName('label');

  /**
   * Represents the `labelOnly` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly labelOnly: XName =
    XNamespace.none.getName('labelOnly');

  /**
   * Represents the `lang` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}, {@linkcode P.kinsoku kinsoku}
   */
  public static readonly lang: XName = XNamespace.none.getName('lang');

  /**
   * Represents the `last` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly last: XName = XNamespace.none.getName('last');

  /**
   * Represents the `lastClr` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.sysClr sysClr}
   */
  public static readonly lastClr: XName = XNamespace.none.getName('lastClr');

  /**
   * Represents the `lastCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}
   */
  public static readonly lastCol: XName = XNamespace.none.getName('lastCol');

  /**
   * Represents the `lastEdited` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileVersion fileVersion}
   */
  public static readonly lastEdited: XName =
    XNamespace.none.getName('lastEdited');

  /**
   * Represents the `lastGuid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly lastGuid: XName = XNamespace.none.getName('lastGuid');

  /**
   * Represents the `lastIdx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cmAuthor cmAuthor}
   */
  public static readonly lastIdx: XName = XNamespace.none.getName('lastIdx');

  /**
   * Represents the `lastRefreshVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly lastRefreshVersion: XName =
    XNamespace.none.getName('lastRefreshVersion');

  /**
   * Represents the `lastRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tblPr tblPr}
   */
  public static readonly lastRow: XName = XNamespace.none.getName('lastRow');

  /**
   * Represents the `lastView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.viewPr viewPr}
   */
  public static readonly lastView: XName = XNamespace.none.getName('lastView');

  /**
   * Represents the `lat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.rot rot}
   */
  public static readonly lat: XName = XNamespace.none.getName('lat');

  /**
   * Represents the `latinLnBrk` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}
   */
  public static readonly latinLnBrk: XName =
    XNamespace.none.getName('latinLnBrk');

  /**
   * Represents the `layout` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.photoAlbum photoAlbum}
   */
  public static readonly layout: XName = XNamespace.none.getName('layout');

  /**
   * Represents the `layoutChildren` XML name.
   */
  public static readonly layoutChildren: XName =
    XNamespace.none.getName('layoutChildren');

  /**
   * Represents the `layoutId` XML name.
   */
  public static readonly layoutId: XName = XNamespace.none.getName('layoutId');

  /**
   * Represents the `layoutInCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}
   */
  public static readonly layoutInCell: XName =
    XNamespace.none.getName('layoutInCell');

  /**
   * Represents the `lBound` XML name.
   */
  public static readonly lBound: XName = XNamespace.none.getName('lBound');

  /**
   * Represents the `leadZeros` XML name.
   */
  public static readonly leadZeros: XName =
    XNamespace.none.getName('leadZeros');

  /**
   * Represents the `left` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.gradientFill gradientFill}, {@linkcode X.pageMargins pageMargins}
   */
  public static readonly left: XName = XNamespace.none.getName('left');

  /**
   * Represents the `leftLabels` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataConsolidate dataConsolidate}
   */
  public static readonly leftLabels: XName =
    XNamespace.none.getName('leftLabels');

  /**
   * Represents the `len` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.headEnd headEnd}, {@linkcode A.tailEnd tailEnd}
   */
  public static readonly len: XName = XNamespace.none.getName('len');

  /**
   * Represents the `length` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}, {@linkcode X.rfmt rfmt}
   */
  public static readonly length_: XName = XNamespace.none.getName('length');

  /**
   * Represents the `lengthspecified` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly lengthspecified: XName =
    XNamespace.none.getName('lengthspecified');

  /**
   * Represents the `level` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.members members}, {@linkcode X.mp mp}, {@linkcode X14.slicer slicer}, {@linkcode X15.timeline timeline}
   */
  public static readonly level: XName = XNamespace.none.getName('level');

  /**
   * Represents the `lfe` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lfe: XName = XNamespace.none.getName('lfe');

  /**
   * Represents the `lff` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lff: XName = XNamespace.none.getName('lff');

  /**
   * Represents the `lfo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lfo: XName = XNamespace.none.getName('lfo');

  /**
   * Represents the `lhe` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lhe: XName = XNamespace.none.getName('lhe');

  /**
   * Represents the `lhf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lhf: XName = XNamespace.none.getName('lhf');

  /**
   * Represents the `lho` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly lho: XName = XNamespace.none.getName('lho');

  /**
   * Represents the `lightface` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightface: XName =
    XNamespace.none.getName('lightface');

  /**
   * Represents the `lightharsh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightharsh: XName =
    XNamespace.none.getName('lightharsh');

  /**
   * Represents the `lightharsh2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightharsh2: XName =
    XNamespace.none.getName('lightharsh2');

  /**
   * Represents the `lightlevel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightlevel: XName =
    XNamespace.none.getName('lightlevel');

  /**
   * Represents the `lightlevel2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightlevel2: XName =
    XNamespace.none.getName('lightlevel2');

  /**
   * Represents the `lightposition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightposition: XName =
    XNamespace.none.getName('lightposition');

  /**
   * Represents the `lightposition2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lightposition2: XName =
    XNamespace.none.getName('lightposition2');

  /**
   * Represents the `likes` XML name.
   */
  public static readonly likes: XName = XNamespace.none.getName('likes');

  /**
   * Represents the `lim` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.miter miter}
   */
  public static readonly lim: XName = XNamespace.none.getName('lim');

  /**
   * Represents the `limo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly limo: XName = XNamespace.none.getName('limo');

  /**
   * Represents the `linestyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly linestyle: XName =
    XNamespace.none.getName('linestyle');

  /**
   * Represents the `lineWeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly lineWeight: XName =
    XNamespace.none.getName('lineWeight');

  /**
   * Represents the `link` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataConsolidate dataConsolidate}, {@linkcode X.oleObject oleObject}
   */
  public static readonly link: XName = XNamespace.none.getName('link');

  /**
   * Represents the `linkedCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}
   */
  public static readonly linkedCell: XName =
    XNamespace.none.getName('linkedCell');

  /**
   * Represents the `linkTarget` XML name.
   */
  public static readonly linkTarget: XName =
    XNamespace.none.getName('linkTarget');

  /**
   * Represents the `linkType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.objectPr objectPr}
   */
  public static readonly linkType: XName = XNamespace.none.getName('linkType');

  /**
   * Represents the `lIns` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly lIns: XName = XNamespace.none.getName('lIns');

  /**
   * Represents the `listDataValidation` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly listDataValidation: XName =
    XNamespace.none.getName('listDataValidation');

  /**
   * Represents the `listFillRange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}
   */
  public static readonly listFillRange: XName =
    XNamespace.none.getName('listFillRange');

  /**
   * Represents the `lkTxEntry` XML name.
   */
  public static readonly lkTxEntry: XName =
    XNamespace.none.getName('lkTxEntry');

  /**
   * Represents the `lnSpcReduction` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.normAutofit normAutofit}
   */
  public static readonly lnSpcReduction: XName =
    XNamespace.none.getName('lnSpcReduction');

  /**
   * Represents the `loadImage` XML name.
   */
  public static readonly loadImage: XName =
    XNamespace.none.getName('loadImage');

  /**
   * Represents the `local` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly local: XName = XNamespace.none.getName('local');

  /**
   * Represents the `localConnection` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly localConnection: XName =
    XNamespace.none.getName('localConnection');

  /**
   * Represents the `localRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly localRefresh: XName =
    XNamespace.none.getName('localRefresh');

  /**
   * Represents the `localSheetId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly localSheetId: XName =
    XNamespace.none.getName('localSheetId');

  /**
   * Represents the `loCatId` XML name.
   */
  public static readonly loCatId: XName = XNamespace.none.getName('loCatId');

  /**
   * Represents the `location` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.hyperlink hyperlink}
   */
  public static readonly location: XName = XNamespace.none.getName('location');

  /**
   * Represents the `locked` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}, {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}, {@linkcode X.protection protection}, {@linkcode X.scenario scenario}
   */
  public static readonly locked: XName = XNamespace.none.getName('locked');

  /**
   * Represents the `lockedPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicer slicer}
   */
  public static readonly lockedPosition: XName =
    XNamespace.none.getName('lockedPosition');

  /**
   * Represents the `lockRevision` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly lockRevision: XName =
    XNamespace.none.getName('lockRevision');

  /**
   * Represents the `lockrotationcenter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly lockrotationcenter: XName =
    XNamespace.none.getName('lockrotationcenter');

  /**
   * Represents the `lockStructure` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly lockStructure: XName =
    XNamespace.none.getName('lockStructure');

  /**
   * Represents the `lockText` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly lockText: XName = XNamespace.none.getName('lockText');

  /**
   * Represents the `lockWindows` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly lockWindows: XName =
    XNamespace.none.getName('lockWindows');

  /**
   * Represents the `lon` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.rot rot}
   */
  public static readonly lon: XName = XNamespace.none.getName('lon');

  /**
   * Represents the `longFileNames` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishing webPublishing}
   */
  public static readonly longFileNames: XName =
    XNamespace.none.getName('longFileNames');

  /**
   * Represents the `longText` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly longText: XName = XNamespace.none.getName('longText');

  /**
   * Represents the `loop` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.showPr showPr}, {@linkcode P.stSnd stSnd}
   */
  public static readonly loop: XName = XNamespace.none.getName('loop');

  /**
   * Represents the `loTypeId` XML name.
   */
  public static readonly loTypeId: XName = XNamespace.none.getName('loTypeId');

  /**
   * Represents the `low` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly low: XName = XNamespace.none.getName('low');

  /**
   * Represents the `lowestEdited` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileVersion fileVersion}
   */
  public static readonly lowestEdited: XName =
    XNamespace.none.getName('lowestEdited');

  /**
   * Represents the `lum` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hsl hsl}, {@linkcode A.hslClr hslClr}
   */
  public static readonly lum: XName = XNamespace.none.getName('lum');

  /**
   * Represents the `lvl` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}, {@linkcode P.oleChartEl oleChartEl}, {@linkcode P.tmpl tmpl}
   */
  public static readonly lvl: XName = XNamespace.none.getName('lvl');

  /**
   * Represents the `m` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.item item}
   */
  public static readonly m: XName = XNamespace.none.getName('m');

  /**
   * Represents the `macro` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly macro: XName = XNamespace.none.getName('macro');

  /**
   * Represents the `majorUnit` XML name.
   */
  public static readonly majorUnit: XName =
    XNamespace.none.getName('majorUnit');

  /**
   * Represents the `man` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.brk brk}
   */
  public static readonly man: XName = XNamespace.none.getName('man');

  /**
   * Represents the `manualBreakCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.colBreaks colBreaks}, {@linkcode X.rowBreaks rowBreaks}
   */
  public static readonly manualBreakCount: XName =
    XNamespace.none.getName('manualBreakCount');

  /**
   * Represents the `manualMax` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly manualMax: XName =
    XNamespace.none.getName('manualMax');

  /**
   * Represents the `manualMin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly manualMin: XName =
    XNamespace.none.getName('manualMin');

  /**
   * Represents the `manufacturer` XML name.
   */
  public static readonly manufacturer: XName =
    XNamespace.none.getName('manufacturer');

  /**
   * Represents the `map` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly map: XName = XNamespace.none.getName('map');

  /**
   * Represents the `mapId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xmlColumnPr xmlColumnPr}, {@linkcode X.xmlPr xmlPr}
   */
  public static readonly mapId: XName = XNamespace.none.getName('mapId');

  /**
   * Represents the `mappingCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}
   */
  public static readonly mappingCount: XName =
    XNamespace.none.getName('mappingCount');

  /**
   * Represents the `mappingRef` XML name.
   */
  public static readonly mappingRef: XName =
    XNamespace.none.getName('mappingRef');

  /**
   * Represents the `marB` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tcPr tcPr}
   */
  public static readonly marB: XName = XNamespace.none.getName('marB');

  /**
   * Represents the `markers` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly markers: XName = XNamespace.none.getName('markers');

  /**
   * Represents the `marL` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}, {@linkcode A.tcPr tcPr}
   */
  public static readonly marL: XName = XNamespace.none.getName('marL');

  /**
   * Represents the `marR` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}, {@linkcode A.tcPr tcPr}
   */
  public static readonly marR: XName = XNamespace.none.getName('marR');

  /**
   * Represents the `marT` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tcPr tcPr}
   */
  public static readonly marT: XName = XNamespace.none.getName('marT');

  /**
   * Represents the `masterRel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly masterRel: XName =
    XNamespace.none.getName('masterRel');

  /**
   * Represents the `matchingName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sldLayout sldLayout}
   */
  public static readonly matchingName: XName =
    XNamespace.none.getName('matchingName');

  /**
   * Represents the `mathML` XML name.
   */
  public static readonly mathML: XName = XNamespace.none.getName('mathML');

  /**
   * Represents the `mathStruct` XML name.
   */
  public static readonly mathStruct: XName =
    XNamespace.none.getName('mathStruct');

  /**
   * Represents the `mathSymbol` XML name.
   */
  public static readonly mathSymbol: XName =
    XNamespace.none.getName('mathSymbol');

  /**
   * Represents the `matrix` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.skew skew}, {@linkcode V.shadow shadow}
   */
  public static readonly matrix: XName = XNamespace.none.getName('matrix');

  /**
   * Represents the `max` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.brk brk}, {@linkcode X.col col}, {@linkcode X.pivotSelection pivotSelection}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly max: XName = XNamespace.none.getName('max');

  /**
   * Represents the `maxAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly maxAng: XName = XNamespace.none.getName('maxAng');

  /**
   * Represents the `maxAxisType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly maxAxisType: XName =
    XNamespace.none.getName('maxAxisType');

  /**
   * Represents the `maxDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly maxDate: XName = XNamespace.none.getName('maxDate');

  /**
   * Represents the `maximized` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly maximized: XName =
    XNamespace.none.getName('maximized');

  /**
   * Represents the `maxLength` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataBar dataBar}, {@linkcode X14.dataBar dataBar}
   */
  public static readonly maxLength: XName =
    XNamespace.none.getName('maxLength');

  /**
   * Represents the `maxR` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly maxR: XName = XNamespace.none.getName('maxR');

  /**
   * Represents the `maxRank` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.set set}
   */
  public static readonly maxRank: XName = XNamespace.none.getName('maxRank');

  /**
   * Represents the `maxRId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.header header}
   */
  public static readonly maxRId: XName = XNamespace.none.getName('maxRId');

  /**
   * Represents the `maxSheetId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.header header}
   */
  public static readonly maxSheetId: XName =
    XNamespace.none.getName('maxSheetId');

  /**
   * Represents the `maxSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly maxSubtotal: XName =
    XNamespace.none.getName('maxSubtotal');

  /**
   * Represents the `maxVal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dynamicFilter dynamicFilter}
   */
  public static readonly maxVal: XName = XNamespace.none.getName('maxVal');

  /**
   * Represents the `maxValIso` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dynamicFilter dynamicFilter}
   */
  public static readonly maxValIso: XName =
    XNamespace.none.getName('maxValIso');

  /**
   * Represents the `maxValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly maxValue: XName = XNamespace.none.getName('maxValue');

  /**
   * Represents the `maxX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly maxX: XName = XNamespace.none.getName('maxX');

  /**
   * Represents the `maxY` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly maxY: XName = XNamespace.none.getName('maxY');

  /**
   * Represents the `mdx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedMember calculatedMember}, {@linkcode X.query query}
   */
  public static readonly mdx: XName = XNamespace.none.getName('mdx');

  /**
   * Represents the `mdxLong` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.calculatedMember calculatedMember}
   */
  public static readonly mdxLong: XName = XNamespace.none.getName('mdxLong');

  /**
   * Represents the `mdxSubqueries` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly mdxSubqueries: XName =
    XNamespace.none.getName('mdxSubqueries');

  /**
   * Represents the `meanLine` XML name.
   */
  public static readonly meanLine: XName = XNamespace.none.getName('meanLine');

  /**
   * Represents the `meanMarker` XML name.
   */
  public static readonly meanMarker: XName =
    XNamespace.none.getName('meanMarker');

  /**
   * Represents the `measure` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.dimension dimension}, {@linkcode X15.calculatedMember calculatedMember}
   */
  public static readonly measure: XName = XNamespace.none.getName('measure');

  /**
   * Represents the `measureFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly measureFilter: XName =
    XNamespace.none.getName('measureFilter');

  /**
   * Represents the `measureGroup` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.kpi kpi}, {@linkcode X.map map}, {@linkcode X15.calculatedMember calculatedMember}
   */
  public static readonly measureGroup: XName =
    XNamespace.none.getName('measureGroup');

  /**
   * Represents the `measures` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly measures: XName = XNamespace.none.getName('measures');

  /**
   * Represents the `measuresSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.cacheHierarchy cacheHierarchy}
   */
  public static readonly measuresSet: XName =
    XNamespace.none.getName('measuresSet');

  /**
   * Represents the `mediaType` XML name.
   */
  public static readonly mediaType: XName =
    XNamespace.none.getName('mediaType');

  /**
   * Represents the `memberName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedMember calculatedMember}
   */
  public static readonly memberName: XName =
    XNamespace.none.getName('memberName');

  /**
   * Represents the `memberPropertyField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}
   */
  public static readonly memberPropertyField: XName = XNamespace.none.getName(
    'memberPropertyField'
  );

  /**
   * Represents the `memberValueDatatype` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly memberValueDatatype: XName = XNamespace.none.getName(
    'memberValueDatatype'
  );

  /**
   * Represents the `mentionId` XML name.
   */
  public static readonly mentionId: XName =
    XNamespace.none.getName('mentionId');

  /**
   * Represents the `mentionpersonId` XML name.
   */
  public static readonly mentionpersonId: XName =
    XNamespace.none.getName('mentionpersonId');

  /**
   * Represents the `merge` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly merge: XName = XNamespace.none.getName('merge');

  /**
   * Represents the `mergeCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly mergeCell: XName =
    XNamespace.none.getName('mergeCell');

  /**
   * Represents the `mergeInterval` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly mergeInterval: XName =
    XNamespace.none.getName('mergeInterval');

  /**
   * Represents the `mergeItem` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly mergeItem: XName =
    XNamespace.none.getName('mergeItem');

  /**
   * Represents the `metal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly metal: XName = XNamespace.none.getName('metal');

  /**
   * Represents the `meth` XML name.
   */
  public static readonly meth: XName = XNamespace.none.getName('meth');

  /**
   * Represents the `method` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly method: XName = XNamespace.none.getName('method');

  /**
   * Represents the `midline` XML name.
   */
  public static readonly midline: XName = XNamespace.none.getName('midline');

  /**
   * Represents the `min` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.brk brk}, {@linkcode X.col col}, {@linkcode X.pivotSelection pivotSelection}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly min: XName = XNamespace.none.getName('min');

  /**
   * Represents the `minAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly minAng: XName = XNamespace.none.getName('minAng');

  /**
   * Represents the `minAxisType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly minAxisType: XName =
    XNamespace.none.getName('minAxisType');

  /**
   * Represents the `minDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly minDate: XName = XNamespace.none.getName('minDate');

  /**
   * Represents the `minimalRefreshVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly minimalRefreshVersion: XName = XNamespace.none.getName(
    'minimalRefreshVersion'
  );

  /**
   * Represents the `minimized` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly minimized: XName =
    XNamespace.none.getName('minimized');

  /**
   * Represents the `minimumVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly minimumVersion: XName =
    XNamespace.none.getName('minimumVersion');

  /**
   * Represents the `minLength` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataBar dataBar}, {@linkcode X14.dataBar dataBar}
   */
  public static readonly minLength: XName =
    XNamespace.none.getName('minLength');

  /**
   * Represents the `minorUnit` XML name.
   */
  public static readonly minorUnit: XName =
    XNamespace.none.getName('minorUnit');

  /**
   * Represents the `minR` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahPolar ahPolar}
   */
  public static readonly minR: XName = XNamespace.none.getName('minR');

  /**
   * Represents the `minRefreshableVersion` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.pivotCacheDefinition pivotCacheDefinition}, {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly minRefreshableVersion: XName = XNamespace.none.getName(
    'minRefreshableVersion'
  );

  /**
   * Represents the `minRId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.header header}
   */
  public static readonly minRId: XName = XNamespace.none.getName('minRId');

  /**
   * Represents the `minSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly minSubtotal: XName =
    XNamespace.none.getName('minSubtotal');

  /**
   * Represents the `minSupportedVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly minSupportedVersion: XName = XNamespace.none.getName(
    'minSupportedVersion'
  );

  /**
   * Represents the `minusx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly minusx: XName = XNamespace.none.getName('minusx');

  /**
   * Represents the `minusy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly minusy: XName = XNamespace.none.getName('minusy');

  /**
   * Represents the `minute` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly minute: XName = XNamespace.none.getName('minute');

  /**
   * Represents the `minValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sharedItems sharedItems}
   */
  public static readonly minValue: XName = XNamespace.none.getName('minValue');

  /**
   * Represents the `minVer` XML name.
   */
  public static readonly minVer: XName = XNamespace.none.getName('minVer');

  /**
   * Represents the `minVersionLoad` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.dataModel dataModel}
   */
  public static readonly minVersionLoad: XName =
    XNamespace.none.getName('minVersionLoad');

  /**
   * Represents the `minX` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly minX: XName = XNamespace.none.getName('minX');

  /**
   * Represents the `minY` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ahXY ahXY}
   */
  public static readonly minY: XName = XNamespace.none.getName('minY');

  /**
   * Represents the `missingCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly missingCaption: XName =
    XNamespace.none.getName('missingCaption');

  /**
   * Represents the `missingItemsLimit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly missingItemsLimit: XName =
    XNamespace.none.getName('missingItemsLimit');

  /**
   * Represents the `miterlimit` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly miterlimit: XName =
    XNamespace.none.getName('miterlimit');

  /**
   * Represents the `mod` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.extLst extLst}, {@linkcode P14.extLst extLst}
   */
  public static readonly mod: XName = XNamespace.none.getName('mod');

  /**
   * Represents the `model` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.connection connection}
   */
  public static readonly model: XName = XNamespace.none.getName('model');

  /**
   * Represents the `modelId` XML name.
   */
  public static readonly modelId: XName = XNamespace.none.getName('modelId');

  /**
   * Represents the `mods` XML name.
   */
  public static readonly mods: XName = XNamespace.none.getName('mods');

  /**
   * Represents the `month` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly month: XName = XNamespace.none.getName('month');

  /**
   * Represents the `moveWith` XML name.
   */
  public static readonly moveWith: XName = XNamespace.none.getName('moveWith');

  /**
   * Represents the `moveWithCells` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.anchor anchor}
   */
  public static readonly moveWithCells: XName =
    XNamespace.none.getName('moveWithCells');

  /**
   * Represents the `movingMultiple` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.movingPeriodState movingPeriodState}
   */
  public static readonly movingMultiple: XName =
    XNamespace.none.getName('movingMultiple');

  /**
   * Represents the `movingPeriod` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.movingPeriodState movingPeriodState}
   */
  public static readonly movingPeriod: XName =
    XNamespace.none.getName('movingPeriod');

  /**
   * Represents the `mpFld` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly mpFld: XName = XNamespace.none.getName('mpFld');

  /**
   * Represents the `multiLine` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly multiLine: XName =
    XNamespace.none.getName('multiLine');

  /**
   * Represents the `multipleFieldFilters` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly multipleFieldFilters: XName = XNamespace.none.getName(
    'multipleFieldFilters'
  );

  /**
   * Represents the `multipleItemSelectionAllowed` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly multipleItemSelectionAllowed: XName =
    XNamespace.none.getName('multipleItemSelectionAllowed');

  /**
   * Represents the `multiSel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly multiSel: XName = XNamespace.none.getName('multiSel');

  /**
   * Represents the `mute` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cMediaNode cMediaNode}
   */
  public static readonly mute: XName = XNamespace.none.getName('mute');

  /**
   * Represents the `n` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.sx sx}, {@linkcode A.sy sy}, {@linkcode X.item item}, {@linkcode X.k k}, {@linkcode X.mdx mdx}, {@linkcode X.p p}, {@linkcode X14.i i}, {@linkcode X14.p p}, {@linkcode X14.selection selection}
   */
  public static readonly n: XName = XNamespace.none.getName('n');

  /**
   * Represents the `name` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrScheme clrScheme}, {@linkcode A.cNvPr cNvPr}, {@linkcode A.cont cont}, {@linkcode A.custClr custClr}, {@linkcode A.effectDag effectDag}, {@linkcode A.fmtScheme fmtScheme}, {@linkcode A.fontScheme fontScheme}, {@linkcode A.gd gd}, {@linkcode A.snd snd}, {@linkcode A.theme theme}, {@linkcode A.wavAudioFile wavAudioFile}, {@linkcode A14.cNvPr cNvPr}, {@linkcode P.cmAuthor cmAuthor}, {@linkcode P.cNvPr cNvPr}, {@linkcode P.control control}, {@linkcode P.cSld cSld}, {@linkcode P.custShow custShow}, {@linkcode P.oleObj oleObj}, {@linkcode P.snd snd}, {@linkcode P.sndTgt sndTgt}, {@linkcode P.tag tag}, {@linkcode P14.bmk bmk}, {@linkcode P14.cNvPr cNvPr}, {@linkcode P14.section section}, {@linkcode P15.guide guide}, {@linkcode W14.cNvPr cNvPr}, {@linkcode WP.docPr docPr}, {@linkcode WPG.cNvPr cNvPr}, {@linkcode WPS.cNvPr cNvPr}, {@linkcode X.cacheField cacheField}, {@linkcode X.calculatedMember calculatedMember}, {@linkcode X.cellStyle cellStyle}, {@linkcode X.connection connection}, {@linkcode X.control control}, {@linkcode X.customPr customPr}, {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.dataField dataField}, {@linkcode X.dataRef dataRef}, {@linkcode X.ddeItem ddeItem}, {@linkcode X.definedName definedName}, {@linkcode X.deletedField deletedField}, {@linkcode X.dimension dimension}, {@linkcode X.filter filter}, {@linkcode X.functionGroup functionGroup}, {@linkcode X.futureMetadata futureMetadata}, {@linkcode X.group group}, {@linkcode X.measureGroup measureGroup}, {@linkcode X.member member}, {@linkcode X.metadataType metadataType}, {@linkcode X.mp mp}, {@linkcode X.oleItem oleItem}, {@linkcode X.pageField pageField}, {@linkcode X.pageItem pageItem}, {@linkcode X.parameter parameter}, {@linkcode X.pivotField pivotField}, {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.queryTable queryTable}, {@linkcode X.queryTableField queryTableField}, {@linkcode X.rangeSet rangeSet}, {@linkcode X.rdn rdn}, {@linkcode X.ris ris}, {@linkcode X.scenario scenario}, {@linkcode X.sheet sheet}, {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}, {@linkcode X.tableStyle tableStyle}, {@linkcode X.tableStyleInfo tableStyleInfo}, {@linkcode X.userInfo userInfo}, {@linkcode X.worksheetSource worksheetSource}, {@linkcode X14.definedName definedName}, {@linkcode X14.oleItem oleItem}, {@linkcode X14.pivotTable pivotTable}, {@linkcode X14.protectedRange protectedRange}, {@linkcode X14.slicer slicer}, {@linkcode X14.slicerCacheDefinition slicerCacheDefinition}, {@linkcode X14.slicerStyle slicerStyle}, {@linkcode X14.sourceConnection sourceConnection}, {@linkcode X15.activeTabTopLevelEntity activeTabTopLevelEntity}, {@linkcode X15.cachedUniqueName cachedUniqueName}, {@linkcode X15.dbTable dbTable}, {@linkcode X15.modelTable modelTable}, {@linkcode X15.pivotTable pivotTable}, {@linkcode X15.timeline timeline}, {@linkcode X15.timelineCacheDefinition timelineCacheDefinition}, {@linkcode X15.timelineStyle timelineStyle}
   */
  public static readonly name_: XName = XNamespace.none.getName('name');

  /**
   * Represents the `Name` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly Name_: XName = XNamespace.none.getName('Name');

  /**
   * Represents the `nameLen` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly nameLen: XName = XNamespace.none.getName('nameLen');

  /**
   * Represents the `Namespace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Schema Schema}
   */
  public static readonly Namespace: XName =
    XNamespace.none.getName('Namespace');

  /**
   * Represents the `nd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.i i}
   */
  public static readonly nd: XName = XNamespace.none.getName('nd');

  /**
   * Represents the `negative` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly negative: XName = XNamespace.none.getName('negative');

  /**
   * Represents the `negativeBarBorderColorSameAsPositive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly negativeBarBorderColorSameAsPositive: XName =
    XNamespace.none.getName('negativeBarBorderColorSameAsPositive');

  /**
   * Represents the `negativeBarColorSameAsPositive` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataBar dataBar}
   */
  public static readonly negativeBarColorSameAsPositive: XName =
    XNamespace.none.getName('negativeBarColorSameAsPositive');

  /**
   * Represents the `new` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.entry entry}, {@linkcode X.connection connection}
   */
  public static readonly new: XName = XNamespace.none.getName('new');

  /**
   * Represents the `newLength` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly newLength: XName =
    XNamespace.none.getName('newLength');

  /**
   * Represents the `newName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rsnm rsnm}
   */
  public static readonly newName: XName = XNamespace.none.getName('newName');

  /**
   * Represents the `newVal` XML name.
   */
  public static readonly newVal: XName = XNamespace.none.getName('newVal');

  /**
   * Represents the `nextAc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.seq seq}
   */
  public static readonly nextAc: XName = XNamespace.none.getName('nextAc');

  /**
   * Represents the `nextId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly nextId: XName = XNamespace.none.getName('nextId');

  /**
   * Represents the `nf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly nf: XName = XNamespace.none.getName('nf');

  /**
   * Represents the `noAdjustHandles` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noAdjustHandles: XName =
    XNamespace.none.getName('noAdjustHandles');

  /**
   * Represents the `noChangeArrowheads` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noChangeArrowheads: XName =
    XNamespace.none.getName('noChangeArrowheads');

  /**
   * Represents the `noChangeAspect` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.graphicFrameLocks graphicFrameLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noChangeAspect: XName =
    XNamespace.none.getName('noChangeAspect');

  /**
   * Represents the `noChangeShapeType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noChangeShapeType: XName =
    XNamespace.none.getName('noChangeShapeType');

  /**
   * Represents the `noCrop` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.picLocks picLocks}
   */
  public static readonly noCrop: XName = XNamespace.none.getName('noCrop');

  /**
   * Represents the `node-number` XML name.
   */
  public static readonly node_number: XName =
    XNamespace.none.getName('node-number');

  /**
   * Represents the `nodePh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly nodePh: XName = XNamespace.none.getName('nodePh');

  /**
   * Represents the `nodeType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly nodeType: XName = XNamespace.none.getName('nodeType');

  /**
   * Represents the `noDrilldown` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.graphicFrameLocks graphicFrameLocks}
   */
  public static readonly noDrilldown: XName =
    XNamespace.none.getName('noDrilldown');

  /**
   * Represents the `noEditPoints` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noEditPoints: XName =
    XNamespace.none.getName('noEditPoints');

  /**
   * Represents the `noGrp` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.graphicFrameLocks graphicFrameLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noGrp: XName = XNamespace.none.getName('noGrp');

  /**
   * Represents the `noMove` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.graphicFrameLocks graphicFrameLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noMove: XName = XNamespace.none.getName('noMove');

  /**
   * Represents the `nonAutoSortDefault` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly nonAutoSortDefault: XName =
    XNamespace.none.getName('nonAutoSortDefault');

  /**
   * Represents the `nonoutliers` XML name.
   */
  public static readonly nonoutliers: XName =
    XNamespace.none.getName('nonoutliers');

  /**
   * Represents the `noProof` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly noProof: XName = XNamespace.none.getName('noProof');

  /**
   * Represents the `noResize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.graphicFrameLocks graphicFrameLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noResize: XName = XNamespace.none.getName('noResize');

  /**
   * Represents the `normalEastAsianFlow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WPS.wsp wsp}
   */
  public static readonly normalEastAsianFlow: XName = XNamespace.none.getName(
    'normalEastAsianFlow'
  );

  /**
   * Represents the `normalizeH` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly normalizeH: XName =
    XNamespace.none.getName('normalizeH');

  /**
   * Represents the `noRot` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noRot: XName = XNamespace.none.getName('noRot');

  /**
   * Represents the `noSelect` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cxnSpLocks cxnSpLocks}, {@linkcode A.graphicFrameLocks graphicFrameLocks}, {@linkcode A.grpSpLocks grpSpLocks}, {@linkcode A.picLocks picLocks}, {@linkcode A.spLocks spLocks}, {@linkcode A14.cpLocks cpLocks}
   */
  public static readonly noSelect: XName = XNamespace.none.getName('noSelect');

  /**
   * Represents the `noTextEdit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.spLocks spLocks}
   */
  public static readonly noTextEdit: XName =
    XNamespace.none.getName('noTextEdit');

  /**
   * Represents the `noThreeD` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly noThreeD: XName = XNamespace.none.getName('noThreeD');

  /**
   * Represents the `noThreeD2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly noThreeD2: XName =
    XNamespace.none.getName('noThreeD2');

  /**
   * Represents the `noUngrp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.grpSpLocks grpSpLocks}
   */
  public static readonly noUngrp: XName = XNamespace.none.getName('noUngrp');

  /**
   * Represents the `noWrap` XML name.
   */
  public static readonly noWrap: XName = XNamespace.none.getName('noWrap');

  /**
   * Represents the `np` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.k k}, {@linkcode X.p p}
   */
  public static readonly np: XName = XNamespace.none.getName('np');

  /**
   * Represents the `ns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ms ms}
   */
  public static readonly ns: XName = XNamespace.none.getName('ns');

  /**
   * Represents the `numberFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.calculatedMember calculatedMember}
   */
  public static readonly numberFormat: XName =
    XNamespace.none.getName('numberFormat');

  /**
   * Represents the `numberOfShades` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticCutout artisticCutout}
   */
  public static readonly numberOfShades: XName =
    XNamespace.none.getName('numberOfShades');

  /**
   * Represents the `numberStoredAsText` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly numberStoredAsText: XName =
    XNamespace.none.getName('numberStoredAsText');

  /**
   * Represents the `numCol` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly numCol: XName = XNamespace.none.getName('numCol');

  /**
   * Represents the `numFmtId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.dataField dataField}, {@linkcode X.inputCells inputCells}, {@linkcode X.numFmt numFmt}, {@linkcode X.pivotField pivotField}, {@linkcode X.rcc rcc}, {@linkcode X.xf xf}
   */
  public static readonly numFmtId: XName = XNamespace.none.getName('numFmtId');

  /**
   * Represents the `numSld` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cMediaNode cMediaNode}
   */
  public static readonly numSld: XName = XNamespace.none.getName('numSld');

  /**
   * Represents the `o` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ms ms}
   */
  public static readonly o: XName = XNamespace.none.getName('o');

  /**
   * Represents the `objectId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.objectPr objectPr}
   */
  public static readonly objectId: XName = XNamespace.none.getName('objectId');

  /**
   * Represents the `ObjectID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly ObjectID_: XName = XNamespace.none.getName('ObjectID');

  /**
   * Represents the `objects` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly objects: XName = XNamespace.none.getName('objects');

  /**
   * Represents the `objectType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly objectType: XName =
    XNamespace.none.getName('objectType');

  /**
   * Represents the `ObjectType` XML name.
   */
  public static readonly ObjectType_: XName =
    XNamespace.none.getName('ObjectType');

  /**
   * Represents the `objId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.nullEvt nullEvt}, {@linkcode P14.pauseEvt pauseEvt}, {@linkcode P14.playEvt playEvt}, {@linkcode P14.resumeEvt resumeEvt}, {@linkcode P14.seekEvt seekEvt}, {@linkcode P14.stopEvt stopEvt}, {@linkcode P14.triggerEvt triggerEvt}
   */
  public static readonly objId: XName = XNamespace.none.getName('objId');

  /**
   * Represents the `obscured` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.shadow shadow}
   */
  public static readonly obscured: XName = XNamespace.none.getName('obscured');

  /**
   * Represents the `odcFile` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly odcFile: XName = XNamespace.none.getName('odcFile');

  /**
   * Represents the `odxf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}
   */
  public static readonly odxf: XName = XNamespace.none.getName('odxf');

  /**
   * Represents the `oEmbedUrl` XML name.
   */
  public static readonly oEmbedUrl: XName =
    XNamespace.none.getName('oEmbedUrl');

  /**
   * Represents the `offset` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.skew skew}, {@linkcode V.shadow shadow}, {@linkcode X.pivotArea pivotArea}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly offset: XName = XNamespace.none.getName('offset');

  /**
   * Represents the `offset2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.shadow shadow}
   */
  public static readonly offset2: XName = XNamespace.none.getName('offset2');

  /**
   * Represents the `old` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.entry entry}, {@linkcode X.rcmt rcmt}
   */
  public static readonly old: XName = XNamespace.none.getName('old');

  /**
   * Represents the `oldComment` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldComment: XName =
    XNamespace.none.getName('oldComment');

  /**
   * Represents the `oldCustomMenu` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldCustomMenu: XName =
    XNamespace.none.getName('oldCustomMenu');

  /**
   * Represents the `oldDescription` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldDescription: XName =
    XNamespace.none.getName('oldDescription');

  /**
   * Represents the `oldFunction` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldFunction: XName =
    XNamespace.none.getName('oldFunction');

  /**
   * Represents the `oldFunctionGroupId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldFunctionGroupId: XName =
    XNamespace.none.getName('oldFunctionGroupId');

  /**
   * Represents the `oldHelp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldHelp: XName = XNamespace.none.getName('oldHelp');

  /**
   * Represents the `oldHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldHidden: XName =
    XNamespace.none.getName('oldHidden');

  /**
   * Represents the `oldLength` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcmt rcmt}
   */
  public static readonly oldLength: XName =
    XNamespace.none.getName('oldLength');

  /**
   * Represents the `oldName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rsnm rsnm}
   */
  public static readonly oldName: XName = XNamespace.none.getName('oldName');

  /**
   * Represents the `oldPh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}
   */
  public static readonly oldPh: XName = XNamespace.none.getName('oldPh');

  /**
   * Represents the `oldQuotePrefix` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}
   */
  public static readonly oldQuotePrefix: XName =
    XNamespace.none.getName('oldQuotePrefix');

  /**
   * Represents the `oldShortcutKey` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldShortcutKey: XName =
    XNamespace.none.getName('oldShortcutKey');

  /**
   * Represents the `oldStatusBar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rdn rdn}
   */
  public static readonly oldStatusBar: XName =
    XNamespace.none.getName('oldStatusBar');

  /**
   * Represents the `oldVal` XML name.
   */
  public static readonly oldVal: XName = XNamespace.none.getName('oldVal');

  /**
   * Represents the `ole` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ddeItem ddeItem}
   */
  public static readonly ole: XName = XNamespace.none.getName('ole');

  /**
   * Represents the `oleUpdate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.oleObject oleObject}
   */
  public static readonly oleUpdate: XName =
    XNamespace.none.getName('oleUpdate');

  /**
   * Represents the `on` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.callout callout}, {@linkcode O.column column}, {@linkcode O.extrusion extrusion}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.skew skew}, {@linkcode O.top top}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}, {@linkcode V.stroke stroke}, {@linkcode V.textpath textpath}
   */
  public static readonly on: XName = XNamespace.none.getName('on');

  /**
   * Represents the `onAction` XML name.
   */
  public static readonly onAction: XName = XNamespace.none.getName('onAction');

  /**
   * Represents the `onChange` XML name.
   */
  public static readonly onChange: XName = XNamespace.none.getName('onChange');

  /**
   * Represents the `oneField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly oneField: XName = XNamespace.none.getName('oneField');

  /**
   * Represents the `onHide` XML name.
   */
  public static readonly onHide: XName = XNamespace.none.getName('onHide');

  /**
   * Represents the `onLoad` XML name.
   */
  public static readonly onLoad: XName = XNamespace.none.getName('onLoad');

  /**
   * Represents the `onlySync` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly onlySync: XName = XNamespace.none.getName('onlySync');

  /**
   * Represents the `onlyUseConnectionFile` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly onlyUseConnectionFile: XName = XNamespace.none.getName(
    'onlyUseConnectionFile'
  );

  /**
   * Represents the `onShow` XML name.
   */
  public static readonly onShow: XName = XNamespace.none.getName('onShow');

  /**
   * Represents the `op` XML name.
   */
  public static readonly op: XName = XNamespace.none.getName('op');

  /**
   * Represents the `opacity` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}, {@linkcode V.stroke stroke}
   */
  public static readonly opacity: XName = XNamespace.none.getName('opacity');

  /**
   * Represents the `operator` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X.customFilter customFilter}, {@linkcode X.dataValidation dataValidation}, {@linkcode X14.cfRule cfRule}, {@linkcode X14.customFilter customFilter}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly operator: XName = XNamespace.none.getName('operator');

  /**
   * Represents the `optimizeMemory` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly optimizeMemory: XName =
    XNamespace.none.getName('optimizeMemory');

  /**
   * Represents the `organizeInFolders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly organizeInFolders: XName =
    XNamespace.none.getName('organizeInFolders');

  /**
   * Represents the `orient` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.guide guide}, {@linkcode P.ph ph}, {@linkcode P.split split}, {@linkcode P15.guide guide}
   */
  public static readonly orient: XName = XNamespace.none.getName('orient');

  /**
   * Represents the `orientation` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}, {@linkcode X.pageSetup pageSetup}
   */
  public static readonly orientation: XName =
    XNamespace.none.getName('orientation');

  /**
   * Represents the `orientationangle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly orientationangle: XName =
    XNamespace.none.getName('orientationangle');

  /**
   * Represents the `origin` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.skew skew}, {@linkcode P.animMotion animMotion}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}
   */
  public static readonly origin: XName = XNamespace.none.getName('origin');

  /**
   * Represents the `out` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.fade fade}
   */
  public static readonly out: XName = XNamespace.none.getName('out');

  /**
   * Represents the `outliers` XML name.
   */
  public static readonly outliers: XName = XNamespace.none.getName('outliers');

  /**
   * Represents the `outline` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.border border}, {@linkcode X.pivotArea pivotArea}, {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}, {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X14.pivotArea pivotArea}
   */
  public static readonly outline: XName = XNamespace.none.getName('outline');

  /**
   * Represents the `outlineData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly outlineData: XName =
    XNamespace.none.getName('outlineData');

  /**
   * Represents the `outlineLevel` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.col col}, {@linkcode X.row row}
   */
  public static readonly outlineLevel: XName =
    XNamespace.none.getName('outlineLevel');

  /**
   * Represents the `outlineLevelCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly outlineLevelCol: XName =
    XNamespace.none.getName('outlineLevelCol');

  /**
   * Represents the `outlineLevelRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly outlineLevelRow: XName =
    XNamespace.none.getName('outlineLevelRow');

  /**
   * Represents the `outlineSymbols` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly outlineSymbols: XName =
    XNamespace.none.getName('outlineSymbols');

  /**
   * Represents the `overflow` XML name.
   */
  public static readonly overflow: XName = XNamespace.none.getName('overflow');

  /**
   * Represents the `overlay` XML name.
   */
  public static readonly overlay: XName = XNamespace.none.getName('overlay');

  /**
   * Represents the `override` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cBhvr cBhvr}
   */
  public static readonly override: XName = XNamespace.none.getName('override');

  /**
   * Represents the `ownerIdx` XML name.
   */
  public static readonly ownerIdx: XName = XNamespace.none.getName('ownerIdx');

  /**
   * Represents the `p` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.k k}
   */
  public static readonly p: XName = XNamespace.none.getName('p');

  /**
   * Represents the `page` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly page: XName = XNamespace.none.getName('page');

  /**
   * Represents the `pageOrder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly pageOrder: XName =
    XNamespace.none.getName('pageOrder');

  /**
   * Represents the `pageOverThenDown` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly pageOverThenDown: XName =
    XNamespace.none.getName('pageOverThenDown');

  /**
   * Represents the `pageStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly pageStyle: XName =
    XNamespace.none.getName('pageStyle');

  /**
   * Represents the `pageWrap` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly pageWrap: XName = XNamespace.none.getName('pageWrap');

  /**
   * Represents the `pane` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}, {@linkcode X.selection selection}
   */
  public static readonly pane: XName = XNamespace.none.getName('pane');

  /**
   * Represents the `panose` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buFont buFont}, {@linkcode A.cs cs}, {@linkcode A.ea ea}, {@linkcode A.latin latin}, {@linkcode A.sym sym}, {@linkcode P.font font}
   */
  public static readonly panose: XName = XNamespace.none.getName('panose');

  /**
   * Represents the `paperSize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly paperSize: XName =
    XNamespace.none.getName('paperSize');

  /**
   * Represents the `par` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fieldGroup fieldGroup}
   */
  public static readonly par: XName = XNamespace.none.getName('par');

  /**
   * Represents the `parameterType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}
   */
  public static readonly parameterType: XName =
    XNamespace.none.getName('parameterType');

  /**
   * Represents the `parent` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedMember calculatedMember}, {@linkcode X.kpi kpi}
   */
  public static readonly parent: XName = XNamespace.none.getName('parent');

  /**
   * Represents the `parentId` XML name.
   */
  public static readonly parentId: XName = XNamespace.none.getName('parentId');

  /**
   * Represents the `parentSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly parentSet: XName =
    XNamespace.none.getName('parentSet');

  /**
   * Represents the `parsePre` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly parsePre: XName = XNamespace.none.getName('parsePre');

  /**
   * Represents the `parTransId` XML name.
   */
  public static readonly parTransId: XName =
    XNamespace.none.getName('parTransId');

  /**
   * Represents the `password` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.protectedRange protectedRange}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly password: XName = XNamespace.none.getName('password');

  /**
   * Represents the `passwordEdit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly passwordEdit: XName =
    XNamespace.none.getName('passwordEdit');

  /**
   * Represents the `pasteAll` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteAll: XName = XNamespace.none.getName('pasteAll');

  /**
   * Represents the `pasteBorders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteBorders: XName =
    XNamespace.none.getName('pasteBorders');

  /**
   * Represents the `pasteColWidths` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteColWidths: XName =
    XNamespace.none.getName('pasteColWidths');

  /**
   * Represents the `pasteComments` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteComments: XName =
    XNamespace.none.getName('pasteComments');

  /**
   * Represents the `pasteDataValidation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteDataValidation: XName = XNamespace.none.getName(
    'pasteDataValidation'
  );

  /**
   * Represents the `pasteFormats` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteFormats: XName =
    XNamespace.none.getName('pasteFormats');

  /**
   * Represents the `pasteFormulas` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteFormulas: XName =
    XNamespace.none.getName('pasteFormulas');

  /**
   * Represents the `pasteNumberFormats` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteNumberFormats: XName =
    XNamespace.none.getName('pasteNumberFormats');

  /**
   * Represents the `pasteValues` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly pasteValues: XName =
    XNamespace.none.getName('pasteValues');

  /**
   * Represents the `path` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.path path}, {@linkcode P.animMotion animMotion}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly path: XName = XNamespace.none.getName('path');

  /**
   * Represents the `pathEditMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animMotion animMotion}
   */
  public static readonly pathEditMode: XName =
    XNamespace.none.getName('pathEditMode');

  /**
   * Represents the `pattern` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.glitter glitter}, {@linkcode P14.shred shred}
   */
  public static readonly pattern: XName = XNamespace.none.getName('pattern');

  /**
   * Represents the `patternType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.patternFill patternFill}
   */
  public static readonly patternType: XName =
    XNamespace.none.getName('patternType');

  /**
   * Represents the `pencilSize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticLineDrawing artisticLineDrawing}, {@linkcode A14.artisticPencilGrayscale artisticPencilGrayscale}
   */
  public static readonly pencilSize: XName =
    XNamespace.none.getName('pencilSize');

  /**
   * Represents the `percent` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X.iconSet iconSet}, {@linkcode X.top10 top10}, {@linkcode X14.cfRule cfRule}, {@linkcode X14.iconSet iconSet}
   */
  public static readonly percent: XName = XNamespace.none.getName('percent');

  /**
   * Represents the `percentComplete` XML name.
   */
  public static readonly percentComplete: XName =
    XNamespace.none.getName('percentComplete');

  /**
   * Represents the `personalView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly personalView: XName =
    XNamespace.none.getName('personalView');

  /**
   * Represents the `personId` XML name.
   */
  public static readonly personId: XName = XNamespace.none.getName('personId');

  /**
   * Represents the `ph` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.c c}, {@linkcode X.nc nc}, {@linkcode X.oc oc}, {@linkcode X.rcc rcc}, {@linkcode X.row row}
   */
  public static readonly ph: XName = XNamespace.none.getName('ph');

  /**
   * Represents the `phldr` XML name.
   */
  public static readonly phldr: XName = XNamespace.none.getName('phldr');

  /**
   * Represents the `phldrT` XML name.
   */
  public static readonly phldrT: XName = XNamespace.none.getName('phldrT');

  /**
   * Represents the `phonetic` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.col col}
   */
  public static readonly phonetic: XName = XNamespace.none.getName('phonetic');

  /**
   * Represents the `picLocksAutoForOEmbed` XML name.
   */
  public static readonly picLocksAutoForOEmbed: XName = XNamespace.none.getName(
    'picLocksAutoForOEmbed'
  );

  /**
   * Represents the `pid` XML name.
   */
  public static readonly pid: XName = XNamespace.none.getName('pid');

  /**
   * Represents the `pitchFamily` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buFont buFont}, {@linkcode A.cs cs}, {@linkcode A.ea ea}, {@linkcode A.latin latin}, {@linkcode A.sym sym}, {@linkcode P.font font}
   */
  public static readonly pitchFamily: XName =
    XNamespace.none.getName('pitchFamily');

  /**
   * Represents the `pivot` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.conditionalFormatting conditionalFormatting}, {@linkcode X.tableStyle tableStyle}, {@linkcode X14.conditionalFormatting conditionalFormatting}
   */
  public static readonly pivot: XName = XNamespace.none.getName('pivot');

  /**
   * Represents the `pivotButton` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xf xf}
   */
  public static readonly pivotButton: XName =
    XNamespace.none.getName('pivotButton');

  /**
   * Represents the `pivotCacheId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.olap olap}, {@linkcode X14.pivotCacheDefinition pivotCacheDefinition}, {@linkcode X14.tabular tabular}, {@linkcode X15.state state}
   */
  public static readonly pivotCacheId: XName =
    XNamespace.none.getName('pivotCacheId');

  /**
   * Represents the `pivotShowAs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataField dataField}
   */
  public static readonly pivotShowAs: XName =
    XNamespace.none.getName('pivotShowAs');

  /**
   * Represents the `pivotTables` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly pivotTables: XName =
    XNamespace.none.getName('pivotTables');

  /**
   * Represents the `pivotTableStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly pivotTableStyle: XName =
    XNamespace.none.getName('pivotTableStyle');

  /**
   * Represents the `pLen` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly pLen: XName = XNamespace.none.getName('pLen');

  /**
   * Represents the `points` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.polyline polyline}
   */
  public static readonly points: XName = XNamespace.none.getName('points');

  /**
   * Represents the `polar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly polar: XName = XNamespace.none.getName('polar');

  /**
   * Represents the `pos` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.gs gs}, {@linkcode A.tab tab}, {@linkcode P.guide guide}, {@linkcode P15.guide guide}
   */
  public static readonly pos: XName = XNamespace.none.getName('pos');

  /**
   * Represents the `position` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}, {@linkcode V.fill fill}, {@linkcode V.h h}, {@linkcode X.stop stop}, {@linkcode X.textField textField}
   */
  public static readonly position: XName = XNamespace.none.getName('position');

  /**
   * Represents the `post` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly post: XName = XNamespace.none.getName('post');

  /**
   * Represents the `pPos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly pPos: XName = XNamespace.none.getName('pPos');

  /**
   * Represents the `pred` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A16.predDERef predDERef}
   */
  public static readonly pred: XName = XNamespace.none.getName('pred');

  /**
   * Represents the `preferPic` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ddeItem ddeItem}, {@linkcode X.oleItem oleItem}, {@linkcode X14.oleItem oleItem}
   */
  public static readonly preferPic: XName =
    XNamespace.none.getName('preferPic');

  /**
   * Represents the `preferRelativeResize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvPicPr cNvPicPr}, {@linkcode P.cNvPicPr cNvPicPr}
   */
  public static readonly preferRelativeResize: XName = XNamespace.none.getName(
    'preferRelativeResize'
  );

  /**
   * Represents the `preferSingleView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.normalViewPr normalViewPr}
   */
  public static readonly preferSingleView: XName =
    XNamespace.none.getName('preferSingleView');

  /**
   * Represents the `prefix` XML name.
   */
  public static readonly prefix: XName = XNamespace.none.getName('prefix');

  /**
   * Represents the `presAssocID` XML name.
   */
  public static readonly presAssocID: XName =
    XNamespace.none.getName('presAssocID');

  /**
   * Represents the `preserve` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sldLayout sldLayout}, {@linkcode P.sldMaster sldMaster}
   */
  public static readonly preserve: XName = XNamespace.none.getName('preserve');

  /**
   * Represents the `PreserveFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly PreserveFormat: XName =
    XNamespace.none.getName('PreserveFormat');

  /**
   * Represents the `preserveFormatting` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.queryTable queryTable}
   */
  public static readonly preserveFormatting: XName =
    XNamespace.none.getName('preserveFormatting');

  /**
   * Represents the `preserveHistory` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly preserveHistory: XName =
    XNamespace.none.getName('preserveHistory');

  /**
   * Represents the `PreserveSortAFLayout` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly PreserveSortAFLayout: XName = XNamespace.none.getName(
    'PreserveSortAFLayout'
  );

  /**
   * Represents the `preserveSortFilterLayout` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly preserveSortFilterLayout: XName =
    XNamespace.none.getName('preserveSortFilterLayout');

  /**
   * Represents the `presetClass` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly presetClass: XName =
    XNamespace.none.getName('presetClass');

  /**
   * Represents the `presetID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly presetID: XName = XNamespace.none.getName('presetID');

  /**
   * Represents the `presetSubtype` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly presetSubtype: XName =
    XNamespace.none.getName('presetSubtype');

  /**
   * Represents the `presId` XML name.
   */
  public static readonly presId: XName = XNamespace.none.getName('presId');

  /**
   * Represents the `presName` XML name.
   */
  public static readonly presName: XName = XNamespace.none.getName('presName');

  /**
   * Represents the `presStyleCnt` XML name.
   */
  public static readonly presStyleCnt: XName =
    XNamespace.none.getName('presStyleCnt');

  /**
   * Represents the `presStyleIdx` XML name.
   */
  public static readonly presStyleIdx: XName =
    XNamespace.none.getName('presStyleIdx');

  /**
   * Represents the `presStyleLbl` XML name.
   */
  public static readonly presStyleLbl: XName =
    XNamespace.none.getName('presStyleLbl');

  /**
   * Represents the `pressure` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticChalkSketch artisticChalkSketch}, {@linkcode A14.artisticCrisscrossEtching artisticCrisscrossEtching}, {@linkcode A14.artisticMosiaicBubbles artisticMosiaicBubbles}, {@linkcode A14.artisticPencilSketch artisticPencilSketch}
   */
  public static readonly pressure: XName = XNamespace.none.getName('pressure');

  /**
   * Represents the `prevAc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.seq seq}
   */
  public static readonly prevAc: XName = XNamespace.none.getName('prevAc');

  /**
   * Represents the `previousCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly previousCol: XName =
    XNamespace.none.getName('previousCol');

  /**
   * Represents the `previousRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}
   */
  public static readonly previousRow: XName =
    XNamespace.none.getName('previousRow');

  /**
   * Represents the `pri` XML name.
   */
  public static readonly pri: XName = XNamespace.none.getName('pri');

  /**
   * Represents the `print` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}, {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly print: XName = XNamespace.none.getName('print');

  /**
   * Represents the `printArea` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly printArea: XName =
    XNamespace.none.getName('printArea');

  /**
   * Represents the `printDrill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly printDrill: XName =
    XNamespace.none.getName('printDrill');

  /**
   * Represents the `priority` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X.conditionalFormat conditionalFormat}, {@linkcode X14.cfRule cfRule}, {@linkcode X14.conditionalFormat conditionalFormat}
   */
  public static readonly priority: XName = XNamespace.none.getName('priority');

  /**
   * Represents the `priorRef` XML name.
   */
  public static readonly priorRef: XName = XNamespace.none.getName('priorRef');

  /**
   * Represents the `prLst` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animEffect animEffect}
   */
  public static readonly prLst: XName = XNamespace.none.getName('prLst');

  /**
   * Represents the `prnWhat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.prnPr prnPr}
   */
  public static readonly prnWhat: XName = XNamespace.none.getName('prnWhat');

  /**
   * Represents the `productSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly productSubtotal: XName =
    XNamespace.none.getName('productSubtotal');

  /**
   * Represents the `progId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.oleObj oleObj}, {@linkcode X.oleLink oleLink}, {@linkcode X.oleObject oleObject}
   */
  public static readonly progId: XName = XNamespace.none.getName('progId');

  /**
   * Represents the `ProgID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly ProgID_: XName = XNamespace.none.getName('ProgID');

  /**
   * Represents the `prompt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X.parameter parameter}, {@linkcode X.textPr textPr}, {@linkcode X14.dataValidation dataValidation}, {@linkcode X15.textPr textPr}
   */
  public static readonly prompt: XName = XNamespace.none.getName('prompt');

  /**
   * Represents the `promptedSolutions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly promptedSolutions: XName =
    XNamespace.none.getName('promptedSolutions');

  /**
   * Represents the `promptTitle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly promptTitle: XName =
    XNamespace.none.getName('promptTitle');

  /**
   * Represents the `propertyName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}
   */
  public static readonly propertyName: XName =
    XNamespace.none.getName('propertyName');

  /**
   * Represents the `protected` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly protected: XName =
    XNamespace.none.getName('protected');

  /**
   * Represents the `provid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly provid: XName = XNamespace.none.getName('provid');

  /**
   * Represents the `provId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly provId_: XName = XNamespace.none.getName('provId');

  /**
   * Represents the `providerId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P15.presenceInfo presenceInfo}
   */
  public static readonly providerId: XName =
    XNamespace.none.getName('providerId');

  /**
   * Represents the `prst` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bevel bevel}, {@linkcode A.bevelB bevelB}, {@linkcode A.bevelT bevelT}, {@linkcode A.camera camera}, {@linkcode A.pattFill pattFill}, {@linkcode A.prstGeom prstGeom}, {@linkcode A.prstShdw prstShdw}, {@linkcode A.prstTxWarp prstTxWarp}, {@linkcode P15.prstTrans prstTrans}
   */
  public static readonly prst: XName = XNamespace.none.getName('prst');

  /**
   * Represents the `prstMaterial` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cell3D cell3D}, {@linkcode A.sp3d sp3d}, {@linkcode A14.hiddenSp3d hiddenSp3d}
   */
  public static readonly prstMaterial: XName =
    XNamespace.none.getName('prstMaterial');

  /**
   * Represents the `pt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.brk brk}
   */
  public static readonly pt: XName = XNamespace.none.getName('pt');

  /**
   * Represents the `ptCount` XML name.
   */
  public static readonly ptCount: XName = XNamespace.none.getName('ptCount');

  /**
   * Represents the `ptsTypes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animMotion animMotion}
   */
  public static readonly ptsTypes: XName = XNamespace.none.getName('ptsTypes');

  /**
   * Represents the `ptType` XML name.
   */
  public static readonly ptType: XName = XNamespace.none.getName('ptType');

  /**
   * Represents the `pubBrowser` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.htmlPubPr htmlPubPr}
   */
  public static readonly pubBrowser: XName =
    XNamespace.none.getName('pubBrowser');

  /**
   * Represents the `published` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X.sheetPr sheetPr}, {@linkcode X.table table}
   */
  public static readonly published: XName =
    XNamespace.none.getName('published');

  /**
   * Represents the `publishItems` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly publishItems: XName =
    XNamespace.none.getName('publishItems');

  /**
   * Represents the `publishToServer` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}
   */
  public static readonly publishToServer: XName =
    XNamespace.none.getName('publishToServer');

  /**
   * Represents the `qsCatId` XML name.
   */
  public static readonly qsCatId: XName = XNamespace.none.getName('qsCatId');

  /**
   * Represents the `qsTypeId` XML name.
   */
  public static readonly qsTypeId: XName = XNamespace.none.getName('qsTypeId');

  /**
   * Represents the `qualifier` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly qualifier: XName =
    XNamespace.none.getName('qualifier');

  /**
   * Represents the `quartileMethod` XML name.
   */
  public static readonly quartileMethod: XName =
    XNamespace.none.getName('quartileMethod');

  /**
   * Represents the `queryFailed` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.set set}
   */
  public static readonly queryFailed: XName =
    XNamespace.none.getName('queryFailed');

  /**
   * Represents the `queryTableFieldId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableColumn tableColumn}
   */
  public static readonly queryTableFieldId: XName =
    XNamespace.none.getName('queryTableFieldId');

  /**
   * Represents the `quotePrefix` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.xf xf}
   */
  public static readonly quotePrefix: XName =
    XNamespace.none.getName('quotePrefix');

  /**
   * Represents the `r` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.fillRect fillRect}, {@linkcode A.fillToRect fillToRect}, {@linkcode A.rect rect}, {@linkcode A.scrgbClr scrgbClr}, {@linkcode A.srcRect srcRect}, {@linkcode A.tileRect tileRect}, {@linkcode A14.backgroundRemoval backgroundRemoval}, {@linkcode P.rgb rgb}, {@linkcode WP.effectExtent effectExtent}, {@linkcode X.c c}, {@linkcode X.cell cell}, {@linkcode X.cellWatch cellWatch}, {@linkcode X.i i}, {@linkcode X.inputCells inputCells}, {@linkcode X.nc nc}, {@linkcode X.oc oc}, {@linkcode X.row row}, {@linkcode X.singleXmlCell singleXmlCell}, {@linkcode X.tr tr}, {@linkcode X.undo undo}, {@linkcode X15.pivotRow pivotRow}
   */
  public static readonly r: XName = XNamespace.none.getName('r');

  /**
   * Represents the `r1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly r1: XName = XNamespace.none.getName('r1');

  /**
   * Represents the `r2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}
   */
  public static readonly r2: XName = XNamespace.none.getName('r2');

  /**
   * Represents the `ra` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.rcft rcft}, {@linkcode X.rdn rdn}, {@linkcode X.ris ris}, {@linkcode X.rm rm}, {@linkcode X.rrc rrc}, {@linkcode X.rsnm rsnm}
   */
  public static readonly ra: XName = XNamespace.none.getName('ra');

  /**
   * Represents the `rad` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.alphaOutset alphaOutset}, {@linkcode A.blur blur}, {@linkcode A.glow glow}, {@linkcode A.softEdge softEdge}
   */
  public static readonly rad: XName = XNamespace.none.getName('rad');

  /**
   * Represents the `radius` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticBlur artisticBlur}
   */
  public static readonly radius: XName = XNamespace.none.getName('radius');

  /**
   * Represents the `radiusrange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly radiusrange: XName =
    XNamespace.none.getName('radiusrange');

  /**
   * Represents the `rAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animMotion animMotion}
   */
  public static readonly rAng: XName = XNamespace.none.getName('rAng');

  /**
   * Represents the `rank` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly rank: XName = XNamespace.none.getName('rank');

  /**
   * Represents the `rankBy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly rankBy: XName = XNamespace.none.getName('rankBy');

  /**
   * Represents the `rctx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cBhvr cBhvr}
   */
  public static readonly rctx: XName = XNamespace.none.getName('rctx');

  /**
   * Represents the `readingOrder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly readingOrder: XName =
    XNamespace.none.getName('readingOrder');

  /**
   * Represents the `readOnlyRecommended` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileSharing fileSharing}
   */
  public static readonly readOnlyRecommended: XName = XNamespace.none.getName(
    'readOnlyRecommended'
  );

  /**
   * Represents the `recalcAlways` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.controlPr controlPr}
   */
  public static readonly recalcAlways: XName =
    XNamespace.none.getName('recalcAlways');

  /**
   * Represents the `recolor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly recolor: XName = XNamespace.none.getName('recolor');

  /**
   * Represents the `recolortarget` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata imagedata}
   */
  public static readonly recolortarget: XName =
    XNamespace.none.getName('recolortarget');

  /**
   * Represents the `reconnectionMethod` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly reconnectionMethod: XName =
    XNamespace.none.getName('reconnectionMethod');

  /**
   * Represents the `recordCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly recordCount: XName =
    XNamespace.none.getName('recordCount');

  /**
   * Represents the `ref` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.effect effect}, {@linkcode X.autoFilter autoFilter}, {@linkcode X.comment comment}, {@linkcode X.dataRef dataRef}, {@linkcode X.dimension dimension}, {@linkcode X.f f}, {@linkcode X.hyperlink hyperlink}, {@linkcode X.location location}, {@linkcode X.mergeCell mergeCell}, {@linkcode X.oleSize oleSize}, {@linkcode X.raf raf}, {@linkcode X.rangeSet rangeSet}, {@linkcode X.rqt rqt}, {@linkcode X.rrc rrc}, {@linkcode X.sortCondition sortCondition}, {@linkcode X.sortState sortState}, {@linkcode X.table table}, {@linkcode X.worksheetSource worksheetSource}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly ref: XName = XNamespace.none.getName('ref');

  /**
   * Represents the `ref3D` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.undo undo}
   */
  public static readonly ref3D: XName = XNamespace.none.getName('ref3D');

  /**
   * Represents the `referenceDateBegin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.movingPeriodState movingPeriodState}
   */
  public static readonly referenceDateBegin: XName =
    XNamespace.none.getName('referenceDateBegin');

  /**
   * Represents the `referenceMultiple` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.movingPeriodState movingPeriodState}
   */
  public static readonly referenceMultiple: XName =
    XNamespace.none.getName('referenceMultiple');

  /**
   * Represents the `referencePeriod` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.movingPeriodState movingPeriodState}
   */
  public static readonly referencePeriod: XName =
    XNamespace.none.getName('referencePeriod');

  /**
   * Represents the `refersTo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}
   */
  public static readonly refersTo: XName = XNamespace.none.getName('refersTo');

  /**
   * Represents the `refFor` XML name.
   */
  public static readonly refFor: XName = XNamespace.none.getName('refFor');

  /**
   * Represents the `refForName` XML name.
   */
  public static readonly refForName: XName =
    XNamespace.none.getName('refForName');

  /**
   * Represents the `refMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calcPr calcPr}
   */
  public static readonly refMode: XName = XNamespace.none.getName('refMode');

  /**
   * Represents the `refPtType` XML name.
   */
  public static readonly refPtType: XName =
    XNamespace.none.getName('refPtType');

  /**
   * Represents the `refreshAllConnections` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly refreshAllConnections: XName = XNamespace.none.getName(
    'refreshAllConnections'
  );

  /**
   * Represents the `refreshedBy` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly refreshedBy: XName =
    XNamespace.none.getName('refreshedBy');

  /**
   * Represents the `refreshedDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly refreshedDate: XName =
    XNamespace.none.getName('refreshedDate');

  /**
   * Represents the `refreshedDateIso` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly refreshedDateIso: XName =
    XNamespace.none.getName('refreshedDateIso');

  /**
   * Represents the `refreshedVersion` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly refreshedVersion: XName =
    XNamespace.none.getName('refreshedVersion');

  /**
   * Represents the `refreshError` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetData sheetData}
   */
  public static readonly refreshError: XName =
    XNamespace.none.getName('refreshError');

  /**
   * Represents the `refreshOnChange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.parameter parameter}
   */
  public static readonly refreshOnChange: XName =
    XNamespace.none.getName('refreshOnChange');

  /**
   * Represents the `refreshOnLoad` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.pivotCacheDefinition pivotCacheDefinition}, {@linkcode X.queryTable queryTable}
   */
  public static readonly refreshOnLoad: XName =
    XNamespace.none.getName('refreshOnLoad');

  /**
   * Represents the `refType` XML name.
   */
  public static readonly refType: XName = XNamespace.none.getName('refType');

  /**
   * Represents the `relation` XML name.
   */
  public static readonly relation: XName = XNamespace.none.getName('relation');

  /**
   * Represents the `relative` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.reference reference}
   */
  public static readonly relative: XName = XNamespace.none.getName('relative');

  /**
   * Represents the `relativeFrom` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.positionH positionH}, {@linkcode WP.positionV positionV}
   */
  public static readonly relativeFrom: XName =
    XNamespace.none.getName('relativeFrom');

  /**
   * Represents the `relativeHeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}
   */
  public static readonly relativeHeight: XName =
    XNamespace.none.getName('relativeHeight');

  /**
   * Represents the `relativeIndent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly relativeIndent: XName =
    XNamespace.none.getName('relativeIndent');

  /**
   * Represents the `relId` XML name.
   */
  public static readonly relId: XName = XNamespace.none.getName('relId');

  /**
   * Represents the `relNeededHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotTableUISettings pivotTableUISettings}
   */
  public static readonly relNeededHidden: XName =
    XNamespace.none.getName('relNeededHidden');

  /**
   * Represents the `relyOnVml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly relyOnVml: XName =
    XNamespace.none.getName('relyOnVml');

  /**
   * Represents the `removed` XML name.
   */
  public static readonly removed: XName = XNamespace.none.getName('removed');

  /**
   * Represents the `removeDataOnSave` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}
   */
  public static readonly removeDataOnSave: XName =
    XNamespace.none.getName('removeDataOnSave');

  /**
   * Represents the `removePersonalInfoOnSave` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly removePersonalInfoOnSave: XName =
    XNamespace.none.getName('removePersonalInfoOnSave');

  /**
   * Represents the `render` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly render: XName = XNamespace.none.getName('render');

  /**
   * Represents the `repairLoad` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileRecoveryPr fileRecoveryPr}
   */
  public static readonly repairLoad: XName =
    XNamespace.none.getName('repairLoad');

  /**
   * Represents the `repeatCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly repeatCount: XName =
    XNamespace.none.getName('repeatCount');

  /**
   * Represents the `repeatDur` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly repeatDur: XName =
    XNamespace.none.getName('repeatDur');

  /**
   * Represents the `reservationPassword` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileSharing fileSharing}
   */
  public static readonly reservationPassword: XName = XNamespace.none.getName(
    'reservationPassword'
  );

  /**
   * Represents the `resId` XML name.
   */
  public static readonly resId: XName = XNamespace.none.getName('resId');

  /**
   * Represents the `resizeGraphics` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly resizeGraphics: XName =
    XNamespace.none.getName('resizeGraphics');

  /**
   * Represents the `resource` XML name.
   */
  public static readonly resource: XName = XNamespace.none.getName('resource');

  /**
   * Represents the `respectTo` XML name.
   */
  public static readonly respectTo: XName =
    XNamespace.none.getName('respectTo');

  /**
   * Represents the `restart` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}, {@linkcode P.kiosk kiosk}
   */
  public static readonly restart: XName = XNamespace.none.getName('restart');

  /**
   * Represents the `rev` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bldDgm bldDgm}, {@linkcode A.rot rot}, {@linkcode P.bldP bldP}
   */
  public static readonly rev: XName = XNamespace.none.getName('rev');

  /**
   * Represents the `reverse` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.diagram diagram}, {@linkcode X.iconSet iconSet}, {@linkcode X14.iconSet iconSet}
   */
  public static readonly reverse: XName = XNamespace.none.getName('reverse');

  /**
   * Represents the `revisionId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly revisionId: XName =
    XNamespace.none.getName('revisionId');

  /**
   * Represents the `revisionsAlgorithmName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly revisionsAlgorithmName: XName =
    XNamespace.none.getName('revisionsAlgorithmName');

  /**
   * Represents the `revisionsHashValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly revisionsHashValue: XName =
    XNamespace.none.getName('revisionsHashValue');

  /**
   * Represents the `revisionsPassword` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly revisionsPassword: XName =
    XNamespace.none.getName('revisionsPassword');

  /**
   * Represents the `revisionsSaltValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly revisionsSaltValue: XName =
    XNamespace.none.getName('revisionsSaltValue');

  /**
   * Represents the `revisionsSpinCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly revisionsSpinCount: XName =
    XNamespace.none.getName('revisionsSpinCount');

  /**
   * Represents the `rfe` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rfe: XName = XNamespace.none.getName('rfe');

  /**
   * Represents the `rff` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rff: XName = XNamespace.none.getName('rff');

  /**
   * Represents the `rfo` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rfo: XName = XNamespace.none.getName('rfo');

  /**
   * Represents the `rgb` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.bgColor bgColor}, {@linkcode X.color color}, {@linkcode X.fgColor fgColor}, {@linkcode X.rgbColor rgbColor}, {@linkcode X.tabColor tabColor}, {@linkcode X14.axisColor axisColor}, {@linkcode X14.borderColor borderColor}, {@linkcode X14.color color}, {@linkcode X14.colorAxis colorAxis}, {@linkcode X14.colorFirst colorFirst}, {@linkcode X14.colorHigh colorHigh}, {@linkcode X14.colorLast colorLast}, {@linkcode X14.colorLow colorLow}, {@linkcode X14.colorMarkers colorMarkers}, {@linkcode X14.colorNegative colorNegative}, {@linkcode X14.colorSeries colorSeries}, {@linkcode X14.fillColor fillColor}, {@linkcode X14.negativeBorderColor negativeBorderColor}, {@linkcode X14.negativeFillColor negativeFillColor}
   */
  public static readonly rgb: XName = XNamespace.none.getName('rgb');

  /**
   * Represents the `rhe` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rhe: XName = XNamespace.none.getName('rhe');

  /**
   * Represents the `rhf` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rhf: XName = XNamespace.none.getName('rhf');

  /**
   * Represents the `rho` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.drawingHF drawingHF}
   */
  public static readonly rho: XName = XNamespace.none.getName('rho');

  /**
   * Represents the `richSortKey` XML name.
   */
  public static readonly richSortKey: XName =
    XNamespace.none.getName('richSortKey');

  /**
   * Represents the `rId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.rcft rcft}, {@linkcode X.rdn rdn}, {@linkcode X.reviewed reviewed}, {@linkcode X.ris ris}, {@linkcode X.rm rm}, {@linkcode X.rrc rrc}, {@linkcode X.rsnm rsnm}
   */
  public static readonly rId: XName = XNamespace.none.getName('rId');

  /**
   * Represents the `rig` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.lightRig lightRig}
   */
  public static readonly rig: XName = XNamespace.none.getName('rig');

  /**
   * Represents the `right` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.gradientFill gradientFill}, {@linkcode X.pageMargins pageMargins}
   */
  public static readonly right: XName = XNamespace.none.getName('right');

  /**
   * Represents the `rightToLeft` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}, {@linkcode X14.sparklineGroup sparklineGroup}
   */
  public static readonly rightToLeft: XName =
    XNamespace.none.getName('rightToLeft');

  /**
   * Represents the `rIns` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly rIns: XName = XNamespace.none.getName('rIns');

  /**
   * Represents the `RootElement` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly RootElement: XName =
    XNamespace.none.getName('RootElement');

  /**
   * Represents the `rot` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode A.xfrm xfrm}, {@linkcode A14.xfrm xfrm}, {@linkcode P.xfrm xfrm}, {@linkcode P14.xfrm xfrm}, {@linkcode W14.xfrm xfrm}, {@linkcode WPG.xfrm xfrm}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly rot: XName = XNamespace.none.getName('rot');

  /**
   * Represents the `rotate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill fill}
   */
  public static readonly rotate: XName = XNamespace.none.getName('rotate');

  /**
   * Represents the `rotatedBoundingBox` XML name.
   */
  public static readonly rotatedBoundingBox: XName =
    XNamespace.none.getName('rotatedBoundingBox');

  /**
   * Represents the `rotation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly rotation: XName = XNamespace.none.getName('rotation');

  /**
   * Represents the `rotationangle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly rotationangle: XName =
    XNamespace.none.getName('rotationangle');

  /**
   * Represents the `rotationAngle` XML name.
   */
  public static readonly rotationAngle_: XName =
    XNamespace.none.getName('rotationAngle');

  /**
   * Represents the `rotationcenter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly rotationcenter: XName =
    XNamespace.none.getName('rotationcenter');

  /**
   * Represents the `rotWithShape` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blipFill blipFill}, {@linkcode A.gradFill gradFill}, {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}, {@linkcode P.blipFill blipFill}
   */
  public static readonly rotWithShape: XName =
    XNamespace.none.getName('rotWithShape');

  /**
   * Represents the `row` XML name.
   */
  public static readonly row: XName = XNamespace.none.getName('row');

  /**
   * Represents the `rowColShift` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly rowColShift: XName =
    XNamespace.none.getName('rowColShift');

  /**
   * Represents the `rowCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.tupleSet tupleSet}, {@linkcode X15.pivotTableData pivotTableData}
   */
  public static readonly rowCount: XName = XNamespace.none.getName('rowCount');

  /**
   * Represents the `rowDrillCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly rowDrillCount: XName =
    XNamespace.none.getName('rowDrillCount');

  /**
   * Represents the `rowGrandTotals` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly rowGrandTotals: XName =
    XNamespace.none.getName('rowGrandTotals');

  /**
   * Represents the `rowHeaderCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly rowHeaderCaption: XName =
    XNamespace.none.getName('rowHeaderCaption');

  /**
   * Represents the `rowHeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicer slicer}
   */
  public static readonly rowHeight: XName =
    XNamespace.none.getName('rowHeight');

  /**
   * Represents the `rowHidden` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}
   */
  public static readonly rowHidden: XName =
    XNamespace.none.getName('rowHidden');

  /**
   * Represents the `rowNumbers` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTable queryTable}, {@linkcode X.queryTableField queryTableField}
   */
  public static readonly rowNumbers: XName =
    XNamespace.none.getName('rowNumbers');

  /**
   * Represents the `rowPageCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.location location}
   */
  public static readonly rowPageCount: XName =
    XNamespace.none.getName('rowPageCount');

  /**
   * Represents the `rows` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.values values}, {@linkcode X14.values values}
   */
  public static readonly rows: XName = XNamespace.none.getName('rows');

  /**
   * Represents the `rowSpan` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tc tc}
   */
  public static readonly rowSpan: XName = XNamespace.none.getName('rowSpan');

  /**
   * Represents the `rtl` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defPPr defPPr}, {@linkcode A.lvl1pPr lvl1pPr}, {@linkcode A.lvl2pPr lvl2pPr}, {@linkcode A.lvl3pPr lvl3pPr}, {@linkcode A.lvl4pPr lvl4pPr}, {@linkcode A.lvl5pPr lvl5pPr}, {@linkcode A.lvl6pPr lvl6pPr}, {@linkcode A.lvl7pPr lvl7pPr}, {@linkcode A.lvl8pPr lvl8pPr}, {@linkcode A.lvl9pPr lvl9pPr}, {@linkcode A.pPr pPr}, {@linkcode A.tblPr tblPr}, {@linkcode P.presentation presentation}
   */
  public static readonly rtl: XName = XNamespace.none.getName('rtl');

  /**
   * Represents the `rtlCol` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly rtlCol: XName = XNamespace.none.getName('rtlCol');

  /**
   * Represents the `rupBuild` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileVersion fileVersion}
   */
  public static readonly rupBuild: XName = XNamespace.none.getName('rupBuild');

  /**
   * Represents the `s` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.hsl hsl}, {@linkcode X.c c}, {@linkcode X.item item}, {@linkcode X.n n}, {@linkcode X.nc nc}, {@linkcode X.oc oc}, {@linkcode X.rcc rcc}, {@linkcode X.rfmt rfmt}, {@linkcode X.row row}, {@linkcode X.tr tr}, {@linkcode X14.i i}
   */
  public static readonly s: XName = XNamespace.none.getName('s');

  /**
   * Represents the `saltData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly saltData: XName = XNamespace.none.getName('saltData');

  /**
   * Represents the `saltValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}, {@linkcode X.fileSharing fileSharing}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly saltValue: XName =
    XNamespace.none.getName('saltValue');

  /**
   * Represents the `sat` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hsl hsl}, {@linkcode A.hslClr hslClr}, {@linkcode A14.saturation saturation}
   */
  public static readonly sat: XName = XNamespace.none.getName('sat');

  /**
   * Represents the `saveData` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly saveData: XName = XNamespace.none.getName('saveData');

  /**
   * Represents the `saveExternalLinkValues` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly saveExternalLinkValues: XName =
    XNamespace.none.getName('saveExternalLinkValues');

  /**
   * Represents the `savePassword` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly savePassword: XName =
    XNamespace.none.getName('savePassword');

  /**
   * Represents the `saveSubsetFonts` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly saveSubsetFonts: XName =
    XNamespace.none.getName('saveSubsetFonts');

  /**
   * Represents the `sb` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rPh rPh}
   */
  public static readonly sb: XName = XNamespace.none.getName('sb');

  /**
   * Represents the `scale` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.pageSetup pageSetup}
   */
  public static readonly scale: XName = XNamespace.none.getName('scale');

  /**
   * Represents the `scaled` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.lin lin}
   */
  public static readonly scaled: XName = XNamespace.none.getName('scaled');

  /**
   * Represents the `scaleToFitPaper` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.prnPr prnPr}
   */
  public static readonly scaleToFitPaper: XName =
    XNamespace.none.getName('scaleToFitPaper');

  /**
   * Represents the `scaleWithDoc` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headerFooter headerFooter}
   */
  public static readonly scaleWithDoc: XName =
    XNamespace.none.getName('scaleWithDoc');

  /**
   * Represents the `scaling` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticGlass artisticGlass}, {@linkcode A14.artisticPastelsSmooth artisticPastelsSmooth}, {@linkcode A14.artisticTexturizer artisticTexturizer}
   */
  public static readonly scaling: XName = XNamespace.none.getName('scaling');

  /**
   * Represents the `scenarios` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly scenarios: XName =
    XNamespace.none.getName('scenarios');

  /**
   * Represents the `SchemaID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly SchemaID: XName = XNamespace.none.getName('SchemaID');

  /**
   * Represents the `SchemaRef` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Schema Schema}
   */
  public static readonly SchemaRef: XName =
    XNamespace.none.getName('SchemaRef');

  /**
   * Represents the `scope` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.conditionalFormat conditionalFormat}, {@linkcode X14.conditionalFormat conditionalFormat}
   */
  public static readonly scope: XName = XNamespace.none.getName('scope');

  /**
   * Represents the `screentip` XML name.
   */
  public static readonly screentip: XName =
    XNamespace.none.getName('screentip');

  /**
   * Represents the `script` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.font font}
   */
  public static readonly script: XName = XNamespace.none.getName('script');

  /**
   * Represents the `scrollPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timeline timeline}
   */
  public static readonly scrollPosition: XName =
    XNamespace.none.getName('scrollPosition');

  /**
   * Represents the `sd` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.item item}
   */
  public static readonly sd: XName = XNamespace.none.getName('sd');

  /**
   * Represents the `second` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly second: XName = XNamespace.none.getName('second');

  /**
   * Represents the `secondColumnMaxWidth` XML name.
   */
  public static readonly secondColumnMaxWidth: XName = XNamespace.none.getName(
    'secondColumnMaxWidth'
  );

  /**
   * Represents the `secondColumnMinWidth` XML name.
   */
  public static readonly secondColumnMinWidth: XName = XNamespace.none.getName(
    'secondColumnMinWidth'
  );

  /**
   * Represents the `securityDescriptor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.protectedRange protectedRange}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly securityDescriptor: XName =
    XNamespace.none.getName('securityDescriptor');

  /**
   * Represents the `seek` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.seekEvt seekEvt}
   */
  public static readonly seek: XName = XNamespace.none.getName('seek');

  /**
   * Represents the `sel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly sel: XName = XNamespace.none.getName('sel');

  /**
   * Represents the `selected` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.reference reference}
   */
  public static readonly selected: XName = XNamespace.none.getName('selected');

  /**
   * Represents the `SelectedStyle` XML name.
   */
  public static readonly SelectedStyle: XName =
    XNamespace.none.getName('SelectedStyle');

  /**
   * Represents the `selection` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly selection: XName =
    XNamespace.none.getName('selection');

  /**
   * Represents the `selectionLevel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timeline timeline}
   */
  public static readonly selectionLevel: XName =
    XNamespace.none.getName('selectionLevel');

  /**
   * Represents the `SelectionNamespaces` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.MapInfo MapInfo}
   */
  public static readonly SelectionNamespaces: XName = XNamespace.none.getName(
    'SelectionNamespaces'
  );

  /**
   * Represents the `selectLockedCells` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly selectLockedCells: XName =
    XNamespace.none.getName('selectLockedCells');

  /**
   * Represents the `selectUnlockedCells` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly selectUnlockedCells: XName = XNamespace.none.getName(
    'selectUnlockedCells'
  );

  /**
   * Represents the `seltype` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly seltype: XName = XNamespace.none.getName('seltype');

  /**
   * Represents the `semanticType` XML name.
   */
  public static readonly semanticType: XName =
    XNamespace.none.getName('semanticType');

  /**
   * Represents the `semicolon` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly semicolon: XName =
    XNamespace.none.getName('semicolon');

  /**
   * Represents the `sendLocale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly sendLocale: XName =
    XNamespace.none.getName('sendLocale');

  /**
   * Represents the `seq` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WPS.linkedTxbx linkedTxbx}
   */
  public static readonly seq: XName = XNamespace.none.getName('seq');

  /**
   * Represents the `serialNo` XML name.
   */
  public static readonly serialNo: XName = XNamespace.none.getName('serialNo');

  /**
   * Represents the `series` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.chartFormat chartFormat}
   */
  public static readonly series: XName = XNamespace.none.getName('series');

  /**
   * Represents the `seriesIdx` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.chart chart}
   */
  public static readonly seriesIdx: XName =
    XNamespace.none.getName('seriesIdx');

  /**
   * Represents the `seriesName` XML name.
   */
  public static readonly seriesName: XName =
    XNamespace.none.getName('seriesName');

  /**
   * Represents the `serverCommand` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dbPr dbPr}
   */
  public static readonly serverCommand: XName =
    XNamespace.none.getName('serverCommand');

  /**
   * Represents the `serverField` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.pivotField pivotField}
   */
  public static readonly serverField: XName =
    XNamespace.none.getName('serverField');

  /**
   * Represents the `serverFill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly serverFill: XName =
    XNamespace.none.getName('serverFill');

  /**
   * Represents the `serverFont` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly serverFont: XName =
    XNamespace.none.getName('serverFont');

  /**
   * Represents the `serverFontColor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly serverFontColor: XName =
    XNamespace.none.getName('serverFontColor');

  /**
   * Represents the `serverNumberFormat` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.olapPr olapPr}
   */
  public static readonly serverNumberFormat: XName =
    XNamespace.none.getName('serverNumberFormat');

  /**
   * Represents the `serverSldId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sldSyncPr sldSyncPr}
   */
  public static readonly serverSldId: XName =
    XNamespace.none.getName('serverSldId');

  /**
   * Represents the `serverSldModifiedTime` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sldSyncPr sldSyncPr}
   */
  public static readonly serverSldModifiedTime: XName = XNamespace.none.getName(
    'serverSldModifiedTime'
  );

  /**
   * Represents the `serverZoom` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly serverZoom: XName =
    XNamespace.none.getName('serverZoom');

  /**
   * Represents the `set` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.calculatedMember calculatedMember}
   */
  public static readonly set: XName = XNamespace.none.getName('set');

  /**
   * Represents the `setDate` XML name.
   */
  public static readonly setDate: XName = XNamespace.none.getName('setDate');

  /**
   * Represents the `setDefinition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.set set}
   */
  public static readonly setDefinition: XName =
    XNamespace.none.getName('setDefinition');

  /**
   * Represents the `shadeToTitle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bgPr bgPr}
   */
  public static readonly shadeToTitle: XName =
    XNamespace.none.getName('shadeToTitle');

  /**
   * Represents the `shadow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W10.borderbottom borderbottom}, {@linkcode W10.borderleft borderleft}, {@linkcode W10.borderright borderright}, {@linkcode W10.bordertop bordertop}
   */
  public static readonly shadow: XName = XNamespace.none.getName('shadow');

  /**
   * Represents the `shadowcolor` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.colormenu colormenu}
   */
  public static readonly shadowcolor: XName =
    XNamespace.none.getName('shadowcolor');

  /**
   * Represents the `shadowok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly shadowok: XName = XNamespace.none.getName('shadowok');

  /**
   * Represents the `shapeGeometry` XML name.
   */
  public static readonly shapeGeometry: XName =
    XNamespace.none.getName('shapeGeometry');

  /**
   * Represents the `shapeId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.comment comment}, {@linkcode X.control control}, {@linkcode X.oleObject oleObject}
   */
  public static readonly shapeId: XName = XNamespace.none.getName('shapeId');

  /**
   * Represents the `ShapeID` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly ShapeID_: XName = XNamespace.none.getName('ShapeID');

  /**
   * Represents the `shapeName` XML name.
   */
  public static readonly shapeName: XName =
    XNamespace.none.getName('shapeName');

  /**
   * Represents the `shapetype` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly shapetype: XName =
    XNamespace.none.getName('shapetype');

  /**
   * Represents the `shared` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly shared: XName = XNamespace.none.getName('shared');

  /**
   * Represents the `sheet` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataRef dataRef}, {@linkcode X.rangeSet rangeSet}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X.worksheetSource worksheetSource}
   */
  public static readonly sheet: XName = XNamespace.none.getName('sheet');

  /**
   * Represents the `sheetId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.raf raf}, {@linkcode X.rcft rcft}, {@linkcode X.rcmt rcmt}, {@linkcode X.rfmt rfmt}, {@linkcode X.ris ris}, {@linkcode X.rm rm}, {@linkcode X.rqt rqt}, {@linkcode X.rsnm rsnm}, {@linkcode X.sheet sheet}, {@linkcode X.sheetData sheetData}
   */
  public static readonly sheetId: XName = XNamespace.none.getName('sheetId');

  /**
   * Represents the `sheetPosition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ris ris}
   */
  public static readonly sheetPosition: XName =
    XNamespace.none.getName('sheetPosition');

  /**
   * Represents the `shininess` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly shininess: XName =
    XNamespace.none.getName('shininess');

  /**
   * Represents the `shortcutKey` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly shortcutKey: XName =
    XNamespace.none.getName('shortcutKey');

  /**
   * Represents the `show` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sld sld}, {@linkcode X.scenarios scenarios}
   */
  public static readonly show: XName = XNamespace.none.getName('show');

  /**
   * Represents the `showAll` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly showAll: XName = XNamespace.none.getName('showAll');

  /**
   * Represents the `showAnimation` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.showPr showPr}, {@linkcode P.webPr webPr}
   */
  public static readonly showAnimation: XName =
    XNamespace.none.getName('showAnimation');

  /**
   * Represents the `showAsCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly showAsCaption: XName =
    XNamespace.none.getName('showAsCaption');

  /**
   * Represents the `showAsIcon` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.control control}, {@linkcode P.oleObj oleObj}
   */
  public static readonly showAsIcon: XName =
    XNamespace.none.getName('showAsIcon');

  /**
   * Represents the `showAutoFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly showAutoFilter: XName =
    XNamespace.none.getName('showAutoFilter');

  /**
   * Represents the `showBorderUnselectedTables` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly showBorderUnselectedTables: XName =
    XNamespace.none.getName('showBorderUnselectedTables');

  /**
   * Represents the `showButton` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filterColumn filterColumn}
   */
  public static readonly showButton: XName =
    XNamespace.none.getName('showButton');

  /**
   * Represents the `showCalcMbrs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showCalcMbrs: XName =
    XNamespace.none.getName('showCalcMbrs');

  /**
   * Represents the `showCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicer slicer}
   */
  public static readonly showCaption: XName =
    XNamespace.none.getName('showCaption');

  /**
   * Represents the `showCaptions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.photoAlbum photoAlbum}
   */
  public static readonly showCaptions: XName =
    XNamespace.none.getName('showCaptions');

  /**
   * Represents the `showCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly showCell: XName = XNamespace.none.getName('showCell');

  /**
   * Represents the `showColHeaders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}
   */
  public static readonly showColHeaders: XName =
    XNamespace.none.getName('showColHeaders');

  /**
   * Represents the `showColStripes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}
   */
  public static readonly showColStripes: XName =
    XNamespace.none.getName('showColStripes');

  /**
   * Represents the `showColumnStripes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableStyleInfo tableStyleInfo}
   */
  public static readonly showColumnStripes: XName =
    XNamespace.none.getName('showColumnStripes');

  /**
   * Represents the `showComments` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.viewPr viewPr}, {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly showComments: XName =
    XNamespace.none.getName('showComments');

  /**
   * Represents the `showDataAs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataField dataField}
   */
  public static readonly showDataAs: XName =
    XNamespace.none.getName('showDataAs');

  /**
   * Represents the `showDataDropDown` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showDataDropDown: XName =
    XNamespace.none.getName('showDataDropDown');

  /**
   * Represents the `showDataTips` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showDataTips: XName =
    XNamespace.none.getName('showDataTips');

  /**
   * Represents the `showDrill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showDrill: XName =
    XNamespace.none.getName('showDrill');

  /**
   * Represents the `showDropDown` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly showDropDown: XName =
    XNamespace.none.getName('showDropDown');

  /**
   * Represents the `showDropDowns` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly showDropDowns: XName =
    XNamespace.none.getName('showDropDowns');

  /**
   * Represents the `showDropZones` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showDropZones: XName =
    XNamespace.none.getName('showDropZones');

  /**
   * Represents the `showEmptyCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showEmptyCol: XName =
    XNamespace.none.getName('showEmptyCol');

  /**
   * Represents the `showEmptyRow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showEmptyRow: XName =
    XNamespace.none.getName('showEmptyRow');

  /**
   * Represents the `showError` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showError: XName =
    XNamespace.none.getName('showError');

  /**
   * Represents the `showErrorMessage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly showErrorMessage: XName =
    XNamespace.none.getName('showErrorMessage');

  /**
   * Represents the `showFirstColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableStyleInfo tableStyleInfo}
   */
  public static readonly showFirstColumn: XName =
    XNamespace.none.getName('showFirstColumn');

  /**
   * Represents the `showFormatting` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sorterViewPr sorterViewPr}
   */
  public static readonly showFormatting: XName =
    XNamespace.none.getName('showFormatting');

  /**
   * Represents the `showFormulaBar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly showFormulaBar: XName =
    XNamespace.none.getName('showFormulaBar');

  /**
   * Represents the `showFormulas` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly showFormulas: XName =
    XNamespace.none.getName('showFormulas');

  /**
   * Represents the `showGridLines` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly showGridLines: XName =
    XNamespace.none.getName('showGridLines');

  /**
   * Represents the `showGuides` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cSldViewPr cSldViewPr}
   */
  public static readonly showGuides: XName =
    XNamespace.none.getName('showGuides');

  /**
   * Represents the `showHeader` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotSelection pivotSelection}, {@linkcode X15.timeline timeline}
   */
  public static readonly showHeader: XName =
    XNamespace.none.getName('showHeader');

  /**
   * Represents the `showHeaders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showHeaders: XName =
    XNamespace.none.getName('showHeaders');

  /**
   * Represents the `showHorizontalScroll` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly showHorizontalScroll: XName = XNamespace.none.getName(
    'showHorizontalScroll'
  );

  /**
   * Represents the `showHorizontalScrollbar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timeline timeline}
   */
  public static readonly showHorizontalScrollbar: XName =
    XNamespace.none.getName('showHorizontalScrollbar');

  /**
   * Represents the `showImage` XML name.
   */
  public static readonly showImage: XName =
    XNamespace.none.getName('showImage');

  /**
   * Represents the `ShowImportExportValidationErrors` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.Map_ Map_}
   */
  public static readonly ShowImportExportValidationErrors: XName =
    XNamespace.none.getName('ShowImportExportValidationErrors');

  /**
   * Represents the `showInFieldList` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly showInFieldList: XName =
    XNamespace.none.getName('showInFieldList');

  /**
   * Represents the `showInkAnnotation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly showInkAnnotation: XName =
    XNamespace.none.getName('showInkAnnotation');

  /**
   * Represents the `showInputMessage` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataValidation dataValidation}, {@linkcode X14.dataValidation dataValidation}
   */
  public static readonly showInputMessage: XName =
    XNamespace.none.getName('showInputMessage');

  /**
   * Represents the `showInRibbon` XML name.
   */
  public static readonly showInRibbon: XName =
    XNamespace.none.getName('showInRibbon');

  /**
   * Represents the `showItemImage` XML name.
   */
  public static readonly showItemImage: XName =
    XNamespace.none.getName('showItemImage');

  /**
   * Represents the `showItemLabel` XML name.
   */
  public static readonly showItemLabel: XName =
    XNamespace.none.getName('showItemLabel');

  /**
   * Represents the `showItems` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showItems: XName =
    XNamespace.none.getName('showItems');

  /**
   * Represents the `showLabel` XML name.
   */
  public static readonly showLabel: XName =
    XNamespace.none.getName('showLabel');

  /**
   * Represents the `showLastColumn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}, {@linkcode X.tableStyleInfo tableStyleInfo}
   */
  public static readonly showLastColumn: XName =
    XNamespace.none.getName('showLastColumn');

  /**
   * Represents the `showMasterPhAnim` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.notes notes}, {@linkcode P.sld sld}, {@linkcode P.sldLayout sldLayout}
   */
  public static readonly showMasterPhAnim: XName =
    XNamespace.none.getName('showMasterPhAnim');

  /**
   * Represents the `showMasterSp` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.notes notes}, {@linkcode P.sld sld}, {@linkcode P.sldLayout sldLayout}
   */
  public static readonly showMasterSp: XName =
    XNamespace.none.getName('showMasterSp');

  /**
   * Represents the `showMemberPropertyTips` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showMemberPropertyTips: XName =
    XNamespace.none.getName('showMemberPropertyTips');

  /**
   * Represents the `showMissing` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}, {@linkcode X14.tabular tabular}
   */
  public static readonly showMissing: XName =
    XNamespace.none.getName('showMissing');

  /**
   * Represents the `showMultipleLabel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly showMultipleLabel: XName =
    XNamespace.none.getName('showMultipleLabel');

  /**
   * Represents the `showNarration` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.showPr showPr}
   */
  public static readonly showNarration: XName =
    XNamespace.none.getName('showNarration');

  /**
   * Represents the `showObjects` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookPr workbookPr}
   */
  public static readonly showObjects: XName =
    XNamespace.none.getName('showObjects');

  /**
   * Represents the `showOutlineIcons` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.normalViewPr normalViewPr}
   */
  public static readonly showOutlineIcons: XName =
    XNamespace.none.getName('showOutlineIcons');

  /**
   * Represents the `showOutlineSymbols` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.outlinePr outlinePr}, {@linkcode X.sheetView sheetView}
   */
  public static readonly showOutlineSymbols: XName =
    XNamespace.none.getName('showOutlineSymbols');

  /**
   * Represents the `showPageBreaks` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly showPageBreaks: XName =
    XNamespace.none.getName('showPageBreaks');

  /**
   * Represents the `showPivotChartFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly showPivotChartFilter: XName = XNamespace.none.getName(
    'showPivotChartFilter'
  );

  /**
   * Represents the `showPropAsCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly showPropAsCaption: XName =
    XNamespace.none.getName('showPropAsCaption');

  /**
   * Represents the `showPropCell` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly showPropCell: XName =
    XNamespace.none.getName('showPropCell');

  /**
   * Represents the `showPropTip` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly showPropTip: XName =
    XNamespace.none.getName('showPropTip');

  /**
   * Represents the `showRowCol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly showRowCol: XName =
    XNamespace.none.getName('showRowCol');

  /**
   * Represents the `showRowColHeaders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly showRowColHeaders: XName =
    XNamespace.none.getName('showRowColHeaders');

  /**
   * Represents the `showRowHeaders` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}
   */
  public static readonly showRowHeaders: XName =
    XNamespace.none.getName('showRowHeaders');

  /**
   * Represents the `showRowStripes` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableStyleInfo pivotTableStyleInfo}, {@linkcode X.tableStyleInfo tableStyleInfo}
   */
  public static readonly showRowStripes: XName =
    XNamespace.none.getName('showRowStripes');

  /**
   * Represents the `showRuler` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly showRuler: XName =
    XNamespace.none.getName('showRuler');

  /**
   * Represents the `showScrollbar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.browse browse}
   */
  public static readonly showScrollbar: XName =
    XNamespace.none.getName('showScrollbar');

  /**
   * Represents the `showSelectionLabel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timeline timeline}
   */
  public static readonly showSelectionLabel: XName =
    XNamespace.none.getName('showSelectionLabel');

  /**
   * Represents the `showSheetTabs` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly showSheetTabs: XName =
    XNamespace.none.getName('showSheetTabs');

  /**
   * Represents the `showsigndate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly showsigndate: XName =
    XNamespace.none.getName('showsigndate');

  /**
   * Represents the `showSignDate` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly showSignDate_: XName =
    XNamespace.none.getName('showSignDate');

  /**
   * Represents the `showSpeakerNotes` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.htmlPubPr htmlPubPr}
   */
  public static readonly showSpeakerNotes: XName =
    XNamespace.none.getName('showSpeakerNotes');

  /**
   * Represents the `showSpecialPlsOnTitleSld` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly showSpecialPlsOnTitleSld: XName =
    XNamespace.none.getName('showSpecialPlsOnTitleSld');

  /**
   * Represents the `showStatus` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.browseMode browseMode}
   */
  public static readonly showStatus: XName =
    XNamespace.none.getName('showStatus');

  /**
   * Represents the `showStatusbar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}
   */
  public static readonly showStatusbar: XName =
    XNamespace.none.getName('showStatusbar');

  /**
   * Represents the `showTimeLevel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timeline timeline}
   */
  public static readonly showTimeLevel: XName =
    XNamespace.none.getName('showTimeLevel');

  /**
   * Represents the `showTip` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.mp mp}
   */
  public static readonly showTip: XName = XNamespace.none.getName('showTip');

  /**
   * Represents the `showValue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataBar dataBar}, {@linkcode X.iconSet iconSet}, {@linkcode X14.dataBar dataBar}, {@linkcode X14.iconSet iconSet}
   */
  public static readonly showValue: XName =
    XNamespace.none.getName('showValue');

  /**
   * Represents the `showVerticalScroll` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly showVerticalScroll: XName =
    XNamespace.none.getName('showVerticalScroll');

  /**
   * Represents the `showWhenStopped` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cMediaNode cMediaNode}
   */
  public static readonly showWhenStopped: XName =
    XNamespace.none.getName('showWhenStopped');

  /**
   * Represents the `showWhiteSpace` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly showWhiteSpace: XName =
    XNamespace.none.getName('showWhiteSpace');

  /**
   * Represents the `showZeros` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly showZeros: XName =
    XNamespace.none.getName('showZeros');

  /**
   * Represents the `shrinkToFit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly shrinkToFit: XName =
    XNamespace.none.getName('shrinkToFit');

  /**
   * Represents the `si` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.f f}, {@linkcode X.t t}
   */
  public static readonly si: XName = XNamespace.none.getName('si');

  /**
   * Represents the `sibTransId` XML name.
   */
  public static readonly sibTransId: XName =
    XNamespace.none.getName('sibTransId');

  /**
   * Represents the `sId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.rrc rrc}, {@linkcode X.undo undo}
   */
  public static readonly sId: XName = XNamespace.none.getName('sId');

  /**
   * Represents the `side` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W10.wrap wrap}
   */
  public static readonly side: XName = XNamespace.none.getName('side');

  /**
   * Represents the `signinginstructions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly signinginstructions: XName = XNamespace.none.getName(
    'signinginstructions'
  );

  /**
   * Represents the `signingInstructions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly signingInstructions_: XName = XNamespace.none.getName(
    'signingInstructions'
  );

  /**
   * Represents the `signinginstructionsset` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly signinginstructionsset: XName =
    XNamespace.none.getName('signinginstructionsset');

  /**
   * Represents the `signingInstructionsSet` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly signingInstructionsSet_: XName =
    XNamespace.none.getName('signingInstructionsSet');

  /**
   * Represents the `sigprovurl` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.signatureline signatureline}
   */
  public static readonly sigprovurl: XName =
    XNamespace.none.getName('sigprovurl');

  /**
   * Represents the `sigProvUrl` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly sigProvUrl_: XName =
    XNamespace.none.getName('sigProvUrl');

  /**
   * Represents the `simplePos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.anchor anchor}
   */
  public static readonly simplePos: XName =
    XNamespace.none.getName('simplePos');

  /**
   * Represents the `singleRangeFilterState` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.state state}
   */
  public static readonly singleRangeFilterState: XName =
    XNamespace.none.getName('singleRangeFilterState');

  /**
   * Represents the `singleSignOnId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}
   */
  public static readonly singleSignOnId: XName =
    XNamespace.none.getName('singleSignOnId');

  /**
   * Represents the `siteId` XML name.
   */
  public static readonly siteId: XName = XNamespace.none.getName('siteId');

  /**
   * Represents the `size` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticMarker artisticMarker}, {@linkcode V.fill fill}, {@linkcode X.tableStyleElement tableStyleElement}
   */
  public static readonly size: XName = XNamespace.none.getName('size');

  /**
   * Represents the `sizeString` XML name.
   */
  public static readonly sizeString: XName =
    XNamespace.none.getName('sizeString');

  /**
   * Represents the `sizeWithCells` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.anchor anchor}
   */
  public static readonly sizeWithCells: XName =
    XNamespace.none.getName('sizeWithCells');

  /**
   * Represents the `skewamt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly skewamt: XName = XNamespace.none.getName('skewamt');

  /**
   * Represents the `skewangle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly skewangle: XName =
    XNamespace.none.getName('skewangle');

  /**
   * Represents the `sldNum` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.hf hf}
   */
  public static readonly sldNum: XName = XNamespace.none.getName('sldNum');

  /**
   * Represents the `slicerData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly slicerData: XName =
    XNamespace.none.getName('slicerData');

  /**
   * Represents the `slideIdLst` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P14.section section}
   */
  public static readonly slideIdLst: XName =
    XNamespace.none.getName('slideIdLst');

  /**
   * Represents the `smoothness` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticGlowEdges artisticGlowEdges}, {@linkcode A14.artisticPlasticWrap artisticPlasticWrap}
   */
  public static readonly smoothness: XName =
    XNamespace.none.getName('smoothness');

  /**
   * Represents the `smtClean` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly smtClean: XName = XNamespace.none.getName('smtClean');

  /**
   * Represents the `smtId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly smtId: XName = XNamespace.none.getName('smtId');

  /**
   * Represents the `snapToGrid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cSldViewPr cSldViewPr}
   */
  public static readonly snapToGrid: XName =
    XNamespace.none.getName('snapToGrid');

  /**
   * Represents the `snapToObjects` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cSldViewPr cSldViewPr}
   */
  public static readonly snapToObjects: XName =
    XNamespace.none.getName('snapToObjects');

  /**
   * Represents the `snapVertSplitter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.normalViewPr normalViewPr}
   */
  public static readonly snapVertSplitter: XName =
    XNamespace.none.getName('snapVertSplitter');

  /**
   * Represents the `solveOrder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.calculatedMember calculatedMember}
   */
  public static readonly solveOrder: XName =
    XNamespace.none.getName('solveOrder');

  /**
   * Represents the `sort` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetProtection sheetProtection}
   */
  public static readonly sort: XName = XNamespace.none.getName('sort');

  /**
   * Represents the `sortBy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortCondition sortCondition}, {@linkcode X14.sortCondition sortCondition}
   */
  public static readonly sortBy: XName = XNamespace.none.getName('sortBy');

  /**
   * Represents the `sortMethod` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sortState sortState}
   */
  public static readonly sortMethod: XName =
    XNamespace.none.getName('sortMethod');

  /**
   * Represents the `sortOrder` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.level level}, {@linkcode X14.tabular tabular}, {@linkcode X15.tableSlicerCache tableSlicerCache}
   */
  public static readonly sortOrder: XName =
    XNamespace.none.getName('sortOrder');

  /**
   * Represents the `sortType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.set set}
   */
  public static readonly sortType: XName = XNamespace.none.getName('sortType');

  /**
   * Represents the `source` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rm rm}
   */
  public static readonly source: XName = XNamespace.none.getName('source');

  /**
   * Represents the `sourceCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.level level}
   */
  public static readonly sourceCaption: XName =
    XNamespace.none.getName('sourceCaption');

  /**
   * Represents the `sourceData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly sourceData: XName =
    XNamespace.none.getName('sourceData');

  /**
   * Represents the `sourceDataName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotTableUISettings pivotTableUISettings}, {@linkcode X15.queryTable queryTable}
   */
  public static readonly sourceDataName: XName =
    XNamespace.none.getName('sourceDataName');

  /**
   * Represents the `sourceField` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.dataField dataField}
   */
  public static readonly sourceField: XName =
    XNamespace.none.getName('sourceField');

  /**
   * Represents the `sourceFile` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.connection connection}, {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly sourceFile: XName =
    XNamespace.none.getName('sourceFile');

  /**
   * Represents the `sourceLinked` XML name.
   */
  public static readonly sourceLinked: XName =
    XNamespace.none.getName('sourceLinked');

  /**
   * Represents the `sourceName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.slicerCacheDefinition slicerCacheDefinition}, {@linkcode X15.rangePr rangePr}, {@linkcode X15.timelineCacheDefinition timelineCacheDefinition}
   */
  public static readonly sourceName: XName =
    XNamespace.none.getName('sourceName');

  /**
   * Represents the `sourceObject` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}
   */
  public static readonly sourceObject: XName =
    XNamespace.none.getName('sourceObject');

  /**
   * Represents the `sourceRef` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}
   */
  public static readonly sourceRef: XName =
    XNamespace.none.getName('sourceRef');

  /**
   * Represents the `sourceSheetId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rm rm}
   */
  public static readonly sourceSheetId: XName =
    XNamespace.none.getName('sourceSheetId');

  /**
   * Represents the `sourceType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishItem webPublishItem}
   */
  public static readonly sourceType: XName =
    XNamespace.none.getName('sourceType');

  /**
   * Represents the `sp` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ds ds}
   */
  public static readonly sp: XName = XNamespace.none.getName('sp');

  /**
   * Represents the `space` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly space: XName = XNamespace.none.getName('space');

  /**
   * Represents the `spans` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}
   */
  public static readonly spans: XName = XNamespace.none.getName('spans');

  /**
   * Represents the `spc` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly spc: XName = XNamespace.none.getName('spc');

  /**
   * Represents the `spcCol` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly spcCol: XName = XNamespace.none.getName('spcCol');

  /**
   * Represents the `spcFirstLastPara` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly spcFirstLastPara: XName =
    XNamespace.none.getName('spcFirstLastPara');

  /**
   * Represents the `spd` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}, {@linkcode P.transition transition}
   */
  public static readonly spd: XName = XNamespace.none.getName('spd');

  /**
   * Represents the `specificationRef` XML name.
   */
  public static readonly specificationRef: XName =
    XNamespace.none.getName('specificationRef');

  /**
   * Represents the `specularity` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly specularity: XName =
    XNamespace.none.getName('specularity');

  /**
   * Represents the `spid` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.cameraTool cameraTool}, {@linkcode A14.compatExt compatExt}, {@linkcode P.bldDgm bldDgm}, {@linkcode P.bldGraphic bldGraphic}, {@linkcode P.bldOleChart bldOleChart}, {@linkcode P.bldP bldP}, {@linkcode P.control control}, {@linkcode P.inkTgt inkTgt}, {@linkcode P.oleObj oleObj}, {@linkcode P.spTgt spTgt}, {@linkcode P.subSp subSp}, {@linkcode P14.bmkTgt bmkTgt}
   */
  public static readonly spid: XName = XNamespace.none.getName('spid');

  /**
   * Represents the `spidmax` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.shapedefaults shapedefaults}
   */
  public static readonly spidmax: XName = XNamespace.none.getName('spidmax');

  /**
   * Represents the `spinCount` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}, {@linkcode X.fileSharing fileSharing}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.sheetProtection sheetProtection}, {@linkcode X14.protectedRange protectedRange}
   */
  public static readonly spinCount: XName =
    XNamespace.none.getName('spinCount');

  /**
   * Represents the `spinValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.modifyVerifier modifyVerifier}
   */
  public static readonly spinValue: XName =
    XNamespace.none.getName('spinValue');

  /**
   * Represents the `splitAll` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly splitAll: XName = XNamespace.none.getName('splitAll');

  /**
   * Represents the `splitFirst` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.metadataType metadataType}
   */
  public static readonly splitFirst: XName =
    XNamespace.none.getName('splitFirst');

  /**
   * Represents the `spokes` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.wheel wheel}, {@linkcode P14.wheelReverse wheelReverse}
   */
  public static readonly spokes: XName = XNamespace.none.getName('spokes');

  /**
   * Represents the `sqlType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}, {@linkcode X.parameter parameter}
   */
  public static readonly sqlType: XName = XNamespace.none.getName('sqlType');

  /**
   * Represents the `sqref` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.conditionalFormatting conditionalFormatting}, {@linkcode X.dataValidation dataValidation}, {@linkcode X.ignoredError ignoredError}, {@linkcode X.protectedRange protectedRange}, {@linkcode X.rfmt rfmt}, {@linkcode X.scenarios scenarios}, {@linkcode X.selection selection}
   */
  public static readonly sqref: XName = XNamespace.none.getName('sqref');

  /**
   * Represents the `src` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.fill fill}, {@linkcode V.image image}, {@linkcode V.stroke stroke}
   */
  public static readonly src: XName = XNamespace.none.getName('src');

  /**
   * Represents the `srcId` XML name.
   */
  public static readonly srcId: XName = XNamespace.none.getName('srcId');

  /**
   * Represents the `srcOrd` XML name.
   */
  public static readonly srcOrd: XName = XNamespace.none.getName('srcOrd');

  /**
   * Represents the `srcUrl` XML name.
   */
  public static readonly srcUrl: XName = XNamespace.none.getName('srcUrl');

  /**
   * Represents the `st` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A16.cxnDERefs cxnDERefs}, {@linkcode P.charRg charRg}, {@linkcode P.pRg pRg}, {@linkcode P.sldRg sldRg}, {@linkcode P14.trim trim}, {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X15.x x}
   */
  public static readonly st: XName = XNamespace.none.getName('st');

  /**
   * Represents the `stA` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.reflection reflection}
   */
  public static readonly stA: XName = XNamespace.none.getName('stA');

  /**
   * Represents the `stAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.arcTo arcTo}
   */
  public static readonly stAng: XName = XNamespace.none.getName('stAng');

  /**
   * Represents the `start` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.proxy proxy}, {@linkcode X.pivotSelection pivotSelection}, {@linkcode X.rfmt rfmt}
   */
  public static readonly start: XName = XNamespace.none.getName('start');

  /**
   * Represents the `startangle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}
   */
  public static readonly startangle: XName =
    XNamespace.none.getName('startangle');

  /**
   * Represents the `startarrow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly startarrow: XName =
    XNamespace.none.getName('startarrow');

  /**
   * Represents the `startarrowlength` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly startarrowlength: XName =
    XNamespace.none.getName('startarrowlength');

  /**
   * Represents the `startarrowwidth` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}
   */
  public static readonly startarrowwidth: XName =
    XNamespace.none.getName('startarrowwidth');

  /**
   * Represents the `startAt` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buAutoNum buAutoNum}
   */
  public static readonly startAt: XName = XNamespace.none.getName('startAt');

  /**
   * Represents the `startDate` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}, {@linkcode X15.bounds bounds}, {@linkcode X15.selection selection}
   */
  public static readonly startDate: XName =
    XNamespace.none.getName('startDate');

  /**
   * Represents the `startFromScratch` XML name.
   */
  public static readonly startFromScratch: XName =
    XNamespace.none.getName('startFromScratch');

  /**
   * Represents the `startIndex` XML name.
   */
  public static readonly startIndex: XName =
    XNamespace.none.getName('startIndex');

  /**
   * Represents the `startItem` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.range range}, {@linkcode X14.slicer slicer}
   */
  public static readonly startItem: XName =
    XNamespace.none.getName('startItem');

  /**
   * Represents the `startLabels` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataConsolidate dataConsolidate}
   */
  public static readonly startLabels: XName =
    XNamespace.none.getName('startLabels');

  /**
   * Represents the `startNum` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rangePr rangePr}
   */
  public static readonly startNum: XName = XNamespace.none.getName('startNum');

  /**
   * Represents the `state` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.pane pane}, {@linkcode X.sheet sheet}
   */
  public static readonly state: XName = XNamespace.none.getName('state');

  /**
   * Represents the `status` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.kpi kpi}
   */
  public static readonly status: XName = XNamespace.none.getName('status');

  /**
   * Represents the `statusBar` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}, {@linkcode X.rdn rdn}
   */
  public static readonly statusBar: XName =
    XNamespace.none.getName('statusBar');

  /**
   * Represents the `stdDev` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly stdDev: XName = XNamespace.none.getName('stdDev');

  /**
   * Represents the `stdDevPSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly stdDevPSubtotal: XName =
    XNamespace.none.getName('stdDevPSubtotal');

  /**
   * Represents the `stdDevSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly stdDevSubtotal: XName =
    XNamespace.none.getName('stdDevSubtotal');

  /**
   * Represents the `step` XML name.
   */
  public static readonly step: XName = XNamespace.none.getName('step');

  /**
   * Represents the `stopIfTrue` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly stopIfTrue: XName =
    XNamespace.none.getName('stopIfTrue');

  /**
   * Represents the `store` XML name.
   */
  public static readonly store: XName = XNamespace.none.getName('store');

  /**
   * Represents the `storeType` XML name.
   */
  public static readonly storeType: XName =
    XNamespace.none.getName('storeType');

  /**
   * Represents the `stPos` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.reflection reflection}
   */
  public static readonly stPos: XName = XNamespace.none.getName('stPos');

  /**
   * Represents the `strictFirstAndLastChars` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.presentation presentation}
   */
  public static readonly strictFirstAndLastChars: XName =
    XNamespace.none.getName('strictFirstAndLastChars');

  /**
   * Represents the `strike` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}
   */
  public static readonly strike: XName = XNamespace.none.getName('strike');

  /**
   * Represents the `string` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textpath textpath}, {@linkcode X.parameter parameter}
   */
  public static readonly string: XName = XNamespace.none.getName('string');

  /**
   * Represents the `stringValue1` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly stringValue1: XName =
    XNamespace.none.getName('stringValue1');

  /**
   * Represents the `stringValue2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.filter filter}
   */
  public static readonly stringValue2: XName =
    XNamespace.none.getName('stringValue2');

  /**
   * Represents the `stroke` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.path path}, {@linkcode O.shapedefaults shapedefaults}
   */
  public static readonly stroke: XName = XNamespace.none.getName('stroke');

  /**
   * Represents the `strokecolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.colormenu colormenu}, {@linkcode O.shapedefaults shapedefaults}, {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly strokecolor: XName =
    XNamespace.none.getName('strokecolor');

  /**
   * Represents the `stroked` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly stroked: XName = XNamespace.none.getName('stroked');

  /**
   * Represents the `strokeok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly strokeok: XName = XNamespace.none.getName('strokeok');

  /**
   * Represents the `strokeweight` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly strokeweight: XName =
    XNamespace.none.getName('strokeweight');

  /**
   * Represents the `style` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.shapedefaults shapedefaults}, {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}, {@linkcode V.textbox textbox}, {@linkcode V.textpath textpath}, {@linkcode X.bottom bottom}, {@linkcode X.col col}, {@linkcode X.diagonal diagonal}, {@linkcode X.end end}, {@linkcode X.horizontal horizontal}, {@linkcode X.left left}, {@linkcode X.right right}, {@linkcode X.start start}, {@linkcode X.top top}, {@linkcode X.vertical vertical}, {@linkcode X14.slicer slicer}, {@linkcode X15.timeline timeline}
   */
  public static readonly style: XName = XNamespace.none.getName('style');

  /**
   * Represents the `styleId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tableStyle tableStyle}, {@linkcode A.tblStyle tblStyle}
   */
  public static readonly styleId: XName = XNamespace.none.getName('styleId');

  /**
   * Represents the `styleLbl` XML name.
   */
  public static readonly styleLbl: XName = XNamespace.none.getName('styleLbl');

  /**
   * Represents the `styleName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tableStyle tableStyle}, {@linkcode A.tblStyle tblStyle}
   */
  public static readonly styleName: XName =
    XNamespace.none.getName('styleName');

  /**
   * Represents the `StyleName` XML name.
   */
  public static readonly StyleName_: XName =
    XNamespace.none.getName('StyleName');

  /**
   * Represents the `subtotal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataField dataField}
   */
  public static readonly subtotal: XName = XNamespace.none.getName('subtotal');

  /**
   * Represents the `subtotalCaption` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly subtotalCaption: XName =
    XNamespace.none.getName('subtotalCaption');

  /**
   * Represents the `subtotalHiddenItems` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly subtotalHiddenItems: XName = XNamespace.none.getName(
    'subtotalHiddenItems'
  );

  /**
   * Represents the `subtotalTop` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.pivotHierarchy pivotHierarchy}
   */
  public static readonly subtotalTop: XName =
    XNamespace.none.getName('subtotalTop');

  /**
   * Represents the `suggestedSigner` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly suggestedSigner: XName =
    XNamespace.none.getName('suggestedSigner');

  /**
   * Represents the `suggestedSigner2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly suggestedSigner2: XName =
    XNamespace.none.getName('suggestedSigner2');

  /**
   * Represents the `suggestedSignerEmail` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.signatureLine signatureLine}
   */
  public static readonly suggestedSignerEmail: XName = XNamespace.none.getName(
    'suggestedSignerEmail'
  );

  /**
   * Represents the `summaryBelow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.outlinePr outlinePr}
   */
  public static readonly summaryBelow: XName =
    XNamespace.none.getName('summaryBelow');

  /**
   * Represents the `summaryRight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.outlinePr outlinePr}
   */
  public static readonly summaryRight: XName =
    XNamespace.none.getName('summaryRight');

  /**
   * Represents the `sumSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly sumSubtotal: XName =
    XNamespace.none.getName('sumSubtotal');

  /**
   * Represents the `supertip` XML name.
   */
  public static readonly supertip: XName = XNamespace.none.getName('supertip');

  /**
   * Represents the `supportAddCalcMems` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly supportAddCalcMems: XName =
    XNamespace.none.getName('supportAddCalcMems');

  /**
   * Represents the `supportAdvancedDrill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly supportAdvancedDrill: XName = XNamespace.none.getName(
    'supportAdvancedDrill'
  );

  /**
   * Represents the `supportSubquery` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly supportSubquery: XName =
    XNamespace.none.getName('supportSubquery');

  /**
   * Represents the `supportSubqueryCalcMem` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly supportSubqueryCalcMem: XName =
    XNamespace.none.getName('supportSubqueryCalcMem');

  /**
   * Represents the `supportSubqueryNonVisual` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly supportSubqueryNonVisual: XName =
    XNamespace.none.getName('supportSubqueryNonVisual');

  /**
   * Represents the `swAng` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.arcTo arcTo}
   */
  public static readonly swAng: XName = XNamespace.none.getName('swAng');

  /**
   * Represents the `switch` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly switch: XName = XNamespace.none.getName('switch');

  /**
   * Represents the `sx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}, {@linkcode A.tile tile}, {@linkcode A.xfrm xfrm}
   */
  public static readonly sx: XName = XNamespace.none.getName('sx');

  /**
   * Represents the `sy` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.outerShdw outerShdw}, {@linkcode A.reflection reflection}, {@linkcode A.tile tile}, {@linkcode A.xfrm xfrm}
   */
  public static readonly sy: XName = XNamespace.none.getName('sy');

  /**
   * Represents the `symbol` XML name.
   */
  public static readonly symbol: XName = XNamespace.none.getName('symbol');

  /**
   * Represents the `syncBehavior` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly syncBehavior: XName =
    XNamespace.none.getName('syncBehavior');

  /**
   * Represents the `syncHorizontal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly syncHorizontal: XName =
    XNamespace.none.getName('syncHorizontal');

  /**
   * Represents the `syncRef` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly syncRef: XName = XNamespace.none.getName('syncRef');

  /**
   * Represents the `syncVertical` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly syncVertical: XName =
    XNamespace.none.getName('syncVertical');

  /**
   * Represents the `sz` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}, {@linkcode P.ph ph}, {@linkcode P.restoredLeft restoredLeft}, {@linkcode P.restoredTop restoredTop}
   */
  public static readonly sz: XName = XNamespace.none.getName('sz');

  /**
   * Represents the `t` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.fillRect fillRect}, {@linkcode A.fillToRect fillToRect}, {@linkcode A.rect rect}, {@linkcode A.srcRect srcRect}, {@linkcode A.tileRect tileRect}, {@linkcode A14.backgroundRemoval backgroundRemoval}, {@linkcode P14.tracePt tracePt}, {@linkcode WP.effectExtent effectExtent}, {@linkcode X.c c}, {@linkcode X.cell cell}, {@linkcode X.f f}, {@linkcode X.i i}, {@linkcode X.item item}, {@linkcode X.nc nc}, {@linkcode X.oc oc}, {@linkcode X.rc rc}, {@linkcode X.tp tp}, {@linkcode X.value value}, {@linkcode X15.c c}
   */
  public static readonly t: XName = XNamespace.none.getName('t');

  /**
   * Represents the `tab` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly tab: XName = XNamespace.none.getName('tab');

  /**
   * Represents the `tabId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTable pivotTable}, {@linkcode X15.pivotTable pivotTable}
   */
  public static readonly tabId: XName = XNamespace.none.getName('tabId');

  /**
   * Represents the `table` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableStyle tableStyle}
   */
  public static readonly table: XName = XNamespace.none.getName('table');

  /**
   * Represents the `tableBorderDxfId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly tableBorderDxfId: XName =
    XNamespace.none.getName('tableBorderDxfId');

  /**
   * Represents the `tableColumnId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableField queryTableField}
   */
  public static readonly tableColumnId: XName =
    XNamespace.none.getName('tableColumnId');

  /**
   * Represents the `tableId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.tableSlicerCache tableSlicerCache}
   */
  public static readonly tableId: XName = XNamespace.none.getName('tableId');

  /**
   * Represents the `tableType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly tableType: XName =
    XNamespace.none.getName('tableType');

  /**
   * Represents the `tabRatio` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly tabRatio: XName = XNamespace.none.getName('tabRatio');

  /**
   * Represents the `tabSelected` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly tabSelected: XName =
    XNamespace.none.getName('tabSelected');

  /**
   * Represents the `tag` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly tag: XName = XNamespace.none.getName('tag');

  /**
   * Represents the `tags` XML name.
   */
  public static readonly tags: XName = XNamespace.none.getName('tags');

  /**
   * Represents the `target` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly target: XName = XNamespace.none.getName('target');

  /**
   * Represents the `targetScreenSize` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A15.backgroundPr backgroundPr}, {@linkcode X.webPublishing webPublishing}
   */
  public static readonly targetScreenSize: XName =
    XNamespace.none.getName('targetScreenSize');

  /**
   * Represents the `text` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}, {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}, {@linkcode X15.dbCommand dbCommand}
   */
  public static readonly text: XName = XNamespace.none.getName('text');

  /**
   * Represents the `textborder` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.callout callout}
   */
  public static readonly textborder: XName =
    XNamespace.none.getName('textborder');

  /**
   * Represents the `textboxrect` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly textboxrect: XName =
    XNamespace.none.getName('textboxrect');

  /**
   * Represents the `textDates` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly textDates: XName =
    XNamespace.none.getName('textDates');

  /**
   * Represents the `textHAlign` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly textHAlign: XName =
    XNamespace.none.getName('textHAlign');

  /**
   * Represents the `textlink` XML name.
   */
  public static readonly textlink: XName = XNamespace.none.getName('textlink');

  /**
   * Represents the `textpathok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}
   */
  public static readonly textpathok: XName =
    XNamespace.none.getName('textpathok');

  /**
   * Represents the `textRotation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly textRotation: XName =
    XNamespace.none.getName('textRotation');

  /**
   * Represents the `textVAlign` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly textVAlign: XName =
    XNamespace.none.getName('textVAlign');

  /**
   * Represents the `tgtFrame` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}
   */
  public static readonly tgtFrame: XName = XNamespace.none.getName('tgtFrame');

  /**
   * Represents the `theme` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.bgColor bgColor}, {@linkcode X.color color}, {@linkcode X.fgColor fgColor}, {@linkcode X.tabColor tabColor}, {@linkcode X14.axisColor axisColor}, {@linkcode X14.borderColor borderColor}, {@linkcode X14.color color}, {@linkcode X14.colorAxis colorAxis}, {@linkcode X14.colorFirst colorFirst}, {@linkcode X14.colorHigh colorHigh}, {@linkcode X14.colorLast colorLast}, {@linkcode X14.colorLow colorLow}, {@linkcode X14.colorMarkers colorMarkers}, {@linkcode X14.colorNegative colorNegative}, {@linkcode X14.colorSeries colorSeries}, {@linkcode X14.fillColor fillColor}, {@linkcode X14.negativeBorderColor negativeBorderColor}, {@linkcode X14.negativeFillColor negativeFillColor}
   */
  public static readonly theme: XName = XNamespace.none.getName('theme');

  /**
   * Represents the `thickBot` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}
   */
  public static readonly thickBot: XName = XNamespace.none.getName('thickBot');

  /**
   * Represents the `thickBottom` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly thickBottom: XName =
    XNamespace.none.getName('thickBottom');

  /**
   * Represents the `thicket` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishing webPublishing}
   */
  public static readonly thicket: XName = XNamespace.none.getName('thicket');

  /**
   * Represents the `thickTop` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.row row}, {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly thickTop: XName = XNamespace.none.getName('thickTop');

  /**
   * Represents the `thousands` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.textPr textPr}, {@linkcode X15.textPr textPr}
   */
  public static readonly thousands: XName =
    XNamespace.none.getName('thousands');

  /**
   * Represents the `thresh` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.alphaBiLevel alphaBiLevel}, {@linkcode A.biLevel biLevel}
   */
  public static readonly thresh: XName = XNamespace.none.getName('thresh');

  /**
   * Represents the `thruBlk` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cut cut}, {@linkcode P.fade fade}, {@linkcode P14.reveal reveal}
   */
  public static readonly thruBlk: XName = XNamespace.none.getName('thruBlk');

  /**
   * Represents the `time` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.end end}, {@linkcode A.st st}, {@linkcode P14.bmk bmk}, {@linkcode P14.nullEvt nullEvt}, {@linkcode P14.pauseEvt pauseEvt}, {@linkcode P14.playEvt playEvt}, {@linkcode P14.resumeEvt resumeEvt}, {@linkcode P14.seekEvt seekEvt}, {@linkcode P14.stopEvt stopEvt}, {@linkcode P14.triggerEvt triggerEvt}, {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly time: XName = XNamespace.none.getName('time');

  /**
   * Represents the `timelineData` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.timelinePivotCacheDefinition timelinePivotCacheDefinition}
   */
  public static readonly timelineData: XName =
    XNamespace.none.getName('timelineData');

  /**
   * Represents the `timeOffset` XML name.
   */
  public static readonly timeOffset: XName =
    XNamespace.none.getName('timeOffset');

  /**
   * Represents the `timePeriod` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cfRule cfRule}, {@linkcode X14.cfRule cfRule}
   */
  public static readonly timePeriod: XName =
    XNamespace.none.getName('timePeriod');

  /**
   * Represents the `timestampRef` XML name.
   */
  public static readonly timestampRef: XName =
    XNamespace.none.getName('timestampRef');

  /**
   * Represents the `timeString` XML name.
   */
  public static readonly timeString: XName =
    XNamespace.none.getName('timeString');

  /**
   * Represents the `timeZoneBias` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P15.threadingInfo threadingInfo}
   */
  public static readonly timeZoneBias: XName =
    XNamespace.none.getName('timeZoneBias');

  /**
   * Represents the `tIns` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly tIns: XName = XNamespace.none.getName('tIns');

  /**
   * Represents the `tint` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.bgColor bgColor}, {@linkcode X.color color}, {@linkcode X.fgColor fgColor}, {@linkcode X.tabColor tabColor}, {@linkcode X14.axisColor axisColor}, {@linkcode X14.borderColor borderColor}, {@linkcode X14.color color}, {@linkcode X14.colorAxis colorAxis}, {@linkcode X14.colorFirst colorFirst}, {@linkcode X14.colorHigh colorHigh}, {@linkcode X14.colorLast colorLast}, {@linkcode X14.colorLow colorLow}, {@linkcode X14.colorMarkers colorMarkers}, {@linkcode X14.colorNegative colorNegative}, {@linkcode X14.colorSeries colorSeries}, {@linkcode X14.fillColor fillColor}, {@linkcode X14.negativeBorderColor negativeBorderColor}, {@linkcode X14.negativeFillColor negativeFillColor}
   */
  public static readonly tint: XName = XNamespace.none.getName('tint');

  /**
   * Represents the `title` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvPr cNvPr}, {@linkcode A14.cNvPr cNvPr}, {@linkcode P.cNvPr cNvPr}, {@linkcode P14.cNvPr cNvPr}, {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}, {@linkcode W14.cNvPr cNvPr}, {@linkcode WP.docPr docPr}, {@linkcode WPG.cNvPr cNvPr}, {@linkcode WPS.cNvPr cNvPr}, {@linkcode X.webPublishItem webPublishItem}, {@linkcode X.webPublishObject webPublishObject}
   */
  public static readonly title: XName = XNamespace.none.getName('title');

  /**
   * Represents the `tm` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.tav tav}
   */
  public static readonly tm: XName = XNamespace.none.getName('tm');

  /**
   * Represents the `tmFilter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cTn cTn}
   */
  public static readonly tmFilter: XName = XNamespace.none.getName('tmFilter');

  /**
   * Represents the `to` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim anim}, {@linkcode P.animRot animRot}, {@linkcode P.cBhvr cBhvr}, {@linkcode V.curve curve}, {@linkcode V.line line}
   */
  public static readonly to: XName = XNamespace.none.getName('to');

  /**
   * Represents the `toColumn` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.modelRelationship modelRelationship}
   */
  public static readonly toColumn: XName = XNamespace.none.getName('toColumn');

  /**
   * Represents the `tooltip` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick hlinkClick}, {@linkcode A.hlinkHover hlinkHover}, {@linkcode A.hlinkMouseOver hlinkMouseOver}, {@linkcode X.hyperlink hyperlink}
   */
  public static readonly tooltip: XName = XNamespace.none.getName('tooltip');

  /**
   * Represents the `top` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.gradientFill gradientFill}, {@linkcode X.pageMargins pageMargins}, {@linkcode X.top10 top10}
   */
  public static readonly top: XName = XNamespace.none.getName('top');

  /**
   * Represents the `topAutoShow` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly topAutoShow: XName =
    XNamespace.none.getName('topAutoShow');

  /**
   * Represents the `topLabels` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dataConsolidate dataConsolidate}
   */
  public static readonly topLabels: XName =
    XNamespace.none.getName('topLabels');

  /**
   * Represents the `topLeftCell` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.pane pane}, {@linkcode X.sheetView sheetView}
   */
  public static readonly topLeftCell: XName =
    XNamespace.none.getName('topLeftCell');

  /**
   * Represents the `toTable` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.modelRelationship modelRelationship}
   */
  public static readonly toTable: XName = XNamespace.none.getName('toTable');

  /**
   * Represents the `totalsRowBorderDxfId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly totalsRowBorderDxfId: XName = XNamespace.none.getName(
    'totalsRowBorderDxfId'
  );

  /**
   * Represents the `totalsRowCellStyle` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly totalsRowCellStyle: XName =
    XNamespace.none.getName('totalsRowCellStyle');

  /**
   * Represents the `totalsRowCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly totalsRowCount: XName =
    XNamespace.none.getName('totalsRowCount');

  /**
   * Represents the `totalsRowDxfId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}, {@linkcode X.tableColumn tableColumn}
   */
  public static readonly totalsRowDxfId: XName =
    XNamespace.none.getName('totalsRowDxfId');

  /**
   * Represents the `totalsRowFunction` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableColumn tableColumn}
   */
  public static readonly totalsRowFunction: XName =
    XNamespace.none.getName('totalsRowFunction');

  /**
   * Represents the `totalsRowLabel` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.tableColumn tableColumn}
   */
  public static readonly totalsRowLabel: XName =
    XNamespace.none.getName('totalsRowLabel');

  /**
   * Represents the `totalsRowShown` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.table table}
   */
  public static readonly totalsRowShown: XName =
    XNamespace.none.getName('totalsRowShown');

  /**
   * Represents the `traceDataRef` XML name.
   */
  public static readonly traceDataRef: XName =
    XNamespace.none.getName('traceDataRef');

  /**
   * Represents the `traceFormatRef` XML name.
   */
  public static readonly traceFormatRef: XName =
    XNamespace.none.getName('traceFormatRef');

  /**
   * Represents the `track` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.end end}, {@linkcode A.st st}
   */
  public static readonly track: XName = XNamespace.none.getName('track');

  /**
   * Represents the `trackRevisions` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly trackRevisions: XName =
    XNamespace.none.getName('trackRevisions');

  /**
   * Represents the `trans` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.artisticCement artisticCement}, {@linkcode A14.artisticChalkSketch artisticChalkSketch}, {@linkcode A14.artisticCrisscrossEtching artisticCrisscrossEtching}, {@linkcode A14.artisticCutout artisticCutout}, {@linkcode A14.artisticFilmGrain artisticFilmGrain}, {@linkcode A14.artisticGlass artisticGlass}, {@linkcode A14.artisticGlowDiffused artisticGlowDiffused}, {@linkcode A14.artisticGlowEdges artisticGlowEdges}, {@linkcode A14.artisticLightScreen artisticLightScreen}, {@linkcode A14.artisticLineDrawing artisticLineDrawing}, {@linkcode A14.artisticMarker artisticMarker}, {@linkcode A14.artisticMosiaicBubbles artisticMosiaicBubbles}, {@linkcode A14.artisticPaintBrush artisticPaintBrush}, {@linkcode A14.artisticPaintStrokes artisticPaintStrokes}, {@linkcode A14.artisticPastelsSmooth artisticPastelsSmooth}, {@linkcode A14.artisticPencilGrayscale artisticPencilGrayscale}, {@linkcode A14.artisticPencilSketch artisticPencilSketch}, {@linkcode A14.artisticPhotocopy artisticPhotocopy}, {@linkcode A14.artisticPlasticWrap artisticPlasticWrap}, {@linkcode A14.artisticTexturizer artisticTexturizer}, {@linkcode A14.artisticWatercolorSponge artisticWatercolorSponge}
   */
  public static readonly trans: XName = XNamespace.none.getName('trans');

  /**
   * Represents the `transition` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animEffect animEffect}
   */
  public static readonly transition: XName =
    XNamespace.none.getName('transition');

  /**
   * Represents the `transitionEntry` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly transitionEntry: XName =
    XNamespace.none.getName('transitionEntry');

  /**
   * Represents the `transitionEvaluation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetPr sheetPr}
   */
  public static readonly transitionEvaluation: XName = XNamespace.none.getName(
    'transitionEvaluation'
  );

  /**
   * Represents the `trend` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.kpi kpi}
   */
  public static readonly trend: XName = XNamespace.none.getName('trend');

  /**
   * Represents the `trim` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textpath textpath}
   */
  public static readonly trim: XName = XNamespace.none.getName('trim');

  /**
   * Represents the `tupleCache` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly tupleCache: XName =
    XNamespace.none.getName('tupleCache');

  /**
   * Represents the `twoDigitTextYear` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly twoDigitTextYear: XName =
    XNamespace.none.getName('twoDigitTextYear');

  /**
   * Represents the `tx` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.relOff relOff}, {@linkcode A.tile tile}, {@linkcode A.xfrm xfrm}
   */
  public static readonly tx: XName = XNamespace.none.getName('tx');

  /**
   * Represents the `tx1` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly tx1: XName = XNamespace.none.getName('tx1');

  /**
   * Represents the `tx2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrMap clrMap}, {@linkcode A.overrideClrMapping overrideClrMapping}, {@linkcode P.clrMap clrMap}
   */
  public static readonly tx2: XName = XNamespace.none.getName('tx2');

  /**
   * Represents the `txBox` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.cNvSpPr cNvSpPr}, {@linkcode P.cNvSpPr cNvSpPr}, {@linkcode WPS.cNvSpPr cNvSpPr}
   */
  public static readonly txBox: XName = XNamespace.none.getName('txBox');

  /**
   * Represents the `ty` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.relOff relOff}, {@linkcode A.tile tile}, {@linkcode A.xfrm xfrm}
   */
  public static readonly ty: XName = XNamespace.none.getName('ty');

  /**
   * Represents the `type` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buAutoNum buAutoNum}, {@linkcode A.cont cont}, {@linkcode A.effectDag effectDag}, {@linkcode A.fld fld}, {@linkcode A.headEnd headEnd}, {@linkcode A.tailEnd tailEnd}, {@linkcode O.callout callout}, {@linkcode O.extrusion extrusion}, {@linkcode O.fill fill}, {@linkcode O.r r}, {@linkcode P.cmd cmd}, {@linkcode P.iterate iterate}, {@linkcode P.oleChartEl oleChartEl}, {@linkcode P.ph ph}, {@linkcode P.sldLayout sldLayout}, {@linkcode P.sldSz sldSz}, {@linkcode P14.triggerEvt triggerEvt}, {@linkcode V.fill fill}, {@linkcode V.shadow shadow}, {@linkcode V.shape shape}, {@linkcode W10.borderbottom borderbottom}, {@linkcode W10.borderleft borderleft}, {@linkcode W10.borderright borderright}, {@linkcode W10.bordertop bordertop}, {@linkcode W10.wrap wrap}, {@linkcode X.cacheSource cacheSource}, {@linkcode X.cfRule cfRule}, {@linkcode X.cfvo cfvo}, {@linkcode X.conditionalFormat conditionalFormat}, {@linkcode X.connection connection}, {@linkcode X.dataValidation dataValidation}, {@linkcode X.dynamicFilter dynamicFilter}, {@linkcode X.filter filter}, {@linkcode X.gradientFill gradientFill}, {@linkcode X.phoneticPr phoneticPr}, {@linkcode X.pivotArea pivotArea}, {@linkcode X.tableStyleElement tableStyleElement}, {@linkcode X.textField textField}, {@linkcode X.volType volType}, {@linkcode X14.cfRule cfRule}, {@linkcode X14.cfvo cfvo}, {@linkcode X14.conditionalFormat conditionalFormat}, {@linkcode X14.dataValidation dataValidation}, {@linkcode X14.pivotArea pivotArea}, {@linkcode X14.slicerStyleElement slicerStyleElement}, {@linkcode X14.sparklineGroup sparklineGroup}, {@linkcode X15.activeTabTopLevelEntity activeTabTopLevelEntity}, {@linkcode X15.timelineStyleElement timelineStyleElement}
   */
  public static readonly type: XName = XNamespace.none.getName('type');

  /**
   * Represents the `Type` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly Type_: XName = XNamespace.none.getName('Type');

  /**
   * Represents the `typeface` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.buFont buFont}, {@linkcode A.cs cs}, {@linkcode A.ea ea}, {@linkcode A.font font}, {@linkcode A.latin latin}, {@linkcode A.sym sym}, {@linkcode P.font font}
   */
  public static readonly typeface: XName = XNamespace.none.getName('typeface');

  /**
   * Represents the `u` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.defRPr defRPr}, {@linkcode A.endParaRPr endParaRPr}, {@linkcode A.rPr rPr}, {@linkcode X.b b}, {@linkcode X.d d}, {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X.t t}, {@linkcode X14.rowItem rowItem}
   */
  public static readonly u: XName = XNamespace.none.getName('u');

  /**
   * Represents the `ua` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.rcft rcft}, {@linkcode X.rdn rdn}, {@linkcode X.ris ris}, {@linkcode X.rm rm}, {@linkcode X.rrc rrc}, {@linkcode X.rsnm rsnm}
   */
  public static readonly ua: XName = XNamespace.none.getName('ua');

  /**
   * Represents the `uBound` XML name.
   */
  public static readonly uBound: XName = XNamespace.none.getName('uBound');

  /**
   * Represents the `uiExpand` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.bldDgm bldDgm}, {@linkcode P.bldGraphic bldGraphic}, {@linkcode P.bldOleChart bldOleChart}, {@linkcode P.bldP bldP}
   */
  public static readonly uiExpand: XName = XNamespace.none.getName('uiExpand');

  /**
   * Represents the `uiObject` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.commentPr commentPr}, {@linkcode X.controlPr controlPr}, {@linkcode X.objectPr objectPr}
   */
  public static readonly uiObject: XName = XNamespace.none.getName('uiObject');

  /**
   * Represents the `un` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.e e}, {@linkcode X.m m}, {@linkcode X.n n}, {@linkcode X.s s}, {@linkcode X15.x x}
   */
  public static readonly un: XName = XNamespace.none.getName('un');

  /**
   * Represents the `unbalanced` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly unbalanced: XName =
    XNamespace.none.getName('unbalanced');

  /**
   * Represents the `unbalancedGroup` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}
   */
  public static readonly unbalancedGroup: XName =
    XNamespace.none.getName('unbalancedGroup');

  /**
   * Represents the `unboundColumnsLeft` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly unboundColumnsLeft: XName =
    XNamespace.none.getName('unboundColumnsLeft');

  /**
   * Represents the `unboundColumnsRight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.queryTableRefresh queryTableRefresh}
   */
  public static readonly unboundColumnsRight: XName = XNamespace.none.getName(
    'unboundColumnsRight'
  );

  /**
   * Represents the `underflow` XML name.
   */
  public static readonly underflow: XName =
    XNamespace.none.getName('underflow');

  /**
   * Represents the `undone` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.inputCells inputCells}
   */
  public static readonly undone: XName = XNamespace.none.getName('undone');

  /**
   * Represents the `ungrouping` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly ungrouping: XName =
    XNamespace.none.getName('ungrouping');

  /**
   * Represents the `uniform` XML name.
   */
  public static readonly uniform: XName = XNamespace.none.getName('uniform');

  /**
   * Represents the `uniqueCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sst sst}
   */
  public static readonly uniqueCount: XName =
    XNamespace.none.getName('uniqueCount');

  /**
   * Represents the `uniqueId` XML name.
   */
  public static readonly uniqueId: XName = XNamespace.none.getName('uniqueId');

  /**
   * Represents the `uniqueList` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheField cacheField}
   */
  public static readonly uniqueList: XName =
    XNamespace.none.getName('uniqueList');

  /**
   * Represents the `uniqueMemberProperty` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}
   */
  public static readonly uniqueMemberProperty: XName = XNamespace.none.getName(
    'uniqueMemberProperty'
  );

  /**
   * Represents the `uniqueName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cacheHierarchy cacheHierarchy}, {@linkcode X.dimension dimension}, {@linkcode X.group group}, {@linkcode X.groupLevel groupLevel}, {@linkcode X.groupMember groupMember}, {@linkcode X.kpi kpi}, {@linkcode X.tableColumn tableColumn}, {@linkcode X.xmlCellPr xmlCellPr}, {@linkcode X14.dataField dataField}, {@linkcode X14.header header}, {@linkcode X14.level level}, {@linkcode X15.slicerCacheOlapLevelName slicerCacheOlapLevelName}
   */
  public static readonly uniqueName: XName =
    XNamespace.none.getName('uniqueName');

  /**
   * Represents the `uniqueParent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.group group}
   */
  public static readonly uniqueParent: XName =
    XNamespace.none.getName('uniqueParent');

  /**
   * Represents the `unit` XML name.
   */
  public static readonly unit: XName = XNamespace.none.getName('unit');

  /**
   * Represents the `units` XML name.
   */
  public static readonly units: XName = XNamespace.none.getName('units');

  /**
   * Represents the `unlockedFormula` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.ignoredError ignoredError}, {@linkcode X14.ignoredError ignoredError}
   */
  public static readonly unlockedFormula: XName =
    XNamespace.none.getName('unlockedFormula');

  /**
   * Represents the `updateAutomatic` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.link link}
   */
  public static readonly updateAutomatic: XName =
    XNamespace.none.getName('updateAutomatic');

  /**
   * Represents the `updatedVersion` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly updatedVersion: XName =
    XNamespace.none.getName('updatedVersion');

  /**
   * Represents the `updateLinks` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookPr workbookPr}
   */
  public static readonly updateLinks: XName =
    XNamespace.none.getName('updateLinks');

  /**
   * Represents the `UpdateMode` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.OLEObject OLEObject}
   */
  public static readonly UpdateMode: XName =
    XNamespace.none.getName('UpdateMode');

  /**
   * Represents the `upgradeOnRefresh` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotCacheDefinition pivotCacheDefinition}
   */
  public static readonly upgradeOnRefresh: XName =
    XNamespace.none.getName('upgradeOnRefresh');

  /**
   * Represents the `upright` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly upright: XName = XNamespace.none.getName('upright');

  /**
   * Represents the `uri` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.ext ext}, {@linkcode A.graphicData graphicData}, {@linkcode P.ext ext}, {@linkcode W.customXml customXml}, {@linkcode X.ext ext}
   */
  public static readonly uri: XName = XNamespace.none.getName('uri');

  /**
   * Represents the `URI` XML name.
   */
  public static readonly URI_: XName = XNamespace.none.getName('URI');

  /**
   * Represents the `url` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly url: XName = XNamespace.none.getName('url');

  /**
   * Represents the `useA` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.clrChange clrChange}
   */
  public static readonly useA: XName = XNamespace.none.getName('useA');

  /**
   * Represents the `useAutoFormatting` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly useAutoFormatting: XName =
    XNamespace.none.getName('useAutoFormatting');

  /**
   * Represents the `useBgFill` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.sp sp}
   */
  public static readonly useBgFill: XName =
    XNamespace.none.getName('useBgFill');

  /**
   * Represents the `usedByAddin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.connection connection}
   */
  public static readonly usedByAddin: XName =
    XNamespace.none.getName('usedByAddin');

  /**
   * Represents the `useDef` XML name.
   */
  public static readonly useDef: XName = XNamespace.none.getName('useDef');

  /**
   * Represents the `useFirstPageNumber` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly useFirstPageNumber: XName =
    XNamespace.none.getName('useFirstPageNumber');

  /**
   * Represents the `useLongFilenames` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.webPr webPr}
   */
  public static readonly useLongFilenames: XName =
    XNamespace.none.getName('useLongFilenames');

  /**
   * Represents the `usePrinterDefaults` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly usePrinterDefaults: XName =
    XNamespace.none.getName('usePrinterDefaults');

  /**
   * Represents the `user` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.groupLevel groupLevel}, {@linkcode X.scenario scenario}
   */
  public static readonly user: XName = XNamespace.none.getName('user');

  /**
   * Represents the `userDrawn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.nvPr nvPr}, {@linkcode P.sldLayout sldLayout}, {@linkcode P14.nvPr nvPr}, {@linkcode P15.guide guide}
   */
  public static readonly userDrawn: XName =
    XNamespace.none.getName('userDrawn');

  /**
   * Represents the `userId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P15.presenceInfo presenceInfo}
   */
  public static readonly userId: XName = XNamespace.none.getName('userId');

  /**
   * Represents the `userName` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.fileSharing fileSharing}, {@linkcode X.header header}
   */
  public static readonly userName: XName = XNamespace.none.getName('userName');

  /**
   * Represents the `userProvider` XML name.
   */
  public static readonly userProvider: XName =
    XNamespace.none.getName('userProvider');

  /**
   * Represents the `useTimings` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.showPr showPr}
   */
  public static readonly useTimings: XName =
    XNamespace.none.getName('useTimings');

  /**
   * Represents the `useWholeDay` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X15.pivotFilter pivotFilter}
   */
  public static readonly useWholeDay: XName =
    XNamespace.none.getName('useWholeDay');

  /**
   * Represents the `v` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path path}, {@linkcode X.b b}, {@linkcode X.d d}, {@linkcode X.e e}, {@linkcode X.mpMap mpMap}, {@linkcode X.n n}, {@linkcode X.rc rc}, {@linkcode X.s s}, {@linkcode X.undo undo}, {@linkcode X.x_ x_}
   */
  public static readonly v: XName = XNamespace.none.getName('v');

  /**
   * Represents the `vacatedStyle` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly vacatedStyle: XName =
    XNamespace.none.getName('vacatedStyle');

  /**
   * Represents the `val` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.alpha alpha}, {@linkcode A.alphaMod alphaMod}, {@linkcode A.alphaOff alphaOff}, {@linkcode A.blue blue}, {@linkcode A.blueMod blueMod}, {@linkcode A.blueOff blueOff}, {@linkcode A.buSzPct buSzPct}, {@linkcode A.buSzPts buSzPts}, {@linkcode A.green green}, {@linkcode A.greenMod greenMod}, {@linkcode A.greenOff greenOff}, {@linkcode A.hue hue}, {@linkcode A.hueMod hueMod}, {@linkcode A.hueOff hueOff}, {@linkcode A.lum lum}, {@linkcode A.lumMod lumMod}, {@linkcode A.lumOff lumOff}, {@linkcode A.prstClr prstClr}, {@linkcode A.prstDash prstDash}, {@linkcode A.red red}, {@linkcode A.redMod redMod}, {@linkcode A.redOff redOff}, {@linkcode A.rtl rtl}, {@linkcode A.sat sat}, {@linkcode A.satMod satMod}, {@linkcode A.satOff satOff}, {@linkcode A.schemeClr schemeClr}, {@linkcode A.shade shade}, {@linkcode A.spcPct spcPct}, {@linkcode A.spcPts spcPts}, {@linkcode A.srgbClr srgbClr}, {@linkcode A.sysClr sysClr}, {@linkcode A.tint tint}, {@linkcode A14.isCanvas isCanvas}, {@linkcode A14.shadowObscured shadowObscured}, {@linkcode A14.useLocalDpi useLocalDpi}, {@linkcode A16.colId colId}, {@linkcode A16.rowId rowId}, {@linkcode P.boolVal boolVal}, {@linkcode P.fltVal fltVal}, {@linkcode P.intVal intVal}, {@linkcode P.rtn rtn}, {@linkcode P.strVal strVal}, {@linkcode P.tag tag}, {@linkcode P.tmAbs tmAbs}, {@linkcode P.tmPct tmPct}, {@linkcode P.tn tn}, {@linkcode P14.creationId creationId}, {@linkcode P14.defaultImageDpi defaultImageDpi}, {@linkcode P14.discardImageEditData discardImageEditData}, {@linkcode P14.modId modId}, {@linkcode P14.showMediaCtrls showMediaCtrls}, {@linkcode P15.chartTrackingRefBased chartTrackingRefBased}, {@linkcode X.b b}, {@linkcode X.cfvo cfvo}, {@linkcode X.charset charset}, {@linkcode X.condense condense}, {@linkcode X.customFilter customFilter}, {@linkcode X.dynamicFilter dynamicFilter}, {@linkcode X.extend extend}, {@linkcode X.family family}, {@linkcode X.filter filter}, {@linkcode X.i i}, {@linkcode X.inputCells inputCells}, {@linkcode X.name_ name_}, {@linkcode X.outline outline}, {@linkcode X.rFont rFont}, {@linkcode X.scheme scheme}, {@linkcode X.shadow shadow}, {@linkcode X.sheetId sheetId}, {@linkcode X.sheetName sheetName}, {@linkcode X.strike strike}, {@linkcode X.sz sz}, {@linkcode X.top10 top10}, {@linkcode X.u u}, {@linkcode X.vertAlign vertAlign}, {@linkcode X14.customFilter customFilter}, {@linkcode X14.filter filter}, {@linkcode X14.formControlPr formControlPr}, {@linkcode X14.item item}
   */
  public static readonly val: XName = XNamespace.none.getName('val');

  /**
   * Represents the `valIso` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dynamicFilter dynamicFilter}
   */
  public static readonly valIso: XName = XNamespace.none.getName('valIso');

  /**
   * Represents the `value` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.kpi kpi}
   */
  public static readonly value: XName = XNamespace.none.getName('value');

  /**
   * Represents the `valueType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.anim anim}, {@linkcode X14.editValue editValue}
   */
  public static readonly valueType: XName =
    XNamespace.none.getName('valueType');

  /**
   * Represents the `variable` XML name.
   */
  public static readonly variable: XName = XNamespace.none.getName('variable');

  /**
   * Represents the `varPSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly varPSubtotal: XName =
    XNamespace.none.getName('varPSubtotal');

  /**
   * Represents the `varScale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cViewPr cViewPr}
   */
  public static readonly varScale: XName = XNamespace.none.getName('varScale');

  /**
   * Represents the `varSubtotal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotField pivotField}, {@linkcode X.reference reference}
   */
  public static readonly varSubtotal: XName =
    XNamespace.none.getName('varSubtotal');

  /**
   * Represents the `vbProcedure` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}
   */
  public static readonly vbProcedure: XName =
    XNamespace.none.getName('vbProcedure');

  /**
   * Represents the `version` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.headers headers}
   */
  public static readonly version: XName = XNamespace.none.getName('version');

  /**
   * Represents the `vert` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode A.tcPr tcPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly vert: XName = XNamespace.none.getName('vert');

  /**
   * Represents the `vertBarState` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.normalViewPr normalViewPr}
   */
  public static readonly vertBarState: XName =
    XNamespace.none.getName('vertBarState');

  /**
   * Represents the `vertical` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.alignment alignment}
   */
  public static readonly vertical: XName = XNamespace.none.getName('vertical');

  /**
   * Represents the `verticalBar` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly verticalBar: XName =
    XNamespace.none.getName('verticalBar');

  /**
   * Represents the `verticalCentered` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.printOptions printOptions}
   */
  public static readonly verticalCentered: XName =
    XNamespace.none.getName('verticalCentered');

  /**
   * Represents the `verticalDpi` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pageSetup pageSetup}
   */
  public static readonly verticalDpi: XName =
    XNamespace.none.getName('verticalDpi');

  /**
   * Represents the `verticies` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.lock lock}
   */
  public static readonly verticies: XName =
    XNamespace.none.getName('verticies');

  /**
   * Represents the `vertOverflow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly vertOverflow: XName =
    XNamespace.none.getName('vertOverflow');

  /**
   * Represents the `vid` XML name.
   */
  public static readonly vid: XName = XNamespace.none.getName('vid');

  /**
   * Represents the `view` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly view: XName = XNamespace.none.getName('view');

  /**
   * Represents the `viewpoint` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly viewpoint: XName =
    XNamespace.none.getName('viewpoint');

  /**
   * Represents the `viewpointorigin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.extrusion extrusion}
   */
  public static readonly viewpointorigin: XName =
    XNamespace.none.getName('viewpointorigin');

  /**
   * Represents the `visibility` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookView workbookView}
   */
  public static readonly visibility: XName =
    XNamespace.none.getName('visibility');

  /**
   * Represents the `visible` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.imgEffect imgEffect}
   */
  public static readonly visible: XName = XNamespace.none.getName('visible');

  /**
   * Represents the `visualTotals` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly visualTotals: XName =
    XNamespace.none.getName('visualTotals');

  /**
   * Represents the `visualTotalsForSets` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly visualTotalsForSets: XName = XNamespace.none.getName(
    'visualTotalsForSets'
  );

  /**
   * Represents the `vm` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.c c}, {@linkcode X.cell cell}, {@linkcode X.nc nc}, {@linkcode X.oc oc}
   */
  public static readonly vm: XName = XNamespace.none.getName('vm');

  /**
   * Represents the `vMerge` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.tc tc}
   */
  public static readonly vMerge: XName = XNamespace.none.getName('vMerge');

  /**
   * Represents the `vml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPublishing webPublishing}
   */
  public static readonly vml: XName = XNamespace.none.getName('vml');

  /**
   * Represents the `vocabulary` XML name.
   */
  public static readonly vocabulary: XName =
    XNamespace.none.getName('vocabulary');

  /**
   * Represents the `vol` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cMediaNode cMediaNode}
   */
  public static readonly vol: XName = XNamespace.none.getName('vol');

  /**
   * Represents the `w` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bevel bevel}, {@linkcode A.bevelB bevelB}, {@linkcode A.bevelT bevelT}, {@linkcode A.gridCol gridCol}, {@linkcode A.headEnd headEnd}, {@linkcode A.ln ln}, {@linkcode A.lnB lnB}, {@linkcode A.lnBlToTr lnBlToTr}, {@linkcode A.lnL lnL}, {@linkcode A.lnR lnR}, {@linkcode A.lnT lnT}, {@linkcode A.lnTlToBr lnTlToBr}, {@linkcode A.path path}, {@linkcode A.tailEnd tailEnd}, {@linkcode A.uLn uLn}, {@linkcode A14.hiddenLine hiddenLine}
   */
  public static readonly w: XName = XNamespace.none.getName('w');

  /**
   * Represents the `weight` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom bottom}, {@linkcode O.column column}, {@linkcode O.left left}, {@linkcode O.right right}, {@linkcode O.top top}, {@linkcode V.stroke stroke}, {@linkcode X.kpi kpi}
   */
  public static readonly weight: XName = XNamespace.none.getName('weight');

  /**
   * Represents the `weightExpression` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.pivotChange pivotChange}, {@linkcode X14.pivotTableDefinition pivotTableDefinition}
   */
  public static readonly weightExpression: XName =
    XNamespace.none.getName('weightExpression');

  /**
   * Represents the `width` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode W10.borderbottom borderbottom}, {@linkcode W10.borderleft borderleft}, {@linkcode W10.borderright borderright}, {@linkcode W10.bordertop bordertop}, {@linkcode X.col col}
   */
  public static readonly width: XName = XNamespace.none.getName('width');

  /**
   * Represents the `widthMin` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X14.formControlPr formControlPr}
   */
  public static readonly widthMin: XName = XNamespace.none.getName('widthMin');

  /**
   * Represents the `windowHeight` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly windowHeight: XName =
    XNamespace.none.getName('windowHeight');

  /**
   * Represents the `windowProtection` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly windowProtection: XName =
    XNamespace.none.getName('windowProtection');

  /**
   * Represents the `windowWidth` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.workbookView workbookView}
   */
  public static readonly windowWidth: XName =
    XNamespace.none.getName('windowWidth');

  /**
   * Represents the `workbookAlgorithmName` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly workbookAlgorithmName: XName = XNamespace.none.getName(
    'workbookAlgorithmName'
  );

  /**
   * Represents the `workbookHashValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly workbookHashValue: XName =
    XNamespace.none.getName('workbookHashValue');

  /**
   * Represents the `workbookParameter` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}
   */
  public static readonly workbookParameter: XName =
    XNamespace.none.getName('workbookParameter');

  /**
   * Represents the `workbookPassword` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly workbookPassword: XName =
    XNamespace.none.getName('workbookPassword');

  /**
   * Represents the `workbookSaltValue` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly workbookSaltValue: XName =
    XNamespace.none.getName('workbookSaltValue');

  /**
   * Represents the `workbookSpinCount` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.workbookProtection workbookProtection}
   */
  public static readonly workbookSpinCount: XName =
    XNamespace.none.getName('workbookSpinCount');

  /**
   * Represents the `workbookViewId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly workbookViewId: XName =
    XNamespace.none.getName('workbookViewId');

  /**
   * Represents the `wR` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.arcTo arcTo}
   */
  public static readonly wR: XName = XNamespace.none.getName('wR');

  /**
   * Represents the `wrap` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.bodyPr bodyPr}, {@linkcode WPS.bodyPr bodyPr}
   */
  public static readonly wrap: XName = XNamespace.none.getName('wrap');

  /**
   * Represents the `wrapcoords` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc arc}, {@linkcode V.curve curve}, {@linkcode V.group group}, {@linkcode V.image image}, {@linkcode V.line line}, {@linkcode V.oval oval}, {@linkcode V.polyline polyline}, {@linkcode V.rect rect}, {@linkcode V.roundrect roundrect}, {@linkcode V.shape shape}, {@linkcode V.shapetype shapetype}
   */
  public static readonly wrapcoords: XName =
    XNamespace.none.getName('wrapcoords');

  /**
   * Represents the `wrapText` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode WP.wrapSquare wrapSquare}, {@linkcode WP.wrapThrough wrapThrough}, {@linkcode WP.wrapTight wrapTight}, {@linkcode X.alignment alignment}
   */
  public static readonly wrapText: XName = XNamespace.none.getName('wrapText');

  /**
   * Represents the `x` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.anchor anchor}, {@linkcode A.chOff chOff}, {@linkcode A.off off}, {@linkcode A.pos pos}, {@linkcode A.pt pt}, {@linkcode P.by by}, {@linkcode P.from from}, {@linkcode P.origin origin}, {@linkcode P.pos pos}, {@linkcode P.rCtr rCtr}, {@linkcode P.to to}, {@linkcode P14.tracePt tracePt}, {@linkcode WP.lineTo lineTo}, {@linkcode WP.simplePos simplePos}, {@linkcode WP.start start}, {@linkcode X.field field}, {@linkcode X.fieldUsage fieldUsage}, {@linkcode X.item item}, {@linkcode X.n n}, {@linkcode X14.i i}
   */
  public static readonly x: XName = XNamespace.none.getName('x');

  /**
   * Represents the `x1` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.backgroundMark backgroundMark}, {@linkcode A14.foregroundMark foregroundMark}
   */
  public static readonly x1: XName = XNamespace.none.getName('x1');

  /**
   * Represents the `x2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.backgroundMark backgroundMark}, {@linkcode A14.foregroundMark foregroundMark}
   */
  public static readonly x2: XName = XNamespace.none.getName('x2');

  /**
   * Represents the `xfDxf` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.rcc rcc}, {@linkcode X.rfmt rfmt}
   */
  public static readonly xfDxf: XName = XNamespace.none.getName('xfDxf');

  /**
   * Represents the `xfId` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.cellStyle cellStyle}, {@linkcode X.xf xf}
   */
  public static readonly xfId: XName = XNamespace.none.getName('xfId');

  /**
   * Represents the `xfrmType` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.cBhvr cBhvr}
   */
  public static readonly xfrmType: XName = XNamespace.none.getName('xfrmType');

  /**
   * Represents the `xl2000` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly xl2000: XName = XNamespace.none.getName('xl2000');

  /**
   * Represents the `xl97` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly xl97: XName = XNamespace.none.getName('xl97');

  /**
   * Represents the `xlm` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.definedName definedName}
   */
  public static readonly xlm: XName = XNamespace.none.getName('xlm');

  /**
   * Represents the `xml` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.webPr webPr}
   */
  public static readonly xml: XName = XNamespace.none.getName('xml');

  /**
   * Represents the `xmlDataType` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xmlColumnPr xmlColumnPr}, {@linkcode X.xmlPr xmlPr}
   */
  public static readonly xmlDataType: XName =
    XNamespace.none.getName('xmlDataType');

  /**
   * Represents the `xpath` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.xmlColumnPr xmlColumnPr}, {@linkcode X.xmlPr xmlPr}
   */
  public static readonly xpath: XName = XNamespace.none.getName('xpath');

  /**
   * Represents the `xrange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly xrange: XName = XNamespace.none.getName('xrange');

  /**
   * Represents the `xscale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textpath textpath}
   */
  public static readonly xscale: XName = XNamespace.none.getName('xscale');

  /**
   * Represents the `xSplit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pane pane}
   */
  public static readonly xSplit: XName = XNamespace.none.getName('xSplit');

  /**
   * Represents the `xWindow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.dataValidations dataValidations}, {@linkcode X.workbookView workbookView}, {@linkcode X14.dataValidations dataValidations}
   */
  public static readonly xWindow: XName = XNamespace.none.getName('xWindow');

  /**
   * Represents the `y` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.anchor anchor}, {@linkcode A.chOff chOff}, {@linkcode A.off off}, {@linkcode A.pos pos}, {@linkcode A.pt pt}, {@linkcode P.by by}, {@linkcode P.from from}, {@linkcode P.origin origin}, {@linkcode P.pos pos}, {@linkcode P.rCtr rCtr}, {@linkcode P.to to}, {@linkcode P14.tracePt tracePt}, {@linkcode WP.lineTo lineTo}, {@linkcode WP.simplePos simplePos}, {@linkcode WP.start start}
   */
  public static readonly y: XName = XNamespace.none.getName('y');

  /**
   * Represents the `y1` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.backgroundMark backgroundMark}, {@linkcode A14.foregroundMark foregroundMark}
   */
  public static readonly y1: XName = XNamespace.none.getName('y1');

  /**
   * Represents the `y2` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A14.backgroundMark backgroundMark}, {@linkcode A14.foregroundMark foregroundMark}
   */
  public static readonly y2: XName = XNamespace.none.getName('y2');

  /**
   * Represents the `year` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.dateGroupItem dateGroupItem}
   */
  public static readonly year: XName = XNamespace.none.getName('year');

  /**
   * Represents the `yrange` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.h h}
   */
  public static readonly yrange: XName = XNamespace.none.getName('yrange');

  /**
   * Represents the `ySplit` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.pane pane}
   */
  public static readonly ySplit: XName = XNamespace.none.getName('ySplit');

  /**
   * Represents the `yWindow` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customWorkbookView customWorkbookView}, {@linkcode X.dataValidations dataValidations}, {@linkcode X.workbookView workbookView}, {@linkcode X14.dataValidations dataValidations}
   */
  public static readonly yWindow: XName = XNamespace.none.getName('yWindow');

  /**
   * Represents the `z` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.anchor anchor}, {@linkcode A.flatTx flatTx}, {@linkcode A.sp3d sp3d}, {@linkcode A14.hiddenSp3d hiddenSp3d}
   */
  public static readonly z: XName = XNamespace.none.getName('z');

  /**
   * Represents the `z-order` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.anchor anchor}
   */
  public static readonly z_order: XName = XNamespace.none.getName('z-order');

  /**
   * Represents the `zeroHeight` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetFormatPr sheetFormatPr}
   */
  public static readonly zeroHeight: XName =
    XNamespace.none.getName('zeroHeight');

  /**
   * Represents the `zeroValues` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}
   */
  public static readonly zeroValues: XName =
    XNamespace.none.getName('zeroValues');

  /**
   * Represents the `zoom` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.camera camera}
   */
  public static readonly zoom: XName = XNamespace.none.getName('zoom');

  /**
   * Represents the `zoomContents` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode P.animScale animScale}
   */
  public static readonly zoomContents: XName =
    XNamespace.none.getName('zoomContents');

  /**
   * Represents the `zoomScale` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly zoomScale: XName =
    XNamespace.none.getName('zoomScale');

  /**
   * Represents the `zoomScaleNormal` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly zoomScaleNormal: XName =
    XNamespace.none.getName('zoomScaleNormal');

  /**
   * Represents the `zoomScalePageLayoutView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly zoomScalePageLayoutView: XName =
    XNamespace.none.getName('zoomScalePageLayoutView');

  /**
   * Represents the `zoomScaleSheetLayoutView` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.sheetView sheetView}
   */
  public static readonly zoomScaleSheetLayoutView: XName =
    XNamespace.none.getName('zoomScaleSheetLayoutView');

  /**
   * Represents the `zoomToFit` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode X.customSheetView customSheetView}, {@linkcode X.sheetView sheetView}
   */
  public static readonly zoomToFit: XName =
    XNamespace.none.getName('zoomToFit');

  /**
   * Represents the `zOrderOff` XML name.
   */
  public static readonly zOrderOff: XName =
    XNamespace.none.getName('zOrderOff');
}
