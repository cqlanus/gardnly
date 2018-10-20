// @flow
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastName
    email
    gardens {
      items {
        id
        name
        location
        zip
        length
        width
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    firstName
    lastName
    email
    gardens {
      items {
        id
        name
        location
        zip
        length
        width
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    firstName
    lastName
    email
    gardens {
      items {
        id
        name
        location
        zip
        length
        width
      }
      nextToken
    }
  }
}
`;
export const onCreateGarden = `subscription OnCreateGarden {
  onCreateGarden {
    id
    name
    location
    zip
    length
    width
    user {
      id
      firstName
      lastName
      email
    }
    beds {
      items {
        id
        name
        length
        width
        exposure
      }
      nextToken
    }
  }
}
`;
export const onUpdateGarden = `subscription OnUpdateGarden {
  onUpdateGarden {
    id
    name
    location
    zip
    length
    width
    user {
      id
      firstName
      lastName
      email
    }
    beds {
      items {
        id
        name
        length
        width
        exposure
      }
      nextToken
    }
  }
}
`;
export const onDeleteGarden = `subscription OnDeleteGarden {
  onDeleteGarden {
    id
    name
    location
    zip
    length
    width
    user {
      id
      firstName
      lastName
      email
    }
    beds {
      items {
        id
        name
        length
        width
        exposure
      }
      nextToken
    }
  }
}
`;
export const onCreateBed = `subscription OnCreateBed {
  onCreateBed {
    id
    name
    length
    width
    exposure
    plantings {
      items {
        id
        row
        column
      }
      nextToken
    }
    garden {
      id
      name
      location
      zip
      length
      width
    }
  }
}
`;
export const onUpdateBed = `subscription OnUpdateBed {
  onUpdateBed {
    id
    name
    length
    width
    exposure
    plantings {
      items {
        id
        row
        column
      }
      nextToken
    }
    garden {
      id
      name
      location
      zip
      length
      width
    }
  }
}
`;
export const onDeleteBed = `subscription OnDeleteBed {
  onDeleteBed {
    id
    name
    length
    width
    exposure
    plantings {
      items {
        id
        row
        column
      }
      nextToken
    }
    garden {
      id
      name
      location
      zip
      length
      width
    }
  }
}
`;
export const onCreatePlanting = `subscription OnCreatePlanting {
  onCreatePlanting {
    id
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      name
      length
      width
      exposure
    }
    row
    column
  }
}
`;
export const onUpdatePlanting = `subscription OnUpdatePlanting {
  onUpdatePlanting {
    id
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      name
      length
      width
      exposure
    }
    row
    column
  }
}
`;
export const onDeletePlanting = `subscription OnDeletePlanting {
  onDeletePlanting {
    id
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      name
      length
      width
      exposure
    }
    row
    column
  }
}
`;
export const onCreateCrop = `subscription OnCreateCrop {
  onCreateCrop {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
export const onUpdateCrop = `subscription OnUpdateCrop {
  onUpdateCrop {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
export const onDeleteCrop = `subscription OnDeleteCrop {
  onDeleteCrop {
    id
    name
    numPerSqFt
    cropImg
  }
}
`;
