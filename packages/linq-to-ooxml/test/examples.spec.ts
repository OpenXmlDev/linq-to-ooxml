/**
 * @author Thomas Barnekow
 * @license MIT
 */

import { XAttribute, XElement } from '@openxmldev/linq-to-xml';

import { W, W14 } from '../src';

// Let's define some OOXML markup. In this case, we are describing a very simple
// main document part of a WordprocessingDocument. We remove whitespace because
// we want to comparee the unformatted output of the toString() method with the
// markup.
const text = `
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml">
  <w:body>
    <w:p w14:paraId="00000001">
      <w:r>
        <w:t>Hello, World!</w:t>
      </w:r>
    </w:p>
    <w:p w14:paraId="00000002">
      <w:r>
        <w:t>To be, or not to be</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>
`
  .replace(/[\s]+</g, '<')
  .replace(/>[\s]+/g, '>');

describe('LINQ to OOXML', () => {
  it('allows us to define and query the main document part', () => {
    // We can use the XElement and XAttribute constructors to define OOXML elements.
    // prettier-ignore
    const document =
      new XElement(W.document, W.namespaceDeclaration, W14.namespaceDeclaration,
        new XElement(W.body,
          new XElement(W.p, new XAttribute(W14.paraId, '00000001'),
            new XElement(W.r,
              new XElement(W.t, 'Hello, World!'))
          ),
          new XElement(W.p, new XAttribute(W14.paraId, '00000002'),
            new XElement(W.r,
              new XElement(W.t, 'To be, or not to be'))
          )
        )
    );

    // We can then query those elements and attributes, using the well-known
    // LINQ to XML methods.
    const firstParaId = document
      .descendants(W.p)
      .attributes(W14.paraId)
      .firstOrDefault();

    expect(firstParaId?.value).toEqual('00000001');
    expect(document.toString()).toEqual(text);
  });

  it('allows us to parse and query OOXML markup', () => {
    // The XElement and XDocument classes let us parse OOXML markup.
    const document = XElement.parse(text);

    // Once parsed, we can use the same LINQ to XML methods as above.
    const firstParaId = document
      .descendants(W.p)
      .attributes(W14.paraId)
      .firstOrDefault();

    expect(firstParaId?.value).toEqual('00000001');
    expect(document.toString()).toEqual(text);
  });
});
