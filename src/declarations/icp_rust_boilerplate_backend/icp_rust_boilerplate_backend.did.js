export const idlFactory = ({ IDL }) => {
  const LanguageLearningContentPayload = IDL.Record({
    'image_url' : IDL.Text,
    'text' : IDL.Text,
    'sound_url' : IDL.Text,
    'scent_description' : IDL.Text,
  });
  const LanguageLearningContent = IDL.Record({
    'id' : IDL.Nat64,
    'updated_at' : IDL.Opt(IDL.Nat64),
    'image_url' : IDL.Text,
    'text' : IDL.Text,
    'sound_url' : IDL.Text,
    'created_at' : IDL.Nat64,
    'scent_description' : IDL.Text,
  });
  const StudyGroupPayload = IDL.Record({
    'members' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
  });
  const StudyGroup = IDL.Record({
    'id' : IDL.Nat64,
    'members' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
  });
  const Error = IDL.Variant({ 'NotFound' : IDL.Record({ 'msg' : IDL.Text }) });
  const Result = IDL.Variant({ 'Ok' : LanguageLearningContent, 'Err' : Error });
  const Result_1 = IDL.Variant({ 'Ok' : StudyGroup, 'Err' : Error });
  return IDL.Service({
    'add_language_content' : IDL.Func(
        [LanguageLearningContentPayload],
        [IDL.Opt(LanguageLearningContent)],
        [],
      ),
    'create_study_group' : IDL.Func(
        [StudyGroupPayload],
        [IDL.Opt(StudyGroup)],
        [],
      ),
    'delete_language_content' : IDL.Func([IDL.Nat64], [Result], []),
    'delete_study_group' : IDL.Func([IDL.Nat64], [Result_1], []),
    'filter_language_content_by_scent' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(LanguageLearningContent)],
        ['query'],
      ),
    'get_language_content' : IDL.Func([IDL.Nat64], [Result], ['query']),
    'get_study_group' : IDL.Func([IDL.Nat64], [Result_1], ['query']),
    'list_language_content' : IDL.Func(
        [],
        [IDL.Vec(LanguageLearningContent)],
        ['query'],
      ),
    'list_study_groups' : IDL.Func([], [IDL.Vec(StudyGroup)], ['query']),
    'search_language_content_by_text' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(LanguageLearningContent)],
        ['query'],
      ),
    'sort_language_content_by_creation_date' : IDL.Func(
        [],
        [IDL.Vec(LanguageLearningContent)],
        ['query'],
      ),
    'update_language_content' : IDL.Func(
        [IDL.Nat64, LanguageLearningContentPayload],
        [Result],
        [],
      ),
    'update_study_group' : IDL.Func(
        [IDL.Nat64, StudyGroupPayload],
        [Result_1],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
