import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className="mx-auto flex max-w-3xl items-center justify-between p-4"
      >
        <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li className="hidden lg:block">
            <Link className="rounded-lg px-3 py-2" href="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
            <a className="rounded-lg px-3 py-2" href="">
              {" "}
              Contact{" "}
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
              href=""
              target="_blank"
            >
              メインサイト
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

        <Link
          href="/"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
        >
          <span className="sr-only">Logo</span>
          👋
        </Link>
      </nav>

      <div className="container mx-auto">
        <section className="bg-slate-50 text-gray-800">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-5xl">
                自分で学べる、
                <span className="text-violet-400">でも一人じゃない</span>
              </h1>
              <h3 className="text-2xl font-bold">オンライン自習室Isem</h3>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                高校・大学受験生の方々、
                勉強していて集中力が続かなかったり、効率的な学習法がわからず、不安な気持ちがつのることもあるのではないでしょうか。そんな方々にぜひ、自分に合った学習法で、効率的に勉強して、目標を達成しましょう！
                {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem */}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                >
                  資料請求
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://mambaui.com/assets/svg/Business_SVG.svg"
                alt="Hero"
                layout={"fill"}
                className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto">
        <section className="m-4 md:m-8 bg-slate-50 text-gray-800">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-bold">こんなお悩みありませんか？</h2>
            {/* <p className="text-gray-400">Libero minima optio qui</p> */}
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">
                勉強のモチベーションが維持できない
              </h3>
              <div className="space-y-1 leading-tight">
                <p>一人だとなかなか勉強が続かない...</p>
                <p>何を目標にすればいいか分からない...</p>
                <p>時間をダラダラと消費してしまう...</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">
                学習の進め方や計画を立てる方法が分からない
              </h3>
              <div className="space-y-1 leading-tight">
                <p>いま使っている参考書で本当に大丈夫かな...</p>
                <p>このスケジュールで受験に間に合うのかな...</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">
                難関大学合格に向けた学習法を知りたい
              </h3>
              <div className="space-y-1 leading-tight">
                <p>難関大学の受験対策に何が必要か分からない...</p>
                <p>定期テストでは点が取れるけど、模試になるとさっぱり...</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto">
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-slate-50 text-gray-800">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src="https://cdn.dribbble.com/users/3956332/screenshots/15395316/media/27e9982cdf008a3c99bf10f30b3b2416.jpg?compress=1&resize=1600x1200&vertical=top"
              alt="solution"
              layout={"fill"}
              className="w-full h-60 sm:h-96 bg-gray-500 object-cover"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-stone-200">
              <div className="space-y-2">
                <p className="inline-block text-2xl font-semibold sm:text-xl">
                  オンライン自習室Isemは、目標設定やスケジュール作成、進捗管理、効率的な学習方法のアドバイスに至るまで、生徒一人ひとりの学習を丁寧にサポートします。
                </p>
                <p className="inline-block text-2xl font-semibold sm:text-xl py-2">
                  さらに、難関大学出身の講師による指導で、受験に必要な知識と技能を身につけることができます。個別の質問や相談にも迅速に対応し、生徒の理解度を深めるお手伝いをいたします。
                </p>
              </div>
              <div className="text-gray-100">
                {/* <p>Insert the actual text content here...</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <section className="bg-slate-50 text-gray-100">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-800">
                学習効果をあげる仕組み
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-800">
                受講生一人ひとりの目標に合わせた学習管理システム
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-600">
                  「オンライン授業でも、先生と直接コミュニケーションできる」
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  オンラインでも、生徒一人ひとりに講師がしっかりとフォローします。質問や相談はもちろん、授業中の理解度チェックやアドバイスなど、直接的なコミュニケーションが可能です。さらに、目標達成のためのプランニングもサポートします。
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-600">
                        目標達成のためのプランニング
                      </h4>
                      <p className="mt-2 text-gray-400">
                        目標設定は、その時点において適切に設定し、都度アップデートすることが大切です。
                        その時点の生徒状況に合わせた、適切な目標設定をおこないます。
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-800">
                        課題テストの実施
                      </h4>
                      <p className="mt-2 text-gray-400">
                        週に1回の課題テストにより、学習した知識や理解度を確認することができます。生徒自身がどの程度理解しているかを知ることができ、勉強の方針を立てることができます。
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-800">
                        学習状況の可視化
                      </h4>
                      <p className="mt-2 text-gray-400">
                        1週間ごとの学習状況をグラフを使用して可視化することで、現在の進み具合が一目でわかります。これlにより、学習のモチベーションが維持しやすくなります。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-800">
                    充実の質問サービス
                  </h3>
                  <p className="mt-3 text-lg text-gray-400">
                    当自習室では、”分からない”を解決する、充実した質問サポートを提供しています。学習者の方々が、迅速かつスマートに学習を進め、困難に直面した場合でも、すぐに解決できるよう、多彩なサービスをご用意しています。
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          自習室中の質問
                        </h4>
                        <p className="mt-2 text-gray-400">
                          自習室中はzoom内に質問部屋を用意しているので、分からないことがあればすぐに
                          質問することができます。(質問は1回15分の予約制)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          チャットでも質問可能
                        </h4>
                        <p className="mt-2 text-gray-400">
                          自習室が休みの時や、時間外の時はチャットでの質問も受け付けています。
                          回答は、数十分〜遅くとも24時間以内に回答するように努めています。
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          動画・記事によるサポート
                        </h4>
                        <p className="mt-2 text-gray-400">
                          多くの生徒がつまづく問題はサイト内で動画または記事にて回答します。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src="https://source.unsplash.com/random/361x481"
                    alt="test"
                    className="mx-auto rounded-lg shadow-lg bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div class=" flex flex-col items-center px-5 pt-48 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
              <h1 className="text-5xl font-bold leading-none sm:text-5xl tracking-tight text-center">
                続ける大切さ、未来を変える力！
              </h1>
              {/* <h1 className="text-5xl font-bold leading-none sm:text-5xl tracking-tight text-center">
                続ける大切さを知る。未来を変える力！
              </h1> */}
              {/* <h2>「習慣化」と「習慣頻度」</h2> */}
              <p className="mt-8 font-semibold">
                学習習慣を身につけることは、人生において極めて重要なスキルの一つです。
                当オンライン自習室では生徒の習慣化をサポートするための工夫をおこなっています。
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto lg:mx-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src="https://cdn.dribbble.com/users/15139/screenshots/7722995/media/81876e2c902f747765a0bd6d1b607495.jpg?compress=1&resize=1600x1200&vertical=top"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />

              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  週4回の開講でしっかり習慣化する!
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-800">
                自習室は週4回開講
              </h5>
              <p className="mb-5 text-gray-800">
                <span className="font-bold">
                  習慣化には、週4日以上の頻度が望ましいとされています。
                </span>{" "}
                毎週の学習が習慣化されることで、着実に勉強成果を上げることができるます。自習室内では、質問や相談ができる環境が整っており、講師のサポートをご利用いただけます。
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row-reverse sm:mx-auto lg:mr-0">
            <div className="relative lg:w-1/2">
              <img
                src="https://cdn.dribbble.com/users/156689/screenshots/7777248/media/4bc09bf12012eabcd73d113c554e346c.jpg?compress=1&resize=1600x1200&vertical=top"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                class="absolute top-0 left-0 h-full text-white"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="0 0 20 0 0 104"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  講師と共におこなう目標設定
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-800">
                適切な目標設定
              </h5>
              <p className="mb-5 text-gray-800">
                <span className="font-bold">習慣化</span>{" "}
                一般に習慣化に必要な日数は、目標が簡単なものほど早く、難しいものほど遅くなりますが、2ヶ月程度と言われています。そして、習慣化するためには高頻度で取り組んでいくことが大切です。
              </p>
              <div className="flex items-center">
                {/* <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-red-400"
                >
                  Learn More
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto lg:mx-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src="https://cdn.dribbble.com/users/156689/screenshots/7777248/media/4bc09bf12012eabcd73d113c554e346c.jpg?compress=1&resize=1600x1200&vertical=top"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  習慣化の力
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-gray-800">
                習慣化のメリット
              </h5>
              <p className="mb-5 text-gray-800">
                <span className="font-bold">習慣化</span>{" "}
                一つの習慣を身につけることができると、他の習慣を身につける確率も高くなると言われています。実際に、一つの習慣を身につけた人は、平均して2.5個の新しい習慣を身につけることができると報告されています。
              </p>
              <div className="flex items-center">
                {/* <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn More
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 bg-slate-50 text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-16 h-16 text-violet-400"
          >
            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
          </svg>
          <div className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-gray-800">
            <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-2xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-800">
              学習効果だけでなく、自己管理能力も向上
            </p>
            <p className="py-4">
              当オンライン自習室は、自習室としての役割だけでなく、生徒たちが自己管理能力や時間管理能力、そして集中力を身につけることをサポートしています。
            </p>
          </div>
        </div>

        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
          <div className="grid max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 opacity-0 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                    1
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    その日の目標を設定し、講師と共有！
                  </p>
                  <p className="text-sm text-gray-700">
                    自習室の最初に、生徒自身が目標を設定し、講師と共有します。達成に向けて努力することで、自信や達成感が得られます。また、目標達成への意欲が高まり、学習意欲やモチベーションが向上することが期待できます
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                    2
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    その日におこなった内容を講師に報告！
                  </p>
                  <p className="text-sm text-gray-700">
                    自習室終わりには、その日おこなった内容を報告します。振り返ることで、良かった点、弱点などを確認し、次の目標達成に向けて、学習方針を立てやすくすることができます。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                    3
                  </div>
                </div>
                <div className="w-px h-full opacity-0" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <svg
                      className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    その週に達成したことをグラフで確認！
                  </p>
                  <p className="text-sm text-gray-700">
                    その週に取り組んだ問題数などを示したグラフを講師が作成し、生徒と共有します。これにより、課題や改善点を特定することができます。これによって、自己の弱点を克服するための具体的なアクションプランを立てることができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          <div className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-xl lg:max-w-2xl xl:max-w-4xl text-gray-800 ">
            <p className="py-2">
              オンライン自習時間中は原則、生徒の手元が見える状態で学習を進めていきます。生徒の様子をスタッフが見守り、サポートします。また、課題テストの提出期限もあるため、計画的に学習を進めることが求められます。これらの環境のもと、生徒たちは自己管理能力や時間管理能力、そして集中力を養い、勉強の成果を上げることができるのです。
            </p>
          </div>

          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
              <div class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat ">
                <div class="absolute inset-0 bg-black/25"></div>

                <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                    <h3 class="text-xl font-bold sm:text-2xl">
                      目標設定の様子
                    </h3>

                    {/* <p class="text-sm">Italy</p> */}
                  </div>

                  <span class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                    🥇
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat">
                <div class="absolute inset-0 bg-black/25"></div>

                <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                    <h3 class="text-xl font-bold sm:text-2xl">
                      目標報告の様子
                    </h3>

                    {/* <p class="text-sm">Italy</p> */}
                  </div>

                  <span class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                    🥈
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat">
                <div class="absolute inset-0 bg-black/25"></div>

                <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                    <h3 class="text-xl font-bold sm:text-2xl">
                      自習室中の様子
                    </h3>

                    {/* <p class="text-sm">Italy</p> */}
                  </div>

                  <span class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                    🥈
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">生徒質問例</h2>
              <h2 className="text-4xl font-bold">
                納得いくまでとことん質問できる
              </h2>
              <p className="text-gray-400">
                どんなに熱心に勉強していても、分からない問題にぶつかることはあります。そんなときこそ、講師の存在が役立ちます。あなたの疑問を解決するために講師が最大限のサポートをいたします。分からないことがあるときは、ただ放っておかずに質問してみましょう。質の高い回答が得られ、あなたの学びにさらなる光が注がれます
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>この不等式の問題がわからないです。</p>
                    <img
                      src="./assets/isem-lp-question-sample.png"
                      alt="test"
                    />

                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">生徒質問</p>
                        <p className="text-sm text-gray-400">数学　太郎さん</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>質問の回答です！</p>
                    <img
                      src="./assets/isem-lp-answer-sample.png"
                      alt="answer sample"
                    />
                    <p>
                      ヒントをお伝えします！
                      不等式の証明はが画像のような手順で考えていくのが基本です💡(2)の問題は相加。相乗平均の考え方を使って解くことができます。ここまでのヒントをもとに、もう1回調べながらチャレンジしてみましょう🔥
                      調べて、分からないところが出てきたら、またすぐに質問ください！
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">数学講師</p>
                        <p className="text-sm text-gray-400">SOU</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>
                      この英文の要約文をどうやって作成していったらいいかポイントを教えてください。
                    </p>
                    <img src="./assets/isem-lp-q-sample.png" alt="sample" />
                    <p></p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">生徒質問</p>
                        <p className="text-sm text-gray-400">John Doeさん</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-900">
                    <p>質問の回答です！</p>
                    <p>
                      要約するために、次のことを意識してみてください💡 -
                      多くの国は”何を”目指して、それを達成するために”どのような行動を”とっていくのか-
                      この部分を掴むと要約がしやすくなります！
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">英語講師</p>
                        <p className="text-sm text-gray-400">Isem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="relative items-center w-full py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
            <div class="w-full xl:w-1/3 lg:w-2/6 md:text-center lg:text-left">
              <div class="flex flex-col p-8 lg:p-0">
                <strong class="mb-1 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                  {" "}
                  レッスンコース
                </strong>
                <span class="mb-8 text-2xl font-bold text-neutral-600 tracking-relaxed lg:text-5xl">
                  {" "}
                  目的にあわせて選べる
                </span>
                <p class="mx-auto mb-4 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">
                  コースはスターターとフルサポートの2種類。みなさんの目的に合わせて、お好きなコースをお選びいただけます。どちらのコースも、充実したカリキュラムで、あなたのスキルアップをサポートします。
                </p>
                <p class="mx-auto mb-2 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">
                  今年度は、フルサポートプランが20%割引というチャンスです！お得なこの機会をお見逃しなく！ぜひこの機会を活用してださい！
                </p>
              </div>
            </div>
            <div class="w-full xl:w-1/4 md:w-2/6">
              <div class="relative flex flex-col h-full p-8 bg-gray-50 rounded-xl hover:border-white">
                <span class="mb-4 text-base font-medium tracking-widest text-neutral-600 uppercase">
                  {" "}
                  スターター{" "}
                </span>
                <span class="flex items-center mb-8 text-base font-medium tracking-tight text-neutral-600">
                  {" "}
                  学習スペース利用向け
                </span>
                <div class="flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl">
                  <span>¥5,000/月 </span>
                </div>
                <ul>
                  <li class="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-neutral-600">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>週4回のzoom自習室</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>週1回の課題テスト</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    zoom自習室中の質問
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    チャットでの質問
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>{" "}
                    </span>
                    学習プランの作成
                  </li>
                </ul>

                <div class="mt-8">
                  <button class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">
                    申し込む
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full xl:w-1/4 md:w-2/6">
              <div class="relative flex flex-col h-full p-8 bg-blue-600 rounded-xl hover:border-white">
                <span class="mb-4 text-base font-medium tracking-widest text-white uppercase">
                  {" "}
                  フルサポート{" "}
                </span>
                <span class="flex items-center mb-8 text-base font-medium tracking-tight text-white">
                  {" "}
                  🎉今年度限定価格🎉 月額15,000円
                </span>
                <div class="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
                  <span>
                    <span>¥15,000</span>
                    <del class="text-2xl font-normal text-white">¥19,000</del>
                  </span>
                </div>
                <ul>
                  <li class="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-white">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>週4回の自習室</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>週1回の課題テスト</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>zoom自習室中の質問</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>チャットでの質問</strong>
                  </li>
                  <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                    <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <strong>学習プランの作成</strong>
                  </li>
                </ul>

                <div class="mt-8">
                  <button class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">
                    申し込む ¥15,000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center font-bold text-2xl py-4">講師紹介</h2>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div class="flex flex-col w-full max-w-lg mb-12 text-center lg:mx-auto">
              <img
                alt="testimonial"
                class="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
                src="/assets/da_vinci.png"
              />
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                英語担当であり、Isemのサイト・アプリ作成やブログの運営などをおこなっています💻イギリスとフランスへの留学経験あり🌍
                受験・資格対策だけでなく、英会話にも対応可能です🦹‍♀️
              </p>
              <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Tutor
                <span href="#" class="font-semibold text-gray-200 lg:mb-0">
                  English
                </span>
              </h2>
            </div>
            <div class="flex flex-col w-full max-w-lg mb-12 text-center lg:mx-auto">
              <img
                alt="testimonial"
                class="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
                src="/assets/isaac_newton.png"
              />
              <p class="mx-auto text-base leading-relaxed text-gray-500">
                数学担当。京都大学理学部化学科卒で、学生時代、河合塾のフェローの仕事の経験あり⭐️
                数学が苦手な人から医大を目指す方まで多くの生徒を対応した経験があります👨‍🔬
                数学の偏差値は80前後(全国模試など)🎉
              </p>
              <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                Tutor
                <span href="#" class="font-semibold text-gray-200 lg:mb-0">
                  Math
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Campaign!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">🎉🎉</span>
              </span>{" "}
              お得な3つの特典をGetするChance!
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              今なら、お得な3つの特典が付いてきます！この機会を活用してください
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                1
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                お友達紹介で20%OFF!
              </h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                お友達紹介1人につき1ヶ月間授業料が20%OFF
                ※同月に複数人の紹介していただいた場合、紹介人数分、毎月の月額料金から割引いたします。例:
                同月に2人紹介した場合、翌月、翌々月がそれぞれ20%OFF
              </p>
              {/* <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link> */}
            </div>
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                2
              </div>
              <h6 className="mb-2 font-semibold leading-5">今年度限定割引</h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                今年度限定でフルサポートコースが、通常、19,000円を15,000円で提供!
              </p>
            </div>
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                3
              </div>
              <h6 className="mb-2 font-semibold leading-5">1週間トライアル</h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                初めての受講の場合、1週間の無料トライアルを提供しています。このトライアル期間中に、本当に自分に合うかどうかを確認することができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">よくある質問</h2>
          <p className="mt-4 mb-8 text-gray-400">
            よくある質問をまとめました。他にも気になることがあれば、お気軽にお問合せください。
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                対応可能な科目はなんですか？
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                メインは数学・英語ですが、他の教科も対応可能です。詳細は問い合わせフォームよりお問い合わせください
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                初めてオンライン学習をするのですが、使い方が分かりません。サポートはありますか？
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                はい、もちろんあります。使い方については、初回に説明いたしますし、使い方に関する質問はいつでも受け付けています。
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                支払い方法は何がありますか？
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                クレジットカード支払い、銀行振込みに対応しています。
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                受講期間の制限はありますか？
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                受講期間の制限はありません。月額契約で、いつでもキャンセル可能です。
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
