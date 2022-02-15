/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:o="urn:schemas-microsoft-com:office:office"` namespace.
 */
export class O {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `o` prefix.
   */
  public static readonly o: XNamespace = XNamespace.get(
    'urn:schemas-microsoft-com:office:office'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('o'), O.o.namespaceName);
  }

  /**
   * Represents the `o:allowincell` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly allowincell: XName = O.o.getName('allowincell');

  /**
   * Represents the `o:allowoverlap` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly allowoverlap: XName = O.o.getName('allowoverlap');

  /**
   * Represents the `o:althref` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom o:bottom}, {@linkcode column o:column}, {@linkcode left o:left}, {@linkcode right o:right}, {@linkcode top o:top}, {@linkcode V.fill v:fill}, {@linkcode V.stroke v:stroke}
   */
  public static readonly althref: XName = O.o.getName('althref');

  /**
   * Represents the `o:borderbottomcolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderbottomcolor: XName = O.o.getName('borderbottomcolor');

  /**
   * Represents the `o:borderleftcolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderleftcolor: XName = O.o.getName('borderleftcolor');

  /**
   * Represents the `o:borderrightcolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly borderrightcolor: XName = O.o.getName('borderrightcolor');

  /**
   * Represents the `o:bordertopcolor` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bordertopcolor: XName = O.o.getName('bordertopcolor');

  /**
   * Represents the `o:bottom` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.stroke v:stroke}
   * - XML attributes: {@linkcode althref o:althref}, {@linkcode forcedash o:forcedash}, {@linkcode href o:href}, {@linkcode title o:title}, {@linkcode V.ext v:ext}
   */
  public static readonly bottom: XName = O.o.getName('bottom');

  /**
   * Represents the `o:bullet` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bullet: XName = O.o.getName('bullet');

  /**
   * Represents the `o:button` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly button: XName = O.o.getName('button');

  /**
   * Represents the `o:bwmode` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.background v:background}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bwmode: XName = O.o.getName('bwmode');

  /**
   * Represents the `o:bwnormal` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.background v:background}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bwnormal: XName = O.o.getName('bwnormal');

  /**
   * Represents the `o:bwpure` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.background v:background}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly bwpure: XName = O.o.getName('bwpure');

  /**
   * Represents the `o:callout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly callout: XName = O.o.getName('callout');

  /**
   * Represents the `o:clip` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly clip: XName = O.o.getName('clip');

  /**
   * Represents the `o:clippath` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode v o:v}
   */
  public static readonly clippath: XName = O.o.getName('clippath');

  /**
   * Represents the `o:cliptowrap` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly cliptowrap: XName = O.o.getName('cliptowrap');

  /**
   * Represents the `o:colormenu` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode shapedefaults o:shapedefaults}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly colormenu: XName = O.o.getName('colormenu');

  /**
   * Represents the `o:colormru` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode shapedefaults o:shapedefaults}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly colormru: XName = O.o.getName('colormru');

  /**
   * Represents the `o:column` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.stroke v:stroke}
   * - XML attributes: {@linkcode althref o:althref}, {@linkcode forcedash o:forcedash}, {@linkcode href o:href}, {@linkcode title o:title}, {@linkcode V.ext v:ext}
   */
  public static readonly column: XName = O.o.getName('column');

  /**
   * Represents the `o:complex` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly complex: XName = O.o.getName('complex');

  /**
   * Represents the `o:connectangles` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path v:path}
   */
  public static readonly connectangles: XName = O.o.getName('connectangles');

  /**
   * Represents the `o:connectlocs` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path v:path}
   */
  public static readonly connectlocs: XName = O.o.getName('connectlocs');

  /**
   * Represents the `o:connectortype` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly connectortype: XName = O.o.getName('connectortype');

  /**
   * Represents the `o:connecttype` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path v:path}
   */
  public static readonly connecttype: XName = O.o.getName('connecttype');

  /**
   * Represents the `o:detectmouseclick` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill v:fill}, {@linkcode V.imagedata v:imagedata}
   */
  public static readonly detectmouseclick: XName = O.o.getName('detectmouseclick');

  /**
   * Represents the `o:dgmlayout` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly dgmlayout: XName = O.o.getName('dgmlayout');

  /**
   * Represents the `o:dgmlayoutmru` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly dgmlayoutmru: XName = O.o.getName('dgmlayoutmru');

  /**
   * Represents the `o:dgmnodekind` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly dgmnodekind: XName = O.o.getName('dgmnodekind');

  /**
   * Represents the `o:diagram` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.group v:group}
   * - child XML elements: {@linkcode relationtable o:relationtable}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly diagram: XName = O.o.getName('diagram');

  /**
   * Represents the `o:doubleclicknotify` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly doubleclicknotify: XName = O.o.getName('doubleclicknotify');

  /**
   * Represents the `o:entry` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode regrouptable o:regrouptable}
   */
  public static readonly entry: XName = O.o.getName('entry');

  /**
   * Represents the `o:extrusion` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly extrusion: XName = O.o.getName('extrusion');

  /**
   * Represents the `o:extrusionok` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.path v:path}
   */
  public static readonly extrusionok: XName = O.o.getName('extrusionok');

  /**
   * Represents the `o:FieldCodes` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode OLEObject o:OLEObject}
   */
  public static readonly FieldCodes: XName = O.o.getName('FieldCodes');

  /**
   * Represents the `o:fill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.fill v:fill}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly fill: XName = O.o.getName('fill');

  /**
   * Represents the `o:forcedash` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom o:bottom}, {@linkcode column o:column}, {@linkcode left o:left}, {@linkcode right o:right}, {@linkcode top o:top}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}, {@linkcode V.stroke v:stroke}
   */
  public static readonly forcedash: XName = O.o.getName('forcedash');

  /**
   * Represents the `o:gfxdata` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}
   */
  public static readonly gfxdata: XName = O.o.getName('gfxdata');

  /**
   * Represents the `o:hr` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly hr: XName = O.o.getName('hr');

  /**
   * Represents the `o:hralign` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly hralign: XName = O.o.getName('hralign');

  /**
   * Represents the `o:href` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom o:bottom}, {@linkcode column o:column}, {@linkcode left o:left}, {@linkcode right o:right}, {@linkcode top o:top}, {@linkcode V.fill v:fill}, {@linkcode V.stroke v:stroke}
   */
  public static readonly href: XName = O.o.getName('href');

  /**
   * Represents the `o:hrnoshade` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly hrnoshade: XName = O.o.getName('hrnoshade');

  /**
   * Represents the `o:hrpct` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly hrpct: XName = O.o.getName('hrpct');

  /**
   * Represents the `o:hrstd` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly hrstd: XName = O.o.getName('hrstd');

  /**
   * Represents the `o:idmap` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode shapelayout o:shapelayout}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly idmap: XName = O.o.getName('idmap');

  /**
   * Represents the `o:ink` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.polyline v:polyline}, {@linkcode V.shape v:shape}
   */
  public static readonly ink: XName = O.o.getName('ink');

  /**
   * Represents the `o:insetmode` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly insetmode: XName = O.o.getName('insetmode');

  /**
   * Represents the `o:left` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.stroke v:stroke}
   * - XML attributes: {@linkcode althref o:althref}, {@linkcode forcedash o:forcedash}, {@linkcode href o:href}, {@linkcode title o:title}, {@linkcode V.ext v:ext}
   */
  public static readonly left: XName = O.o.getName('left');

  /**
   * Represents the `o:LinkType` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode OLEObject o:OLEObject}
   */
  public static readonly LinkType: XName = O.o.getName('LinkType');

  /**
   * Represents the `o:lock` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly lock: XName = O.o.getName('lock');

  /**
   * Represents the `o:LockedField` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode OLEObject o:OLEObject}
   */
  public static readonly LockedField: XName = O.o.getName('LockedField');

  /**
   * Represents the `o:master` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.shapetype v:shapetype}
   */
  public static readonly master: XName = O.o.getName('master');

  /**
   * Represents the `o:ole` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly ole: XName = O.o.getName('ole');

  /**
   * Represents the `o:oleicon` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly oleicon: XName = O.o.getName('oleicon');

  /**
   * Represents the `o:OLEObject` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode FieldCodes o:FieldCodes}, {@linkcode LinkType o:LinkType}, {@linkcode LockedField o:LockedField}
   * - XML attributes: {@linkcode R.id r:id}
   */
  public static readonly OLEObject: XName = O.o.getName('OLEObject');

  /**
   * Represents the `o:oned` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly oned: XName = O.o.getName('oned');

  /**
   * Represents the `o:opacity2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.fill v:fill}
   */
  public static readonly opacity2: XName = O.o.getName('opacity2');

  /**
   * Represents the `o:preferrelative` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly preferrelative: XName = O.o.getName('preferrelative');

  /**
   * Represents the `o:proxy` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode r o:r}
   */
  public static readonly proxy: XName = O.o.getName('proxy');

  /**
   * Represents the `o:r` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode rules o:rules}
   * - child XML elements: {@linkcode proxy o:proxy}
   */
  public static readonly r: XName = O.o.getName('r');

  /**
   * Represents the `o:regroupid` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly regroupid: XName = O.o.getName('regroupid');

  /**
   * Represents the `o:regrouptable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode shapelayout o:shapelayout}
   * - child XML elements: {@linkcode entry o:entry}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly regrouptable: XName = O.o.getName('regrouptable');

  /**
   * Represents the `o:rel` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode relationtable o:relationtable}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly rel: XName = O.o.getName('rel');

  /**
   * Represents the `o:relationtable` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode diagram o:diagram}
   * - child XML elements: {@linkcode rel o:rel}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly relationtable: XName = O.o.getName('relationtable');

  /**
   * Represents the `o:relid` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata v:imagedata}
   */
  public static readonly relid: XName = O.o.getName('relid');

  /**
   * Represents the `o:right` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.stroke v:stroke}
   * - XML attributes: {@linkcode althref o:althref}, {@linkcode forcedash o:forcedash}, {@linkcode href o:href}, {@linkcode title o:title}, {@linkcode V.ext v:ext}
   */
  public static readonly right: XName = O.o.getName('right');

  /**
   * Represents the `o:rules` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode shapelayout o:shapelayout}
   * - child XML elements: {@linkcode r o:r}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly rules: XName = O.o.getName('rules');

  /**
   * Represents the `o:shapedefaults` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.hdrShapeDefaults w:hdrShapeDefaults}, {@linkcode W.shapeDefaults w:shapeDefaults}
   * - child XML elements: {@linkcode callout o:callout}, {@linkcode colormenu o:colormenu}, {@linkcode colormru o:colormru}, {@linkcode extrusion o:extrusion}, {@linkcode lock o:lock}, {@linkcode skew o:skew}, {@linkcode V.fill v:fill}, {@linkcode V.imagedata v:imagedata}, {@linkcode V.shadow v:shadow}, {@linkcode V.stroke v:stroke}, {@linkcode V.textbox v:textbox}
   * - XML attributes: {@linkcode allowincell o:allowincell}, {@linkcode allowoverlap o:allowoverlap}, {@linkcode insetmode o:insetmode}, {@linkcode V.ext v:ext}
   */
  public static readonly shapedefaults: XName = O.o.getName('shapedefaults');

  /**
   * Represents the `o:shapelayout` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.hdrShapeDefaults w:hdrShapeDefaults}, {@linkcode W.shapeDefaults w:shapeDefaults}
   * - child XML elements: {@linkcode idmap o:idmap}, {@linkcode regrouptable o:regrouptable}, {@linkcode rules o:rules}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly shapelayout: XName = O.o.getName('shapelayout');

  /**
   * Represents the `o:signatureline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode suggestedsigner o:suggestedsigner}, {@linkcode suggestedsigner2 o:suggestedsigner2}, {@linkcode suggestedsigneremail o:suggestedsigneremail}, {@linkcode V.ext v:ext}
   */
  public static readonly signatureline: XName = O.o.getName('signatureline');

  /**
   * Represents the `o:singleclick` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.textbox v:textbox}
   */
  public static readonly singleclick: XName = O.o.getName('singleclick');

  /**
   * Represents the `o:skew` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode shapedefaults o:shapedefaults}, {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   * - XML attributes: {@linkcode V.ext v:ext}
   */
  public static readonly skew: XName = O.o.getName('skew');

  /**
   * Represents the `o:spid` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly spid: XName = O.o.getName('spid');

  /**
   * Represents the `o:spt` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly spt: XName = O.o.getName('spt');

  /**
   * Represents the `o:suggestedsigner` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode signatureline o:signatureline}
   */
  public static readonly suggestedsigner: XName = O.o.getName('suggestedsigner');

  /**
   * Represents the `o:suggestedsigner2` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode signatureline o:signatureline}
   */
  public static readonly suggestedsigner2: XName = O.o.getName('suggestedsigner2');

  /**
   * Represents the `o:suggestedsigneremail` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode signatureline o:signatureline}
   */
  public static readonly suggestedsigneremail: XName = O.o.getName('suggestedsigneremail');

  /**
   * Represents the `o:tablelimits` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.group v:group}
   */
  public static readonly tablelimits: XName = O.o.getName('tablelimits');

  /**
   * Represents the `o:tableproperties` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.group v:group}
   */
  public static readonly tableproperties: XName = O.o.getName('tableproperties');

  /**
   * Represents the `o:targetscreensize` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.background v:background}
   */
  public static readonly targetscreensize: XName = O.o.getName('targetscreensize');

  /**
   * Represents the `o:title` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode bottom o:bottom}, {@linkcode column o:column}, {@linkcode left o:left}, {@linkcode right o:right}, {@linkcode top o:top}, {@linkcode V.fill v:fill}, {@linkcode V.imagedata v:imagedata}, {@linkcode V.stroke v:stroke}
   */
  public static readonly title: XName = O.o.getName('title');

  /**
   * Represents the `o:top` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode V.stroke v:stroke}
   * - XML attributes: {@linkcode althref o:althref}, {@linkcode forcedash o:forcedash}, {@linkcode href o:href}, {@linkcode title o:title}, {@linkcode V.ext v:ext}
   */
  public static readonly top: XName = O.o.getName('top');

  /**
   * Represents the `o:userdrawn` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly userdrawn: XName = O.o.getName('userdrawn');

  /**
   * Represents the `o:userhidden` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.arc v:arc}, {@linkcode V.curve v:curve}, {@linkcode V.group v:group}, {@linkcode V.image v:image}, {@linkcode V.line v:line}, {@linkcode V.oval v:oval}, {@linkcode V.polyline v:polyline}, {@linkcode V.rect v:rect}, {@linkcode V.roundrect v:roundrect}, {@linkcode V.shape v:shape}, {@linkcode V.shapetype v:shapetype}
   */
  public static readonly userhidden: XName = O.o.getName('userhidden');

  /**
   * Represents the `o:v` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode clippath o:clippath}
   */
  public static readonly v: XName = O.o.getName('v');
}
