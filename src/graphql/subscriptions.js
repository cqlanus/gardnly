// @flow
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    firstName
    lastName
    email
    created
    gardens {
      items {
        id
        created
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
    created
    gardens {
      items {
        id
        created
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
    created
    gardens {
      items {
        id
        created
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
    created
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
      created
    }
    beds {
      items {
        id
        created
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
    created
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
      created
    }
    beds {
      items {
        id
        created
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
    created
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
      created
    }
    beds {
      items {
        id
        created
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
    created
    name
    length
    width
    exposure
    plantings {
      items {
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    name
    length
    width
    exposure
    plantings {
      items {
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    name
    length
    width
    exposure
    plantings {
      items {
        id
        created
        row
        column
      }
      nextToken
    }
    garden {
      id
      created
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
    created
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      created
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
    created
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      created
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
    created
    crop {
      id
      name
      numPerSqFt
      cropImg
    }
    bed {
      id
      created
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
