import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Error = { 'NotFound' : { 'msg' : string } };
export interface LanguageLearningContent {
  'id' : bigint,
  'updated_at' : [] | [bigint],
  'image_url' : string,
  'text' : string,
  'sound_url' : string,
  'created_at' : bigint,
  'scent_description' : string,
}
export interface LanguageLearningContentPayload {
  'image_url' : string,
  'text' : string,
  'sound_url' : string,
  'scent_description' : string,
}
export type Result = { 'Ok' : LanguageLearningContent } |
  { 'Err' : Error };
export type Result_1 = { 'Ok' : StudyGroup } |
  { 'Err' : Error };
export interface StudyGroup {
  'id' : bigint,
  'members' : Array<string>,
  'name' : string,
}
export interface StudyGroupPayload {
  'members' : Array<string>,
  'name' : string,
}
export interface _SERVICE {
  'add_language_content' : ActorMethod<
    [LanguageLearningContentPayload],
    [] | [LanguageLearningContent]
  >,
  'create_study_group' : ActorMethod<[StudyGroupPayload], [] | [StudyGroup]>,
  'delete_language_content' : ActorMethod<[bigint], Result>,
  'delete_study_group' : ActorMethod<[bigint], Result_1>,
  'filter_language_content_by_scent' : ActorMethod<
    [string],
    Array<LanguageLearningContent>
  >,
  'get_language_content' : ActorMethod<[bigint], Result>,
  'get_study_group' : ActorMethod<[bigint], Result_1>,
  'list_language_content' : ActorMethod<[], Array<LanguageLearningContent>>,
  'list_study_groups' : ActorMethod<[], Array<StudyGroup>>,
  'search_language_content_by_text' : ActorMethod<
    [string],
    Array<LanguageLearningContent>
  >,
  'sort_language_content_by_creation_date' : ActorMethod<
    [],
    Array<LanguageLearningContent>
  >,
  'update_language_content' : ActorMethod<
    [bigint, LanguageLearningContentPayload],
    Result
  >,
  'update_study_group' : ActorMethod<[bigint, StudyGroupPayload], Result_1>,
}
