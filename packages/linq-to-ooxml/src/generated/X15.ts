/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"` namespace.
 */
export class X15 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `x15` prefix.
   */
  public static readonly x15: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/spreadsheetml/2010/11/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('x15'), X15.x15.namespaceName);
  }

  /**
   * Represents the `x15:activeTabTopLevelEntity` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableUISettings x15:pivotTableUISettings}
   */
  public static readonly activeTabTopLevelEntity: XName = X15.x15.getName('activeTabTopLevelEntity');

  /**
   * Represents the `x15:bounds` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode state x15:state}
   */
  public static readonly bounds: XName = X15.x15.getName('bounds');

  /**
   * Represents the `x15:c` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotRow x15:pivotRow}
   * - child XML elements: {@linkcode v x15:v}, {@linkcode x x15:x}
   */
  public static readonly c: XName = X15.x15.getName('c');

  /**
   * Represents the `x15:cachedUniqueName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cachedUniqueNames x15:cachedUniqueNames}
   */
  public static readonly cachedUniqueName: XName = X15.x15.getName('cachedUniqueName');

  /**
   * Represents the `x15:cachedUniqueNames` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode cachedUniqueName x15:cachedUniqueName}
   */
  public static readonly cachedUniqueNames: XName = X15.x15.getName('cachedUniqueNames');

  /**
   * Represents the `x15:cacheHierarchy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly cacheHierarchy: XName = X15.x15.getName('cacheHierarchy');

  /**
   * Represents the `x15:calculatedMember` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly calculatedMember: XName = X15.x15.getName('calculatedMember');

  /**
   * Represents the `x15:connection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode dataFeedPr x15:dataFeedPr}, {@linkcode modelTextPr x15:modelTextPr}, {@linkcode oledbPr x15:oledbPr}, {@linkcode rangePr x15:rangePr}, {@linkcode textPr x15:textPr}
   */
  public static readonly connection: XName = X15.x15.getName('connection');

  /**
   * Represents the `x15:dataFeedPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x15:connection}
   * - child XML elements: {@linkcode dbTables x15:dbTables}
   */
  public static readonly dataFeedPr: XName = X15.x15.getName('dataFeedPr');

  /**
   * Represents the `x15:dataField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly dataField: XName = X15.x15.getName('dataField');

  /**
   * Represents the `x15:dataModel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode extLst x15:extLst}, {@linkcode modelRelationships x15:modelRelationships}, {@linkcode modelTables x15:modelTables}
   */
  public static readonly dataModel: XName = X15.x15.getName('dataModel');

  /**
   * Represents the `x15:dbCommand` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oledbPr x15:oledbPr}
   */
  public static readonly dbCommand: XName = X15.x15.getName('dbCommand');

  /**
   * Represents the `x15:dbTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dbTables x15:dbTables}
   */
  public static readonly dbTable: XName = X15.x15.getName('dbTable');

  /**
   * Represents the `x15:dbTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataFeedPr x15:dataFeedPr}, {@linkcode oledbPr x15:oledbPr}
   * - child XML elements: {@linkcode dbTable x15:dbTable}
   */
  public static readonly dbTables: XName = X15.x15.getName('dbTables');

  /**
   * Represents the `x15:dxfs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X.dxf x:dxf}
   */
  public static readonly dxfs: XName = X15.x15.getName('dxfs');

  /**
   * Represents the `x15:extLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataModel x15:dataModel}, {@linkcode pivotTableUISettings x15:pivotTableUISettings}, {@linkcode state x15:state}, {@linkcode tableSlicerCache x15:tableSlicerCache}, {@linkcode timeline x15:timeline}, {@linkcode timelineCacheDefinition x15:timelineCacheDefinition}
   * - child XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly extLst: XName = X15.x15.getName('extLst');

  /**
   * Represents the `x15:modelRelationship` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode modelRelationships x15:modelRelationships}
   */
  public static readonly modelRelationship: XName = X15.x15.getName('modelRelationship');

  /**
   * Represents the `x15:modelRelationships` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataModel x15:dataModel}
   * - child XML elements: {@linkcode modelRelationship x15:modelRelationship}
   */
  public static readonly modelRelationships: XName = X15.x15.getName('modelRelationships');

  /**
   * Represents the `x15:modelTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode modelTables x15:modelTables}
   */
  public static readonly modelTable: XName = X15.x15.getName('modelTable');

  /**
   * Represents the `x15:modelTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataModel x15:dataModel}
   * - child XML elements: {@linkcode modelTable x15:modelTable}
   */
  public static readonly modelTables: XName = X15.x15.getName('modelTables');

  /**
   * Represents the `x15:modelTextPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x15:connection}
   */
  public static readonly modelTextPr: XName = X15.x15.getName('modelTextPr');

  /**
   * Represents the `x15:movingPeriodState` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}, {@linkcode state x15:state}
   */
  public static readonly movingPeriodState: XName = X15.x15.getName('movingPeriodState');

  /**
   * Represents the `x15:oledbPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x15:connection}
   * - child XML elements: {@linkcode dbCommand x15:dbCommand}, {@linkcode dbTables x15:dbTables}
   */
  public static readonly oledbPr: XName = X15.x15.getName('oledbPr');

  /**
   * Represents the `x15:pivotCacheDecoupled` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotCacheDecoupled: XName = X15.x15.getName('pivotCacheDecoupled');

  /**
   * Represents the `x15:pivotCacheIdVersion` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotCacheIdVersion: XName = X15.x15.getName('pivotCacheIdVersion');

  /**
   * Represents the `x15:pivotCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X.pivotCache x:pivotCache}
   */
  public static readonly pivotCaches: XName = X15.x15.getName('pivotCaches');

  /**
   * Represents the `x15:pivotFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotFilter: XName = X15.x15.getName('pivotFilter');

  /**
   * Represents the `x15:pivotRow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableData x15:pivotTableData}
   * - child XML elements: {@linkcode c x15:c}
   */
  public static readonly pivotRow: XName = X15.x15.getName('pivotRow');

  /**
   * Represents the `x15:pivotTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTables x15:pivotTables}
   */
  public static readonly pivotTable: XName = X15.x15.getName('pivotTable');

  /**
   * Represents the `x15:pivotTableData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode pivotRow x15:pivotRow}
   */
  public static readonly pivotTableData: XName = X15.x15.getName('pivotTableData');

  /**
   * Represents the `x15:pivotTableReference` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableReferences x15:pivotTableReferences}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly pivotTableReference: XName = X15.x15.getName('pivotTableReference');

  /**
   * Represents the `x15:pivotTableReferences` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode pivotTableReference x15:pivotTableReference}
   */
  public static readonly pivotTableReferences: XName = X15.x15.getName('pivotTableReferences');

  /**
   * Represents the `x15:pivotTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineCacheDefinition x15:timelineCacheDefinition}
   * - child XML elements: {@linkcode pivotTable x15:pivotTable}
   */
  public static readonly pivotTables: XName = X15.x15.getName('pivotTables');

  /**
   * Represents the `x15:pivotTableUISettings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode activeTabTopLevelEntity x15:activeTabTopLevelEntity}, {@linkcode extLst x15:extLst}
   */
  public static readonly pivotTableUISettings: XName = X15.x15.getName('pivotTableUISettings');

  /**
   * Represents the `x15:queryTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly queryTable: XName = X15.x15.getName('queryTable');

  /**
   * Represents the `x15:rangePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x15:connection}
   */
  public static readonly rangePr: XName = X15.x15.getName('rangePr');

  /**
   * Represents the `x15:selection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode state x15:state}
   */
  public static readonly selection: XName = X15.x15.getName('selection');

  /**
   * Represents the `x15:slicerCacheHideItemsWithNoData` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode slicerCacheOlapLevelName x15:slicerCacheOlapLevelName}
   */
  public static readonly slicerCacheHideItemsWithNoData: XName = X15.x15.getName('slicerCacheHideItemsWithNoData');

  /**
   * Represents the `x15:slicerCacheOlapLevelName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerCacheHideItemsWithNoData x15:slicerCacheHideItemsWithNoData}
   */
  public static readonly slicerCacheOlapLevelName: XName = X15.x15.getName('slicerCacheOlapLevelName');

  /**
   * Represents the `x15:slicerCachePivotTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X14.pivotTable x14:pivotTable}
   */
  public static readonly slicerCachePivotTables: XName = X15.x15.getName('slicerCachePivotTables');

  /**
   * Represents the `x15:slicerCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X14.slicerCache x14:slicerCache}
   */
  public static readonly slicerCaches: XName = X15.x15.getName('slicerCaches');

  /**
   * Represents the `x15:state` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineCacheDefinition x15:timelineCacheDefinition}
   * - child XML elements: {@linkcode bounds x15:bounds}, {@linkcode extLst x15:extLst}, {@linkcode movingPeriodState x15:movingPeriodState}, {@linkcode selection x15:selection}
   */
  public static readonly state: XName = X15.x15.getName('state');

  /**
   * Represents the `x15:tableSlicerCache` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode extLst x15:extLst}
   */
  public static readonly tableSlicerCache: XName = X15.x15.getName('tableSlicerCache');

  /**
   * Represents the `x15:textPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x15:connection}
   * - child XML elements: {@linkcode X.textFields x:textFields}
   */
  public static readonly textPr: XName = X15.x15.getName('textPr');

  /**
   * Represents the `x15:timeline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelines x15:timelines}
   * - child XML elements: {@linkcode extLst x15:extLst}
   */
  public static readonly timeline: XName = X15.x15.getName('timeline');

  /**
   * Represents the `x15:timelineCacheDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x15:extLst}, {@linkcode pivotTables x15:pivotTables}, {@linkcode state x15:state}
   */
  public static readonly timelineCacheDefinition: XName = X15.x15.getName('timelineCacheDefinition');

  /**
   * Represents the `x15:timelineCachePivotCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X.pivotCache x:pivotCache}
   */
  public static readonly timelineCachePivotCaches: XName = X15.x15.getName('timelineCachePivotCaches');

  /**
   * Represents the `x15:timelineCacheRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineCacheRefs x15:timelineCacheRefs}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly timelineCacheRef: XName = X15.x15.getName('timelineCacheRef');

  /**
   * Represents the `x15:timelineCacheRefs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode timelineCacheRef x15:timelineCacheRef}
   */
  public static readonly timelineCacheRefs: XName = X15.x15.getName('timelineCacheRefs');

  /**
   * Represents the `x15:timelinePivotCacheDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly timelinePivotCacheDefinition: XName = X15.x15.getName('timelinePivotCacheDefinition');

  /**
   * Represents the `x15:timelineRef` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineRefs x15:timelineRefs}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly timelineRef: XName = X15.x15.getName('timelineRef');

  /**
   * Represents the `x15:timelineRefs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode timelineRef x15:timelineRef}
   */
  public static readonly timelineRefs: XName = X15.x15.getName('timelineRefs');

  /**
   * Represents the `x15:timelines` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode timeline x15:timeline}
   */
  public static readonly timelines: XName = X15.x15.getName('timelines');

  /**
   * Represents the `x15:timelineStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineStyles x15:timelineStyles}
   * - child XML elements: {@linkcode timelineStyleElements x15:timelineStyleElements}
   */
  public static readonly timelineStyle: XName = X15.x15.getName('timelineStyle');

  /**
   * Represents the `x15:timelineStyleElement` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineStyleElements x15:timelineStyleElements}
   */
  public static readonly timelineStyleElement: XName = X15.x15.getName('timelineStyleElement');

  /**
   * Represents the `x15:timelineStyleElements` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode timelineStyle x15:timelineStyle}
   * - child XML elements: {@linkcode timelineStyleElement x15:timelineStyleElement}
   */
  public static readonly timelineStyleElements: XName = X15.x15.getName('timelineStyleElements');

  /**
   * Represents the `x15:timelineStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode timelineStyle x15:timelineStyle}
   */
  public static readonly timelineStyles: XName = X15.x15.getName('timelineStyles');

  /**
   * Represents the `x15:v` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode c x15:c}
   */
  public static readonly v: XName = X15.x15.getName('v');

  /**
   * Represents the `x15:webExtension` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode webExtensions x15:webExtensions}
   */
  public static readonly webExtension: XName = X15.x15.getName('webExtension');

  /**
   * Represents the `x15:webExtensions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode webExtension x15:webExtension}
   */
  public static readonly webExtensions: XName = X15.x15.getName('webExtensions');

  /**
   * Represents the `x15:workbookPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly workbookPr: XName = X15.x15.getName('workbookPr');

  /**
   * Represents the `x15:x` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode c x15:c}
   */
  public static readonly x: XName = X15.x15.getName('x');
}
