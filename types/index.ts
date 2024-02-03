type ContentsTypeListElement = {
  // Define the structure of elements in contents_type_list array
  // Example: { key: string; value: string; }
};

type Ext5Element = {
  // Define the structure of elements in ext_5 array
  // Example: { key: string; value: string; }
};

type Ext8Object = {
  // Define the structure of the ext_8 object
  // Example: { key1: string; key2: number; }
};

export interface Content {
  topics_id: number;
  ymd: string;
  contents_type: number;
  contents: string;
  subject: string;
  topics_flg: number;
  open_flg: number;
  regular_flg: number;
  inst_ymdhi: string;
  update_ymdhi: string;
  topics_group_id: number;
  slug: string;
  order_no: number;
  group_nm: string;
  group_description: string;
  contents_type_cnt: number;
  contents_type_nm: string;
  contents_type_slug: string;
  contents_type_parent_nm: string | null;
  category_parent_id: number | null;
  contents_type_ext_col_01: string;
  contents_type_ext_col_02: string;
  contents_type_ext_col_03: string;
  contents_type_ext_col_04: string;
  contents_type_ext_col_05: string;
  contents_type_list: ContentsTypeListElement[];
  ext_1: object; // Replace 'object' with a more specific type if possible
  ext_2: object; // Replace 'object' with a more specific type if possible
  ext_3: object; // Replace 'object' with a more specific type if possible
  ext_4: any[]; // Replace 'any[]' with a more specific type if possible
  ext_5: Ext5Element[];
  ext_7: any[]; // Replace 'any[]' with a more specific type if possible
  ext_8: Ext8Object;
  ext_9: any[]; // Replace 'any[]' with a more specific type if possible
}
