/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:xml="http://www.w3.org/XML/1998/namespace"` namespace.
 */
export class XML {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `xml` prefix.
   */
  public static readonly xml: XNamespace = XNamespace.get(
    'http://www.w3.org/XML/1998/namespace'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('xml'), XML.xml.namespaceName);
  }

  /**
   * Represents the `xml:id` XML name.
   */
  public static readonly id: XName = XML.xml.getName('id');

  /**
   * Represents the `xml:space` XML attributes.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode M.t m:t}, {@linkcode W.delInstrText w:delInstrText}, {@linkcode W.delText w:delText}, {@linkcode W.instrText w:instrText}, {@linkcode W.t w:t}, {@linkcode X.author x:author}, {@linkcode X.calculatedColumnFormula x:calculatedColumnFormula}, {@linkcode X.evenFooter x:evenFooter}, {@linkcode X.evenHeader x:evenHeader}, {@linkcode X.f x:f}, {@linkcode X.firstFooter x:firstFooter}, {@linkcode X.firstHeader x:firstHeader}, {@linkcode X.formula x:formula}, {@linkcode X.formula1 x:formula1}, {@linkcode X.formula2 x:formula2}, {@linkcode X.oddFooter x:oddFooter}, {@linkcode X.oddHeader x:oddHeader}, {@linkcode X.oldFormula x:oldFormula}, {@linkcode X.stp x:stp}, {@linkcode X.t x:t}, {@linkcode X.totalsRowFormula x:totalsRowFormula}, {@linkcode X.v x:v}, {@linkcode X.val x:val}
   */
  public static readonly space: XName = XML.xml.getName('space');
}
