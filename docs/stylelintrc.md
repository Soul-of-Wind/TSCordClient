Файл для настройки stylelint если решим уйти от tailwind и переписать все на свой лад

Пакеты которые будут нужны для работы stylelint
* "stylelint": "^16.6.1",
* "stylelint-config-htmlacademy": "^4.2.3",
* "stylelint-config-recommended-vue": "^1.5.0",
* "stylelint-order-htmlacademy": "2.1.1",

Конфиг:
```json
{
  "extends": [
    "stylelint-config-htmlacademy",
    "stylelint-order-htmlacademy",
    "stylelint-config-recommended-vue"
  ],
  "rules": {
    "no-unknown-custom-properties": null
  },
  "ignoreFiles": [
    "**/*.js",
    "**/*.ts",
    "**/*.json",
    "node_modules/**"
  ]
}
```

