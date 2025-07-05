import loadView from "./app/core/loadview";
import page from "page";

page('/', () => loadView('dashboard'));
page('/lesson/:lessonId', ctx => loadView('lesson', { lessonId: ctx.params.lessonId }));

page();