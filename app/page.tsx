import 'ress/ress.css';
import styles from './page.module.css';
import Logo from './_components/Logo/Logo';
// import Introduction from './_components/Introduction/introduction';

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.firstview}>
          <img src="/images/image04.png" alt="ファーストビュー" />
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.box}>
          <Logo color="#9C47B3" fontSize="80px" />
          <p>
            遊んで、笑って、はしゃごう! <br />
            BATTLE
            PARKは、SNSで話題の「ヤバすぎ」アクティビティが24種類以上楽しめる屋内エンターテインメント施設。猛獣ダッシュ、回転タワーバトル、光るターゲットシューティング──運動神経は関係なし!子どもも大人も、みんなが主役になれる遊びの世界。
          </p>
        </div>
      </section>

      <section>{/* <Introduction /> */}</section>
    </>
  );
}
