/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"` namespace.
 */
export class W15 {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `w15` prefix.
   */
  public static readonly w15: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/word/2012/wordml'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('w15'), W15.w15.namespaceName);
  }

  /**
   * Represents the `w15:appearance` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - XML attributes: {@linkcode val w15:val}
   */
  public static readonly appearance: XName = W15.w15.getName('appearance');

  /**
   * Represents the `w15:author` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode person w15:person}
   */
  public static readonly author: XName = W15.w15.getName('author');

  /**
   * Represents the `w15:chartTrackingRefBased` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly chartTrackingRefBased: XName = W15.w15.getName('chartTrackingRefBased');

  /**
   * Represents the `w15:collapsed` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly collapsed: XName = W15.w15.getName('collapsed');

  /**
   * Represents the `w15:color` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - XML attributes: {@linkcode W.themeColor w:themeColor}, {@linkcode W.themeShade w:themeShade}, {@linkcode W.themeTint w:themeTint}, {@linkcode W.val w:val}
   */
  public static readonly color: XName = W15.w15.getName('color');

  /**
   * Represents the `w15:commentEx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode commentsEx w15:commentsEx}
   * - XML attributes: {@linkcode done w15:done}, {@linkcode paraId w15:paraId}, {@linkcode paraIdParent w15:paraIdParent}
   */
  public static readonly commentEx: XName = W15.w15.getName('commentEx');

  /**
   * Represents the `w15:commentsEx` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode commentEx w15:commentEx}
   */
  public static readonly commentsEx: XName = W15.w15.getName('commentsEx');

  /**
   * Represents the `w15:dataBinding` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - XML attributes: {@linkcode W.prefixMappings w:prefixMappings}, {@linkcode W.storeItemID w:storeItemID}, {@linkcode W.xpath w:xpath}
   */
  public static readonly dataBinding: XName = W15.w15.getName('dataBinding');

  /**
   * Represents the `w15:docId` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - XML attributes: {@linkcode val w15:val}
   */
  public static readonly docId: XName = W15.w15.getName('docId');

  /**
   * Represents the `w15:done` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode commentEx w15:commentEx}
   */
  public static readonly done: XName = W15.w15.getName('done');

  /**
   * Represents the `w15:doNotAllowInsertDeleteSection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode repeatingSection w15:repeatingSection}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly doNotAllowInsertDeleteSection: XName = W15.w15.getName('doNotAllowInsertDeleteSection');

  /**
   * Represents the `w15:footnoteColumns` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sectPr w:sectPr}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly footnoteColumns: XName = W15.w15.getName('footnoteColumns');

  /**
   * Represents the `w15:paraId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode commentEx w15:commentEx}
   */
  public static readonly paraId: XName = W15.w15.getName('paraId');

  /**
   * Represents the `w15:paraIdParent` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode commentEx w15:commentEx}
   */
  public static readonly paraIdParent: XName = W15.w15.getName('paraIdParent');

  /**
   * Represents the `w15:people` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}
   * - child XML elements: {@linkcode person w15:person}
   */
  public static readonly people: XName = W15.w15.getName('people');

  /**
   * Represents the `w15:person` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode people w15:people}
   * - child XML elements: {@linkcode presenceInfo w15:presenceInfo}
   * - XML attributes: {@linkcode author w15:author}
   */
  public static readonly person: XName = W15.w15.getName('person');

  /**
   * Represents the `w15:presenceInfo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode person w15:person}
   * - XML attributes: {@linkcode providerId w15:providerId}, {@linkcode userId w15:userId}
   */
  public static readonly presenceInfo: XName = W15.w15.getName('presenceInfo');

  /**
   * Represents the `w15:providerId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode presenceInfo w15:presenceInfo}
   */
  public static readonly providerId: XName = W15.w15.getName('providerId');

  /**
   * Represents the `w15:repeatingSection` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - child XML elements: {@linkcode doNotAllowInsertDeleteSection w15:doNotAllowInsertDeleteSection}, {@linkcode sectionTitle w15:sectionTitle}
   */
  public static readonly repeatingSection: XName = W15.w15.getName('repeatingSection');

  /**
   * Represents the `w15:repeatingSectionItem` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   */
  public static readonly repeatingSectionItem: XName = W15.w15.getName('repeatingSectionItem');

  /**
   * Represents the `w15:sectionTitle` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode repeatingSection w15:repeatingSection}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly sectionTitle: XName = W15.w15.getName('sectionTitle');

  /**
   * Represents the `w15:userId` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode presenceInfo w15:presenceInfo}
   */
  public static readonly userId: XName = W15.w15.getName('userId');

  /**
   * Represents the `w15:val` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode appearance w15:appearance}, {@linkcode docId w15:docId}
   */
  public static readonly val: XName = W15.w15.getName('val');

  /**
   * Represents the `w15:webExtensionCreated` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly webExtensionCreated: XName = W15.w15.getName('webExtensionCreated');

  /**
   * Represents the `w15:webExtensionLinked` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.sdtPr w:sdtPr}
   * - XML attributes: {@linkcode W.val w:val}
   */
  public static readonly webExtensionLinked: XName = W15.w15.getName('webExtensionLinked');
}
