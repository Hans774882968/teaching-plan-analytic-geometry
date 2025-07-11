class ThinkItem {
  constructor(think, answer, answerRowMaxHeight) {
    this.think = think;
    this.answer = answer;
    this.answerRowMaxHeight = answerRowMaxHeight;
  }
}

class PointItem {
  constructor(title, content, thinks = []) {
    this.title = title;
    this.content = content;
    this.thinks = thinks.map(t => new ThinkItem(t.think, t.answer, t.answerRowMaxHeight));
  }
}

class GeoGebraItem {
  constructor(description, config, conclusion) {
    this.description = description;
    this.config = config;
    this.conclusion = conclusion;
  }
}

class QuizItem {
  constructor(question, options, correct, explanation) {
    this.question = question;
    this.options = options;
    this.correct = correct;
    this.explanation = explanation;
  }
}

class LinkItem {
  constructor(url) {
    this.url = url;
  }
}

class Header {
  constructor(content) {
    this.content = content;
  }
}

class Welcome {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

class GeoGebraSection {
  constructor(title, geogebraList = []) {
    this.title = title;
    this.geogebraList = geogebraList.map(g => new GeoGebraItem(g.description, g.config, g.conclusion));
  }
}

class QuizSection {
  constructor(description, quiz = [], link) {
    this.description = description;
    this.quiz = quiz.map(q => new QuizItem(q.question, q.options, q.correct, q.explanation));
    this.link = new LinkItem(link.url);
  }
}

class Summary {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

class Footer {
  constructor(info) {
    this.info = info;
  }
}

class PageStructure {
  constructor(config) {
    this.title = config.title;
    this.header = new Header(config.header.content);
    this.welcome = new Welcome(config.welcome.title, config.welcome.content);
    this.points = config.points.map(p => new PointItem(p.title, p.content, p.thinks));
    this.thinks = config.thinks.map(t => new ThinkItem(t.think, t.answer, t.answerRowMaxHeight));
    this.geogebraSection = new GeoGebraSection(
      config.geogebraSection.title,
      config.geogebraSection.geogebraList
    );
    this.quizSection = new QuizSection(
      config.quizSection.description,
      config.quizSection.quiz,
      config.quizSection.link
    );
    this.summary = new Summary(config.summary.title, config.summary.content);
    this.footer = new Footer(config.footer.info);
  }
}

export {
  ThinkItem,
  PointItem,
  GeoGebraItem,
  QuizItem,
  LinkItem,
  Header,
  Welcome,
  GeoGebraSection,
  QuizSection,
  Summary,
  Footer,
  PageStructure,
};
