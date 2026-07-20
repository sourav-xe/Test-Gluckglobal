/**
 * Serbian Latin (sr-Latn) display labels for the student-facing GlückArena.
 *
 * The backend stores game types and difficulty in English; these maps are the
 * single place the student portal turns them into Serbian. German course
 * content (words, phrases, CEFR levels) is deliberately NOT translated.
 */

export const GAME_TYPE_LABELS: Record<string, string> = {
  scramble_rush: 'Juriš slova',
  sentence_builder: 'Graditelj rečenica',
  matching: 'Uparivanje',
  flashcards: 'Kartice za učenje',
  image_matching: 'Uparivanje slika',
  gender_stack: 'Slaganje rodova',
  flapjugation: 'Konjugacija u letu',
  whackawort: 'Udari reč',
  memory: 'Igra memorije',
  jumbled_words: 'Izmešane reči',
  hangman: 'Vešala',
  word_picture_match: 'Spoji reč i sliku',
  multiple_choice: 'Višestruki izbor',
  spin_wheel: 'Zavrti točak',
  tap_boxes: 'Tapni kutije',
  word_search: 'Traži reči',
};

/** Order used by the game-type filter dropdowns. */
export const GAME_TYPE_ORDER: string[] = Object.keys(GAME_TYPE_LABELS);

/**
 * GameSet.category is a backend enum (models/GameSet.js) validated on save,
 * so the stored value stays English — only the display is translated.
 */
export const CATEGORY_LABELS: Record<string, string> = {
  Grammar: 'Gramatika',
  Vocabulary: 'Vokabular',
  Conversation: 'Konverzacija',
  Reading: 'Čitanje',
  Writing: 'Pisanje',
  Listening: 'Slušanje',
  Pronunciation: 'Izgovor',
};

export const DIFFICULTY_LABELS: Record<string, string> = {
  Beginner: 'Početni',
  Intermediate: 'Srednji',
  Advanced: 'Napredni',
};

export function formatGameTypeSr(type: string | undefined): string {
  if (!type) return '';
  return GAME_TYPE_LABELS[type]
    ?? type.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function formatDifficultySr(difficulty: string | undefined): string {
  if (!difficulty) return '';
  return DIFFICULTY_LABELS[difficulty] ?? difficulty;
}

export function formatCategorySr(category: string | undefined): string {
  if (!category) return '';
  return CATEGORY_LABELS[category] ?? category;
}

/**
 * Serbian noun agreement for counts: 1 → singular, 2–4 → paucal,
 * 5+ → genitive plural (11–14 always take the plural form).
 */
export function serbianPlural(n: number, one: string, few: string, many: string): string {
  const abs = Math.abs(n);
  const lastTwo = abs % 100;
  const last = abs % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return many;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
}
