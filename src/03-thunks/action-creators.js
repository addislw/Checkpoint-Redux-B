import axios from "axios";

export const GOT_BALLOONS = "GOT_BALLOONS";
export const BALLOONS_ERROR = "BALLOONS_ERROR";

export function createGotBaloonsAction(balloons) {
  return { type: GOT_BALLOONS, balloons };
}

export function createBalloonsErrorAction(error) {
  return { type: BALLOONS_ERROR, error };
}

export function createGetBalloonsThunk() {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/balloons');
      dispatch(createGotBaloonsAction(data));
    } catch (error) {
      // const errorResponse = error.response.data
      // console.log(errorResponse);
      dispatch(createBalloonsErrorAction(error));
    }
  }
}
