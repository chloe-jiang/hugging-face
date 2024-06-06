const LANGUAGES = {
  "Chinese (Simplified)": "zho_Hans",
  "Chinese (Traditional)": "zho_Hant",
  "English": "eng_Latn",
  "French": "fra_Latn",
  "Japanese": "jpn_Jpan",
  "Korean": "kor_Hang",
}

export default function LanguageSelector({ type, onChange, defaultLanguage }) {
  return (
    <div className='language-selector'>
      <label>{type}: </label>
      <select onChange={onChange} defaultValue={defaultLanguage}>
        {Object.entries(LANGUAGES).map(([key, value]) => {
          return <option key={key} value={value}>{key}</option>
        })}
      </select>
    </div>
  )
}
