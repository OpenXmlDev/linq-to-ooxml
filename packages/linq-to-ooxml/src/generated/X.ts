/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main"` namespace.
 */
export class X {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `x` prefix.
   */
  public static readonly x: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('x'), X.x.namespaceName);
  }

  /**
   * Represents the `x:alignment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxf x:dxf}, {@linkcode ndxf x:ndxf}, {@linkcode odxf x:odxf}, {@linkcode xf x:xf}, {@linkcode X14.dxf x14:dxf}
   */
  public static readonly alignment: XName = X.x.getName('alignment');

  /**
   * Represents the `x:anchor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode commentPr x:commentPr}, {@linkcode controlPr x:controlPr}, {@linkcode objectPr x:objectPr}
   * - child XML elements: {@linkcode from x:from}, {@linkcode to x:to}
   */
  public static readonly anchor: XName = X.x.getName('anchor');

  /**
   * Represents the `x:author` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode authors x:authors}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly author: XName = X.x.getName('author');

  /**
   * Represents the `x:authors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comments x:comments}
   * - child XML elements: {@linkcode author x:author}
   */
  public static readonly authors: XName = X.x.getName('authors');

  /**
   * Represents the `x:autoFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode filter x:filter}, {@linkcode table x:table}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode filterColumn x:filterColumn}, {@linkcode sortState x:sortState}
   */
  public static readonly autoFilter: XName = X.x.getName('autoFilter');

  /**
   * Represents the `x:autoSortScope` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotField x:pivotField}
   * - child XML elements: {@linkcode pivotArea x:pivotArea}
   */
  public static readonly autoSortScope: XName = X.x.getName('autoSortScope');

  /**
   * Represents the `x:b` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode groupItems x:groupItems}, {@linkcode r x:r}, {@linkcode rPr x:rPr}, {@linkcode sharedItems x:sharedItems}
   * - child XML elements: {@linkcode x_ x:x_}
   */
  public static readonly b: XName = X.x.getName('b');

  /**
   * Represents the `x:bgColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode patternFill x:patternFill}
   */
  public static readonly bgColor: XName = X.x.getName('bgColor');

  /**
   * Represents the `x:bk` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cellMetadata x:cellMetadata}, {@linkcode futureMetadata x:futureMetadata}, {@linkcode valueMetadata x:valueMetadata}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode rc x:rc}
   */
  public static readonly bk: XName = X.x.getName('bk');

  /**
   * Represents the `x:bookViews` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode workbookView x:workbookView}
   */
  public static readonly bookViews: XName = X.x.getName('bookViews');

  /**
   * Represents the `x:border` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode borders x:borders}, {@linkcode dxf x:dxf}, {@linkcode ndxf x:ndxf}, {@linkcode odxf x:odxf}, {@linkcode X14.dxf x14:dxf}
   * - child XML elements: {@linkcode bottom x:bottom}, {@linkcode diagonal x:diagonal}, {@linkcode end x:end}, {@linkcode horizontal x:horizontal}, {@linkcode left x:left}, {@linkcode right x:right}, {@linkcode start x:start}, {@linkcode top x:top}, {@linkcode vertical x:vertical}
   */
  public static readonly border: XName = X.x.getName('border');

  /**
   * Represents the `x:borders` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode border x:border}
   */
  public static readonly borders: XName = X.x.getName('borders');

  /**
   * Represents the `x:bottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly bottom: XName = X.x.getName('bottom');

  /**
   * Represents the `x:brk` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colBreaks x:colBreaks}, {@linkcode rowBreaks x:rowBreaks}
   */
  public static readonly brk: XName = X.x.getName('brk');

  /**
   * Represents the `x:c` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode calcChain x:calcChain}, {@linkcode row x:row}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode f x:f}, {@linkcode is x:is}, {@linkcode v x:v}
   */
  public static readonly c: XName = X.x.getName('c');

  /**
   * Represents the `x:cacheField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheFields x:cacheFields}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode fieldGroup x:fieldGroup}, {@linkcode mpMap x:mpMap}, {@linkcode sharedItems x:sharedItems}
   */
  public static readonly cacheField: XName = X.x.getName('cacheField');

  /**
   * Represents the `x:cacheFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode cacheField x:cacheField}
   */
  public static readonly cacheFields: XName = X.x.getName('cacheFields');

  /**
   * Represents the `x:cacheHierarchies` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode cacheHierarchy x:cacheHierarchy}
   */
  public static readonly cacheHierarchies: XName = X.x.getName('cacheHierarchies');

  /**
   * Represents the `x:cacheHierarchy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheHierarchies x:cacheHierarchies}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode fieldsUsage x:fieldsUsage}, {@linkcode groupLevels x:groupLevels}
   */
  public static readonly cacheHierarchy: XName = X.x.getName('cacheHierarchy');

  /**
   * Represents the `x:cacheSource` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode consolidation x:consolidation}, {@linkcode extLst x:extLst}, {@linkcode worksheetSource x:worksheetSource}
   */
  public static readonly cacheSource: XName = X.x.getName('cacheSource');

  /**
   * Represents the `x:calcChain` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode c x:c}, {@linkcode extLst x:extLst}
   */
  public static readonly calcChain: XName = X.x.getName('calcChain');

  /**
   * Represents the `x:calcPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly calcPr: XName = X.x.getName('calcPr');

  /**
   * Represents the `x:calculatedColumnFormula` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableColumn x:tableColumn}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly calculatedColumnFormula: XName = X.x.getName('calculatedColumnFormula');

  /**
   * Represents the `x:calculatedItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode calculatedItems x:calculatedItems}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode pivotArea x:pivotArea}
   */
  public static readonly calculatedItem: XName = X.x.getName('calculatedItem');

  /**
   * Represents the `x:calculatedItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode calculatedItem x:calculatedItem}
   */
  public static readonly calculatedItems: XName = X.x.getName('calculatedItems');

  /**
   * Represents the `x:calculatedMember` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode calculatedMembers x:calculatedMembers}, {@linkcode X14.calculatedMembers x14:calculatedMembers}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly calculatedMember: XName = X.x.getName('calculatedMember');

  /**
   * Represents the `x:calculatedMembers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode calculatedMember x:calculatedMember}
   */
  public static readonly calculatedMembers: XName = X.x.getName('calculatedMembers');

  /**
   * Represents the `x:cell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode row x:row}
   * - child XML elements: {@linkcode v x:v}
   */
  public static readonly cell: XName = X.x.getName('cell');

  /**
   * Represents the `x:cellMetadata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode bk x:bk}
   */
  public static readonly cellMetadata: XName = X.x.getName('cellMetadata');

  /**
   * Represents the `x:cellStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cellStyles x:cellStyles}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly cellStyle: XName = X.x.getName('cellStyle');

  /**
   * Represents the `x:cellStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode cellStyle x:cellStyle}
   */
  public static readonly cellStyles: XName = X.x.getName('cellStyles');

  /**
   * Represents the `x:cellStyleXfs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode xf x:xf}
   */
  public static readonly cellStyleXfs: XName = X.x.getName('cellStyleXfs');

  /**
   * Represents the `x:cellWatch` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cellWatches x:cellWatches}
   */
  public static readonly cellWatch: XName = X.x.getName('cellWatch');

  /**
   * Represents the `x:cellWatches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode cellWatch x:cellWatch}
   */
  public static readonly cellWatches: XName = X.x.getName('cellWatches');

  /**
   * Represents the `x:cellXfs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode xf x:xf}
   */
  public static readonly cellXfs: XName = X.x.getName('cellXfs');

  /**
   * Represents the `x:cfRule` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormatting x:conditionalFormatting}
   * - child XML elements: {@linkcode colorScale x:colorScale}, {@linkcode dataBar x:dataBar}, {@linkcode extLst x:extLst}, {@linkcode formula x:formula}, {@linkcode iconSet x:iconSet}
   */
  public static readonly cfRule: XName = X.x.getName('cfRule');

  /**
   * Represents the `x:cfvo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colorScale x:colorScale}, {@linkcode dataBar x:dataBar}, {@linkcode iconSet x:iconSet}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly cfvo: XName = X.x.getName('cfvo');

  /**
   * Represents the `x:charset` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly charset: XName = X.x.getName('charset');

  /**
   * Represents the `x:chartFormat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartFormats x:chartFormats}
   * - child XML elements: {@linkcode pivotArea x:pivotArea}
   */
  public static readonly chartFormat: XName = X.x.getName('chartFormat');

  /**
   * Represents the `x:chartFormats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode chartFormat x:chartFormat}
   */
  public static readonly chartFormats: XName = X.x.getName('chartFormats');

  /**
   * Represents the `x:chartsheet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode customSheetViews x:customSheetViews}, {@linkcode drawing x:drawing}, {@linkcode drawingHF x:drawingHF}, {@linkcode extLst x:extLst}, {@linkcode headerFooter x:headerFooter}, {@linkcode legacyDrawing x:legacyDrawing}, {@linkcode legacyDrawingHF x:legacyDrawingHF}, {@linkcode pageMargins x:pageMargins}, {@linkcode pageSetup x:pageSetup}, {@linkcode picture x:picture}, {@linkcode sheetPr x:sheetPr}, {@linkcode sheetProtection x:sheetProtection}, {@linkcode sheetViews x:sheetViews}, {@linkcode webPublishItems x:webPublishItems}
   */
  public static readonly chartsheet: XName = X.x.getName('chartsheet');

  /**
   * Represents the `x:col` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cols x:cols}
   */
  public static readonly col: XName = X.x.getName('col');

  /**
   * Represents the `x:colBreaks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode brk x:brk}
   */
  public static readonly colBreaks: XName = X.x.getName('colBreaks');

  /**
   * Represents the `x:colFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode field x:field}
   */
  public static readonly colFields: XName = X.x.getName('colFields');

  /**
   * Represents the `x:colHierarchiesUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode colHierarchyUsage x:colHierarchyUsage}
   */
  public static readonly colHierarchiesUsage: XName = X.x.getName('colHierarchiesUsage');

  /**
   * Represents the `x:colHierarchyUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colHierarchiesUsage x:colHierarchiesUsage}
   */
  public static readonly colHierarchyUsage: XName = X.x.getName('colHierarchyUsage');

  /**
   * Represents the `x:colItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode i x:i}
   */
  public static readonly colItems: XName = X.x.getName('colItems');

  /**
   * Represents the `x:color` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bottom x:bottom}, {@linkcode colorScale x:colorScale}, {@linkcode dataBar x:dataBar}, {@linkcode diagonal x:diagonal}, {@linkcode end x:end}, {@linkcode font x:font}, {@linkcode horizontal x:horizontal}, {@linkcode left x:left}, {@linkcode mruColors x:mruColors}, {@linkcode right x:right}, {@linkcode rPr x:rPr}, {@linkcode start x:start}, {@linkcode stop x:stop}, {@linkcode top x:top}, {@linkcode vertical x:vertical}
   */
  public static readonly color: XName = X.x.getName('color');

  /**
   * Represents the `x:colorFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}
   */
  public static readonly colorFilter: XName = X.x.getName('colorFilter');

  /**
   * Represents the `x:colors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode indexedColors x:indexedColors}, {@linkcode mruColors x:mruColors}
   */
  public static readonly colors: XName = X.x.getName('colors');

  /**
   * Represents the `x:colorScale` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x:cfRule}
   * - child XML elements: {@linkcode cfvo x:cfvo}, {@linkcode color x:color}
   */
  public static readonly colorScale: XName = X.x.getName('colorScale');

  /**
   * Represents the `x:cols` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode col x:col}
   */
  public static readonly cols: XName = X.x.getName('cols');

  /**
   * Represents the `x:comment` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode commentList x:commentList}
   * - child XML elements: {@linkcode commentPr x:commentPr}, {@linkcode text x:text}
   */
  public static readonly comment: XName = X.x.getName('comment');

  /**
   * Represents the `x:commentList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comments x:comments}
   * - child XML elements: {@linkcode comment x:comment}
   */
  public static readonly commentList: XName = X.x.getName('commentList');

  /**
   * Represents the `x:commentPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comment x:comment}
   * - child XML elements: {@linkcode anchor x:anchor}
   */
  public static readonly commentPr: XName = X.x.getName('commentPr');

  /**
   * Represents the `x:comments` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode authors x:authors}, {@linkcode commentList x:commentList}, {@linkcode extLst x:extLst}
   */
  public static readonly comments: XName = X.x.getName('comments');

  /**
   * Represents the `x:condense` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly condense: XName = X.x.getName('condense');

  /**
   * Represents the `x:conditionalFormat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormats x:conditionalFormats}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode pivotAreas x:pivotAreas}
   */
  public static readonly conditionalFormat: XName = X.x.getName('conditionalFormat');

  /**
   * Represents the `x:conditionalFormats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode conditionalFormat x:conditionalFormat}
   */
  public static readonly conditionalFormats: XName = X.x.getName('conditionalFormats');

  /**
   * Represents the `x:conditionalFormatting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode cfRule x:cfRule}, {@linkcode extLst x:extLst}
   */
  public static readonly conditionalFormatting: XName = X.x.getName('conditionalFormatting');

  /**
   * Represents the `x:connection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connections x:connections}
   * - child XML elements: {@linkcode dbPr x:dbPr}, {@linkcode extLst x:extLst}, {@linkcode olapPr x:olapPr}, {@linkcode parameters x:parameters}, {@linkcode textPr x:textPr}, {@linkcode webPr x:webPr}
   */
  public static readonly connection: XName = X.x.getName('connection');

  /**
   * Represents the `x:connections` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode connection x:connection}
   */
  public static readonly connections: XName = X.x.getName('connections');

  /**
   * Represents the `x:consolidation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheSource x:cacheSource}
   * - child XML elements: {@linkcode pages x:pages}, {@linkcode rangeSets x:rangeSets}
   */
  public static readonly consolidation: XName = X.x.getName('consolidation');

  /**
   * Represents the `x:control` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode controls x:controls}
   * - child XML elements: {@linkcode controlPr x:controlPr}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly control: XName = X.x.getName('control');

  /**
   * Represents the `x:controlPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode control x:control}
   * - child XML elements: {@linkcode anchor x:anchor}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly controlPr: XName = X.x.getName('controlPr');

  /**
   * Represents the `x:controls` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode control x:control}
   */
  public static readonly controls: XName = X.x.getName('controls');

  /**
   * Represents the `x:customFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customFilters x:customFilters}
   */
  public static readonly customFilter: XName = X.x.getName('customFilter');

  /**
   * Represents the `x:customFilters` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}
   * - child XML elements: {@linkcode customFilter x:customFilter}
   */
  public static readonly customFilters: XName = X.x.getName('customFilters');

  /**
   * Represents the `x:customPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customProperties x:customProperties}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly customPr: XName = X.x.getName('customPr');

  /**
   * Represents the `x:customProperties` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode customPr x:customPr}
   */
  public static readonly customProperties: XName = X.x.getName('customProperties');

  /**
   * Represents the `x:customSheetView` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetViews x:customSheetViews}
   * - child XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode colBreaks x:colBreaks}, {@linkcode extLst x:extLst}, {@linkcode headerFooter x:headerFooter}, {@linkcode pageMargins x:pageMargins}, {@linkcode pageSetup x:pageSetup}, {@linkcode pane x:pane}, {@linkcode printOptions x:printOptions}, {@linkcode rowBreaks x:rowBreaks}, {@linkcode selection x:selection}
   */
  public static readonly customSheetView: XName = X.x.getName('customSheetView');

  /**
   * Represents the `x:customSheetViews` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode customSheetView x:customSheetView}
   */
  public static readonly customSheetViews: XName = X.x.getName('customSheetViews');

  /**
   * Represents the `x:customWorkbookView` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customWorkbookViews x:customWorkbookViews}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly customWorkbookView: XName = X.x.getName('customWorkbookView');

  /**
   * Represents the `x:customWorkbookViews` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode customWorkbookView x:customWorkbookView}
   */
  public static readonly customWorkbookViews: XName = X.x.getName('customWorkbookViews');

  /**
   * Represents the `x:d` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupItems x:groupItems}, {@linkcode r x:r}, {@linkcode sharedItems x:sharedItems}
   * - child XML elements: {@linkcode x_ x:x_}
   */
  public static readonly d: XName = X.x.getName('d');

  /**
   * Represents the `x:dataBar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x:cfRule}
   * - child XML elements: {@linkcode cfvo x:cfvo}, {@linkcode color x:color}
   */
  public static readonly dataBar: XName = X.x.getName('dataBar');

  /**
   * Represents the `x:DataBinding` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode Map_ x:Map_}
   */
  public static readonly DataBinding: XName = X.x.getName('DataBinding');

  /**
   * Represents the `x:dataConsolidate` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode dataRefs x:dataRefs}
   */
  public static readonly dataConsolidate: XName = X.x.getName('dataConsolidate');

  /**
   * Represents the `x:dataField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataFields x:dataFields}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly dataField: XName = X.x.getName('dataField');

  /**
   * Represents the `x:dataFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode dataField x:dataField}
   */
  public static readonly dataFields: XName = X.x.getName('dataFields');

  /**
   * Represents the `x:dataRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataRefs x:dataRefs}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly dataRef: XName = X.x.getName('dataRef');

  /**
   * Represents the `x:dataRefs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataConsolidate x:dataConsolidate}
   * - child XML elements: {@linkcode dataRef x:dataRef}
   */
  public static readonly dataRefs: XName = X.x.getName('dataRefs');

  /**
   * Represents the `x:dataValidation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidations x:dataValidations}
   * - child XML elements: {@linkcode formula1 x:formula1}, {@linkcode formula2 x:formula2}
   */
  public static readonly dataValidation: XName = X.x.getName('dataValidation');

  /**
   * Represents the `x:dataValidations` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode dataValidation x:dataValidation}
   */
  public static readonly dataValidations: XName = X.x.getName('dataValidations');

  /**
   * Represents the `x:dateGroupItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filters x:filters}
   */
  public static readonly dateGroupItem: XName = X.x.getName('dateGroupItem');

  /**
   * Represents the `x:dbPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x:connection}
   */
  public static readonly dbPr: XName = X.x.getName('dbPr');

  /**
   * Represents the `x:ddeItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ddeItems x:ddeItems}
   * - child XML elements: {@linkcode values x:values}
   */
  public static readonly ddeItem: XName = X.x.getName('ddeItem');

  /**
   * Represents the `x:ddeItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ddeLink x:ddeLink}
   * - child XML elements: {@linkcode ddeItem x:ddeItem}
   */
  public static readonly ddeItems: XName = X.x.getName('ddeItems');

  /**
   * Represents the `x:ddeLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalLink x:externalLink}
   * - child XML elements: {@linkcode ddeItems x:ddeItems}
   */
  public static readonly ddeLink: XName = X.x.getName('ddeLink');

  /**
   * Represents the `x:definedName` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode definedNames x:definedNames}
   */
  public static readonly definedName: XName = X.x.getName('definedName');

  /**
   * Represents the `x:definedNames` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalBook x:externalBook}, {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode definedName x:definedName}
   */
  public static readonly definedNames: XName = X.x.getName('definedNames');

  /**
   * Represents the `x:deletedField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryTableDeletedFields x:queryTableDeletedFields}
   */
  public static readonly deletedField: XName = X.x.getName('deletedField');

  /**
   * Represents the `x:diagonal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly diagonal: XName = X.x.getName('diagonal');

  /**
   * Represents the `x:dialogsheet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode controls x:controls}, {@linkcode customSheetViews x:customSheetViews}, {@linkcode drawing x:drawing}, {@linkcode drawingHF x:drawingHF}, {@linkcode extLst x:extLst}, {@linkcode headerFooter x:headerFooter}, {@linkcode legacyDrawing x:legacyDrawing}, {@linkcode legacyDrawingHF x:legacyDrawingHF}, {@linkcode oleObjects x:oleObjects}, {@linkcode pageMargins x:pageMargins}, {@linkcode pageSetup x:pageSetup}, {@linkcode printOptions x:printOptions}, {@linkcode sheetFormatPr x:sheetFormatPr}, {@linkcode sheetPr x:sheetPr}, {@linkcode sheetProtection x:sheetProtection}, {@linkcode sheetViews x:sheetViews}
   */
  public static readonly dialogsheet: XName = X.x.getName('dialogsheet');

  /**
   * Represents the `x:dimension` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dimensions x:dimensions}, {@linkcode worksheet x:worksheet}
   */
  public static readonly dimension: XName = X.x.getName('dimension');

  /**
   * Represents the `x:dimensions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode dimension x:dimension}
   */
  public static readonly dimensions: XName = X.x.getName('dimensions');

  /**
   * Represents the `x:discretePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldGroup x:fieldGroup}
   * - child XML elements: {@linkcode x_ x:x_}
   */
  public static readonly discretePr: XName = X.x.getName('discretePr');

  /**
   * Represents the `x:drawing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly drawing: XName = X.x.getName('drawing');

  /**
   * Represents the `x:drawingHF` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly drawingHF: XName = X.x.getName('drawingHF');

  /**
   * Represents the `x:dxf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxfs x:dxfs}, {@linkcode rfmt x:rfmt}, {@linkcode X14.dxfs x14:dxfs}, {@linkcode X15.dxfs x15:dxfs}
   * - child XML elements: {@linkcode alignment x:alignment}, {@linkcode border x:border}, {@linkcode extLst x:extLst}, {@linkcode fill x:fill}, {@linkcode font x:font}, {@linkcode numFmt x:numFmt}, {@linkcode protection x:protection}
   */
  public static readonly dxf: XName = X.x.getName('dxf');

  /**
   * Represents the `x:dxfs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode dxf x:dxf}
   */
  public static readonly dxfs: XName = X.x.getName('dxfs');

  /**
   * Represents the `x:dynamicFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}
   */
  public static readonly dynamicFilter: XName = X.x.getName('dynamicFilter');

  /**
   * Represents the `x:e` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode entries x:entries}, {@linkcode groupItems x:groupItems}, {@linkcode r x:r}, {@linkcode sharedItems x:sharedItems}
   * - child XML elements: {@linkcode tpls x:tpls}, {@linkcode x_ x:x_}
   */
  public static readonly e: XName = X.x.getName('e');

  /**
   * Represents the `x:end` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly end: XName = X.x.getName('end');

  /**
   * Represents the `x:entries` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleCache x:tupleCache}
   * - child XML elements: {@linkcode e x:e}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode s x:s}
   */
  public static readonly entries: XName = X.x.getName('entries');

  /**
   * Represents the `x:evenFooter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly evenFooter: XName = X.x.getName('evenFooter');

  /**
   * Represents the `x:evenHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly evenHeader: XName = X.x.getName('evenHeader');

  /**
   * Represents the `x:ext` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode extLst x:extLst}, {@linkcode X14.extLst x14:extLst}, {@linkcode X15.extLst x15:extLst}
   * - child XML elements: {@linkcode X14.cacheField x14:cacheField}, {@linkcode X14.cacheHierarchy x14:cacheHierarchy}, {@linkcode X14.calculatedMember x14:calculatedMember}, {@linkcode X14.conditionalFormattings x14:conditionalFormattings}, {@linkcode X14.connection x14:connection}, {@linkcode X14.dataField x14:dataField}, {@linkcode X14.dataValidations x14:dataValidations}, {@linkcode X14.definedNames x14:definedNames}, {@linkcode X14.dxfs x14:dxfs}, {@linkcode X14.id x14:id}, {@linkcode X14.ignoredErrors x14:ignoredErrors}, {@linkcode X14.pivotCacheDefinition x14:pivotCacheDefinition}, {@linkcode X14.pivotCaches x14:pivotCaches}, {@linkcode X14.pivotField x14:pivotField}, {@linkcode X14.pivotHierarchy x14:pivotHierarchy}, {@linkcode X14.pivotTableDefinition x14:pivotTableDefinition}, {@linkcode X14.protectedRanges x14:protectedRanges}, {@linkcode X14.slicerCaches x14:slicerCaches}, {@linkcode X14.slicerList x14:slicerList}, {@linkcode X14.slicerStyles x14:slicerStyles}, {@linkcode X14.sourceConnection x14:sourceConnection}, {@linkcode X14.sparklineGroups x14:sparklineGroups}, {@linkcode X14.table x14:table}, {@linkcode X14.workbookPr x14:workbookPr}, {@linkcode X15.cachedUniqueNames x15:cachedUniqueNames}, {@linkcode X15.cacheHierarchy x15:cacheHierarchy}, {@linkcode X15.calculatedMember x15:calculatedMember}, {@linkcode X15.connection x15:connection}, {@linkcode X15.dataField x15:dataField}, {@linkcode X15.dataModel x15:dataModel}, {@linkcode X15.dxfs x15:dxfs}, {@linkcode X15.movingPeriodState x15:movingPeriodState}, {@linkcode X15.pivotCacheDecoupled x15:pivotCacheDecoupled}, {@linkcode X15.pivotCacheIdVersion x15:pivotCacheIdVersion}, {@linkcode X15.pivotCaches x15:pivotCaches}, {@linkcode X15.pivotFilter x15:pivotFilter}, {@linkcode X15.pivotTableData x15:pivotTableData}, {@linkcode X15.pivotTableReferences x15:pivotTableReferences}, {@linkcode X15.pivotTableUISettings x15:pivotTableUISettings}, {@linkcode X15.queryTable x15:queryTable}, {@linkcode X15.slicerCacheHideItemsWithNoData x15:slicerCacheHideItemsWithNoData}, {@linkcode X15.slicerCachePivotTables x15:slicerCachePivotTables}, {@linkcode X15.slicerCaches x15:slicerCaches}, {@linkcode X15.tableSlicerCache x15:tableSlicerCache}, {@linkcode X15.timelineCachePivotCaches x15:timelineCachePivotCaches}, {@linkcode X15.timelineCacheRefs x15:timelineCacheRefs}, {@linkcode X15.timelinePivotCacheDefinition x15:timelinePivotCacheDefinition}, {@linkcode X15.timelineRefs x15:timelineRefs}, {@linkcode X15.timelineStyles x15:timelineStyles}, {@linkcode X15.webExtensions x15:webExtensions}, {@linkcode X15.workbookPr x15:workbookPr}
   */
  public static readonly ext: XName = X.x.getName('ext');

  /**
   * Represents the `x:extend` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly extend: XName = X.x.getName('extend');

  /**
   * Represents the `x:externalBook` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalLink x:externalLink}
   * - child XML elements: {@linkcode definedNames x:definedNames}, {@linkcode sheetDataSet x:sheetDataSet}, {@linkcode sheetNames x:sheetNames}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly externalBook: XName = X.x.getName('externalBook');

  /**
   * Represents the `x:externalLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode ddeLink x:ddeLink}, {@linkcode externalBook x:externalBook}, {@linkcode extLst x:extLst}, {@linkcode oleLink x:oleLink}
   */
  public static readonly externalLink: XName = X.x.getName('externalLink');

  /**
   * Represents the `x:externalReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalReferences x:externalReferences}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly externalReference: XName = X.x.getName('externalReference');

  /**
   * Represents the `x:externalReferences` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode externalReference x:externalReference}
   */
  public static readonly externalReferences: XName = X.x.getName('externalReferences');

  /**
   * Represents the `x:extLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode bk x:bk}, {@linkcode c x:c}, {@linkcode cacheField x:cacheField}, {@linkcode cacheHierarchy x:cacheHierarchy}, {@linkcode cacheSource x:cacheSource}, {@linkcode calcChain x:calcChain}, {@linkcode calculatedItem x:calculatedItem}, {@linkcode calculatedMember x:calculatedMember}, {@linkcode cellStyle x:cellStyle}, {@linkcode cfRule x:cfRule}, {@linkcode cfvo x:cfvo}, {@linkcode chartsheet x:chartsheet}, {@linkcode comments x:comments}, {@linkcode conditionalFormat x:conditionalFormat}, {@linkcode conditionalFormatting x:conditionalFormatting}, {@linkcode connection x:connection}, {@linkcode customSheetView x:customSheetView}, {@linkcode customWorkbookView x:customWorkbookView}, {@linkcode dataField x:dataField}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode dxf x:dxf}, {@linkcode externalLink x:externalLink}, {@linkcode filter x:filter}, {@linkcode filterColumn x:filterColumn}, {@linkcode format x:format}, {@linkcode futureMetadata x:futureMetadata}, {@linkcode groupLevel x:groupLevel}, {@linkcode header x:header}, {@linkcode ignoredErrors x:ignoredErrors}, {@linkcode metadata x:metadata}, {@linkcode nc x:nc}, {@linkcode ndxf x:ndxf}, {@linkcode oc x:oc}, {@linkcode odxf x:odxf}, {@linkcode pageField x:pageField}, {@linkcode pivotArea x:pivotArea}, {@linkcode pivotCacheDefinition x:pivotCacheDefinition}, {@linkcode pivotCacheRecords x:pivotCacheRecords}, {@linkcode pivotField x:pivotField}, {@linkcode pivotHierarchy x:pivotHierarchy}, {@linkcode pivotTableDefinition x:pivotTableDefinition}, {@linkcode queryTable x:queryTable}, {@linkcode queryTableField x:queryTableField}, {@linkcode queryTableRefresh x:queryTableRefresh}, {@linkcode rcc x:rcc}, {@linkcode rdn x:rdn}, {@linkcode reference x:reference}, {@linkcode rfmt x:rfmt}, {@linkcode row x:row}, {@linkcode rsnm x:rsnm}, {@linkcode sheetView x:sheetView}, {@linkcode sheetViews x:sheetViews}, {@linkcode singleXmlCell x:singleXmlCell}, {@linkcode sortState x:sortState}, {@linkcode sst x:sst}, {@linkcode styleSheet x:styleSheet}, {@linkcode table x:table}, {@linkcode tableColumn x:tableColumn}, {@linkcode tupleCache x:tupleCache}, {@linkcode userInfo x:userInfo}, {@linkcode volTypes x:volTypes}, {@linkcode workbook x:workbook}, {@linkcode workbookView x:workbookView}, {@linkcode worksheet x:worksheet}, {@linkcode xf x:xf}, {@linkcode xmlCellPr x:xmlCellPr}, {@linkcode xmlColumnPr x:xmlColumnPr}, {@linkcode xmlPr x:xmlPr}, {@linkcode X14.dxf x14:dxf}, {@linkcode X14.pivotArea x14:pivotArea}
   * - child XML elements: {@linkcode ext x:ext}
   */
  public static readonly extLst: XName = X.x.getName('extLst');

  /**
   * Represents the `x:f` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode c x:c}, {@linkcode nc x:nc}, {@linkcode oc x:oc}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly f: XName = X.x.getName('f');

  /**
   * Represents the `x:family` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly family: XName = X.x.getName('family');

  /**
   * Represents the `x:fgColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode patternFill x:patternFill}
   */
  public static readonly fgColor: XName = X.x.getName('fgColor');

  /**
   * Represents the `x:field` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colFields x:colFields}, {@linkcode rowFields x:rowFields}
   */
  public static readonly field: XName = X.x.getName('field');

  /**
   * Represents the `x:fieldGroup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheField x:cacheField}
   * - child XML elements: {@linkcode discretePr x:discretePr}, {@linkcode groupItems x:groupItems}, {@linkcode rangePr x:rangePr}
   */
  public static readonly fieldGroup: XName = X.x.getName('fieldGroup');

  /**
   * Represents the `x:fieldsUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheHierarchy x:cacheHierarchy}
   * - child XML elements: {@linkcode fieldUsage x:fieldUsage}
   */
  public static readonly fieldsUsage: XName = X.x.getName('fieldsUsage');

  /**
   * Represents the `x:fieldUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldsUsage x:fieldsUsage}
   */
  public static readonly fieldUsage: XName = X.x.getName('fieldUsage');

  /**
   * Represents the `x:fileRecoveryPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly fileRecoveryPr: XName = X.x.getName('fileRecoveryPr');

  /**
   * Represents the `x:fileSharing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly fileSharing: XName = X.x.getName('fileSharing');

  /**
   * Represents the `x:fileVersion` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly fileVersion: XName = X.x.getName('fileVersion');

  /**
   * Represents the `x:fill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxf x:dxf}, {@linkcode fills x:fills}, {@linkcode ndxf x:ndxf}, {@linkcode odxf x:odxf}, {@linkcode X14.dxf x14:dxf}
   * - child XML elements: {@linkcode gradientFill x:gradientFill}, {@linkcode patternFill x:patternFill}
   */
  public static readonly fill: XName = X.x.getName('fill');

  /**
   * Represents the `x:fills` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode fill x:fill}
   */
  public static readonly fills: XName = X.x.getName('fills');

  /**
   * Represents the `x:filter` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filters x:filters}
   * - child XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode extLst x:extLst}
   */
  public static readonly filter: XName = X.x.getName('filter');

  /**
   * Represents the `x:filterColumn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode autoFilter x:autoFilter}
   * - child XML elements: {@linkcode colorFilter x:colorFilter}, {@linkcode customFilters x:customFilters}, {@linkcode dynamicFilter x:dynamicFilter}, {@linkcode extLst x:extLst}, {@linkcode filters x:filters}, {@linkcode iconFilter x:iconFilter}, {@linkcode top10 x:top10}, {@linkcode X14.customFilters x14:customFilters}, {@linkcode X14.iconFilter x14:iconFilter}
   */
  public static readonly filterColumn: XName = X.x.getName('filterColumn');

  /**
   * Represents the `x:filters` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}, {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode dateGroupItem x:dateGroupItem}, {@linkcode filter x:filter}, {@linkcode X14.filter x14:filter}
   */
  public static readonly filters: XName = X.x.getName('filters');

  /**
   * Represents the `x:firstFooter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly firstFooter: XName = X.x.getName('firstFooter');

  /**
   * Represents the `x:firstHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly firstHeader: XName = X.x.getName('firstHeader');

  /**
   * Represents the `x:font` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxf x:dxf}, {@linkcode fonts x:fonts}, {@linkcode ndxf x:ndxf}, {@linkcode odxf x:odxf}, {@linkcode X14.dxf x14:dxf}
   * - child XML elements: {@linkcode b x:b}, {@linkcode charset x:charset}, {@linkcode color x:color}, {@linkcode condense x:condense}, {@linkcode extend x:extend}, {@linkcode family x:family}, {@linkcode i x:i}, {@linkcode name_ x:name_}, {@linkcode outline x:outline}, {@linkcode scheme x:scheme}, {@linkcode shadow x:shadow}, {@linkcode strike x:strike}, {@linkcode sz x:sz}, {@linkcode u x:u}, {@linkcode vertAlign x:vertAlign}
   */
  public static readonly font: XName = X.x.getName('font');

  /**
   * Represents the `x:fonts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode font x:font}
   */
  public static readonly fonts: XName = X.x.getName('fonts');

  /**
   * Represents the `x:format` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode formats x:formats}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode pivotArea x:pivotArea}
   */
  public static readonly format: XName = X.x.getName('format');

  /**
   * Represents the `x:formats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode format x:format}
   */
  public static readonly formats: XName = X.x.getName('formats');

  /**
   * Represents the `x:formula` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x:cfRule}, {@linkcode rdn x:rdn}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly formula: XName = X.x.getName('formula');

  /**
   * Represents the `x:formula1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidation x:dataValidation}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly formula1: XName = X.x.getName('formula1');

  /**
   * Represents the `x:formula2` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidation x:dataValidation}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly formula2: XName = X.x.getName('formula2');

  /**
   * Represents the `x:from` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor x:anchor}
   */
  public static readonly from: XName = X.x.getName('from');

  /**
   * Represents the `x:functionGroup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode functionGroups x:functionGroups}
   */
  public static readonly functionGroup: XName = X.x.getName('functionGroup');

  /**
   * Represents the `x:functionGroups` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode functionGroup x:functionGroup}
   */
  public static readonly functionGroups: XName = X.x.getName('functionGroups');

  /**
   * Represents the `x:futureMetadata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode bk x:bk}, {@linkcode extLst x:extLst}
   */
  public static readonly futureMetadata: XName = X.x.getName('futureMetadata');

  /**
   * Represents the `x:gradientFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fill x:fill}
   * - child XML elements: {@linkcode stop x:stop}
   */
  public static readonly gradientFill: XName = X.x.getName('gradientFill');

  /**
   * Represents the `x:group` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groups x:groups}
   * - child XML elements: {@linkcode groupMembers x:groupMembers}
   */
  public static readonly group: XName = X.x.getName('group');

  /**
   * Represents the `x:groupItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldGroup x:fieldGroup}
   * - child XML elements: {@linkcode b x:b}, {@linkcode d x:d}, {@linkcode e x:e}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode s x:s}
   */
  public static readonly groupItems: XName = X.x.getName('groupItems');

  /**
   * Represents the `x:groupLevel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupLevels x:groupLevels}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode groups x:groups}
   */
  public static readonly groupLevel: XName = X.x.getName('groupLevel');

  /**
   * Represents the `x:groupLevels` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheHierarchy x:cacheHierarchy}
   * - child XML elements: {@linkcode groupLevel x:groupLevel}
   */
  public static readonly groupLevels: XName = X.x.getName('groupLevels');

  /**
   * Represents the `x:groupMember` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupMembers x:groupMembers}
   */
  public static readonly groupMember: XName = X.x.getName('groupMember');

  /**
   * Represents the `x:groupMembers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode group x:group}
   * - child XML elements: {@linkcode groupMember x:groupMember}
   */
  public static readonly groupMembers: XName = X.x.getName('groupMembers');

  /**
   * Represents the `x:groups` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode groupLevel x:groupLevel}
   * - child XML elements: {@linkcode group x:group}
   */
  public static readonly groups: XName = X.x.getName('groups');

  /**
   * Represents the `x:header` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headers x:headers}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode reviewedList x:reviewedList}, {@linkcode sheetIdMap x:sheetIdMap}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly header: XName = X.x.getName('header');

  /**
   * Represents the `x:headerFooter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode customSheetView x:customSheetView}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode evenFooter x:evenFooter}, {@linkcode evenHeader x:evenHeader}, {@linkcode firstFooter x:firstFooter}, {@linkcode firstHeader x:firstHeader}, {@linkcode oddFooter x:oddFooter}, {@linkcode oddHeader x:oddHeader}
   */
  public static readonly headerFooter: XName = X.x.getName('headerFooter');

  /**
   * Represents the `x:headers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode header x:header}
   */
  public static readonly headers: XName = X.x.getName('headers');

  /**
   * Represents the `x:horizontal` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly horizontal: XName = X.x.getName('horizontal');

  /**
   * Represents the `x:hyperlink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode hyperlinks x:hyperlinks}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly hyperlink: XName = X.x.getName('hyperlink');

  /**
   * Represents the `x:hyperlinks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode hyperlink x:hyperlink}
   */
  public static readonly hyperlinks: XName = X.x.getName('hyperlinks');

  /**
   * Represents the `x:i` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colItems x:colItems}, {@linkcode font x:font}, {@linkcode rowItems x:rowItems}, {@linkcode rPr x:rPr}
   * - child XML elements: {@linkcode x_ x:x_}
   */
  public static readonly i: XName = X.x.getName('i');

  /**
   * Represents the `x:iconFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}
   */
  public static readonly iconFilter: XName = X.x.getName('iconFilter');

  /**
   * Represents the `x:iconSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x:cfRule}
   * - child XML elements: {@linkcode cfvo x:cfvo}
   */
  public static readonly iconSet: XName = X.x.getName('iconSet');

  /**
   * Represents the `x:ignoredError` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ignoredErrors x:ignoredErrors}
   */
  public static readonly ignoredError: XName = X.x.getName('ignoredError');

  /**
   * Represents the `x:ignoredErrors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode ignoredError x:ignoredError}
   */
  public static readonly ignoredErrors: XName = X.x.getName('ignoredErrors');

  /**
   * Represents the `x:indexedColors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colors x:colors}
   * - child XML elements: {@linkcode rgbColor x:rgbColor}
   */
  public static readonly indexedColors: XName = X.x.getName('indexedColors');

  /**
   * Represents the `x:inputCells` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scenario x:scenario}
   */
  public static readonly inputCells: XName = X.x.getName('inputCells');

  /**
   * Represents the `x:is` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode c x:c}, {@linkcode nc x:nc}, {@linkcode oc x:oc}
   * - child XML elements: {@linkcode phoneticPr x:phoneticPr}, {@linkcode r x:r}, {@linkcode rPh x:rPh}, {@linkcode t x:t}
   */
  public static readonly is: XName = X.x.getName('is');

  /**
   * Represents the `x:item` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode items x:items}
   */
  public static readonly item: XName = X.x.getName('item');

  /**
   * Represents the `x:items` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotField x:pivotField}
   * - child XML elements: {@linkcode item x:item}
   */
  public static readonly items: XName = X.x.getName('items');

  /**
   * Represents the `x:k` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mdx x:mdx}
   */
  public static readonly k: XName = X.x.getName('k');

  /**
   * Represents the `x:kpi` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode kpis x:kpis}
   */
  public static readonly kpi: XName = X.x.getName('kpi');

  /**
   * Represents the `x:kpis` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode kpi x:kpi}
   */
  public static readonly kpis: XName = X.x.getName('kpis');

  /**
   * Represents the `x:left` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly left: XName = X.x.getName('left');

  /**
   * Represents the `x:legacyDrawing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly legacyDrawing: XName = X.x.getName('legacyDrawing');

  /**
   * Represents the `x:legacyDrawingHF` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly legacyDrawingHF: XName = X.x.getName('legacyDrawingHF');

  /**
   * Represents the `x:location` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   */
  public static readonly location: XName = X.x.getName('location');

  /**
   * Represents the `x:m` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode entries x:entries}, {@linkcode groupItems x:groupItems}, {@linkcode r x:r}, {@linkcode sharedItems x:sharedItems}, {@linkcode tables x:tables}
   * - child XML elements: {@linkcode tpls x:tpls}, {@linkcode x_ x:x_}
   */
  public static readonly m: XName = X.x.getName('m');

  /**
   * Represents the `x:main` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode volType x:volType}
   * - child XML elements: {@linkcode tp x:tp}
   */
  public static readonly main: XName = X.x.getName('main');

  /**
   * Represents the `x:map` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode maps x:maps}
   */
  public static readonly map: XName = X.x.getName('map');

  /**
   * Represents the `x:Map` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode MapInfo x:MapInfo}
   * - child XML elements: {@linkcode DataBinding x:DataBinding}
   */
  public static readonly Map_: XName = X.x.getName('Map');

  /**
   * Represents the `x:MapInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode Map_ x:Map_}, {@linkcode Schema x:Schema}
   */
  public static readonly MapInfo: XName = X.x.getName('MapInfo');

  /**
   * Represents the `x:maps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode map x:map}
   */
  public static readonly maps: XName = X.x.getName('maps');

  /**
   * Represents the `x:mdx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mdxMetadata x:mdxMetadata}
   * - child XML elements: {@linkcode k x:k}, {@linkcode ms x:ms}, {@linkcode p x:p}, {@linkcode t x:t}
   */
  public static readonly mdx: XName = X.x.getName('mdx');

  /**
   * Represents the `x:mdxMetadata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode mdx x:mdx}
   */
  public static readonly mdxMetadata: XName = X.x.getName('mdxMetadata');

  /**
   * Represents the `x:measureGroup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode measureGroups x:measureGroups}
   */
  public static readonly measureGroup: XName = X.x.getName('measureGroup');

  /**
   * Represents the `x:measureGroups` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode measureGroup x:measureGroup}
   */
  public static readonly measureGroups: XName = X.x.getName('measureGroups');

  /**
   * Represents the `x:member` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode members x:members}
   */
  public static readonly member: XName = X.x.getName('member');

  /**
   * Represents the `x:members` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotHierarchy x:pivotHierarchy}
   * - child XML elements: {@linkcode member x:member}
   */
  public static readonly members: XName = X.x.getName('members');

  /**
   * Represents the `x:mergeCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mergeCells x:mergeCells}
   */
  public static readonly mergeCell: XName = X.x.getName('mergeCell');

  /**
   * Represents the `x:mergeCells` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode mergeCell x:mergeCell}
   */
  public static readonly mergeCells: XName = X.x.getName('mergeCells');

  /**
   * Represents the `x:metadata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode cellMetadata x:cellMetadata}, {@linkcode extLst x:extLst}, {@linkcode futureMetadata x:futureMetadata}, {@linkcode mdxMetadata x:mdxMetadata}, {@linkcode metadataStrings x:metadataStrings}, {@linkcode metadataTypes x:metadataTypes}, {@linkcode valueMetadata x:valueMetadata}
   */
  public static readonly metadata: XName = X.x.getName('metadata');

  /**
   * Represents the `x:metadataStrings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode s x:s}
   */
  public static readonly metadataStrings: XName = X.x.getName('metadataStrings');

  /**
   * Represents the `x:metadataType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadataTypes x:metadataTypes}
   */
  public static readonly metadataType: XName = X.x.getName('metadataType');

  /**
   * Represents the `x:metadataTypes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode metadataType x:metadataType}
   */
  public static readonly metadataTypes: XName = X.x.getName('metadataTypes');

  /**
   * Represents the `x:mp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mps x:mps}
   */
  public static readonly mp: XName = X.x.getName('mp');

  /**
   * Represents the `x:mpMap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheField x:cacheField}
   */
  public static readonly mpMap: XName = X.x.getName('mpMap');

  /**
   * Represents the `x:mps` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotHierarchy x:pivotHierarchy}
   * - child XML elements: {@linkcode mp x:mp}
   */
  public static readonly mps: XName = X.x.getName('mps');

  /**
   * Represents the `x:mruColors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colors x:colors}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly mruColors: XName = X.x.getName('mruColors');

  /**
   * Represents the `x:ms` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mdx x:mdx}
   * - child XML elements: {@linkcode n x:n}
   */
  public static readonly ms: XName = X.x.getName('ms');

  /**
   * Represents the `x:n` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode entries x:entries}, {@linkcode groupItems x:groupItems}, {@linkcode ms x:ms}, {@linkcode r x:r}, {@linkcode sharedItems x:sharedItems}, {@linkcode t x:t}
   * - child XML elements: {@linkcode tpls x:tpls}, {@linkcode x_ x:x_}
   */
  public static readonly n: XName = X.x.getName('n');

  /**
   * Represents the `x:name` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}
   */
  public static readonly name_: XName = X.x.getName('name');

  /**
   * Represents the `x:nc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rcc x:rcc}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode f x:f}, {@linkcode is x:is}, {@linkcode v x:v}
   */
  public static readonly nc: XName = X.x.getName('nc');

  /**
   * Represents the `x:ndxf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rcc x:rcc}
   * - child XML elements: {@linkcode alignment x:alignment}, {@linkcode border x:border}, {@linkcode extLst x:extLst}, {@linkcode fill x:fill}, {@linkcode font x:font}, {@linkcode numFmt x:numFmt}, {@linkcode protection x:protection}
   */
  public static readonly ndxf: XName = X.x.getName('ndxf');

  /**
   * Represents the `x:numFmt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxf x:dxf}, {@linkcode ndxf x:ndxf}, {@linkcode numFmts x:numFmts}, {@linkcode odxf x:odxf}, {@linkcode X14.dxf x14:dxf}
   */
  public static readonly numFmt: XName = X.x.getName('numFmt');

  /**
   * Represents the `x:numFmts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode numFmt x:numFmt}
   */
  public static readonly numFmts: XName = X.x.getName('numFmts');

  /**
   * Represents the `x:objectPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleObject x:oleObject}
   * - child XML elements: {@linkcode anchor x:anchor}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly objectPr: XName = X.x.getName('objectPr');

  /**
   * Represents the `x:oc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rcc x:rcc}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode f x:f}, {@linkcode is x:is}, {@linkcode v x:v}
   */
  public static readonly oc: XName = X.x.getName('oc');

  /**
   * Represents the `x:oddFooter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly oddFooter: XName = X.x.getName('oddFooter');

  /**
   * Represents the `x:oddHeader` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headerFooter x:headerFooter}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly oddHeader: XName = X.x.getName('oddHeader');

  /**
   * Represents the `x:odxf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rcc x:rcc}
   * - child XML elements: {@linkcode alignment x:alignment}, {@linkcode border x:border}, {@linkcode extLst x:extLst}, {@linkcode fill x:fill}, {@linkcode font x:font}, {@linkcode numFmt x:numFmt}, {@linkcode protection x:protection}
   */
  public static readonly odxf: XName = X.x.getName('odxf');

  /**
   * Represents the `x:olapPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x:connection}
   */
  public static readonly olapPr: XName = X.x.getName('olapPr');

  /**
   * Represents the `x:oldFormula` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rdn x:rdn}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly oldFormula: XName = X.x.getName('oldFormula');

  /**
   * Represents the `x:oleItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleItems x:oleItems}
   */
  public static readonly oleItem: XName = X.x.getName('oleItem');

  /**
   * Represents the `x:oleItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleLink x:oleLink}
   * - child XML elements: {@linkcode oleItem x:oleItem}, {@linkcode X14.oleItem x14:oleItem}
   */
  public static readonly oleItems: XName = X.x.getName('oleItems');

  /**
   * Represents the `x:oleLink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalLink x:externalLink}
   * - child XML elements: {@linkcode oleItems x:oleItems}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly oleLink: XName = X.x.getName('oleLink');

  /**
   * Represents the `x:oleObject` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleObjects x:oleObjects}
   * - child XML elements: {@linkcode objectPr x:objectPr}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly oleObject: XName = X.x.getName('oleObject');

  /**
   * Represents the `x:oleObjects` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode oleObject x:oleObject}
   */
  public static readonly oleObjects: XName = X.x.getName('oleObjects');

  /**
   * Represents the `x:oleSize` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly oleSize: XName = X.x.getName('oleSize');

  /**
   * Represents the `x:outline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly outline: XName = X.x.getName('outline');

  /**
   * Represents the `x:outlinePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetPr x:sheetPr}
   */
  public static readonly outlinePr: XName = X.x.getName('outlinePr');

  /**
   * Represents the `x:p` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode mdx x:mdx}
   */
  public static readonly p: XName = X.x.getName('p');

  /**
   * Represents the `x:page` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pages x:pages}
   * - child XML elements: {@linkcode pageItem x:pageItem}
   */
  public static readonly page: XName = X.x.getName('page');

  /**
   * Represents the `x:pageField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pageFields x:pageFields}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly pageField: XName = X.x.getName('pageField');

  /**
   * Represents the `x:pageFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode pageField x:pageField}
   */
  public static readonly pageFields: XName = X.x.getName('pageFields');

  /**
   * Represents the `x:pageItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode page x:page}
   */
  public static readonly pageItem: XName = X.x.getName('pageItem');

  /**
   * Represents the `x:pageMargins` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode customSheetView x:customSheetView}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   */
  public static readonly pageMargins: XName = X.x.getName('pageMargins');

  /**
   * Represents the `x:pages` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode consolidation x:consolidation}
   * - child XML elements: {@linkcode page x:page}
   */
  public static readonly pages: XName = X.x.getName('pages');

  /**
   * Represents the `x:pageSetup` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode customSheetView x:customSheetView}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly pageSetup: XName = X.x.getName('pageSetup');

  /**
   * Represents the `x:pageSetUpPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetPr x:sheetPr}
   */
  public static readonly pageSetUpPr: XName = X.x.getName('pageSetUpPr');

  /**
   * Represents the `x:pane` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode sheetView x:sheetView}
   */
  public static readonly pane: XName = X.x.getName('pane');

  /**
   * Represents the `x:parameter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode parameters x:parameters}
   */
  public static readonly parameter: XName = X.x.getName('parameter');

  /**
   * Represents the `x:parameters` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x:connection}
   * - child XML elements: {@linkcode parameter x:parameter}
   */
  public static readonly parameters: XName = X.x.getName('parameters');

  /**
   * Represents the `x:patternFill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fill x:fill}
   * - child XML elements: {@linkcode bgColor x:bgColor}, {@linkcode fgColor x:fgColor}
   */
  public static readonly patternFill: XName = X.x.getName('patternFill');

  /**
   * Represents the `x:phoneticPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode is x:is}, {@linkcode si x:si}, {@linkcode text x:text}, {@linkcode worksheet x:worksheet}
   */
  public static readonly phoneticPr: XName = X.x.getName('phoneticPr');

  /**
   * Represents the `x:picture` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode worksheet x:worksheet}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly picture: XName = X.x.getName('picture');

  /**
   * Represents the `x:pivotArea` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode autoSortScope x:autoSortScope}, {@linkcode calculatedItem x:calculatedItem}, {@linkcode chartFormat x:chartFormat}, {@linkcode format x:format}, {@linkcode pivotAreas x:pivotAreas}, {@linkcode pivotSelection x:pivotSelection}, {@linkcode X14.pivotAreas x14:pivotAreas}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode references x:references}
   */
  public static readonly pivotArea: XName = X.x.getName('pivotArea');

  /**
   * Represents the `x:pivotAreas` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormat x:conditionalFormat}
   * - child XML elements: {@linkcode pivotArea x:pivotArea}
   */
  public static readonly pivotAreas: XName = X.x.getName('pivotAreas');

  /**
   * Represents the `x:pivotCache` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCaches x:pivotCaches}, {@linkcode X14.pivotCaches x14:pivotCaches}, {@linkcode X15.pivotCaches x15:pivotCaches}, {@linkcode X15.timelineCachePivotCaches x15:timelineCachePivotCaches}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly pivotCache: XName = X.x.getName('pivotCache');

  /**
   * Represents the `x:pivotCacheDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode cacheFields x:cacheFields}, {@linkcode cacheHierarchies x:cacheHierarchies}, {@linkcode cacheSource x:cacheSource}, {@linkcode calculatedItems x:calculatedItems}, {@linkcode calculatedMembers x:calculatedMembers}, {@linkcode dimensions x:dimensions}, {@linkcode extLst x:extLst}, {@linkcode kpis x:kpis}, {@linkcode maps x:maps}, {@linkcode measureGroups x:measureGroups}, {@linkcode tupleCache x:tupleCache}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly pivotCacheDefinition: XName = X.x.getName('pivotCacheDefinition');

  /**
   * Represents the `x:pivotCacheRecords` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode r x:r}
   */
  public static readonly pivotCacheRecords: XName = X.x.getName('pivotCacheRecords');

  /**
   * Represents the `x:pivotCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode pivotCache x:pivotCache}
   */
  public static readonly pivotCaches: XName = X.x.getName('pivotCaches');

  /**
   * Represents the `x:pivotField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotFields x:pivotFields}
   * - child XML elements: {@linkcode autoSortScope x:autoSortScope}, {@linkcode extLst x:extLst}, {@linkcode items x:items}
   */
  public static readonly pivotField: XName = X.x.getName('pivotField');

  /**
   * Represents the `x:pivotFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode pivotField x:pivotField}
   */
  public static readonly pivotFields: XName = X.x.getName('pivotFields');

  /**
   * Represents the `x:pivotHierarchies` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode pivotHierarchy x:pivotHierarchy}
   */
  public static readonly pivotHierarchies: XName = X.x.getName('pivotHierarchies');

  /**
   * Represents the `x:pivotHierarchy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotHierarchies x:pivotHierarchies}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode members x:members}, {@linkcode mps x:mps}
   */
  public static readonly pivotHierarchy: XName = X.x.getName('pivotHierarchy');

  /**
   * Represents the `x:pivotSelection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetView x:sheetView}
   * - child XML elements: {@linkcode pivotArea x:pivotArea}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly pivotSelection: XName = X.x.getName('pivotSelection');

  /**
   * Represents the `x:pivotTableDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode chartFormats x:chartFormats}, {@linkcode colFields x:colFields}, {@linkcode colHierarchiesUsage x:colHierarchiesUsage}, {@linkcode colItems x:colItems}, {@linkcode conditionalFormats x:conditionalFormats}, {@linkcode dataFields x:dataFields}, {@linkcode extLst x:extLst}, {@linkcode filters x:filters}, {@linkcode formats x:formats}, {@linkcode location x:location}, {@linkcode pageFields x:pageFields}, {@linkcode pivotFields x:pivotFields}, {@linkcode pivotHierarchies x:pivotHierarchies}, {@linkcode pivotTableStyleInfo x:pivotTableStyleInfo}, {@linkcode rowFields x:rowFields}, {@linkcode rowHierarchiesUsage x:rowHierarchiesUsage}, {@linkcode rowItems x:rowItems}
   */
  public static readonly pivotTableDefinition: XName = X.x.getName('pivotTableDefinition');

  /**
   * Represents the `x:pivotTableStyleInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   */
  public static readonly pivotTableStyleInfo: XName = X.x.getName('pivotTableStyleInfo');

  /**
   * Represents the `x:printOptions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   */
  public static readonly printOptions: XName = X.x.getName('printOptions');

  /**
   * Represents the `x:protectedRange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode protectedRanges x:protectedRanges}
   */
  public static readonly protectedRange: XName = X.x.getName('protectedRange');

  /**
   * Represents the `x:protectedRanges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode protectedRange x:protectedRange}
   */
  public static readonly protectedRanges: XName = X.x.getName('protectedRanges');

  /**
   * Represents the `x:protection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dxf x:dxf}, {@linkcode ndxf x:ndxf}, {@linkcode odxf x:odxf}, {@linkcode xf x:xf}, {@linkcode X14.dxf x14:dxf}
   */
  public static readonly protection: XName = X.x.getName('protection');

  /**
   * Represents the `x:query` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryCache x:queryCache}
   * - child XML elements: {@linkcode tpls x:tpls}
   */
  public static readonly query: XName = X.x.getName('query');

  /**
   * Represents the `x:queryCache` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleCache x:tupleCache}
   * - child XML elements: {@linkcode query x:query}
   */
  public static readonly queryCache: XName = X.x.getName('queryCache');

  /**
   * Represents the `x:queryTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode queryTableRefresh x:queryTableRefresh}
   */
  public static readonly queryTable: XName = X.x.getName('queryTable');

  /**
   * Represents the `x:queryTableDeletedFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryTableRefresh x:queryTableRefresh}
   * - child XML elements: {@linkcode deletedField x:deletedField}
   */
  public static readonly queryTableDeletedFields: XName = X.x.getName('queryTableDeletedFields');

  /**
   * Represents the `x:queryTableField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryTableFields x:queryTableFields}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly queryTableField: XName = X.x.getName('queryTableField');

  /**
   * Represents the `x:queryTableFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryTableRefresh x:queryTableRefresh}
   * - child XML elements: {@linkcode queryTableField x:queryTableField}
   */
  public static readonly queryTableFields: XName = X.x.getName('queryTableFields');

  /**
   * Represents the `x:queryTableRefresh` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode queryTable x:queryTable}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode queryTableDeletedFields x:queryTableDeletedFields}, {@linkcode queryTableFields x:queryTableFields}, {@linkcode sortState x:sortState}
   */
  public static readonly queryTableRefresh: XName = X.x.getName('queryTableRefresh');

  /**
   * Represents the `x:r` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode is x:is}, {@linkcode pivotCacheRecords x:pivotCacheRecords}, {@linkcode si x:si}, {@linkcode text x:text}
   * - child XML elements: {@linkcode b x:b}, {@linkcode d x:d}, {@linkcode e x:e}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode rPr x:rPr}, {@linkcode s x:s}, {@linkcode t x:t}, {@linkcode x_ x:x_}
   */
  public static readonly r: XName = X.x.getName('r');

  /**
   * Represents the `x:raf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly raf: XName = X.x.getName('raf');

  /**
   * Represents the `x:rangePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode fieldGroup x:fieldGroup}
   */
  public static readonly rangePr: XName = X.x.getName('rangePr');

  /**
   * Represents the `x:rangeSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rangeSets x:rangeSets}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly rangeSet: XName = X.x.getName('rangeSet');

  /**
   * Represents the `x:rangeSets` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode consolidation x:consolidation}
   * - child XML elements: {@linkcode rangeSet x:rangeSet}
   */
  public static readonly rangeSets: XName = X.x.getName('rangeSets');

  /**
   * Represents the `x:rc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bk x:bk}
   */
  public static readonly rc: XName = X.x.getName('rc');

  /**
   * Represents the `x:rcc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}, {@linkcode rm x:rm}, {@linkcode rrc x:rrc}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode nc x:nc}, {@linkcode ndxf x:ndxf}, {@linkcode oc x:oc}, {@linkcode odxf x:odxf}
   */
  public static readonly rcc: XName = X.x.getName('rcc');

  /**
   * Represents the `x:rcft` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly rcft: XName = X.x.getName('rcft');

  /**
   * Represents the `x:rcmt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly rcmt: XName = X.x.getName('rcmt');

  /**
   * Represents the `x:rcv` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly rcv: XName = X.x.getName('rcv');

  /**
   * Represents the `x:rdn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode formula x:formula}, {@linkcode oldFormula x:oldFormula}
   */
  public static readonly rdn: XName = X.x.getName('rdn');

  /**
   * Represents the `x:reference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode references x:references}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode x_ x:x_}
   */
  public static readonly reference: XName = X.x.getName('reference');

  /**
   * Represents the `x:references` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotArea x:pivotArea}, {@linkcode X14.pivotArea x14:pivotArea}
   * - child XML elements: {@linkcode reference x:reference}
   */
  public static readonly references: XName = X.x.getName('references');

  /**
   * Represents the `x:reviewed` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode reviewedList x:reviewedList}
   */
  public static readonly reviewed: XName = X.x.getName('reviewed');

  /**
   * Represents the `x:reviewedList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode header x:header}
   * - child XML elements: {@linkcode reviewed x:reviewed}
   */
  public static readonly reviewedList: XName = X.x.getName('reviewedList');

  /**
   * Represents the `x:revisions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode raf x:raf}, {@linkcode rcc x:rcc}, {@linkcode rcft x:rcft}, {@linkcode rcmt x:rcmt}, {@linkcode rcv x:rcv}, {@linkcode rdn x:rdn}, {@linkcode rfmt x:rfmt}, {@linkcode ris x:ris}, {@linkcode rm x:rm}, {@linkcode rqt x:rqt}, {@linkcode rrc x:rrc}, {@linkcode rsnm x:rsnm}
   */
  public static readonly revisions: XName = X.x.getName('revisions');

  /**
   * Represents the `x:rfmt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}, {@linkcode rm x:rm}, {@linkcode rrc x:rrc}
   * - child XML elements: {@linkcode dxf x:dxf}, {@linkcode extLst x:extLst}
   */
  public static readonly rfmt: XName = X.x.getName('rfmt');

  /**
   * Represents the `x:rFont` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rPr x:rPr}
   */
  public static readonly rFont: XName = X.x.getName('rFont');

  /**
   * Represents the `x:rgbColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode indexedColors x:indexedColors}
   */
  public static readonly rgbColor: XName = X.x.getName('rgbColor');

  /**
   * Represents the `x:right` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly right: XName = X.x.getName('right');

  /**
   * Represents the `x:ris` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly ris: XName = X.x.getName('ris');

  /**
   * Represents the `x:rm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   * - child XML elements: {@linkcode rcc x:rcc}, {@linkcode rfmt x:rfmt}, {@linkcode undo x:undo}
   */
  public static readonly rm: XName = X.x.getName('rm');

  /**
   * Represents the `x:row` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetData x:sheetData}
   * - child XML elements: {@linkcode c x:c}, {@linkcode cell x:cell}, {@linkcode extLst x:extLst}
   */
  public static readonly row: XName = X.x.getName('row');

  /**
   * Represents the `x:rowBreaks` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode brk x:brk}
   */
  public static readonly rowBreaks: XName = X.x.getName('rowBreaks');

  /**
   * Represents the `x:rowFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode field x:field}
   */
  public static readonly rowFields: XName = X.x.getName('rowFields');

  /**
   * Represents the `x:rowHierarchiesUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode rowHierarchyUsage x:rowHierarchyUsage}
   */
  public static readonly rowHierarchiesUsage: XName = X.x.getName('rowHierarchiesUsage');

  /**
   * Represents the `x:rowHierarchyUsage` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rowHierarchiesUsage x:rowHierarchiesUsage}
   */
  public static readonly rowHierarchyUsage: XName = X.x.getName('rowHierarchyUsage');

  /**
   * Represents the `x:rowItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x:pivotTableDefinition}
   * - child XML elements: {@linkcode i x:i}
   */
  public static readonly rowItems: XName = X.x.getName('rowItems');

  /**
   * Represents the `x:rPh` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode is x:is}, {@linkcode si x:si}, {@linkcode text x:text}
   * - child XML elements: {@linkcode t x:t}
   */
  public static readonly rPh: XName = X.x.getName('rPh');

  /**
   * Represents the `x:rPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode r x:r}
   * - child XML elements: {@linkcode b x:b}, {@linkcode charset x:charset}, {@linkcode color x:color}, {@linkcode condense x:condense}, {@linkcode extend x:extend}, {@linkcode family x:family}, {@linkcode i x:i}, {@linkcode outline x:outline}, {@linkcode rFont x:rFont}, {@linkcode scheme x:scheme}, {@linkcode shadow x:shadow}, {@linkcode strike x:strike}, {@linkcode sz x:sz}, {@linkcode u x:u}, {@linkcode vertAlign x:vertAlign}
   */
  public static readonly rPr: XName = X.x.getName('rPr');

  /**
   * Represents the `x:rqt` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   */
  public static readonly rqt: XName = X.x.getName('rqt');

  /**
   * Represents the `x:rrc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   * - child XML elements: {@linkcode rcc x:rcc}, {@linkcode rfmt x:rfmt}, {@linkcode undo x:undo}
   */
  public static readonly rrc: XName = X.x.getName('rrc');

  /**
   * Represents the `x:rsnm` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode revisions x:revisions}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly rsnm: XName = X.x.getName('rsnm');

  /**
   * Represents the `x:s` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode entries x:entries}, {@linkcode groupItems x:groupItems}, {@linkcode metadataStrings x:metadataStrings}, {@linkcode r x:r}, {@linkcode sharedItems x:sharedItems}, {@linkcode tables x:tables}
   * - child XML elements: {@linkcode tpls x:tpls}, {@linkcode x_ x:x_}
   */
  public static readonly s: XName = X.x.getName('s');

  /**
   * Represents the `x:scenario` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode scenarios x:scenarios}
   * - child XML elements: {@linkcode inputCells x:inputCells}
   */
  public static readonly scenario: XName = X.x.getName('scenario');

  /**
   * Represents the `x:scenarios` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode scenario x:scenario}
   */
  public static readonly scenarios: XName = X.x.getName('scenarios');

  /**
   * Represents the `x:Schema` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode MapInfo x:MapInfo}
   */
  public static readonly Schema: XName = X.x.getName('Schema');

  /**
   * Represents the `x:scheme` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly scheme: XName = X.x.getName('scheme');

  /**
   * Represents the `x:selection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customSheetView x:customSheetView}, {@linkcode sheetView x:sheetView}
   */
  public static readonly selection: XName = X.x.getName('selection');

  /**
   * Represents the `x:serverFormat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode serverFormats x:serverFormats}
   */
  public static readonly serverFormat: XName = X.x.getName('serverFormat');

  /**
   * Represents the `x:serverFormats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleCache x:tupleCache}
   * - child XML elements: {@linkcode serverFormat x:serverFormat}
   */
  public static readonly serverFormats: XName = X.x.getName('serverFormats');

  /**
   * Represents the `x:set` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sets x:sets}
   * - child XML elements: {@linkcode sortByTuple x:sortByTuple}, {@linkcode tpls x:tpls}
   */
  public static readonly set: XName = X.x.getName('set');

  /**
   * Represents the `x:sets` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleCache x:tupleCache}
   * - child XML elements: {@linkcode set x:set}
   */
  public static readonly sets: XName = X.x.getName('sets');

  /**
   * Represents the `x:shadow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly shadow: XName = X.x.getName('shadow');

  /**
   * Represents the `x:sharedItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheField x:cacheField}
   * - child XML elements: {@linkcode b x:b}, {@linkcode d x:d}, {@linkcode e x:e}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode s x:s}
   */
  public static readonly sharedItems: XName = X.x.getName('sharedItems');

  /**
   * Represents the `x:sheet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheets x:sheets}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly sheet: XName = X.x.getName('sheet');

  /**
   * Represents the `x:sheetCalcPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   */
  public static readonly sheetCalcPr: XName = X.x.getName('sheetCalcPr');

  /**
   * Represents the `x:sheetData` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetDataSet x:sheetDataSet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode row x:row}
   */
  public static readonly sheetData: XName = X.x.getName('sheetData');

  /**
   * Represents the `x:sheetDataSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalBook x:externalBook}
   * - child XML elements: {@linkcode sheetData x:sheetData}
   */
  public static readonly sheetDataSet: XName = X.x.getName('sheetDataSet');

  /**
   * Represents the `x:sheetFormatPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   */
  public static readonly sheetFormatPr: XName = X.x.getName('sheetFormatPr');

  /**
   * Represents the `x:sheetId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetIdMap x:sheetIdMap}
   */
  public static readonly sheetId: XName = X.x.getName('sheetId');

  /**
   * Represents the `x:sheetIdMap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode header x:header}
   * - child XML elements: {@linkcode sheetId x:sheetId}
   */
  public static readonly sheetIdMap: XName = X.x.getName('sheetIdMap');

  /**
   * Represents the `x:sheetName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetNames x:sheetNames}
   */
  public static readonly sheetName: XName = X.x.getName('sheetName');

  /**
   * Represents the `x:sheetNames` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode externalBook x:externalBook}
   * - child XML elements: {@linkcode sheetName x:sheetName}
   */
  public static readonly sheetNames: XName = X.x.getName('sheetNames');

  /**
   * Represents the `x:sheetPr` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode outlinePr x:outlinePr}, {@linkcode pageSetUpPr x:pageSetUpPr}, {@linkcode tabColor x:tabColor}
   */
  public static readonly sheetPr: XName = X.x.getName('sheetPr');

  /**
   * Represents the `x:sheetProtection` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   */
  public static readonly sheetProtection: XName = X.x.getName('sheetProtection');

  /**
   * Represents the `x:sheets` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode sheet x:sheet}
   */
  public static readonly sheets: XName = X.x.getName('sheets');

  /**
   * Represents the `x:sheetView` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetViews x:sheetViews}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode pane x:pane}, {@linkcode pivotSelection x:pivotSelection}, {@linkcode selection x:selection}
   */
  public static readonly sheetView: XName = X.x.getName('sheetView');

  /**
   * Represents the `x:sheetViews` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode dialogsheet x:dialogsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode sheetView x:sheetView}
   */
  public static readonly sheetViews: XName = X.x.getName('sheetViews');

  /**
   * Represents the `x:si` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sst x:sst}
   * - child XML elements: {@linkcode phoneticPr x:phoneticPr}, {@linkcode r x:r}, {@linkcode rPh x:rPh}, {@linkcode t x:t}
   */
  public static readonly si: XName = X.x.getName('si');

  /**
   * Represents the `x:singleXmlCell` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode singleXmlCells x:singleXmlCells}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode xmlCellPr x:xmlCellPr}
   */
  public static readonly singleXmlCell: XName = X.x.getName('singleXmlCell');

  /**
   * Represents the `x:singleXmlCells` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode singleXmlCell x:singleXmlCell}
   */
  public static readonly singleXmlCells: XName = X.x.getName('singleXmlCells');

  /**
   * Represents the `x:sortByTuple` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode set x:set}
   * - child XML elements: {@linkcode tpl x:tpl}
   */
  public static readonly sortByTuple: XName = X.x.getName('sortByTuple');

  /**
   * Represents the `x:sortCondition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sortState x:sortState}
   */
  public static readonly sortCondition: XName = X.x.getName('sortCondition');

  /**
   * Represents the `x:sortState` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode queryTableRefresh x:queryTableRefresh}, {@linkcode table x:table}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode sortCondition x:sortCondition}, {@linkcode X14.sortCondition x14:sortCondition}
   */
  public static readonly sortState: XName = X.x.getName('sortState');

  /**
   * Represents the `x:sst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode si x:si}
   */
  public static readonly sst: XName = X.x.getName('sst');

  /**
   * Represents the `x:start` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly start: XName = X.x.getName('start');

  /**
   * Represents the `x:stop` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode gradientFill x:gradientFill}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly stop: XName = X.x.getName('stop');

  /**
   * Represents the `x:stp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tp x:tp}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly stp: XName = X.x.getName('stp');

  /**
   * Represents the `x:strike` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly strike: XName = X.x.getName('strike');

  /**
   * Represents the `x:styleSheet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode borders x:borders}, {@linkcode cellStyles x:cellStyles}, {@linkcode cellStyleXfs x:cellStyleXfs}, {@linkcode cellXfs x:cellXfs}, {@linkcode colors x:colors}, {@linkcode dxfs x:dxfs}, {@linkcode extLst x:extLst}, {@linkcode fills x:fills}, {@linkcode fonts x:fonts}, {@linkcode numFmts x:numFmts}, {@linkcode tableStyles x:tableStyles}
   */
  public static readonly styleSheet: XName = X.x.getName('styleSheet');

  /**
   * Represents the `x:sz` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly sz: XName = X.x.getName('sz');

  /**
   * Represents the `x:t` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode is x:is}, {@linkcode mdx x:mdx}, {@linkcode r x:r}, {@linkcode rPh x:rPh}, {@linkcode si x:si}, {@linkcode text x:text}
   * - child XML elements: {@linkcode n x:n}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly t: XName = X.x.getName('t');

  /**
   * Represents the `x:tabColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sheetPr x:sheetPr}
   */
  public static readonly tabColor: XName = X.x.getName('tabColor');

  /**
   * Represents the `x:table` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode extLst x:extLst}, {@linkcode sortState x:sortState}, {@linkcode tableColumns x:tableColumns}, {@linkcode tableStyleInfo x:tableStyleInfo}
   */
  public static readonly table: XName = X.x.getName('table');

  /**
   * Represents the `x:tableColumn` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableColumns x:tableColumns}
   * - child XML elements: {@linkcode calculatedColumnFormula x:calculatedColumnFormula}, {@linkcode extLst x:extLst}, {@linkcode totalsRowFormula x:totalsRowFormula}, {@linkcode xmlColumnPr x:xmlColumnPr}
   */
  public static readonly tableColumn: XName = X.x.getName('tableColumn');

  /**
   * Represents the `x:tableColumns` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode table x:table}
   * - child XML elements: {@linkcode tableColumn x:tableColumn}
   */
  public static readonly tableColumns: XName = X.x.getName('tableColumns');

  /**
   * Represents the `x:tablePart` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableParts x:tableParts}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly tablePart: XName = X.x.getName('tablePart');

  /**
   * Represents the `x:tableParts` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode tablePart x:tablePart}
   */
  public static readonly tableParts: XName = X.x.getName('tableParts');

  /**
   * Represents the `x:tables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webPr x:webPr}
   * - child XML elements: {@linkcode m x:m}, {@linkcode s x:s}, {@linkcode x_ x:x_}
   */
  public static readonly tables: XName = X.x.getName('tables');

  /**
   * Represents the `x:tableStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyles x:tableStyles}
   * - child XML elements: {@linkcode tableStyleElement x:tableStyleElement}
   */
  public static readonly tableStyle: XName = X.x.getName('tableStyle');

  /**
   * Represents the `x:tableStyleElement` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableStyle x:tableStyle}
   */
  public static readonly tableStyleElement: XName = X.x.getName('tableStyleElement');

  /**
   * Represents the `x:tableStyleInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode table x:table}
   */
  public static readonly tableStyleInfo: XName = X.x.getName('tableStyleInfo');

  /**
   * Represents the `x:tableStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode styleSheet x:styleSheet}
   * - child XML elements: {@linkcode tableStyle x:tableStyle}
   */
  public static readonly tableStyles: XName = X.x.getName('tableStyles');

  /**
   * Represents the `x:text` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode comment x:comment}
   * - child XML elements: {@linkcode phoneticPr x:phoneticPr}, {@linkcode r x:r}, {@linkcode rPh x:rPh}, {@linkcode t x:t}
   */
  public static readonly text: XName = X.x.getName('text');

  /**
   * Represents the `x:textField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textFields x:textFields}
   */
  public static readonly textField: XName = X.x.getName('textField');

  /**
   * Represents the `x:textFields` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode textPr x:textPr}, {@linkcode X15.textPr x15:textPr}
   * - child XML elements: {@linkcode textField x:textField}
   */
  public static readonly textFields: XName = X.x.getName('textFields');

  /**
   * Represents the `x:textPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x:connection}
   * - child XML elements: {@linkcode textFields x:textFields}
   */
  public static readonly textPr: XName = X.x.getName('textPr');

  /**
   * Represents the `x:to` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor x:anchor}
   */
  public static readonly to: XName = X.x.getName('to');

  /**
   * Represents the `x:top` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly top: XName = X.x.getName('top');

  /**
   * Represents the `x:top10` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode filterColumn x:filterColumn}
   */
  public static readonly top10: XName = X.x.getName('top10');

  /**
   * Represents the `x:totalsRowFormula` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableColumn x:tableColumn}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly totalsRowFormula: XName = X.x.getName('totalsRowFormula');

  /**
   * Represents the `x:tp` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode main x:main}
   * - child XML elements: {@linkcode stp x:stp}, {@linkcode tr x:tr}, {@linkcode v x:v}
   */
  public static readonly tp: XName = X.x.getName('tp');

  /**
   * Represents the `x:tpl` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sortByTuple x:sortByTuple}, {@linkcode tpls x:tpls}
   */
  public static readonly tpl: XName = X.x.getName('tpl');

  /**
   * Represents the `x:tpls` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode e x:e}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode query x:query}, {@linkcode s x:s}, {@linkcode set x:set}
   * - child XML elements: {@linkcode tpl x:tpl}
   */
  public static readonly tpls: XName = X.x.getName('tpls');

  /**
   * Represents the `x:tr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tp x:tp}
   */
  public static readonly tr: XName = X.x.getName('tr');

  /**
   * Represents the `x:tupleCache` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotCacheDefinition x:pivotCacheDefinition}
   * - child XML elements: {@linkcode entries x:entries}, {@linkcode extLst x:extLst}, {@linkcode queryCache x:queryCache}, {@linkcode serverFormats x:serverFormats}, {@linkcode sets x:sets}
   */
  public static readonly tupleCache: XName = X.x.getName('tupleCache');

  /**
   * Represents the `x:u` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly u: XName = X.x.getName('u');

  /**
   * Represents the `x:undo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rm x:rm}, {@linkcode rrc x:rrc}
   */
  public static readonly undo: XName = X.x.getName('undo');

  /**
   * Represents the `x:userInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode users x:users}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly userInfo: XName = X.x.getName('userInfo');

  /**
   * Represents the `x:users` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode userInfo x:userInfo}
   */
  public static readonly users: XName = X.x.getName('users');

  /**
   * Represents the `x:v` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode c x:c}, {@linkcode cell x:cell}, {@linkcode nc x:nc}, {@linkcode oc x:oc}, {@linkcode tp x:tp}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly v: XName = X.x.getName('v');

  /**
   * Represents the `x:val` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode value x:value}
   * - XML attributes: {@linkcode XML.space xml:space}
   */
  public static readonly val: XName = X.x.getName('val');

  /**
   * Represents the `x:value` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode values x:values}, {@linkcode X14.values x14:values}
   * - child XML elements: {@linkcode val x:val}
   */
  public static readonly value: XName = X.x.getName('value');

  /**
   * Represents the `x:valueMetadata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode metadata x:metadata}
   * - child XML elements: {@linkcode bk x:bk}
   */
  public static readonly valueMetadata: XName = X.x.getName('valueMetadata');

  /**
   * Represents the `x:values` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ddeItem x:ddeItem}
   * - child XML elements: {@linkcode value x:value}
   */
  public static readonly values: XName = X.x.getName('values');

  /**
   * Represents the `x:vertAlign` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode font x:font}, {@linkcode rPr x:rPr}
   */
  public static readonly vertAlign: XName = X.x.getName('vertAlign');

  /**
   * Represents the `x:vertical` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode border x:border}
   * - child XML elements: {@linkcode color x:color}
   */
  public static readonly vertical: XName = X.x.getName('vertical');

  /**
   * Represents the `x:volType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode volTypes x:volTypes}
   * - child XML elements: {@linkcode main x:main}
   */
  public static readonly volType: XName = X.x.getName('volType');

  /**
   * Represents the `x:volTypes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode volType x:volType}
   */
  public static readonly volTypes: XName = X.x.getName('volTypes');

  /**
   * Represents the `x:webPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x:connection}
   * - child XML elements: {@linkcode tables x:tables}
   */
  public static readonly webPr: XName = X.x.getName('webPr');

  /**
   * Represents the `x:webPublishing` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly webPublishing: XName = X.x.getName('webPublishing');

  /**
   * Represents the `x:webPublishItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webPublishItems x:webPublishItems}
   */
  public static readonly webPublishItem: XName = X.x.getName('webPublishItem');

  /**
   * Represents the `x:webPublishItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode chartsheet x:chartsheet}, {@linkcode worksheet x:worksheet}
   * - child XML elements: {@linkcode webPublishItem x:webPublishItem}
   */
  public static readonly webPublishItems: XName = X.x.getName('webPublishItems');

  /**
   * Represents the `x:webPublishObject` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webPublishObjects x:webPublishObjects}
   */
  public static readonly webPublishObject: XName = X.x.getName('webPublishObject');

  /**
   * Represents the `x:webPublishObjects` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   * - child XML elements: {@linkcode webPublishObject x:webPublishObject}
   */
  public static readonly webPublishObjects: XName = X.x.getName('webPublishObjects');

  /**
   * Represents the `x:workbook` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode bookViews x:bookViews}, {@linkcode calcPr x:calcPr}, {@linkcode customWorkbookViews x:customWorkbookViews}, {@linkcode definedNames x:definedNames}, {@linkcode externalReferences x:externalReferences}, {@linkcode extLst x:extLst}, {@linkcode fileRecoveryPr x:fileRecoveryPr}, {@linkcode fileSharing x:fileSharing}, {@linkcode fileVersion x:fileVersion}, {@linkcode functionGroups x:functionGroups}, {@linkcode oleSize x:oleSize}, {@linkcode pivotCaches x:pivotCaches}, {@linkcode sheets x:sheets}, {@linkcode webPublishing x:webPublishing}, {@linkcode webPublishObjects x:webPublishObjects}, {@linkcode workbookPr x:workbookPr}, {@linkcode workbookProtection x:workbookProtection}
   */
  public static readonly workbook: XName = X.x.getName('workbook');

  /**
   * Represents the `x:workbookPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly workbookPr: XName = X.x.getName('workbookPr');

  /**
   * Represents the `x:workbookProtection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode workbook x:workbook}
   */
  public static readonly workbookProtection: XName = X.x.getName('workbookProtection');

  /**
   * Represents the `x:workbookView` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode bookViews x:bookViews}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly workbookView: XName = X.x.getName('workbookView');

  /**
   * Represents the `x:worksheet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode autoFilter x:autoFilter}, {@linkcode cellWatches x:cellWatches}, {@linkcode colBreaks x:colBreaks}, {@linkcode cols x:cols}, {@linkcode conditionalFormatting x:conditionalFormatting}, {@linkcode controls x:controls}, {@linkcode customProperties x:customProperties}, {@linkcode customSheetViews x:customSheetViews}, {@linkcode dataConsolidate x:dataConsolidate}, {@linkcode dataValidations x:dataValidations}, {@linkcode dimension x:dimension}, {@linkcode drawing x:drawing}, {@linkcode drawingHF x:drawingHF}, {@linkcode extLst x:extLst}, {@linkcode headerFooter x:headerFooter}, {@linkcode hyperlinks x:hyperlinks}, {@linkcode ignoredErrors x:ignoredErrors}, {@linkcode legacyDrawing x:legacyDrawing}, {@linkcode legacyDrawingHF x:legacyDrawingHF}, {@linkcode mergeCells x:mergeCells}, {@linkcode oleObjects x:oleObjects}, {@linkcode pageMargins x:pageMargins}, {@linkcode pageSetup x:pageSetup}, {@linkcode phoneticPr x:phoneticPr}, {@linkcode picture x:picture}, {@linkcode printOptions x:printOptions}, {@linkcode protectedRanges x:protectedRanges}, {@linkcode rowBreaks x:rowBreaks}, {@linkcode scenarios x:scenarios}, {@linkcode sheetCalcPr x:sheetCalcPr}, {@linkcode sheetData x:sheetData}, {@linkcode sheetFormatPr x:sheetFormatPr}, {@linkcode sheetPr x:sheetPr}, {@linkcode sheetProtection x:sheetProtection}, {@linkcode sheetViews x:sheetViews}, {@linkcode sortState x:sortState}, {@linkcode tableParts x:tableParts}, {@linkcode webPublishItems x:webPublishItems}
   */
  public static readonly worksheet: XName = X.x.getName('worksheet');

  /**
   * Represents the `x:worksheetSource` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheSource x:cacheSource}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly worksheetSource: XName = X.x.getName('worksheetSource');

  /**
   * Represents the `x:x` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode b x:b}, {@linkcode d x:d}, {@linkcode discretePr x:discretePr}, {@linkcode e x:e}, {@linkcode i x:i}, {@linkcode m x:m}, {@linkcode n x:n}, {@linkcode r x:r}, {@linkcode reference x:reference}, {@linkcode s x:s}, {@linkcode tables x:tables}
   */
  public static readonly x_: XName = X.x.getName('x');

  /**
   * Represents the `x:xf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cellStyleXfs x:cellStyleXfs}, {@linkcode cellXfs x:cellXfs}
   * - child XML elements: {@linkcode alignment x:alignment}, {@linkcode extLst x:extLst}, {@linkcode protection x:protection}
   */
  public static readonly xf: XName = X.x.getName('xf');

  /**
   * Represents the `x:xmlCellPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode singleXmlCell x:singleXmlCell}
   * - child XML elements: {@linkcode extLst x:extLst}, {@linkcode xmlPr x:xmlPr}
   */
  public static readonly xmlCellPr: XName = X.x.getName('xmlCellPr');

  /**
   * Represents the `x:xmlColumnPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tableColumn x:tableColumn}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly xmlColumnPr: XName = X.x.getName('xmlColumnPr');

  /**
   * Represents the `x:xmlPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode xmlCellPr x:xmlCellPr}
   * - child XML elements: {@linkcode extLst x:extLst}
   */
  public static readonly xmlPr: XName = X.x.getName('xmlPr');
}
