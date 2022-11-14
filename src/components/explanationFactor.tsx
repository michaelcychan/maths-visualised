export const ExplanationFactor = () => {
  return (
    <section className="explanation">
      <h2>因數 Factors</h2>
      <p>
        因數 (factor) 是指可以整除另一個整數的數字。<br />
        例如，12 的因數包括 1, 2, 3, 4, 6, 12 。大部分的因數都可以配對，例如：<br />
        <span className="frame">1 x 12</span>; <span className="frame">2 x 6 </span>; <span className="frame">3 x 4 </span><br />
        有時候，因數要和自己配對，這出現在平方數 (Square number)上。例如： 16<br />
        <span className="frame">1 x 16 </span>; <span className="frame">2 x 8 </span>; <span className="frame">4 x 4 </span><br />
        16 的因數是 1, 2, 4, 16。由上述可見，4 只能和自己配對，因為16是4的 <span className="frame">平方數</span>。<br />
        「平方」(Square)的意思就是 <span className="frame">n x n</span>，另一個寫法就是 <span className="frame"> n<sup>2</sup> </span>。 <br />
        所以 4 的平方是16。倒過來說，16的平方根 (Square root) 是 4。<br />
        數學上，我們這樣表達： <br />
        <span className="frame"> 4 <sup>2</sup> = 16</span>
        或 <span className="frame"> 4 x 4 = 16 </span>
        或 <span className="frame"> 16 &divide; 4 = 4 </span>
        或 <span className="frame"> <span className="square-root">&radic;<span className="square-root-number">&nbsp;16&nbsp;</span> = 4 </span><br />
</span>
      </p>
      <p>
        1 是所有正整數 (positive whole number) 的因數。
      </p>
    </section>
  )
}