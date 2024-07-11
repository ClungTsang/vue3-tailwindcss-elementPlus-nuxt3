// 此文件跟同级目录的 global.d.ts 文件一样也是全局类型声明，只不过这里存放一些零散的全局类型，无需引入直接在 .vue 、.ts 、.tsx 文件使用即可获得类型提示

type ResponseData<T> = {
  success: Boolean;
  data: T;
};

type PageDTO<T> = {
  total: number;
  rows: Array<T>;
};

// 常用固定的額外回應參數
interface extraResponse {
  createTime?: string; // 創建時間
  updateTime?: string; // 更新時間
}

interface BasePageQuery extends BaseQuery {
  pageNum?: number;
  pageSize?: number;
}

interface BaseQuery {
  beginTime?: string;
  endTime?: string;
}
