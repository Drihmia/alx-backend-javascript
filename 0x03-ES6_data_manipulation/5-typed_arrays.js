export default function createInt8TypedArray(length, position, value) {
  if (position > length) throw new Error('Position outside range');

  const Int8 = new ArrayBuffer(length);
  const dv = new DataView(Int8);
  dv.setInt8(position, value);
  return dv;
}
