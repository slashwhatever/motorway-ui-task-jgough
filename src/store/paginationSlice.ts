import {
  PayloadAction,
  createAsyncThunk,
  createDraftSafeSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { ImageFile } from "../types";
import { RootState } from "./index";

type NormalizedFiles = Record<string, ImageFile>;

interface MyKnownError {
  errorMessage: string;
}
export interface PaginationState {
  files: NormalizedFiles;
}

const PAGE_SIZE = 10;

const initialState: PaginationState = {
  files: {},
};

export const fetchFilesAsync = createAsyncThunk<
  ImageFile[],
  void,
  { state: RootState; rejectValue: MyKnownError }
>("pagination/fetchFiles", async (arg, { getState, rejectWithValue }) => {
  const state = getState();

  const start = Math.max(Object.values(state.pagination.files).length, 0);
  const limit = start + PAGE_SIZE;

  const response = await fetch(`images?limit=${limit}&start=${start}`);
  if (response.status === 400) {
    return rejectWithValue((await response.json()) as MyKnownError);
  }

  return (await response.json()) as ImageFile[];
});

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    clearFiles: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFilesAsync.fulfilled,
      (state: PaginationState, action: PayloadAction<ImageFile[]>) => {
        const byId = action.payload.reduce<NormalizedFiles>(
          (byId: NormalizedFiles, file: ImageFile) => {
            byId[file.id] = file;
            return byId;
          },
          {} as NormalizedFiles
        );
        state.files = {
          ...state.files,
          ...byId,
        };
      }
    );
  },
});

export const selectSelf = (state: RootState) => state.pagination;

export const selectFiles = createDraftSafeSelector(
  selectSelf,
  (state: PaginationState) => Object.values(state.files)
);

export const { clearFiles } = paginationSlice.actions;

export default paginationSlice.reducer;
