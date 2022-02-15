/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"` namespace.
 */
export class X14 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `x14` prefix.
   */
  public static readonly x14: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/spreadsheetml/2009/9/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('x14'), X14.x14.namespaceName);
  }

  /**
   * Represents the `x14:argumentDescription` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode argumentDescriptions x14:argumentDescriptions}
   */
  public static readonly argumentDescription: XName = X14.x14.getName('argumentDescription');

  /**
   * Represents the `x14:argumentDescriptions` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode definedName x14:definedName}
   * - child XML elements: {@linkcode argumentDescription x14:argumentDescription}
   */
  public static readonly argumentDescriptions: XName = X14.x14.getName('argumentDescriptions');

  /**
   * Represents the `x14:axisColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataBar x14:dataBar}
   */
  public static readonly axisColor: XName = X14.x14.getName('axisColor');

  /**
   * Represents the `x14:borderColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataBar x14:dataBar}
   */
  public static readonly borderColor: XName = X14.x14.getName('borderColor');

  /**
   * Represents the `x14:cacheField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly cacheField: XName = X14.x14.getName('cacheField');

  /**
   * Represents the `x14:cacheHierarchy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode setLevels x14:setLevels}
   */
  public static readonly cacheHierarchy: XName = X14.x14.getName('cacheHierarchy');

  /**
   * Represents the `x14:calculatedMember` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode tupleSet x14:tupleSet}
   */
  public static readonly calculatedMember: XName = X14.x14.getName('calculatedMember');

  /**
   * Represents the `x14:calculatedMembers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode connection x14:connection}
   * - child XML elements: {@linkcode X.calculatedMember x:calculatedMember}
   */
  public static readonly calculatedMembers: XName = X14.x14.getName('calculatedMembers');

  /**
   * Represents the `x14:cfIcon` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode iconSet x14:iconSet}
   */
  public static readonly cfIcon: XName = X14.x14.getName('cfIcon');

  /**
   * Represents the `x14:cfRule` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormatting x14:conditionalFormatting}
   * - child XML elements: {@linkcode colorScale x14:colorScale}, {@linkcode dataBar x14:dataBar}, {@linkcode dxf x14:dxf}, {@linkcode extLst x14:extLst}, {@linkcode iconSet x14:iconSet}
   */
  public static readonly cfRule: XName = X14.x14.getName('cfRule');

  /**
   * Represents the `x14:cfvo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colorScale x14:colorScale}, {@linkcode dataBar x14:dataBar}, {@linkcode iconSet x14:iconSet}
   * - child XML elements: {@linkcode extLst x14:extLst}
   */
  public static readonly cfvo: XName = X14.x14.getName('cfvo');

  /**
   * Represents the `x14:color` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode colorScale x14:colorScale}
   */
  public static readonly color: XName = X14.x14.getName('color');

  /**
   * Represents the `x14:colorAxis` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorAxis: XName = X14.x14.getName('colorAxis');

  /**
   * Represents the `x14:colorFirst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorFirst: XName = X14.x14.getName('colorFirst');

  /**
   * Represents the `x14:colorHigh` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorHigh: XName = X14.x14.getName('colorHigh');

  /**
   * Represents the `x14:colorLast` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorLast: XName = X14.x14.getName('colorLast');

  /**
   * Represents the `x14:colorLow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorLow: XName = X14.x14.getName('colorLow');

  /**
   * Represents the `x14:colorMarkers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorMarkers: XName = X14.x14.getName('colorMarkers');

  /**
   * Represents the `x14:colorNegative` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorNegative: XName = X14.x14.getName('colorNegative');

  /**
   * Represents the `x14:colorScale` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x14:cfRule}
   * - child XML elements: {@linkcode cfvo x14:cfvo}, {@linkcode color x14:color}
   */
  public static readonly colorScale: XName = X14.x14.getName('colorScale');

  /**
   * Represents the `x14:colorSeries` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly colorSeries: XName = X14.x14.getName('colorSeries');

  /**
   * Represents the `x14:conditionalFormat` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormats x14:conditionalFormats}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode pivotAreas x14:pivotAreas}
   */
  public static readonly conditionalFormat: XName = X14.x14.getName('conditionalFormat');

  /**
   * Represents the `x14:conditionalFormats` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x14:pivotTableDefinition}
   * - child XML elements: {@linkcode conditionalFormat x14:conditionalFormat}
   */
  public static readonly conditionalFormats: XName = X14.x14.getName('conditionalFormats');

  /**
   * Represents the `x14:conditionalFormatting` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormattings x14:conditionalFormattings}
   * - child XML elements: {@linkcode cfRule x14:cfRule}, {@linkcode extLst x14:extLst}
   */
  public static readonly conditionalFormatting: XName = X14.x14.getName('conditionalFormatting');

  /**
   * Represents the `x14:conditionalFormattings` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode conditionalFormatting x14:conditionalFormatting}
   */
  public static readonly conditionalFormattings: XName = X14.x14.getName('conditionalFormattings');

  /**
   * Represents the `x14:connection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode calculatedMembers x14:calculatedMembers}
   */
  public static readonly connection: XName = X14.x14.getName('connection');

  /**
   * Represents the `x14:customFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode customFilters x14:customFilters}
   */
  public static readonly customFilter: XName = X14.x14.getName('customFilter');

  /**
   * Represents the `x14:customFilters` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.filterColumn x:filterColumn}
   * - child XML elements: {@linkcode customFilter x14:customFilter}
   */
  public static readonly customFilters: XName = X14.x14.getName('customFilters');

  /**
   * Represents the `x14:data` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerCacheDefinition x14:slicerCacheDefinition}
   * - child XML elements: {@linkcode olap x14:olap}, {@linkcode tabular x14:tabular}
   */
  public static readonly data: XName = X14.x14.getName('data');

  /**
   * Represents the `x14:dataBar` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x14:cfRule}
   * - child XML elements: {@linkcode axisColor x14:axisColor}, {@linkcode borderColor x14:borderColor}, {@linkcode cfvo x14:cfvo}, {@linkcode fillColor x14:fillColor}, {@linkcode negativeBorderColor x14:negativeBorderColor}, {@linkcode negativeFillColor x14:negativeFillColor}
   */
  public static readonly dataBar: XName = X14.x14.getName('dataBar');

  /**
   * Represents the `x14:dataField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly dataField: XName = X14.x14.getName('dataField');

  /**
   * Represents the `x14:datastoreItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x14:extLst}
   */
  public static readonly datastoreItem: XName = X14.x14.getName('datastoreItem');

  /**
   * Represents the `x14:dataValidation` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidations x14:dataValidations}
   * - child XML elements: {@linkcode formula1 x14:formula1}, {@linkcode formula2 x14:formula2}
   */
  public static readonly dataValidation: XName = X14.x14.getName('dataValidation');

  /**
   * Represents the `x14:dataValidations` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode dataValidation x14:dataValidation}
   */
  public static readonly dataValidations: XName = X14.x14.getName('dataValidations');

  /**
   * Represents the `x14:definedName` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode definedNames x14:definedNames}
   * - child XML elements: {@linkcode argumentDescriptions x14:argumentDescriptions}
   */
  public static readonly definedName: XName = X14.x14.getName('definedName');

  /**
   * Represents the `x14:definedNames` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode definedName x14:definedName}
   */
  public static readonly definedNames: XName = X14.x14.getName('definedNames');

  /**
   * Represents the `x14:dxf` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x14:cfRule}
   * - child XML elements: {@linkcode X.alignment x:alignment}, {@linkcode X.border x:border}, {@linkcode X.extLst x:extLst}, {@linkcode X.fill x:fill}, {@linkcode X.font x:font}, {@linkcode X.numFmt x:numFmt}, {@linkcode X.protection x:protection}
   */
  public static readonly dxf: XName = X14.x14.getName('dxf');

  /**
   * Represents the `x14:dxfs` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X.dxf x:dxf}
   */
  public static readonly dxfs: XName = X14.x14.getName('dxfs');

  /**
   * Represents the `x14:editValue` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotChange x14:pivotChange}, {@linkcode userEdit x14:userEdit}
   */
  public static readonly editValue: XName = X14.x14.getName('editValue');

  /**
   * Represents the `x14:extLst` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x14:cfRule}, {@linkcode cfvo x14:cfvo}, {@linkcode conditionalFormat x14:conditionalFormat}, {@linkcode conditionalFormatting x14:conditionalFormatting}, {@linkcode datastoreItem x14:datastoreItem}, {@linkcode formControlPr x14:formControlPr}, {@linkcode ignoredErrors x14:ignoredErrors}, {@linkcode itemLst x14:itemLst}, {@linkcode olap x14:olap}, {@linkcode pivotChange x14:pivotChange}, {@linkcode pivotEdit x14:pivotEdit}, {@linkcode slicer x14:slicer}, {@linkcode slicerCacheDefinition x14:slicerCacheDefinition}, {@linkcode tabular x14:tabular}
   * - child XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly extLst: XName = X14.x14.getName('extLst');

  /**
   * Represents the `x14:fillColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataBar x14:dataBar}
   */
  public static readonly fillColor: XName = X14.x14.getName('fillColor');

  /**
   * Represents the `x14:filter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.filters x:filters}
   */
  public static readonly filter: XName = X14.x14.getName('filter');

  /**
   * Represents the `x14:formControlPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode itemLst x14:itemLst}
   */
  public static readonly formControlPr: XName = X14.x14.getName('formControlPr');

  /**
   * Represents the `x14:formula1` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidation x14:dataValidation}
   */
  public static readonly formula1: XName = X14.x14.getName('formula1');

  /**
   * Represents the `x14:formula2` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataValidation x14:dataValidation}
   */
  public static readonly formula2: XName = X14.x14.getName('formula2');

  /**
   * Represents the `x14:header` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode headers x14:headers}
   */
  public static readonly header: XName = X14.x14.getName('header');

  /**
   * Represents the `x14:headers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleSet x14:tupleSet}
   * - child XML elements: {@linkcode header x14:header}
   */
  public static readonly headers: XName = X14.x14.getName('headers');

  /**
   * Represents the `x14:i` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode items x14:items}, {@linkcode range x14:range}
   * - child XML elements: {@linkcode p x14:p}
   */
  public static readonly i: XName = X14.x14.getName('i');

  /**
   * Represents the `x14:iconFilter` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.filterColumn x:filterColumn}
   */
  public static readonly iconFilter: XName = X14.x14.getName('iconFilter');

  /**
   * Represents the `x14:iconSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cfRule x14:cfRule}
   * - child XML elements: {@linkcode cfIcon x14:cfIcon}, {@linkcode cfvo x14:cfvo}
   */
  public static readonly iconSet: XName = X14.x14.getName('iconSet');

  /**
   * Represents the `x14:id` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly id: XName = X14.x14.getName('id');

  /**
   * Represents the `x14:ignoredError` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ignoredErrors x14:ignoredErrors}
   */
  public static readonly ignoredError: XName = X14.x14.getName('ignoredError');

  /**
   * Represents the `x14:ignoredErrors` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode ignoredError x14:ignoredError}
   */
  public static readonly ignoredErrors: XName = X14.x14.getName('ignoredErrors');

  /**
   * Represents the `x14:item` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode itemLst x14:itemLst}
   */
  public static readonly item: XName = X14.x14.getName('item');

  /**
   * Represents the `x14:itemLst` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode formControlPr x14:formControlPr}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode item x14:item}
   */
  public static readonly itemLst: XName = X14.x14.getName('itemLst');

  /**
   * Represents the `x14:items` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tabular x14:tabular}
   * - child XML elements: {@linkcode i x14:i}
   */
  public static readonly items: XName = X14.x14.getName('items');

  /**
   * Represents the `x14:level` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode levels x14:levels}
   * - child XML elements: {@linkcode ranges x14:ranges}
   */
  public static readonly level: XName = X14.x14.getName('level');

  /**
   * Represents the `x14:levels` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode olap x14:olap}
   * - child XML elements: {@linkcode level x14:level}
   */
  public static readonly levels: XName = X14.x14.getName('levels');

  /**
   * Represents the `x14:negativeBorderColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataBar x14:dataBar}
   */
  public static readonly negativeBorderColor: XName = X14.x14.getName('negativeBorderColor');

  /**
   * Represents the `x14:negativeFillColor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode dataBar x14:dataBar}
   */
  public static readonly negativeFillColor: XName = X14.x14.getName('negativeFillColor');

  /**
   * Represents the `x14:olap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode data x14:data}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode levels x14:levels}, {@linkcode selections x14:selections}
   */
  public static readonly olap: XName = X14.x14.getName('olap');

  /**
   * Represents the `x14:oleItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.oleItems x:oleItems}
   * - child XML elements: {@linkcode values x14:values}
   */
  public static readonly oleItem: XName = X14.x14.getName('oleItem');

  /**
   * Represents the `x14:p` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode i x14:i}, {@linkcode selection x14:selection}
   */
  public static readonly p: XName = X14.x14.getName('p');

  /**
   * Represents the `x14:pivotArea` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotEdit x14:pivotEdit}
   * - child XML elements: {@linkcode X.extLst x:extLst}, {@linkcode X.references x:references}
   */
  public static readonly pivotArea: XName = X14.x14.getName('pivotArea');

  /**
   * Represents the `x14:pivotAreas` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode conditionalFormat x14:conditionalFormat}
   * - child XML elements: {@linkcode X.pivotArea x:pivotArea}
   */
  public static readonly pivotAreas: XName = X14.x14.getName('pivotAreas');

  /**
   * Represents the `x14:pivotCacheDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotCacheDefinition: XName = X14.x14.getName('pivotCacheDefinition');

  /**
   * Represents the `x14:pivotCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode X.pivotCache x:pivotCache}
   */
  public static readonly pivotCaches: XName = X14.x14.getName('pivotCaches');

  /**
   * Represents the `x14:pivotChange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotChanges x14:pivotChanges}
   * - child XML elements: {@linkcode editValue x14:editValue}, {@linkcode extLst x14:extLst}, {@linkcode tupleItems x14:tupleItems}
   */
  public static readonly pivotChange: XName = X14.x14.getName('pivotChange');

  /**
   * Represents the `x14:pivotChanges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x14:pivotTableDefinition}
   * - child XML elements: {@linkcode pivotChange x14:pivotChange}
   */
  public static readonly pivotChanges: XName = X14.x14.getName('pivotChanges');

  /**
   * Represents the `x14:pivotEdit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotEdits x14:pivotEdits}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode pivotArea x14:pivotArea}, {@linkcode tupleItems x14:tupleItems}, {@linkcode userEdit x14:userEdit}
   */
  public static readonly pivotEdit: XName = X14.x14.getName('pivotEdit');

  /**
   * Represents the `x14:pivotEdits` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTableDefinition x14:pivotTableDefinition}
   * - child XML elements: {@linkcode pivotEdit x14:pivotEdit}
   */
  public static readonly pivotEdits: XName = X14.x14.getName('pivotEdits');

  /**
   * Represents the `x14:pivotField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotField: XName = X14.x14.getName('pivotField');

  /**
   * Represents the `x14:pivotHierarchy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly pivotHierarchy: XName = X14.x14.getName('pivotHierarchy');

  /**
   * Represents the `x14:pivotTable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotTables x14:pivotTables}, {@linkcode X15.slicerCachePivotTables x15:slicerCachePivotTables}
   */
  public static readonly pivotTable: XName = X14.x14.getName('pivotTable');

  /**
   * Represents the `x14:pivotTableDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode conditionalFormats x14:conditionalFormats}, {@linkcode pivotChanges x14:pivotChanges}, {@linkcode pivotEdits x14:pivotEdits}
   */
  public static readonly pivotTableDefinition: XName = X14.x14.getName('pivotTableDefinition');

  /**
   * Represents the `x14:pivotTables` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerCacheDefinition x14:slicerCacheDefinition}
   * - child XML elements: {@linkcode pivotTable x14:pivotTable}
   */
  public static readonly pivotTables: XName = X14.x14.getName('pivotTables');

  /**
   * Represents the `x14:protectedRange` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode protectedRanges x14:protectedRanges}
   */
  public static readonly protectedRange: XName = X14.x14.getName('protectedRange');

  /**
   * Represents the `x14:protectedRanges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode protectedRange x14:protectedRange}
   */
  public static readonly protectedRanges: XName = X14.x14.getName('protectedRanges');

  /**
   * Represents the `x14:range` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode ranges x14:ranges}
   * - child XML elements: {@linkcode i x14:i}
   */
  public static readonly range: XName = X14.x14.getName('range');

  /**
   * Represents the `x14:ranges` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode level x14:level}
   * - child XML elements: {@linkcode range x14:range}
   */
  public static readonly ranges: XName = X14.x14.getName('ranges');

  /**
   * Represents the `x14:row` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rows x14:rows}
   * - child XML elements: {@linkcode rowItem x14:rowItem}
   */
  public static readonly row: XName = X14.x14.getName('row');

  /**
   * Represents the `x14:rowItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode row x14:row}
   */
  public static readonly rowItem: XName = X14.x14.getName('rowItem');

  /**
   * Represents the `x14:rows` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleSet x14:tupleSet}
   * - child XML elements: {@linkcode row x14:row}
   */
  public static readonly rows: XName = X14.x14.getName('rows');

  /**
   * Represents the `x14:selection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode selections x14:selections}
   * - child XML elements: {@linkcode p x14:p}
   */
  public static readonly selection: XName = X14.x14.getName('selection');

  /**
   * Represents the `x14:selections` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode olap x14:olap}
   * - child XML elements: {@linkcode selection x14:selection}
   */
  public static readonly selections: XName = X14.x14.getName('selections');

  /**
   * Represents the `x14:setLevel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode setLevels x14:setLevels}
   */
  public static readonly setLevel: XName = X14.x14.getName('setLevel');

  /**
   * Represents the `x14:setLevels` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode cacheHierarchy x14:cacheHierarchy}
   * - child XML elements: {@linkcode setLevel x14:setLevel}
   */
  public static readonly setLevels: XName = X14.x14.getName('setLevels');

  /**
   * Represents the `x14:slicer` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerList x14:slicerList}, {@linkcode slicers x14:slicers}
   * - child XML elements: {@linkcode extLst x14:extLst}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly slicer: XName = X14.x14.getName('slicer');

  /**
   * Represents the `x14:slicerCache` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerCaches x14:slicerCaches}, {@linkcode X15.slicerCaches x15:slicerCaches}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly slicerCache: XName = X14.x14.getName('slicerCache');

  /**
   * Represents the `x14:slicerCacheDefinition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode data x14:data}, {@linkcode extLst x14:extLst}, {@linkcode pivotTables x14:pivotTables}
   */
  public static readonly slicerCacheDefinition: XName = X14.x14.getName('slicerCacheDefinition');

  /**
   * Represents the `x14:slicerCaches` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode slicerCache x14:slicerCache}
   */
  public static readonly slicerCaches: XName = X14.x14.getName('slicerCaches');

  /**
   * Represents the `x14:slicerList` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode slicer x14:slicer}
   */
  public static readonly slicerList: XName = X14.x14.getName('slicerList');

  /**
   * Represents the `x14:slicers` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - child XML elements: {@linkcode slicer x14:slicer}
   */
  public static readonly slicers: XName = X14.x14.getName('slicers');

  /**
   * Represents the `x14:slicerStyle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerStyles x14:slicerStyles}
   * - child XML elements: {@linkcode slicerStyleElements x14:slicerStyleElements}
   */
  public static readonly slicerStyle: XName = X14.x14.getName('slicerStyle');

  /**
   * Represents the `x14:slicerStyleElement` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerStyleElements x14:slicerStyleElements}
   */
  public static readonly slicerStyleElement: XName = X14.x14.getName('slicerStyleElement');

  /**
   * Represents the `x14:slicerStyleElements` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode slicerStyle x14:slicerStyle}
   * - child XML elements: {@linkcode slicerStyleElement x14:slicerStyleElement}
   */
  public static readonly slicerStyleElements: XName = X14.x14.getName('slicerStyleElements');

  /**
   * Represents the `x14:slicerStyles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode slicerStyle x14:slicerStyle}
   */
  public static readonly slicerStyles: XName = X14.x14.getName('slicerStyles');

  /**
   * Represents the `x14:sortCondition` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.sortState x:sortState}
   */
  public static readonly sortCondition: XName = X14.x14.getName('sortCondition');

  /**
   * Represents the `x14:sourceConnection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly sourceConnection: XName = X14.x14.getName('sourceConnection');

  /**
   * Represents the `x14:sparkline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklines x14:sparklines}
   */
  public static readonly sparkline: XName = X14.x14.getName('sparkline');

  /**
   * Represents the `x14:sparklineGroup` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroups x14:sparklineGroups}
   * - child XML elements: {@linkcode colorAxis x14:colorAxis}, {@linkcode colorFirst x14:colorFirst}, {@linkcode colorHigh x14:colorHigh}, {@linkcode colorLast x14:colorLast}, {@linkcode colorLow x14:colorLow}, {@linkcode colorMarkers x14:colorMarkers}, {@linkcode colorNegative x14:colorNegative}, {@linkcode colorSeries x14:colorSeries}, {@linkcode sparklines x14:sparklines}
   */
  public static readonly sparklineGroup: XName = X14.x14.getName('sparklineGroup');

  /**
   * Represents the `x14:sparklineGroups` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   * - child XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   */
  public static readonly sparklineGroups: XName = X14.x14.getName('sparklineGroups');

  /**
   * Represents the `x14:sparklines` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode sparklineGroup x14:sparklineGroup}
   * - child XML elements: {@linkcode sparkline x14:sparkline}
   */
  public static readonly sparklines: XName = X14.x14.getName('sparklines');

  /**
   * Represents the `x14:table` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly table: XName = X14.x14.getName('table');

  /**
   * Represents the `x14:tabular` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode data x14:data}
   * - child XML elements: {@linkcode extLst x14:extLst}, {@linkcode items x14:items}
   */
  public static readonly tabular: XName = X14.x14.getName('tabular');

  /**
   * Represents the `x14:tupleItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode tupleItems x14:tupleItems}
   */
  public static readonly tupleItem: XName = X14.x14.getName('tupleItem');

  /**
   * Represents the `x14:tupleItems` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotChange x14:pivotChange}, {@linkcode pivotEdit x14:pivotEdit}
   * - child XML elements: {@linkcode tupleItem x14:tupleItem}
   */
  public static readonly tupleItems: XName = X14.x14.getName('tupleItems');

  /**
   * Represents the `x14:tupleSet` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode calculatedMember x14:calculatedMember}
   * - child XML elements: {@linkcode headers x14:headers}, {@linkcode rows x14:rows}
   */
  public static readonly tupleSet: XName = X14.x14.getName('tupleSet');

  /**
   * Represents the `x14:userEdit` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode pivotEdit x14:pivotEdit}
   * - child XML elements: {@linkcode editValue x14:editValue}
   */
  public static readonly userEdit: XName = X14.x14.getName('userEdit');

  /**
   * Represents the `x14:values` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode oleItem x14:oleItem}
   * - child XML elements: {@linkcode X.value x:value}
   */
  public static readonly values: XName = X14.x14.getName('values');

  /**
   * Represents the `x14:workbookPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode X.ext x:ext}
   */
  public static readonly workbookPr: XName = X14.x14.getName('workbookPr');
}
