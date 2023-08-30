<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | kennel` : 'kennel'
  },
  title: 'Design Reference'
})
useSeoMeta({
  robots: 'noindex, nofollow'
})
</script>

<template>
  <div class="container">
    <section>
      <h1>heading 1/あいう海青口シート</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
      <p>昨日はAkiの<em>誕生日パーティーに行った。</em><span>美味しいケーキと楽しいBGM</span>が流れていた。</p>
      <blockquote cite="https://kennel.netlify.app/">
        <p>昨日は<del>Dog</del>Akiの誕生日パーティーに行った。美味しいケーキと楽しいBGMが流れていた。</p>
        <footer>
          —イヌ好きデザイナー, <cite>kennel</cite>
        </footer>
      </blockquote>
      <p>
        The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the
        array.
      </p>
      <figure>
        <NuxtImg src="/images/img_test.jpg" alt="Dog" loading="lazy" />
        <figcaption>Dog</figcaption>
      </figure>
      <p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
      <ruby>
        明日
        <rp>(</rp><rt>あす</rt><rp>)</rp>
      </ruby>
      <p><s>本日のおすすめ: サーモンカルパッチョ</s> 売り切れ</p>
      <p><small>これは<strong>smallタグ</strong>で囲んだ小さいテキストです</small></p>
      <p>
        Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as
        "caffeine."
      </p>
      <details>
        <summary>
          サマリー
        </summary>
        詳細テキスト
      </details>
      <p>
        物理学の中でもっとも有名な等式の一つが、 <var>E</var>=<var>m</var><var>c</var><sup>2</sup> です。
      </p>
      <p>コンサートは <time datetime="2018-07-07T20:00:00">20:00</time> に始まります。</p>
    </section>

    <section>
      <h2>List / Table</h2>
      <ol>
        <li>ol 01</li>
        <li>
          <ol>
            <li>ol > ol</li>
          </ol>
        </li>
        <li>
          <ul>
            <li>ol > ul</li>
          </ul>
        </li>
      </ol>
      <ul>
        <li>ul 01</li>
        <li>
          <ol>
            <li>ul > ol</li>
          </ol>
        </li>
        <li>
          <ul>
            <li>ul > ul</li>
          </ul>
        </li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>
              テーブルヘッダー > ヘッダーセル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              テーブルボディ > セル
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <caption>
          Superheros and sidekicks
        </caption>
        <colgroup>
          <col>
          <col span="2" class="batman">
          <col span="2" class="flash">
        </colgroup>
        <tr>
          <td />
          <th scope="col">
            Batman
          </th>
          <th scope="col">
            Robin
          </th>
          <th scope="col">
            The Flash
          </th>
          <th scope="col">
            Kid Flash
          </th>
        </tr>
        <tr>
          <th scope="row">
            Skill
          </th>
          <td>Smarts</td>
          <td>Dex, acrobat</td>
          <td>Super speed</td>
          <td>Super speed</td>
        </tr>
      </table>
    </section>

    <section>
      <h2>Form</h2>
      <p>WIP</p>
    </section>

    <section>
      <h2>Spacing</h2>
      <div class="s1" />
      <div class="s2" />
      <div class="s3" />
      <div class="s4" />
      <div class="s5" />
      <div class="s6" />
      <div class="s7" />
      <div class="s8" />
    </section>

    <section>
      <h2>Link</h2>
      <a href="" class="btn-primary">
        Primary link Button
      </a>
      <a href="" class="btn-secondary">
        Secondary Link Button
      </a>
    </section>

    <section>
      <h2>Button</h2>
      <button class="btn-primary">
        Primary Button
      </button>
      <button class="btn-secondary">
        Secondary Button
      </button>
    </section>
  </div>
</template>

<style lang="sass" scoped>
section
  padding: var(--scale-8) 0
  display: flex
  flex-direction: column
  gap: var(--scale-3)

.s1,
.s2,
.s3,
.s4,
.s5,
.s6,
.s7,
.s8
  background-color:  CSStoRGBA( '--color-bg-middle', 1)
  border: 1px solid rgba(var( --color-border-box ), 1)

.s1
  width: var(--scale-1)
  height: var(--scale-1)
.s2
  width: var(--scale-2)
  height: var(--scale-2)
.s3
  width: var(--scale-3)
  height: var(--scale-3)
.s4
  width: var(--scale-4)
  height: var(--scale-4)
.s5
  width: var(--scale-5)
  height: var(--scale-5)
.s6
  width: var(--scale-6)
  height: var(--scale-6)
.s7
  width: var(--scale-7)
  height: var(--scale-7)
.s8
  width: var(--scale-8)
  height: var(--scale-8)
</style>
