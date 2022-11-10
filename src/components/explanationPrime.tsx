export const ExplanationPrime = () => {
  return (
    <section className="explanation">
      <h2>倍數與質數</h2>
      <p>
        質數 (prime number) 的定義是只有兩個因數 (factor)。<br />
        例如 7 是質數，因為它的因數只有 <span className="frame">1 和 7 </span>﹝共兩個﹞<br />
        但 8 不是質數，因為它的因數有  <span className="frame"> 1, 2, 4, 8 </span>﹝共四個﹞<br />
        反過來說，8是1, 2, 4, 8各自的倍數 (multiple)。但平常我們很少說8是8的倍數，因為對計算的幫助不太大。
      </p>
      <p>
        1 本身是一個有趣的例外，因為它只有一個因數，所以數質數時，很多時也不計算在內。
      </p>
    </section>
  )
}