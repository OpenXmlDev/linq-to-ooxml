/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"` namespace.
 */
export class WP {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `wp` prefix.
   */
  public static readonly wp: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('wp'), WP.wp.namespaceName);
  }

  /**
   * Represents the `wp:align` XML elements.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode positionH wp:positionH}, {@linkcode positionV wp:positionV}
   */
  public static readonly align: XName = WP.wp.getName('align');

  /**
   * Represents the `wp:anchor` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.drawing w:drawing}
   * - child XML elements: {@linkcode A.graphic a:graphic}, {@linkcode cNvGraphicFramePr wp:cNvGraphicFramePr}, {@linkcode docPr wp:docPr}, {@linkcode effectExtent wp:effectExtent}, {@linkcode extent wp:extent}, {@linkcode positionH wp:positionH}, {@linkcode positionV wp:positionV}, {@linkcode simplePos wp:simplePos}, {@linkcode wrapNone wp:wrapNone}, {@linkcode wrapSquare wp:wrapSquare}, {@linkcode wrapThrough wp:wrapThrough}, {@linkcode wrapTight wp:wrapTight}, {@linkcode wrapTopAndBottom wp:wrapTopAndBottom}
   */
  public static readonly anchor: XName = WP.wp.getName('anchor');

  /**
   * Represents the `wp:cNvGraphicFramePr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}, {@linkcode inline wp:inline}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.graphicFrameLocks a:graphicFrameLocks}
   */
  public static readonly cNvGraphicFramePr: XName = WP.wp.getName('cNvGraphicFramePr');

  /**
   * Represents the `wp:docPr` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}, {@linkcode inline wp:inline}
   * - child XML elements: {@linkcode A.extLst a:extLst}, {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}
   */
  public static readonly docPr: XName = WP.wp.getName('docPr');

  /**
   * Represents the `wp:effectExtent` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}, {@linkcode inline wp:inline}, {@linkcode wrapSquare wp:wrapSquare}, {@linkcode wrapTopAndBottom wp:wrapTopAndBottom}
   */
  public static readonly effectExtent: XName = WP.wp.getName('effectExtent');

  /**
   * Represents the `wp:extent` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}, {@linkcode inline wp:inline}
   */
  public static readonly extent: XName = WP.wp.getName('extent');

  /**
   * Represents the `wp:inline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.drawing w:drawing}
   * - child XML elements: {@linkcode A.graphic a:graphic}, {@linkcode cNvGraphicFramePr wp:cNvGraphicFramePr}, {@linkcode docPr wp:docPr}, {@linkcode effectExtent wp:effectExtent}, {@linkcode extent wp:extent}
   */
  public static readonly inline: XName = WP.wp.getName('inline');

  /**
   * Represents the `wp:lineTo` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wrapPolygon wp:wrapPolygon}
   */
  public static readonly lineTo: XName = WP.wp.getName('lineTo');

  /**
   * Represents the `wp:positionH` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode align wp:align}, {@linkcode posOffset wp:posOffset}
   */
  public static readonly positionH: XName = WP.wp.getName('positionH');

  /**
   * Represents the `wp:positionV` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode align wp:align}, {@linkcode posOffset wp:posOffset}
   */
  public static readonly positionV: XName = WP.wp.getName('positionV');

  /**
   * Represents the `wp:posOffset` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode positionH wp:positionH}, {@linkcode positionV wp:positionV}
   */
  public static readonly posOffset: XName = WP.wp.getName('posOffset');

  /**
   * Represents the `wp:simplePos` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   */
  public static readonly simplePos: XName = WP.wp.getName('simplePos');

  /**
   * Represents the `wp:start` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wrapPolygon wp:wrapPolygon}
   */
  public static readonly start: XName = WP.wp.getName('start');

  /**
   * Represents the `wp:wrapNone` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   */
  public static readonly wrapNone: XName = WP.wp.getName('wrapNone');

  /**
   * Represents the `wp:wrapPolygon` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode wrapThrough wp:wrapThrough}, {@linkcode wrapTight wp:wrapTight}
   * - child XML elements: {@linkcode lineTo wp:lineTo}, {@linkcode start wp:start}
   */
  public static readonly wrapPolygon: XName = WP.wp.getName('wrapPolygon');

  /**
   * Represents the `wp:wrapSquare` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode effectExtent wp:effectExtent}
   */
  public static readonly wrapSquare: XName = WP.wp.getName('wrapSquare');

  /**
   * Represents the `wp:wrapThrough` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode wrapPolygon wp:wrapPolygon}
   */
  public static readonly wrapThrough: XName = WP.wp.getName('wrapThrough');

  /**
   * Represents the `wp:wrapTight` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode wrapPolygon wp:wrapPolygon}
   */
  public static readonly wrapTight: XName = WP.wp.getName('wrapTight');

  /**
   * Represents the `wp:wrapTopAndBottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode anchor wp:anchor}
   * - child XML elements: {@linkcode effectExtent wp:effectExtent}
   */
  public static readonly wrapTopAndBottom: XName = WP.wp.getName('wrapTopAndBottom');
}
