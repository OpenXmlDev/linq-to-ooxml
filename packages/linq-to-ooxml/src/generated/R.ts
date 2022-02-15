/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"` namespace.
 */
export class R {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `r` prefix.
   */
  public static readonly r: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('r'), R.r.namespaceName);
  }

  /**
   * Represents the `r:blip` XML name.
   */
  public static readonly blip: XName = R.r.getName('blip');

  /**
   * Represents the `r:cs` XML name.
   */
  public static readonly cs: XName = R.r.getName('cs');

  /**
   * Represents the `r:dm` XML name.
   */
  public static readonly dm: XName = R.r.getName('dm');

  /**
   * Represents the `r:embed` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.blip a:blip}, {@linkcode A.snd a:snd}, {@linkcode A.wavAudioFile a:wavAudioFile}, {@linkcode A14.imgLayer a14:imgLayer}, {@linkcode P.snd p:snd}, {@linkcode P.sndTgt p:sndTgt}, {@linkcode P14.media p14:media}
   */
  public static readonly embed: XName = R.r.getName('embed');

  /**
   * Represents the `r:href` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata v:imagedata}
   */
  public static readonly href: XName = R.r.getName('href');

  /**
   * Represents the `r:id` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.hlinkClick a:hlinkClick}, {@linkcode A.hlinkHover a:hlinkHover}, {@linkcode A.hlinkMouseOver a:hlinkMouseOver}, {@linkcode A14.contentPart a14:contentPart}, {@linkcode O.OLEObject o:OLEObject}, {@linkcode P.bold p:bold}, {@linkcode P.boldItalic p:boldItalic}, {@linkcode P.contentPart p:contentPart}, {@linkcode P.control p:control}, {@linkcode P.custData p:custData}, {@linkcode P.handoutMasterId p:handoutMasterId}, {@linkcode P.htmlPubPr p:htmlPubPr}, {@linkcode P.italic p:italic}, {@linkcode P.notesMasterId p:notesMasterId}, {@linkcode P.oleObj p:oleObj}, {@linkcode P.regular p:regular}, {@linkcode P.sld p:sld}, {@linkcode P.sldId p:sldId}, {@linkcode P.sldLayoutId p:sldLayoutId}, {@linkcode P.sldMasterId p:sldMasterId}, {@linkcode P.tags p:tags}, {@linkcode V.fill v:fill}, {@linkcode V.imagedata v:imagedata}, {@linkcode V.stroke v:stroke}, {@linkcode W.altChunk w:altChunk}, {@linkcode W.attachedTemplate w:attachedTemplate}, {@linkcode W.contentPart w:contentPart}, {@linkcode W.control w:control}, {@linkcode W.dataSource w:dataSource}, {@linkcode W.embedBold w:embedBold}, {@linkcode W.embedBoldItalic w:embedBoldItalic}, {@linkcode W.embedItalic w:embedItalic}, {@linkcode W.embedRegular w:embedRegular}, {@linkcode W.footerReference w:footerReference}, {@linkcode W.headerReference w:headerReference}, {@linkcode W.headerSource w:headerSource}, {@linkcode W.hyperlink w:hyperlink}, {@linkcode W.movie w:movie}, {@linkcode W.objectEmbed w:objectEmbed}, {@linkcode W.objectLink w:objectLink}, {@linkcode W.printerSettings w:printerSettings}, {@linkcode W.recipientData w:recipientData}, {@linkcode W.saveThroughXslt w:saveThroughXslt}, {@linkcode W.sourceFileName w:sourceFileName}, {@linkcode W.src w:src}, {@linkcode W.subDoc w:subDoc}, {@linkcode W14.contentPart w14:contentPart}, {@linkcode X.control x:control}, {@linkcode X.controlPr x:controlPr}, {@linkcode X.customPr x:customPr}, {@linkcode X.dataRef x:dataRef}, {@linkcode X.drawing x:drawing}, {@linkcode X.drawingHF x:drawingHF}, {@linkcode X.externalBook x:externalBook}, {@linkcode X.externalReference x:externalReference}, {@linkcode X.header x:header}, {@linkcode X.hyperlink x:hyperlink}, {@linkcode X.legacyDrawing x:legacyDrawing}, {@linkcode X.legacyDrawingHF x:legacyDrawingHF}, {@linkcode X.objectPr x:objectPr}, {@linkcode X.oleLink x:oleLink}, {@linkcode X.oleObject x:oleObject}, {@linkcode X.pageSetup x:pageSetup}, {@linkcode X.picture x:picture}, {@linkcode X.pivotCache x:pivotCache}, {@linkcode X.pivotCacheDefinition x:pivotCacheDefinition}, {@linkcode X.pivotSelection x:pivotSelection}, {@linkcode X.rangeSet x:rangeSet}, {@linkcode X.sheet x:sheet}, {@linkcode X.tablePart x:tablePart}, {@linkcode X.worksheetSource x:worksheetSource}, {@linkcode X14.slicer x14:slicer}, {@linkcode X14.slicerCache x14:slicerCache}, {@linkcode X15.pivotTableReference x15:pivotTableReference}, {@linkcode X15.timelineCacheRef x15:timelineCacheRef}, {@linkcode X15.timelineRef x15:timelineRef}
   */
  public static readonly id: XName = R.r.getName('id');

  /**
   * Represents the `r:link` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode A.audioFile a:audioFile}, {@linkcode A.blip a:blip}, {@linkcode A.quickTimeFile a:quickTimeFile}, {@linkcode A.videoFile a:videoFile}, {@linkcode P14.media p14:media}
   */
  public static readonly link: XName = R.r.getName('link');

  /**
   * Represents the `r:lo` XML name.
   */
  public static readonly lo: XName = R.r.getName('lo');

  /**
   * Represents the `r:pict` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode V.imagedata v:imagedata}
   */
  public static readonly pict: XName = R.r.getName('pict');

  /**
   * Represents the `r:qs` XML name.
   */
  public static readonly qs: XName = R.r.getName('qs');
}
