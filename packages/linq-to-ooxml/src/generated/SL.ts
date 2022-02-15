/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:sl="http://schemas.openxmlformats.org/schemaLibrary/2006/main"` namespace.
 */
export class SL {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `sl` prefix.
   */
  public static readonly sl: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/schemaLibrary/2006/main'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('sl'), SL.sl.namespaceName);
  }

  /**
   * Represents the `sl:manifestLocation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode schema sl:schema}
   */
  public static readonly manifestLocation: XName = SL.sl.getName('manifestLocation');

  /**
   * Represents the `sl:schema` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode schemaLibrary sl:schemaLibrary}
   * - XML attributes: {@linkcode manifestLocation sl:manifestLocation}, {@linkcode schemaLocation sl:schemaLocation}, {@linkcode uri sl:uri}
   */
  public static readonly schema: XName = SL.sl.getName('schema');

  /**
   * Represents the `sl:schemaLibrary` XML element.
   *
   * @remarks
   * As an XML element, it has the following:
   * - parent XML elements: {@linkcode A.graphicData a:graphicData}, {@linkcode W.settings w:settings}
   * - child XML elements: {@linkcode schema sl:schema}
   */
  public static readonly schemaLibrary: XName = SL.sl.getName('schemaLibrary');

  /**
   * Represents the `sl:schemaLocation` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode schema sl:schema}
   */
  public static readonly schemaLocation: XName = SL.sl.getName('schemaLocation');

  /**
   * Represents the `sl:uri` XML attribute.
   *
   * @remarks
   * As an XML attribute, it is contained in the following XML elements: {@linkcode schema sl:schema}
   */
  public static readonly uri: XName = SL.sl.getName('uri');
}
