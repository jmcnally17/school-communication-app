const Notice = require("../../models/notice");
require("../mongodb_helper");
const mongoose = require("mongoose")

describe(Notice, () => {
  beforeEach((done) => {
    mongoose.connection.collections.notices.drop(() => {
      done();
    });
  });

  it("has title, subtitle and description", () => {
    const notice = new Notice({
      title: "School fair",
      subTitle: "Love it",
      description: "have fun"
    });

    expect(notice.title).toBe("School fair");
    expect(notice.subTitle).toBe("Love it");
    expect(notice.description).toBe("have fun");
  });
});