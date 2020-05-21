function mungedDetail(listData) {
  try {
    const imageDetail = listData.data.map((image) => {
      return {
        description: image.description
      };
    });

    return imageDetail;

  } catch(e) {
    return {};
  }
}

module.export = {
  mungedDetail
};
