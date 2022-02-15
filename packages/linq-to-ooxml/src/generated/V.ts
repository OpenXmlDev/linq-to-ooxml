/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:v="urn:schemas-microsoft-com:vml"` namespace.
 */
export class V {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `v` prefix.
   */
  public static readonly v: XNamespace = XNamespace.get(
    'urn:schemas-microsoft-com:vml'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('v'), V.v.namespaceName);
  }

  /**
   * Represents the `v:arc` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly arc: XName = V.v.getName('arc');

  /**
   * Represents the `v:background` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.background w:background}
   * - child XML elements: {@linkcode fill v:fill}
   * - XML attributes: {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.targetscreensize o:targetscreensize}
   */
  public static readonly background: XName = V.v.getName('background');

  /**
   * Represents the `v:curve` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly curve: XName = V.v.getName('curve');

  /**
   * Represents the `v:ext` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode O.bottom o:bottom}, {@linkcode O.callout o:callout}, {@linkcode O.colormenu o:colormenu}, {@linkcode O.colormru o:colormru}, {@linkcode O.column o:column}, {@linkcode O.complex o:complex}, {@linkcode O.diagram o:diagram}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.fill o:fill}, {@linkcode O.idmap o:idmap}, {@linkcode O.left o:left}, {@linkcode O.lock o:lock}, {@linkcode O.regrouptable o:regrouptable}, {@linkcode O.rel o:rel}, {@linkcode O.relationtable o:relationtable}, {@linkcode O.right o:right}, {@linkcode O.rules o:rules}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode O.shapelayout o:shapelayout}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode O.top o:top}
   */
  public static readonly ext: XName = V.v.getName('ext');

  /**
   * Represents the `v:f` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode formulas v:formulas}
   */
  public static readonly f: XName = V.v.getName('f');

  /**
   * Represents the `v:fill` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode arc v:arc}, {@linkcode background v:background}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - child XML elements: {@linkcode O.fill o:fill}
   * - XML attributes: {@linkcode O.althref o:althref}, {@linkcode O.detectmouseclick o:detectmouseclick}, {@linkcode O.href o:href}, {@linkcode O.opacity2 o:opacity2}, {@linkcode O.title o:title}, {@linkcode R.id r:id}
   */
  public static readonly fill: XName = V.v.getName('fill');

  /**
   * Represents the `v:formulas` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - child XML elements: {@linkcode f v:f}
   */
  public static readonly formulas: XName = V.v.getName('formulas');

  /**
   * Represents the `v:group` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.clippath o:clippath}, {@linkcode O.diagram o:diagram}, {@linkcode O.lock o:lock}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode group v:group}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.oned o:oned}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.tablelimits o:tablelimits}, {@linkcode O.tableproperties o:tableproperties}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly group: XName = V.v.getName('group');

  /**
   * Represents the `v:h` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode handles v:handles}
   */
  public static readonly h: XName = V.v.getName('h');

  /**
   * Represents the `v:handles` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - child XML elements: {@linkcode h v:h}
   */
  public static readonly handles: XName = V.v.getName('handles');

  /**
   * Represents the `v:image` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly image: XName = V.v.getName('image');

  /**
   * Represents the `v:imagedata` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - XML attributes: {@linkcode O.detectmouseclick o:detectmouseclick}, {@linkcode O.relid o:relid}, {@linkcode O.title o:title}, {@linkcode R.href r:href}, {@linkcode R.id r:id}, {@linkcode R.pict r:pict}
   */
  public static readonly imagedata: XName = V.v.getName('imagedata');

  /**
   * Represents the `v:line` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly line: XName = V.v.getName('line');

  /**
   * Represents the `v:oval` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly oval: XName = V.v.getName('oval');

  /**
   * Represents the `v:path` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - XML attributes: {@linkcode O.connectangles o:connectangles}, {@linkcode O.connectlocs o:connectlocs}, {@linkcode O.connecttype o:connecttype}, {@linkcode O.extrusionok o:extrusionok}
   */
  public static readonly path: XName = V.v.getName('path');

  /**
   * Represents the `v:polyline` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.ink o:ink}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly polyline: XName = V.v.getName('polyline');

  /**
   * Represents the `v:rect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly rect: XName = V.v.getName('rect');

  /**
   * Represents the `v:roundrect` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly roundrect: XName = V.v.getName('roundrect');

  /**
   * Represents the `v:shadow` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   */
  public static readonly shadow: XName = V.v.getName('shadow');

  /**
   * Represents the `v:shape` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.ink o:ink}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.gfxdata o:gfxdata}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly shape: XName = V.v.getName('shape');

  /**
   * Represents the `v:shapetype` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode group v:group}, {@linkcode W.object w:object}, {@linkcode W.pict w:pict}
   * - child XML elements: {@linkcode O.callout o:callout}, {@linkcode O.clippath o:clippath}, {@linkcode O.complex o:complex}, {@linkcode O.extrusion o:extrusion}, {@linkcode O.lock o:lock}, {@linkcode O.signatureline o:signatureline}, {@linkcode O.skew o:skew}, {@linkcode fill v:fill}, {@linkcode formulas v:formulas}, {@linkcode handles v:handles}, {@linkcode imagedata v:imagedata}, {@linkcode path v:path}, {@linkcode shadow v:shadow}, {@linkcode stroke v:stroke}, {@linkcode textbox v:textbox}, {@linkcode textpath v:textpath}, {@linkcode W10.anchorlock w10:anchorlock}, {@linkcode W10.borderbottom w10:borderbottom}, {@linkcode W10.borderleft w10:borderleft}, {@linkcode W10.borderright w10:borderright}, {@linkcode W10.bordertop w10:bordertop}, {@linkcode W10.wrap w10:wrap}
   * - XML attributes: {@linkcode O.allowincell o:allowincell}, {@linkcode O.allowoverlap o:allowoverlap}, {@linkcode O.borderbottomcolor o:borderbottomcolor}, {@linkcode O.borderleftcolor o:borderleftcolor}, {@linkcode O.borderrightcolor o:borderrightcolor}, {@linkcode O.bordertopcolor o:bordertopcolor}, {@linkcode O.bullet o:bullet}, {@linkcode O.button o:button}, {@linkcode O.bwmode o:bwmode}, {@linkcode O.bwnormal o:bwnormal}, {@linkcode O.bwpure o:bwpure}, {@linkcode O.clip o:clip}, {@linkcode O.cliptowrap o:cliptowrap}, {@linkcode O.connectortype o:connectortype}, {@linkcode O.dgmlayout o:dgmlayout}, {@linkcode O.dgmlayoutmru o:dgmlayoutmru}, {@linkcode O.dgmnodekind o:dgmnodekind}, {@linkcode O.doubleclicknotify o:doubleclicknotify}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.hr o:hr}, {@linkcode O.hralign o:hralign}, {@linkcode O.hrnoshade o:hrnoshade}, {@linkcode O.hrpct o:hrpct}, {@linkcode O.hrstd o:hrstd}, {@linkcode O.insetmode o:insetmode}, {@linkcode O.master o:master}, {@linkcode O.ole o:ole}, {@linkcode O.oleicon o:oleicon}, {@linkcode O.oned o:oned}, {@linkcode O.preferrelative o:preferrelative}, {@linkcode O.regroupid o:regroupid}, {@linkcode O.spid o:spid}, {@linkcode O.spt o:spt}, {@linkcode O.userdrawn o:userdrawn}, {@linkcode O.userhidden o:userhidden}
   */
  public static readonly shapetype: XName = V.v.getName('shapetype');

  /**
   * Represents the `v:stroke` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - child XML elements: {@linkcode O.bottom o:bottom}, {@linkcode O.column o:column}, {@linkcode O.left o:left}, {@linkcode O.right o:right}, {@linkcode O.top o:top}
   * - XML attributes: {@linkcode O.althref o:althref}, {@linkcode O.forcedash o:forcedash}, {@linkcode O.href o:href}, {@linkcode O.title o:title}, {@linkcode R.id r:id}
   */
  public static readonly stroke: XName = V.v.getName('stroke');

  /**
   * Represents the `v:textbox` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode O.shapedefaults o:shapedefaults}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   * - child XML elements: {@linkcode W.txbxContent w:txbxContent}
   * - XML attributes: {@linkcode O.singleclick o:singleclick}
   */
  public static readonly textbox: XName = V.v.getName('textbox');

  /**
   * Represents the `v:textpath` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode arc v:arc}, {@linkcode curve v:curve}, {@linkcode image v:image}, {@linkcode line v:line}, {@linkcode oval v:oval}, {@linkcode polyline v:polyline}, {@linkcode rect v:rect}, {@linkcode roundrect v:roundrect}, {@linkcode shape v:shape}, {@linkcode shapetype v:shapetype}
   */
  public static readonly textpath: XName = V.v.getName('textpath');
}
