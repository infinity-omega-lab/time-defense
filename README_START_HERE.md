# Time Defense site skeleton

このフォルダは、Time Defense Calendar の外向きサイト一式のスケルトンです。

## 配置先

想定配置先:

```text
C:\dev2\sidejobs\android_projects\android_calendar_app\time_defense_site
```

この `time_defense_site` フォルダごと、リポジトリへ追加してください。

## 役割

- Play Store から参照する Privacy Policy
- Help / FAQ / Billing / Support
- AIに読み込ませやすい Markdown 版説明書
- `llms.txt` / `llms-full.txt`
- 多言語展開の土台

## 重要

このパッケージは初期スケルトンです。公開前に必ず以下を確認してください。

- `Infinity Omega Lab`
- `t.semizuki@gmail.com`
- `https://infinity-omega-lab.github.io/time-defense/time_defense_site`
- `2026-09-07`
- Google Calendar 連携の実装有無
- 広告SDK、解析SDK、クラッシュレポートSDKの導入有無
- Play Console Data Safety 申告との整合
- Google Play Billing の実装状態
- 対応6言語の正確な言語コード

## 最初に進めるカード

- TDOCS-1 Site folder skeleton 作成
- TDOCS-2 Existing privacy_policy_ja.html 現状監査
- TDOCS-3 Privacy Policy JA v2 md/html更新
- TDOCS-4 Billing / Trial FAQ JA md/html作成
- TDOCS-5 Store説明文 JA 課金・クレカ文言反映
- TDOCS-6 Data Safety / Privacy整合レビュー

