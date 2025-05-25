const fs = require('fs');
const path = require('path');

/**
 * Конвертирует .po в JSON для i18next
 * @param {string} poContent - Содержимое .po-файла
 * @returns {Object} { translations, language }
 */
function parsePo(poContent) {
  const result = { translations: {} };
  const lines = poContent.split('\n');
  let currentMsgId = '';
  let currentMsgStr = '';

  for (const line of lines) {
    if (line.startsWith('msgid "')) {
      currentMsgId = line.slice(7, -1).replace(/\\"/g, '"');
    } else if (line.startsWith('msgstr "')) {
      currentMsgStr = line.slice(8, -1).replace(/\\"/g, '"');
      if (currentMsgId && currentMsgId !== '""') {
        result.translations[currentMsgId] = currentMsgStr;
      }
    } else if (line.startsWith('"Language: ')) {
      result.language = line.split(':')[1].trim().replace(/\\n"/, '');
    }
  }

  return result;
}
/**
 * Сохраняет JSON в файл
 * @param {string} filePath - Путь для сохранения
 * @param {Object} data - Данные в формате i18next
 */
function saveJson(filePath, data) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { parsePo, saveJson };